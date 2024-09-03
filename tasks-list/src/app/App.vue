<script setup lang="ts">
import TasksList from '@/widgets/tasks-list/ui/TasksList.vue';

// @ts-expect-error no type
import { tasksApi, eventBus } from '@todo/utils';
const init = async () => {
  const tasks = await tasksApi.getAll();
  eventBus.emit('get-tasks', tasks);
}
init();
</script>
<template>
  <TasksList />
</template>