import { ITask } from './api'

export type EventBusPayloads = {
  'get-tasks': ITask[];
  'create-task': ITask;
  'delete-task': ITask['id']
  'edit-task': ITask;
}

export type EventBusEvents = keyof EventBusPayloads

export type EventBusAction<T = any> = (props: T) => void;

export class EventBus {  
  on<K extends EventBusEvents>(event: K, callback: EventBusAction<EventBusPayloads[K]>) {}
  emit<K extends EventBusEvents>(event: K, props: EventBusPayloads[K]) {}
}