<script setup lang="ts">
// @ts-expect-error no type
import { eventBus } from '@todo/utils';
import { ref } from 'vue';
import OneTask from './OneTask.vue';
const tasks = ref<any[]>([])
eventBus.on('get-tasks', (newTasks: any) => {
  tasks.value = newTasks
})

eventBus.on('create-task', (task: any) => {
  tasks.value.unshift(task);
})

eventBus.on('delete-task', (id: any) => {
  tasks.value = tasks.value.filter(task => task.id !== id)
})

eventBus.on('edit-task', (editedTask: any) => {
  tasks.value = tasks.value.map(task => task.id === editedTask.id ? editedTask : task)
})
</script>
<template>
  <ul class="tasks-list">
    <OneTask
      v-for="task in tasks"
      :task="task"
      :key="task.id"
    />
  </ul>
</template>
<style lang="css" scoped>
.tasks-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>