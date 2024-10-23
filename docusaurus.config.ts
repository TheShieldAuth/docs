import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Shield Docs",
  tagline: "Powering Secure Access",
  favicon: "img/favicon.png",

  // Set the production url of your site here
  url: "https://docs.shield.rs",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Shield", // Usually your GitHub org/user name.
  projectName: "documentation", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //  "https://github.com/shield-auth/shield-docs/tree/trunk/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: "static/css/theme.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/shield-social-card.png",
    navbar: {
      title: "Shield Docs",
      logo: {
        alt: "Shield Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          href: "https://github.com/Shield-Auth/shield",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",

      links: [
        {
          title: "Resources",
          items: [
            {
              label: "Main Site",
              href: "https://shield.rs",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/KtYeDyBm",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/shield_auth",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/Shield-Auth/shield",
            },
            {
              label: "Creator",
              href: "https://linkedin.com/in/ca-mksingh",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Shield, Built with ❤️ by MKSingh.dev`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
