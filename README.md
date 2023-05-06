# 搜索引擎切换 - Search Engine Switcher

一个 TemperMonkey 脚本。功能很简单，从地址栏提取关键词，然后在各大搜索引擎中搜索。

源代码：[Github](https://github.com/IvanLi-CN/TM-Search-Engine-Switcher)
安装地址：[Greasy Fork](https://greasyfork.org/zh-CN/scripts/465246) / [Github](https://github.com/IvanLi-CN/TM-Search-Engine-Switcher/raw/main/dist/tm-search-engine-switch.user.js)

![截图](https://github.com/IvanLi-CN/TM-Search-Engine-Switcher/blob/5cfe15d3726875aa7384609ad9a36a1ebfc7e5f7/docs/asserts/img-1.png)

## 使用

安装之后就能用了。如果想调整搜索引擎的顺序，可以在脚本中修改 `searchEngines` 数组。

自用脚本，如果有朋友喜欢的话，我再开发配置功能吧。

脚本界面参考了我最开始使用的那个功能差不多的脚本，不过太多人 fork 版本了，我已经不知道哪个是哪个了。这个界面还是很经典的，可惜很多版本都有点问题，他们都不提供开源协作，没办法提交 PR，所以我重新写了一个。

## 合作

欢迎提交 Issue 和 PR。

项目使用 TypeScript 开发，使用 Vite（[vite-plugin-monkey](https://github.com/lisonge/vite-plugin-monkey)） 构建。构建产物在 `dist` 目录下。

样式部分使用了 Tailwind CSS，并使用  Web Components 做了样式隔离。

最终的脚本只压缩了 css, js 代码没有压缩，方便最终用户直接修改。

```bash
# 安装依赖
pnpm i

# 开发模式
pnpm dev

# 构建
pnpm build
```

## LICENSE

[MIT](./LICENSE)
