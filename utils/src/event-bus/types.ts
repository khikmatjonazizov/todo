import { ITask } from "../contract"

export type EventBusEvents =
| 'create-task'
| 'update-task'
| 'delete-task'
| 'get-tasks'

export type EventBusPayloads = {
  'create-task': ITask;
  'update-task': ITask;
  'delete-task': ITask['id'];
  'get-tasks': ITask[];
}

export type EventBusCallback<T = any> = (props: T) => void;