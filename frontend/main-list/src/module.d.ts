import type { $Tasks, CreateTaskFx, EditTaskFx, DeleteTaskFx, GetTasksFx } from 'contract/store'

declare module 'host/store/tasks' {
  const $tasks: $Tasks;
  const createTaskFx: CreateTaskFx;
  const editTaskFx: EditTaskFx;
  const deleteTaskFx: DeleteTaskFx;
  const getTasksFx: GetTasksFx;

  export {
    $tasks,
    createTaskFx,
    editTaskFx,
    deleteTaskFx,
    getTasksFx,
  }
}