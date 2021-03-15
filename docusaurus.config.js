// Compex Systemhaus GmbH, Heidelberg, Germany
// Loetz GmbH & Co KG

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'BIRT',
  tagline: 'Busines Inteligence Reporting Tool',
  url: 'https://www.eclipse.org/birt/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Compex Systemhaus GmbH', // Usually your GitHub org/user name.
  projectName: 'BIRT-Internet-Pages', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'My SiteHome',
      logo: {
        alt: 'BIRT',
        src: 'img/BIRT-01.png',
      },
      items: [
        {
          to: 'docs/what-is-birt',
          activeBasePath: 'docs/what-is-birt',
          label: 'About',
          position: 'left',
        },
        {
          to: 'docs/getting-started',
          activeBasePath: 'docs/getting-started',
          label: 'Get Started',
          position: 'left',
        },
        {
          to: 'docs/t_brief-editor-tour',
          activeBasePath: 'docs/t_brief-editor-tour',
          label: 'Documentation',
          position: 'left',
        },
        {
          href: 'https://www.eclipse.org/osbp/OS-bea-WG.html',
          label: 'Working Group',
          position: 'left',
        },        
        {
          to: 'docs/community',
          activeBasePath: 'docs/community',
          label: 'Community',
          position: 'left',
        },          
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'BIRT',
          items: [
            {
              label: 'Doumentation',
              to: 'docs/t_brief-editor-tour',
            },
            {
              label: 'Community',
              to: 'docs/community',
            },
          ],
        },
        {
          title: 'Eclipse',
          items: [
            {
              label: 'Eclipse Homepage',
              href: 'https://www.eclipse.org/',
            },
            {
              label: 'OSBP Project',
              href: 'https://www.eclipse.org/osbp/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/chloetz/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Eclipse Foundation. All Rights Reserved.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/chloetz/BIRT-Dev/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/chloetz/BIRT-Dev/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
