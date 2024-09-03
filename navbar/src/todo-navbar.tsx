import React from "react";
import ReactDOMClient from "react-dom/client";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import { App } from "./app";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  ReactDOMClient,
  renderType: 'createRoot',
  rootComponent: App,
  errorBoundary(err) {
    // Customize the root error boundary for your microfrontend here.
    return <>{err.message}</>;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
