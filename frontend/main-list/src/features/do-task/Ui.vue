
<script lang="ts" setup>
import { tasksApi } from 'api';
import { ITask } from 'contract/api';
import eventBus from 'host/event-bus';

const props = defineProps<{task: ITask}>();

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
    type="checkbox"
    v-model="props.task.done"
    @change="onCheck"
  />
</template>