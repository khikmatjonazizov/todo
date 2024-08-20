import { tasksApi } from "api";
import { ITask } from "contract/api";
import { createEffect, createStore, sample } from "effector";

export const $tasks = createStore<ITask[]>([]);

export const getTasksFx = createEffect(tasksApi.getAll)
sample({
  clock: getTasksFx.doneData,
  target: $tasks,
})

export const createTaskFx = createEffect(tasksApi.create)
sample({
  clock: createTaskFx.doneData,
  fn: (clk) => [clk, ...$tasks.getState()],
  target: $tasks,
})

export const editTaskFx = createEffect(tasksApi.edit)
sample({
  clock: editTaskFx.doneData,
  fn: (clk) => $tasks.getState().map(task => task.id === clk.id ? clk : task),
  target: $tasks,
})

export const deleteTaskFx = createEffect(tasksApi.delete)
sample({
  clock: deleteTaskFx.doneData,
  fn: (clk) => $tasks.getState().filter(task => task.id !== clk),
  target: $tasks,
})