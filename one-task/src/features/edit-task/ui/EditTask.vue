<script setup lang="ts">
import { ref, defineProps } from 'vue';

// @ts-expect-error no type
import { tasksApi, eventBus } from 'utils'

const props = defineProps<{task: any}>()
const done = ref(props.task.done);
const desc = ref(props.task.desc);
const onSubmit = async (event: Event) => {
  event.preventDefault();
  const editedTask = await tasksApi.editTask({
    ...props.task,
    done,
    desc,
  })
  eventBus('edit-task', editedTask)
}
</script>
<template>
  <form class="one-task__form" @submit="onSubmit">
    <input class="one-task__input" v-model="desc" required />
    <label class="one-task__label">
      Done: <input class="one-task__input" type="checkbox" v-model="done" />
    </label>
    <button class="one-task__submit">Save</button>
  </form>
</template>
<style lang="css" scoped>
.one-task__form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.one-task__input {
  width: 100%;
}

.one-task__input[type='checkbox'] {
  width: max-content;
}

.one-task__submit {
  padding: 10px 5px;
}

.one-task__label {
  display: flex;
  align-items: center
}
</style>