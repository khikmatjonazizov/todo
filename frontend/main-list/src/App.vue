<script setup lang="ts">
import { useUnit } from 'effector-vue/composition';
import Task from './components/Task.vue';

// @ts-ignore
import { $tasks } from 'host/tasks'

const tasks = useUnit($tasks);
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
