import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";
import { ThemeProvider } from "./Components/ThemeContext";
import App from "./App.jsx";
import DarkModeToggle from "./Components/Dark.jsx";
import Dark from "./Components/Dark.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
    <App />
    </ThemeProvider>
  </StrictMode>
);
