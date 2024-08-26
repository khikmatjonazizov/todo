
<script lang="ts" setup>
import { ITask } from 'contract/api';
import { editTaskFx } from 'host/store/tasks'

const { task } = defineProps<{task: ITask}>();

const onCheck = async (event: Event) => {
  const target = event.target as HTMLInputElement;
  await editTaskFx({
    ...task,
    done: target.checked,
  });
};
</script>

<template>
  <input
    type="checkbox"
    :checked="task.done"
    @change="onCheck"
    :disabled="false"
  />
</template>