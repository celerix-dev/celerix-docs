import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Celerix",
  description: "Privacy aware High-performance open source software",
  base: '/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started' }
    ],

    sidebar: [
      {
        text: 'Welcome',
        items: [
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Privacy', link: '/privacy' }
        ]
      },
      {
        text: 'Dev Toolbox',
        collapsed: true,
        items: [
          { text: 'Introduction', link: '/pages/dev-toolbox/introduction' },
        ]
      },
      {
        text: 'Git GUI',
        collapsed: true,
        items: [
          { text: 'Introduction', link: '/pages/git-gui/introduction' },
        ]
      },
      {
        text: 'Celerix Docs',
        collapsed: true,
        items: [
          { text: 'Introduction', link: '/pages/celerix-docs/introduction' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/celerix-dev' }
    ]
  }
})
