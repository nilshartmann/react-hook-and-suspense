import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
// import { AppWithHooks as App } from "./AppWithHooks";
// import { AppWithTab as App } from "./LazyApp";
// import { AppWithTabWithSuspense as App } from "./LazyAppWithSupsense";
import ErrorHandler from "./components/ErrorHandler";

const mountNode = document.getElementById("mount");

ReactDOM.render(
  <React.StrictMode>
    <React.unstable_ConcurrentMode>
      <ErrorHandler>
        <App />
      </ErrorHandler>
    </React.unstable_ConcurrentMode>
  </React.StrictMode>,
  mountNode
);
