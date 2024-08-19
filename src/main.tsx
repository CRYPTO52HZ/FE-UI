import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ReactQueryProvider from "./providers/ReactQueryProvider";
import AppRouter from "./routes/AppRouter";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReactQueryProvider>
      <AppRouter></AppRouter>
    </ReactQueryProvider>
  </React.StrictMode>
);
