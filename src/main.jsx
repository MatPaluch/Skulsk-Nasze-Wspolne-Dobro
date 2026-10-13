import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { BrowserRouter, HashRouter } from "react-router-dom";
import "./index.css";
import ScrollToTop from "./pages/ScrollToTop";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <ScrollToTop />
      <App />
    </HashRouter>
  </React.StrictMode>
);
