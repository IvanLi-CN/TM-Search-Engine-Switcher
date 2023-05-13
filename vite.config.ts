import { defineConfig } from "vite";
import monkey from "vite-plugin-monkey";

export default defineConfig({
  build: {
    minify: false,
  },
  plugins: [
    monkey({
      entry: "/src/index.ts",
      userscript: {
        name: "搜索引擎切换 - Search Engine Switcher",
        icon: "data:image/svg+xml;base64,PHN2ZyBzdHJva2U9ImN1cnJlbnRDb2xvciIgZmlsbD0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgaGVpZ2h0PSIxZW0iIHdpZHRoPSIxZW0iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0xNSwxNiBMMjEsMjIgTDE1LDE2IFogTTEwLDE4IEMxMy44NjU5OTMyLDE4IDE3LDE0Ljg2NTk5MzIgMTcsMTEgQzE3LDcuMTM0MDA2NzUgMTMuODY1OTkzMiw0IDEwLDQgQzYuMTM0MDA2NzUsNCAzLDcuMTM0MDA2NzUgMywxMSBDMywxNC44NjU5OTMyIDYuMTM0MDA2NzUsMTggMTAsMTggWiBNMjAsMSBMMjAsNyBNMTcsNCBMMjMsNCI+PC9wYXRoPjwvc3ZnPg==",
        namespace: "https://ivanli.cc/",
        match: [
          "*://www.baidu.com/*",
          "*://www.google.com/*",
          "*://www.google.com.hk/*",
          "*://www.bing.com/*",
          "*://cn.bing.com/*",
          "*://bing.com/*",
          "*://www.sogou.com/*",
          "*://duckduckgo.com/*",
          "*://yandex.com/*",
          "*://www.zhihu.com/*",
          "*://search.bilibili.com/*",
          "*://s.taobao.com/search*",
          "*://github.com/*",
          "*://crates.io/*",
          "*://npmjs.com/*",
          "*://www.npmjs.com/*",
        ],
        author: "Ivan Li",
        description:
          "A userscript to switch search engine with current keywords.",
        version: "1.2.0",
      },
    }),
  ],
});
