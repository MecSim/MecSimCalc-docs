// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const math = require("remark-math");
const katex = require("rehype-katex");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "MecSimCalc Docs",
  tagline:
    "The simplest way to build and share computational tools on the web. Create and share your Python apps in minutes using our intuitive and simple platform.",
  url: "https://docs.mecsimcalc.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "MecSim", // Usually your GitHub org/user name.
  projectName: "MecSimCalc-docs", // Usually your repo name.
  trailingSlash: false,

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          remarkPlugins: [math],
          rehypePlugins: [katex],
          routeBasePath: "/",
        },
        blog: {
          showReadingTime: true,
          blogSidebarCount: "ALL",
          blogSidebarTitle: "All posts",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: process.env.GOOGLE_ANALYTICS || "none",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/og_image.png",
      navbar: {
        title: "",
        style: "dark",
        logo: {
          alt: "MecSimCalc",
          src: "img/logo.png",
          href: "https://mecsimcalc.com/",
          target: "_self",
          style: {
            width: "92px",
            height: "28px",
            margin: "2px 8px",
          },
        },
        items: [
          {
            label: "EXPLORE",
            to: "https://mecsimcalc.com/explore/",
            position: "left",
            target: "_self",
          },
          {
            label: "SEARCH",
            to: "https://mecsimcalc.com/search/",
            position: "left",
            target: "_self",
          },
          {
            label: "CREATE",
            to: "https://mecsimcalc.com/create/",
            position: "left",
            target: "_self",
          },
          {
            type: "doc",
            docId: "home",
            label: "DOCS",
            position: "left",
          },
          {
            label: "COMMUNITY",
            to: "https://community.mecsimcalc.com/",
            position: "left",
            target: "_self",
          },
          { label: "BLOG", to: "blog", position: "left" },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Links",
            items: [
              {
                label: "MecSimCalc",
                href: "https://mecsimcalc.com",
              },
              {
                label: "GitHub",
                href: "https://github.com/MecSim/MecSimCalc-docs",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/MecSimCalc",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Docs",
                to: "/",
              },
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "Email",
                href: "mailto:info@mecsimcalc.com",
              },
            ],
          },
          {
            title: "Legal",
            items: [
              {
                label: "Terms of Service",
                href: "https://mecsimcalc.com/legal/terms-of-service",
              },
              {
                label: "Privacy Policy",
                href: "https://mecsimcalc.com/legal/privacy-policy",
              },
            ],
          },
        ],
        copyright: `Copyright © MecSimCalc ${new Date().getFullYear()}`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      // https://docsearch.algolia.com/docs/legacy/run-your-own/
      ...(process.env.NODE_ENV === "production"
        ? {
            algolia: {
              appId: process.env.ALGOLIA_APP_ID, // The application ID provided by Algolia
              apiKey: process.env.ALGOLIA_API_KEY, // Public API key: it is safe to commit it
              indexName: "MecSimCalc-docs",
              contextualSearch: true,
            },
          }
        : {}),
    }),
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],
};

module.exports = config;
