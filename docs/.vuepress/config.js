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
        title: 'HTML/CSS設計',
        collapsable: false,
        children: [
          //'/css/about-css-design',
          '/architecture/css-class-methodologies',
          '/architecture/css-class-design-example',
          '/architecture/css-class-naming-rules',
          '/architecture/css-class-naming-example'
        ]
      },
      {
        title: 'Sass',
        collapsable: false,
        children: [
          '/architecture/css-directory-structure'
        ]
      }
    ]
  }
}