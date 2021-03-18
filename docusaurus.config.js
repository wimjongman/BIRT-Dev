// Compex Systemhaus GmbH, Heidelberg, Germany
// Loetz GmbH & Co KG

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  
  title: 'BIRT',
  tagline: 'Busines Inteligence Reporting Tool',
  url: 'https://chloetz.github.io.',
  baseUrl: '/BIRT-Dev/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'chloetz', // Usually your GitHub org/user name.
  projectName: 'BIRT-Dev', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'HOME',
      logo: {
        alt: 'BIRT',
        src: 'img/BIRT-03.png',
      },
      items: [
        {
          to: 'docs/what-is-birt',
          activeBasePath: 'docs/what-is-birt',
          label: 'About',
          position: 'left',
        },
        {
          to: 'docs/installation',
          activeBasePath: 'docs/installation',
          label: 'Get started',
          position: 'left',
        },
        {
          to: 'docs/t_brief-editor-tour',
          activeBasePath: 'docs/t_brief-editor-tour',
          label: 'Documentation',
          position: 'left',
        },
        {
          to: 'docs/template-introduction',
          activeBasePath: 'docs/template-introduction',
          label: 'Templates',
          position: 'left',
        },
        {
          href: 'https://www.eclipse.org/osbp/OS-bea-WG.html',
          label: 'Working Group',
          position: 'left',
        },        
        {
          to: 'docs/community',
          activeBasePath: 'community',
          label: 'Community',
          position: 'left',
        },          
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/chloetz/',
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
              label: 'Privacy policy',
              href: 'http://www.eclipse.org/legal/privacy.php',
            },
            {
              label: 'Website terms of use',
              href:  'http://www.eclipse.org/legal/termsofuse.php',
            },
            {
              label: 'Copyright agent',
              href:  'http://www.eclipse.org/legal/copyright.php',
            },
            {
                label: 'Legal',
                href:  'http://www.eclipse.org/legal',
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
      logo: {
        alt: 'FlexIt Logo',
        src: '/img/Flex-X-small.png',
        href: 'https://flexitanalytics.com/',
      },
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
            'https://github.com/chloetz/BIRT-Dev/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/chloetz/BIRT-Dev/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
