import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "我的工具集",
  // description: "A VitePress Site",
  appearance: false,
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'https://vip.123pan.cn/1831704795/public/%E6%88%91%E7%9A%84%E5%B7%A5%E5%85%B7%E7%AE%B1-202404-00/images/logo.png'
      }
    ],
  ],
  // lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '工具集', link: '/tools/' },
    ],

    sidebar: [
      {
        text: '工具集',
        items: [
          { text: '引言', link: '/tools/' },
          { text: '概览', link: '/tools/overview.md' },
          {
            text: '写作工具库',
            collapsed: true,
            items: [
              {text: '公众号', link: '/tools/写作工具库/公众号.md'},
              {text: '语雀笔记', link: '/tools/写作工具库/语雀笔记.md'}
            ]
          },
        ]
      }
    ],

    docFooter: {
       prev: '上一篇', 
       next: '下一篇' 
    },

    footer: {
      message: '<a href="https://beian.miit.gov.cn/" target="_blank">苏ICP备2023023247号-2</a> · <a href="https://beian.mps.gov.cn/#/query/webSearch?code=32098202000234" target="_blank">苏公网安备32098202000234号</a> · <a href="https://icp.gov.moe/?keyword=20241212" target="_blank">萌ICP备20241212号</a>',
      copyright: 'Copyright &copy; 2024 无聊的闪客'
    },

    editLink: {
      pattern: 'https://github.com/wuchenchina/My-Tools-Shanke/tree/main/docs/:path',
      text: '在Github修改或提出建议'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wuchenchina/My-Tools-Shanke' }
    ]
  }
})
