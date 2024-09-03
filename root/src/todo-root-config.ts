import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
// @ts-expect-error no type
import microfrontendLayout from "./microfrontend-layout.html?raw";
import './app/global.css'
import './app/model';
import { appStarted } from "./system";

const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return import(/* @vite-ignore */name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();
start();
appStarted();
