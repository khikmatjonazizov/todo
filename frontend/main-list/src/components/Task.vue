<script setup lang="ts">
import { ITask } from 'contract/api';
import { MainListProps } from 'contract/main-list';

type TaskProps = {
  task: ITask
} & Omit<MainListProps, 'tasks'>
const { task, handleEditTask, handleDeleteTask } = defineProps<TaskProps>();

const onCheck = async (event: Event, task: ITask) => {
  event.preventDefault();
  const target = event.target as HTMLInputElement;

  await handleEditTask({
    ...task,
    done: target.checked,
  });
};

const onDelete = async (task: ITask) => {
  await handleDeleteTask(task.id);
  console.log('deleted');
};

</script>
<template>
  <li class="main-list__task">
    <div class="main-list__task__content">
      <input
        type="checkbox"
        :checked="task.done"
        @change="(event) => onCheck(event, task)"
        :disabled="false"
      />
      <p class="main-list__task__desc">
        {{ task.desc }}
      </p>
    </div>
    <div class="main-list__task__actions">
      <button @click="() => onDelete(task)">
        delete
      </button>
    </div>
  </li>
</template>
<style scoped>
.main-list__task {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 30px;
  border-bottom: 1px solid #ccc;
}
.main-list__task-desc {
  margin: 0;
}
.main-list__task__actions {
  display: flex;
  gap: 10px;
}

.main-list__task__content {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>