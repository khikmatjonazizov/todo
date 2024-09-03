<script setup lang="ts">
import { defineProps } from 'vue'
import DoTask from '@/features/do-task/ui/DoTask.vue';
import EditTask from '@/features/edit-task/ui/EditTask.vue';
import DeleteTask from '@/features/delete-task/ui/DeleteTask.vue';

// @ts-expect-error no type
import { routes } from '@todo/utils';

const props = defineProps<{task: any}>()

const onClick = (event: Event) => {
  event.preventDefault()
  const target = event.target as HTMLLIElement;
  
  if (
    target.closest('#delete-task') ||
    target.closest('#done-task') || 
    target.closest('#edit-task')
  ) {
    return;
  }

  routes.task.open({id: props.task.id})
}

</script>
<template>
  <li class="tasks-list__task">
    <a
      :href="`/tasks/${props.task.id}`"
      @click="onClick"
      class="tasks-list__task-link"d
    >
      <div class="tasks-list__task-content">
        <DoTask :task="props.task" />
        <p class="tasks-list__task-desc">
          {{ props.task.desc }}
        </p>
      </div>
      <div class="tasks-list__task-actions">
        <EditTask :task="props.task" />
        <DeleteTask :task="props.task" />
      </div>
    </a>
  </li>
</template>
<style lang="css" scoped>
.tasks-list__task-link {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 30px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
  transition: 30ms background-color ease-in-out;
  text-decoration: none;
  color: black;

  &:hover {
    background-color: aliceblue;
  }
}
.tasks-list__task-desc {
  margin: 0;
}
.tasks-list__task-actions {
  display: flex;
  gap: 10px;
}

.tasks-list__task-content {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>