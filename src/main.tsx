// main.tsx
import React from "react";
import ReactDOM from "react-dom/client"; // ✅ MISSING IMPORT
import { HashRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
