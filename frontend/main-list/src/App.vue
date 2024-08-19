<script lang="ts">
import { PropType } from 'vue';
import { MainListProps } from 'contract/main-list';
import { ITask } from 'contract/api';

export default {
  props: {
    tasks: {
      type: Array as PropType<MainListProps['tasks']>,
      required: true,
    },
    handleEditTask: {
      type: Function as PropType<MainListProps['handleEditTask']>,
      required: true,
    },
    handleDeleteTask: {
      type: Function as PropType<MainListProps['handleDeleteTask']>,
      required: true,
    },
  },
  setup(props) {
    const onCheck = async (event: Event, task: ITask) => {
      event.preventDefault();
      const target = event.target as HTMLInputElement;

      await props.handleEditTask({
          ...task,
          done: target.checked,
        });
    };

    const onDelete = async (task: ITask) => {
      await props.handleDeleteTask(task.id);
      console.log('deleted');
    };

    return {
      onCheck,
      onDelete,
    };
  },
};
</script>
<template>
  <ul class="main-list">
    <li
      v-for="task in tasks"
      :key="task.id"
      class="task"
    >
      <div class="task__content">
        <input
          type="checkbox"
          :checked="task.done"
          @change="(event) => onCheck(event, task)"
          :disabled="false"
        />
        <p class="task__desc">
          {{ task.desc }}
        </p>
      </div>
      <div class="task__actions">
        <button @click="() => onDelete(task)">
          delete
        </button>
      </div>
    </li>
  </ul>
</template>
<style>
.main-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.task {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 30px;
  border-bottom: 1px solid #ccc;
}

.task__desc {
  margin: 0;
}

.task__actions {
  display: flex;
  gap: 10px;
}

.task__content {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
