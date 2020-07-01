const moment = require('moment')

module.exports = {
  title: 'Frontend Styleguide',
  base: process.env.NODE_ENV === 'preview' ? '/coding-guideline/' : '/',
  markdown: {
    lineNumbers: true,
    extendMarkdown: md => {
      md.use(require('markdown-it-footnote'))
    }
  },
  themeConfig: {
    logo: '/images/logo.png',
    search: false,
    nav: [
      { text: '開発ガイド', link: '/design/' },
      { text: 'コーディング規約', link: '/rules/' },
      { text: 'コンポーネント一覧', link: '/components/' }
    ],
    sidebar: {
      '/design/': [
        '',
        'process',
        'naming',
        'example',
        'anti-patterns'
      ],
      '/rules/': [
        '',
        'structure',
        'stylelint'
      ],
      '/components/': [
        '',
        'button',
        'table',
        'card',
        'headline',
        'list',
        'form',
        'navbar',
        'avatar',
        'pagination',
        'breadcrumbs',
        'modal'
      ]
    },
    sidebarDepth: 2,
    lastUpdated: 'Last Updated'
  },
  plugins: [
    ['@vuepress/last-updated', {
      transformer: timestamp => moment(timestamp).format('YYYY/MM/DD H:m:s')
    }]
  ]
}
