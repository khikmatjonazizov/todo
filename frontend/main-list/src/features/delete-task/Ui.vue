<script lang="ts" setup>
import { tasksApi } from 'api';
import { ITask } from 'contract/api';
import eventBus from 'host/event-bus';

const props = defineProps<{task: ITask}>();

const onDelete = async () => {
  await tasksApi.delete(props.task.id);
  eventBus.emit('delete-task', props.task.id);
}
</script>
<template>
  <button @click="onDelete">Delete</button>
</template>