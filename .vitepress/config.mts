import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Celerix",
  description: "Privacy aware High-performance open source software",
  base: '/',
  themeConfig: {
    logo: '/assets/celerix-logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Dev Toolbox', link: '/dev-toolbox' }
    ],
    editLink: {
      pattern: 'https://github.com/celerix-dev/edit/main/:path',
      text: 'Edit this page on GitHub'
    },

    sidebar: {
      '/': [
        {
          text: 'Welcome',
          items: [
            {text: 'Getting Started', link: '/getting-started'},
            {text: 'Privacy', link: '/privacy'}
          ]
        }],
      '/dev-toolbox/': [
        {
          items: [
            { text: 'Welcome', link: '/dev-toolbox/' },
            {text: 'Features', link: '/dev-toolbox/features'},
          ]
        },
      ],
      '/git-gui/': [
        {
          text: 'Git GUI',
          collapsed: true,
          items: [
            {text: 'Introduction', link: '/pages/git-gui/introduction'},
          ]
        },
      ],
      '/docs/': [
        {
          text: 'Celerix Docs',
          collapsed: true,
          items: [
            {text: 'Introduction', link: '/pages/celerix-docs/introduction'},
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/celerix-dev' }
    ]
  }
})
