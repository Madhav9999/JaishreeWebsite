import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { getRouter } from "./router";
import { startInstance } from "./start";
import "./styles.css";

const router = getRouter();
const rootEl = document.getElementById("root");

if (rootEl) {
  const root = createRoot(rootEl);
  root.render(<RouterProvider router={router} />);
}

// If your start instance exposes a client start hook, call it safely
const clientStart = (startInstance as any)?.client?.start;
if (typeof clientStart === "function") clientStart();
