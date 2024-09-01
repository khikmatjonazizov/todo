<script setup lang="ts">
import { defineProps } from 'vue'
import DoTask from '@/features/do-task/ui/DoTask.vue';
import EditTask from '@/features/edit-task/ui/EditTask.vue';
import DeleteTask from '@/features/delete-task/ui/DeleteTask.vue';

// @ts-expect-error no type
import { routes } from 'utils';

const props = defineProps<{task: any}>()

const onClick = (event: Event) => {
  const target = event.target as HTMLLIElement;
  console.log(target)
  
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
  <li class="tasks-list__task" @click="onClick">
    <div class="tasks-list__task__content">
      <DoTask :task="props.task" />
      <p class="tasks-list__task__desc">
        {{ props.task.desc }}
      </p>
    </div>
    <div class="tasks-list__task__actions">
      <EditTask :task="props.task" />
      <DeleteTask :task="props.task" />
    </div>
  </li>
</template>
<style lang="css" scoped>
.tasks-list__task {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 30px;
  border-bottom: 1px solid #ccc;
}
.tasks-list__task-desc {
  margin: 0;
}
.tasks-list__task__actions {
  display: flex;
  gap: 10px;
}

.tasks-list__task__content {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>