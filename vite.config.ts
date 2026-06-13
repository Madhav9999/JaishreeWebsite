// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { resolve } from "path";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  // Add a Vite alias to provide a browser-safe shim for `node:async_hooks` which
  // TanStack Start's storage context packages may import. This prevents runtime
  // errors where AsyncLocalStorage (Node-only) is externalized and missing in the
  // browser. The shim implements a minimal AsyncLocalStorage-compatible API.
  vite: {
    resolve: {
      alias: {
        "node:async_hooks": resolve(__dirname, "src/shims/async_hooks.ts"),
      },
    },
  },
});
