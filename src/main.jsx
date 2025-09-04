import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ModalProvider from "./context/ModalContext.jsx";
console.log(` 
  ██████╗ ███████╗
 ██╔═══██╗╚══███╔╝
 ██║   ██║  ███╔╝ 
 ██║   ██║ ███╔╝  
 ╚██████╔╝███████╗
  ╚═════╝ ╚══════╝
 
 OZ MSW Todo
 `);
createRoot(document.getElementById("root")).render(
  <ModalProvider>
    <App />
  </ModalProvider>
);
