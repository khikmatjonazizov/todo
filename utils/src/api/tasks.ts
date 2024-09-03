import baseInstance from "./base.instance";

export const tasksApi = {
  getAll: async () => {
    const res = await baseInstance.get('/tasks');

    return res.data;
  },
  getOne: async (id: number) => {
    const res = await baseInstance.get(`/tasks/${id}`);

    return res.data;
  },
  edit: async (body: any) => {
    const res = await baseInstance.patch('/tasks', body);

    return res.data
  },
  create: async (body: any) => {
    const res = await baseInstance.put('/tasks', body)

    return res.data
  },
  delete: async (id: any) => {
    await baseInstance.delete(`/tasks/${id}`);
    return id;
  },
}