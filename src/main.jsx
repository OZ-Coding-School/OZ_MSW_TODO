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

const enableMocking = async () => {
  if (!import.meta.env.DEV) return;

  const { worker } = await import("./mocks/handler.js");
  return worker.start();
};

enableMocking().then(() => {
  createRoot(document.getElementById("root")).render(
    <ModalProvider>
      <App />
    </ModalProvider>
  );
});
