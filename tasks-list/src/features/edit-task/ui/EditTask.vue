<script setup lang="ts">
// @ts-expect-error no type
import { tasksApi, eventBus } from '@todo/utils';
import { ref, defineProps } from 'vue';

const props = defineProps<{task: any}>();

const isOpen = ref(false);
const desc = ref(props.task.desc);

const handleOpenModal = () => {
  desc.value = props.task.desc;
  isOpen.value = true;
}

const handleCloseModal = () => {
  isOpen.value = false;
}

const handleSubmit = async (event: Event) => {
  event.preventDefault();
  const editedTask = await tasksApi.edit({
    id: props.task.id,
    done: props.task.done,
    desc: desc.value,
  })
  eventBus.emit('edit-task', editedTask);
  handleCloseModal();
}

const onMaskClick = () => {
  // hack. Modal mask unmount faster than redirect closest check
  setTimeout(() => {
    handleCloseModal()
  }, 0)
}

</script>

<template>
  <button @click="handleOpenModal" id="edit-task">Edit</button>
  <Teleport to="body" v-if="isOpen">
    <div class="edit-task__modal">
      <div @click="onMaskClick" class="edit-task__mask"></div>
      <div class="edit-task__content">
        <form @submit="handleSubmit" class="edit-task__form">
          <input class="edit-task__input" v-model="desc" />
          <button class="edit-task__submit" type="submit">Edit</button>
        </form>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.edit-task__modal {
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100dvw;
  height: 100dvh;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
}
.edit-task__mask {
  position: absolute;
  width: 100dvw;
  height: 100dvh;
  background-color: rgba(0, 0, 0, 0.3);
  top: 0;
  left: 0;
}
.edit-task__content {
  background-color: white;
  position: relative;
}
.edit-task__form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 400px;
  padding: 30px;
}
.edit-task__input {
  width: 100%;
}
.edit-task__submit {
  padding: 10px 5px;
}
</style>
