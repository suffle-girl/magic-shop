import { createRoot } from "react-dom/client";
import { App } from "./components/App";
import "./i18n.js";
import "./styles.css";

createRoot(document.getElementById("app")!).render(<App />);
