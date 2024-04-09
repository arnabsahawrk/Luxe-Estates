import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider></HelmetProvider>
  </React.StrictMode>
);
