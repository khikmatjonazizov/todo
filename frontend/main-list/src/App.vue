<script setup lang="ts">
import { ref } from 'vue'
import Task from './components/Task.vue';

// @ts-ignore
import eventBus from 'host/event-bus'
import { ITask } from 'contract/api';

const tasks = ref<ITask[]>([])

eventBus.on('get-tasks', (newTasks: ITask[]) => {
  tasks.value = newTasks
})

eventBus.on('create-task', (task: ITask) => {
  tasks.value.unshift(task);
})

eventBus.on('delete-task', (id: ITask['id']) => {
  tasks.value = tasks.value.filter(task => task.id !== id)
})

eventBus.on('edit-task', (editedTask: ITask) => {
  tasks.value = tasks.value.map(task => task.id === editedTask.id ? editedTask : task)
})
</script>

<template>
  <ul class="main-list__tasks">
    <Task
      v-for="task in tasks"
      :key="task.id"
      :task="task"
    />
  </ul>
</template>

<style scoped>
.main-list__tasks {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
