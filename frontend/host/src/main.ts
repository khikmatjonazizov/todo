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
import { getTasksFx } from './store/tasks';

const mount = async () => {
  getTasksFx();
  const mainListContainer = document.getElementById('main-list')
  if (mainListContainer) {
    Vue.createApp(MainListApp).mount(mainListContainer)
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

mount()