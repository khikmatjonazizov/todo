<script lang="ts" setup>
import { ITask } from 'contract/api';
import { deleteTaskFx } from 'host/store/tasks';

const props = defineProps<{task: ITask}>();

const onDelete = async () => {
  await deleteTaskFx(props.task.id);
}
</script>
<template>
  <button @click="onDelete">Delete</button>
</template>