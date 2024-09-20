// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Coding Latam Docs",
      logo: {
        src: "./src/assets/logo.svg",
        replacesTitle: true,
      },
      social: {
        github: "https://github.com/angelolev/coding-latam-docs",
      },
      sidebar: [
        {
          label: "Contribute",
          items: [
            {
              label: "Trabajando con git",
              slug: "guides/trabajando-con-git",
            },
            {
              label: "Estandar de branches",
              slug: "guides/estandar-de-branches",
            },
            {
              label: "Estandar de commits",
              slug: "guides/estandar-de-commits",
            },
          ],
        },
        // {
        //   label: "Reference",
        //   autogenerate: { directory: "reference" },
        // },
      ],
    }),
  ],
});
