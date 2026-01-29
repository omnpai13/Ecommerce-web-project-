console.log("API BASE URL =", import.meta.env.VITE_API_BASE_URL);
import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
