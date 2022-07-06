import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Task1 from "./components/Task1/Task1Component";
import Task2 from "./components/Task2/Task2Component";
import Task3 from "./components/Task3/Task3Component";
import * as serviceWorker from "./serviceWorker";
import { StoreProvider } from "./context/store/storeContext";

ReactDOM.render(
  <StoreProvider>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/task-1" element={<Task1 />} />
        <Route path="/task-2" element={<Task2 />} />
        <Route path="/task-3" element={<Task3 />} />
      </Routes>
    </Router>
  </StoreProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
