
<script lang="ts" setup>
import { ITask } from 'contract/api';
import { editTaskFx } from 'host/store/tasks'

const props = defineProps<{task: ITask}>();

const onCheck = async (event: Event) => {
  const target = event.target as HTMLInputElement;
  await editTaskFx({
    ...props.task,
    done: target.checked,
  });
};
</script>

<template>
  <input
    type="checkbox"
    v-model="props.task.done"
    @change="onCheck"
  />
</template>