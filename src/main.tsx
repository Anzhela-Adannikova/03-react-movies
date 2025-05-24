import { createRoot } from "react-dom/client";
import "modern-normalize";
import App from "./components/App/App.tsx";

createRoot(document.getElementById("root") as HTMLElement).render(<App />);
