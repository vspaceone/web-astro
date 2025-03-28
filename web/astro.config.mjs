import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

import icon from "astro-icon";

import solidJs from "@astrojs/solid-js";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://www.vspace.one",
  // Other pages get prefetched for SPA typical navigation speed

  vite: {
    build: {
      rollupOptions: {
        external: [
          "@photo-sphere-viewer/core",
          "@photo-sphere-viewer/virtual-tour-plugin",
        ],
      },
    },

    plugins: [tailwindcss()],
  },

  prefetch: {
    prefetchAll: true,
    defaultStrategy: "hover",
  },
  integrations: [

    mdx(),
    icon(),
    solidJs(),
  ],
});