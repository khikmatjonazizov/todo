import baseInstance from "./base.instance";
import type {
  GetAllTasksRes,
  GetOneTaskRes,
  EditTaskReqBody,
  EditTaskRes,
  CreateTaskReqBody,
  CreateTaskRes,
  ITask
} from 'contract/api';

export const tasksApi = {
  getAll: async () => {
    const res = await baseInstance.get<GetAllTasksRes>('/tasks');

    return res.data;
  },
  getOne: async (id: ITask['id']) => {
    const res = await baseInstance.get<GetOneTaskRes>(`/tasks/${id}`);

    return res.data;
  },
  edit: async (body: EditTaskReqBody) => {
    const res = await baseInstance.patch<EditTaskRes>('/tasks', body);

    return res.data
  },
  create: async (body: CreateTaskReqBody) => {
    const res = await baseInstance.put<CreateTaskRes>('/tasks', body)

    return res.data
  },
  delete: async (id: ITask['id']) => {
    await baseInstance.delete(`/tasks/${id}`);
    return id;
  },
}