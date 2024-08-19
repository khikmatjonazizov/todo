export type ITask = {
  id: string;
  desc: string;
  done: boolean;
}

export type GetAllTasksRes = ITask[];

export type GetOneTaskRes = ITask;

export type EditTaskReqBody = ITask;
export type EditTaskRes = ITask;

export type CreateTaskReqBody = Omit<ITask, 'id'>
export type CreateTaskRes = ITask;