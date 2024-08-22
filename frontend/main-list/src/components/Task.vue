<script setup lang="ts">
import { ITask } from 'contract/api';
import { tasksApi } from 'api'

import eventBus from 'host/event-bus'

const { task } = defineProps<{task: ITask}>();

const onCheck = async (event: Event, task: ITask) => {
  const target = event.target as HTMLInputElement;

  const editedTask = await tasksApi.edit({
    ...task,
    done: target.checked,
  });
  eventBus.emit('edit-task', editedTask)
};

const onDelete = async (task: ITask) => {
  await tasksApi.delete(task.id);
  eventBus.emit('delete-task', task.id)
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