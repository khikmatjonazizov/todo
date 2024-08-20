import express, { type Request, type Response } from "express";
import dotenv from "dotenv";
import cors from 'cors';
import { v4 } from 'uuid';
import tasksDB from './db/tasks.json'
import type { EditTaskReqBody, ITask, CreateTaskReqBody } from 'contract/api'

let tasks = tasksDB;

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors())
app.use(express.json())

app.get('/tasks', (req: Request, res: Response) => {
  res.statusCode = 200;
  res.json(tasks)
})

app.get('/tasks/:id', (req: Request, res: Response) => {
  const id = req.params.id;
  const task = tasks.find(task => task.id === id)
  if(task) {
    res.statusCode = 200;
    res.json(task)
    return;
  }

  res.statusCode = 400;
  res.send('Not found')
})

app.put('/tasks', (req: Request, res: Response) => {
  const id = v4();
  const body: CreateTaskReqBody = req.body;

  tasks.unshift({
    id,
    ...body,
  });
  res.json({id, ...body})
})

app.patch('/tasks', (req: Request, res: Response) => {
  const body: EditTaskReqBody = req.body;
  let editedTask: ITask | null = null;
  tasks = tasks.map(task => {
    if(task.id === body.id) {
      editedTask = body;
      return body;
    }

    return task;
  })

  if(editedTask) {
    res.statusCode = 200;
    res.json(editedTask);
    return;
  }

  res.statusCode = 400;
  res.send('Not found')
})

app.delete('/tasks/:id', (req: Request, res: Response) => {
  const id = req.params.id;
  let deletedTask: ITask | null = null;

  tasks = tasks.filter(task => {
    if(task.id == id) {
      deletedTask = task;
      return false
    }

    return true;
  })

  if(deletedTask) {
    res.sendStatus(200)
    
    return;
  }

  res.statusCode = 400;
  res.send('Not found')
})

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
})