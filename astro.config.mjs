// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";

const isProd = process.env.NODE_ENV === 'production';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), markdoc(), (!isProd ? [keystatic()] : [])],

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ["@keystatic/core", "@keystatic/astro"],
    },
  },

  output: "static",

  site: "https://ujjwal-dev23.github.io",

  // base: "/",
});
