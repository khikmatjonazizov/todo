<script setup lang="ts">
import { ref } from 'vue';
import { useStore, useUnit } from 'effector-vue/composition'
import EditTask from '@/features/edit-task/ui/EditTask.vue';

// @ts-expect-error no type
import { tasksApi, routes } from '@todo/utils'

const task = ref<any>(null)
const params = useStore<any>(routes.task.$params)

const getOneTask = async () => {
  const oneTask = await tasksApi.getOne(params.value.id);
  task.value = oneTask;
}
getOneTask();
</script>
<template>
  <p class="one-task__loader" v-if="!task">Loading...</p>
  <EditTask v-if="task" :task="task" />
</template>
<style lang="css" scoped>
.one-task__loader {
  margin: 0;
  text-align: center;
  font-size: 20px;
}
</style>
