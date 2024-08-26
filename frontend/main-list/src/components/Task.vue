<script setup lang="ts">
import { ITask } from 'contract/api';
import DeleteTask from '../features/delete-task/Ui.vue';
import DoTask from '../features/do-task/Ui.vue';
import EditTask from '../features/edit-task/Ui.vue'

const { task } = defineProps<{task: ITask}>();

</script>
<template>
  <li class="main-list__task">
    <div class="main-list__task__content">
      <DoTask :task="task" />
      <p class="main-list__task__desc">
        {{ task.desc }}
      </p>
    </div>
    <div class="main-list__task__actions">
      <EditTask :task="task" />
      <DeleteTask :task="task" />
    </div>
  </li>
</template>
<style scoped>
.main-list__task {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 30px;
  border-bottom: 1px solid #ccc;
}
.main-list__task-desc {
  margin: 0;
}
.main-list__task__actions {
  display: flex;
  gap: 10px;
}

.main-list__task__content {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>