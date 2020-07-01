const path = require('path')
const moment = require('moment')

module.exports = {
  dest: path.join(__dirname, '../../docs'),
  title: 'Frontend Styleguide',
  base: '/frontend-styleguide/',
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
      { text: 'コンポーネントサンプル', link: '/components/button' }
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
        {
          title: 'コンポーネントサンプル',
          collapsable: false,
          children: [
            '/components/button',
            '/components/table',
            '/components/card',
            '/components/headline',
            '/components/list',
            '/components/form',
            '/components/navbar',
            '/components/avatar',
            '/components/pagination',
            '/components/breadcrumbs',
            '/components/modal',
          ],
        }
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
