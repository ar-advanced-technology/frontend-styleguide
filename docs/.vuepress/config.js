const moment = require('moment')

module.exports = {
  title: 'Frontend Primer',
  base: process.env.NODE_ENV === 'production' ? '/coding-guideline/' : '/',
  markdown: {
    lineNumbers: true,
    extendMarkdown: md => {
      md.use(require('markdown-it-footnote'))
    }
  },
  themeConfig: {
    search: false,
    nav: [
      { text: '開発ガイド', link: '/design/' },
      { text: 'コーディング規約', link: '/rules/' }
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
