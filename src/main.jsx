import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";
import AllProviders from "./provider/AllProviders";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AllProviders>
        <RouterProvider router={router} />
      </AllProviders>
    </HelmetProvider>
  </React.StrictMode>
);
