import { ITask, EditTaskReqBody } from './api';

export type MainListProps = {
  tasks: ITask[];
  handleDeleteTask: (id: ITask['id']) => Promise<void>;
  handleEditTask: (body: EditTaskReqBody) => Promise<ITask>;
}