import { createElement } from 'react';
import ReactDOM from 'react-dom/client';
import * as Vue from 'vue';
import './styles/global.css';

// @ts-ignore
import { App as NavBarApp } from 'navbar/app'
// @ts-ignore
import { App as CreateTaskApp } from 'create_task/app'
// @ts-ignore
import { default as MainListApp } from 'main_list/app'


import { tasksApi } from 'api';
import { MainListProps } from 'contract/main-list';

const getTasks = async () => {
  const tasks = await tasksApi.getAll();
  return tasks;
}

const handleEditTask: MainListProps['handleEditTask'] = async (body) => {
  const task = await tasksApi.edit(body);
  return task
}

const handleDeleteTask: MainListProps['handleDeleteTask'] = async (id) => {
  await tasksApi.delete(id);
}


async function loadComponents() {
  const tasks = await getTasks();

  const mainListContainer = document.getElementById('main-list')
  if (mainListContainer) {
    const app = Vue.createApp(MainListApp, {tasks, handleEditTask, handleDeleteTask})
    app.mount(mainListContainer)
  }

  const navbarContainer = document.getElementById('navbar')
  if (navbarContainer) {
    ReactDOM.createRoot(navbarContainer!).render(createElement(NavBarApp))
  }

  const createTaskContainer = document.getElementById('create-task')
  if(createTaskContainer) {
    ReactDOM.createRoot(createTaskContainer!).render(createElement(CreateTaskApp))
  }
}

loadComponents()