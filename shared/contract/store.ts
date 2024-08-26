import { CreateTaskReqBody, GetAllTasksRes, ITask } from './api';
import type { Effect, StoreWritable } from 'effector';

export type $Tasks = StoreWritable<ITask[]>;
export type GetTasksFx = Effect<void, GetAllTasksRes, Error>;
export type CreateTaskFx = Effect<CreateTaskReqBody, ITask, Error>;
export type EditTaskFx = Effect<ITask, ITask, Error>;
export type DeleteTaskFx = Effect<string, string, Error>;