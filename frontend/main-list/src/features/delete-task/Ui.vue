<script lang="ts" setup>
import { ITask } from 'contract/api';
import { deleteTaskFx } from 'host/store/tasks';

const { task } = defineProps<{task: ITask}>();

const onDelete = async () => {
  await deleteTaskFx(task.id);
}
</script>
<template>
  <button @click="onDelete">Delete</button>
</template>