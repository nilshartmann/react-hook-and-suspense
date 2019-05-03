import React from "react";
import ReactDOM from "react-dom";
import { App, AppWithTab } from "./App";
import ErrorHandler from "./components/ErrorHandler";

const mountNode = document.getElementById("mount");

const demoLazyLoad = false;

if (!demoLazyLoad) {
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
} else {
  // use this to show lazy loading of SearchPage
  ReactDOM.render(
    <React.StrictMode>
      <React.unstable_ConcurrentMode>
        <ErrorHandler>
          <AppWithTab />
        </ErrorHandler>
      </React.unstable_ConcurrentMode>
    </React.StrictMode>,
    mountNode
  );
}
