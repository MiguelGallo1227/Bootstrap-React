import React from "react";
import ReactDOM from "react-dom/client";

// CSS importado UMA única vez, no ponto de entrada da aplicação
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./cores.css";

import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
