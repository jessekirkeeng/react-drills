import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import registerServiceWorker from "./registerServiceWorker";
import * as serviceWorker from './serviceWorker'

import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);

// registerServiceWorker();
serviceWorker.unregister()