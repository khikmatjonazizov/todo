import React from "react";
import ReactDOMClient from "react-dom/client";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import { App } from "./app";

export const { bootstrap, mount, unmount } = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  ReactDOMClient,
  renderType: 'createRoot',
  errorBoundary(err) {
    return <>{err.message}</>;
  },
});
