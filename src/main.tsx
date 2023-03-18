import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./styles/index.css";
import { Analytics } from "@vercel/analytics/react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Analytics mode={"production"} />;
    <App />
  </React.StrictMode>
);
