// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://www.brunojbk.me",
  integrations: [tailwind()],
  redirects: {
    "/portfolio": "/portfolio/shopify",
  },
});