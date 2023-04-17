import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  { text: "导航", icon: "discover", link: "/demo/" },
  {
    text: "笔记分类",
    icon: "edit",
    children: [
      {
        text: "代码笔记",
        prefix:"/posts/",
        children: [
          { text: "iOS笔记", icon: "hk-apple", link: "iOS/" },
          { text: "前端笔记", icon: "code", link: "Web/" },
          { text: "Linux", icon: "linux", link: "Linux/" },
          { text: "Python", icon: "python", link: "Python/" },
          { text: "React", icon: "react", link: "cross-platform/ReactNative/" },
          {
            text: "Flutter",
            icon: "hk-flutter",
            link: "cross-platform/Flutter/",
          },
        ],
      },
      {
        text: "博客相关",
        prefix:"/blog/",
        children: [
          { text: "博客相关", icon: "blog", link: "" },
        ],
      },
    ],
  },
  {
    text: "软件/工具教程",
    icon: "software",
    link: "/tutorial/",
  },
  {
    text: "留言板",
    icon: "mark",
    link: "/visitorsbook",
  },
  {
    text: "友链",
    icon: "link",
    link: "/friend",
  },
  {
    text: "关于",
    icon: "info",
    link: "/intro",
  },
]);
