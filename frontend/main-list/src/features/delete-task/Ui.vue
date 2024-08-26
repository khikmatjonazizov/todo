<script lang="ts" setup>
import { tasksApi } from 'api';
import { ITask } from 'contract/api';
import eventBus from 'host/event-bus';

const { task } = defineProps<{task: ITask}>();

const onDelete = async () => {
  await tasksApi.delete(task.id);
  eventBus.emit('delete-task', task.id);
}
</script>
<template>
  <button @click="onDelete">Delete</button>
</template>