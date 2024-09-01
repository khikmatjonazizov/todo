import { createHistoryRouter, createRoute, createRouterControls } from 'atomic-router';

export const routes = {
  home: createRoute(),
  task: createRoute<{id: string}>()
}

export const routesMap = [
  {
    path: '/',
    route: routes.home,
  },
  {
    path: '/task/:id',
    route: routes.task,
  }
]

export const routerControls = createRouterControls();

export const router = createHistoryRouter({
  routes: routesMap,
  controls: routerControls,
})