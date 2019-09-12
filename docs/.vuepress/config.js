module.exports = {
  themeConfig: {
    sidebar: [
      '/',
      {
        title: '基本ルール',
        collapsable: false,
        children: [
          '/base/common-rules',
          '/base/html-rules',
          '/base/css-rules',
          '/base/css-property-order'
        ]
      },
      {
        title: 'CSS設計',
        collapsable: false,
        children: [
          //'/css/about-css-design',
          '/css/css-class-methodologies',
          '/css/css-class-naming-rules',
          '/css/css-class-naming-example',
        ]
      }
    ]
  }
}