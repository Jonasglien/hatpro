import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ConvexAuthProvider } from "@convex-dev/auth/react";
import { ConvexReactClient } from "convex/react";
import "./index.css";
import App from "./App.tsx";

const convexUrl = import.meta.env.VITE_CONVEX_URL as string;
const convex = convexUrl ? new ConvexReactClient(convexUrl) : null;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {convex ? (
      <ConvexAuthProvider client={convex}>
        <App />
      </ConvexAuthProvider>
    ) : (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h1>HatPro App</h1>
        <p>⚠️ VITE_CONVEX_URL environment variable not set</p>
        <p>Add it in Railway dashboard to enable full functionality</p>
      </div>
    )}
  </StrictMode>,
);
