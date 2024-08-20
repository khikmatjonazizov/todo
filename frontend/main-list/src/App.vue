<script setup lang="ts">
import { MainListProps } from 'contract/main-list'
import Task from './components/Task.vue';

const {
  tasks,
  handleDeleteTask,
  handleEditTask
} = defineProps<MainListProps>()
</script>

<template>
  <ul class="main-list__tasks">
    <Task
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      :handle-delete-task="handleDeleteTask"
      :handle-edit-task="handleEditTask"
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
