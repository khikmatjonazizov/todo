<script lang="ts" setup>
// @ts-expect-error no type
import { tasksApi, eventBus } from 'utils';
import { defineProps } from 'vue'

const props = defineProps<{task: any}>();

const onDelete = async () => {
  await tasksApi.delete(props.task.id);
  eventBus.emit('delete-task', props.task.id);
}
</script>
<template>
  <button id="delete-task" @click="onDelete">Delete</button>
</template>