import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { Loading } from "./styles/global";
import "../i18n";
import "../InitScrollReveal";
const loadingMarkup = (
  <Loading>
    <div className="loader"></div>
  </Loading>
);

ReactDOM.render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>,
  document.getElementById("root")
);
