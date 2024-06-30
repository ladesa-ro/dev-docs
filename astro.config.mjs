import node from "@astrojs/node";
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({

  // site: 'https://docs.ladesa.com.br',
  // base: 'dev',
  
  output: "server",

  adapter: node({
    mode: "standalone",
  }),

  integrations: [
    starlight({
      defaultLocale: "root",

      locales: {
        root: {
          label: "Português (brasileiro)",
          lang: "pt-BR",
        },
      },

      title: "Ladesa DEV Docs",

      social: {
        github: "https://github.com/ladesa-ro/dev-docs",
      },

      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", link: "/guides/example/" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
