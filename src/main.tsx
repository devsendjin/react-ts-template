import { createRoot } from "react-dom/client";
import { App } from "./components/App";
import "./index.scss";

const main = () => {
  const root = document.getElementById("root");
  if (!root) return;

  createRoot(root).render(<App />);
};

main();
