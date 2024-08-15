import { createElement } from 'react';
import ReactDOM from 'react-dom/client';
import * as Vue from 'vue';
import './styles/global.css'

// @ts-ignore
import { App as NavBarApp } from 'navbar/app'
// @ts-ignore
import { default as MainListApp } from 'main_list/app'


async function loadComponents() {

  const vueContainer = document.getElementById('vue')
  if (vueContainer) {
    const app = Vue.createApp(MainListApp)
    app.mount(vueContainer)
  }

  const reactContainer = document.getElementById('react')
  if (reactContainer) {
    ReactDOM.createRoot(reactContainer!).render(createElement(NavBarApp))
  }
}

loadComponents()