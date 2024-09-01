
<script lang="ts" setup>
// @ts-expect-error no type
import { tasksApi, eventBus } from 'utils';
import { defineProps } from 'vue'

const props = defineProps<{task: any}>();

const onCheck = async (event: Event) => {
  const target = event.target as HTMLInputElement;
  const editedTask = await tasksApi.edit({
    ...props.task,
    done: target.checked,
  });
  eventBus.emit('edit-task', editedTask)
};
</script>

<template>
  <input
    id="done-task"
    type="checkbox"
    :checked="props.task.done"
    @change="onCheck"
  />
</template>