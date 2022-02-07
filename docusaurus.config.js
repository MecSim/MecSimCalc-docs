// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MecSimCalc Docs',
  tagline: 'The simplest way to build and share computational tools on the web. Create and share your Python apps in minutes using our intuitive and simple platform.',
  url: 'https://docs.mecsimcalc.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'MecSim', // Usually your GitHub org/user name.
  projectName: 'MecSimCalc-docs', // Usually your repo name.
  trailingSlash: false,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [math],
          rehypePlugins: [katex],
          routeBasePath: "/"
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'MecSimCalc',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'home',
            position: 'left',
            label: 'Docs',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Links',
            items: [
              {
                label: "MecSimCalc",
                href: "https://mecsimcalc.com"
              },
              {
                label: 'GitHub',
                href: 'https://github.com/MecSim/MecSimCalc-docs',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/MecSimCalc',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Docs',
                to: '/',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Email',
                href: 'mailto:info@mecsimcalc.com',
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
    }),
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
};

module.exports = config;
