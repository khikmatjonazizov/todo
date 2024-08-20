import { createElement } from 'react';
import ReactDOM from 'react-dom/client';
import * as Vue from 'vue';
import './styles/global.css';

// @ts-ignore
import { App as NavBarApp } from 'navbar/app'
// @ts-ignore
import { App as CreateTaskApp } from 'create_task/app'
// @ts-ignore
import MainListApp from 'main_list/app'


import { tasksApi } from 'api';
import { MainListProps } from 'contract/main-list';

const handleEditTask: MainListProps['handleEditTask'] = async (body) => {
  const task = await tasksApi.edit(body);
  return task
}

const handleDeleteTask: MainListProps['handleDeleteTask'] = async (id) => {
  await tasksApi.delete(id);
}


const mainListContainer = document.getElementById('main-list')
if (mainListContainer) {
  const app = Vue.createApp(MainListApp, {tasks: [{id: '1', desc: 'test', done: true}], handleEditTask, handleDeleteTask})
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