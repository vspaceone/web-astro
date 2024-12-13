import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

import icon from "astro-icon";

import solidJs from "@astrojs/solid-js";

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
  },

  prefetch: {
    prefetchAll: true,
    defaultStrategy: "hover",
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    mdx(),
    icon(),
    solidJs(),
  ],
});
