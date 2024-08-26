
<script lang="ts" setup>
import { tasksApi } from 'api';
import { ITask } from 'contract/api';
import eventBus from 'host/event-bus';

const { task } = defineProps<{task: ITask}>();

const onCheck = async (event: Event) => {
  const target = event.target as HTMLInputElement;
  const editedTask = await tasksApi.edit({
    ...task,
    done: target.checked,
  });
  eventBus.emit('edit-task', editedTask)
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