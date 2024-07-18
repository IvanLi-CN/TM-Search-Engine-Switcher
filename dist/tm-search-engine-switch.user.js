// ==UserScript==
// @name         搜索引擎切换 - Search Engine Switcher
// @namespace    https://ivanli.cc/
// @version      1.3.1
// @author       Ivan Li
// @description  A userscript to switch search engine with current keywords.
// @license      MIT
// @icon         data:image/svg+xml;base64,PHN2ZyBzdHJva2U9ImN1cnJlbnRDb2xvciIgZmlsbD0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgaGVpZ2h0PSIxZW0iIHdpZHRoPSIxZW0iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0xNSwxNiBMMjEsMjIgTDE1LDE2IFogTTEwLDE4IEMxMy44NjU5OTMyLDE4IDE3LDE0Ljg2NTk5MzIgMTcsMTEgQzE3LDcuMTM0MDA2NzUgMTMuODY1OTkzMiw0IDEwLDQgQzYuMTM0MDA2NzUsNCAzLDcuMTM0MDA2NzUgMywxMSBDMywxNC44NjU5OTMyIDYuMTM0MDA2NzUsMTggMTAsMTggWiBNMjAsMSBMMjAsNyBNMTcsNCBMMjMsNCI+PC9wYXRoPjwvc3ZnPg==
// @source       https://github.com/IvanLi-CN/TM-Search-Engine-Switcher
// @match        *://www.baidu.com/*
// @match        *://www.google.com/*
// @match        *://www.google.com.hk/*
// @match        *://www.bing.com/*
// @match        *://cn.bing.com/*
// @match        *://bing.com/*
// @match        *://www.sogou.com/*
// @match        *://duckduckgo.com/*
// @match        *://yandex.com/*
// @match        *://www.zhihu.com/*
// @match        *://search.bilibili.com/*
// @match        *://s.taobao.com/search*
// @match        *://github.com/*
// @match        *://crates.io/*
// @match        *://npmjs.com/*
// @match        *://www.npmjs.com/*
// @match        *://www.quora.com/search*
// @match        *://quora.com/search*
// @match        *://www.reddit.com/search*
// @match        *://reddit.com/search*
// @grant        GM_log
// ==/UserScript==

(function () {
  'use strict';

  var _GM_log = /* @__PURE__ */ (() => typeof GM_log != "undefined" ? GM_log : void 0)();
  const twText = '*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.fixed{position:fixed}.absolute{position:absolute}.-left-16{left:-64px}.-right-3{right:-12px}.left-4{left:16px}.top-1\\/2{top:50%}.top-1\\/3{top:33.333333%}.block{display:block}.inline{display:inline}.flex{display:flex}.h-6{height:24px}.w-6{width:24px}.-translate-y-1\\/2{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-180{--tw-rotate: 180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-center{justify-content:center}.divide-y>:not([hidden])~:not([hidden]){--tw-divide-y-reverse: 0;border-top-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(1px * var(--tw-divide-y-reverse))}.divide-dotted>:not([hidden])~:not([hidden]){border-style:dotted}.divide-sky-300>:not([hidden])~:not([hidden]){--tw-divide-opacity: 1;border-color:rgb(125 211 252 / var(--tw-divide-opacity))}.rounded{border-radius:4px}.rounded-full{border-radius:9999px}.bg-sky-100\\/50{background-color:#e0f2fe80}.bg-sky-700\\/50{background-color:#0369a180}.px-4{padding-left:16px;padding-right:16px}.py-2{padding-top:8px;padding-bottom:8px}.pr-0\\.5{padding-right:2px}.text-xl{font-size:20px;line-height:28px}.text-inherit{color:inherit}.text-sky-100{--tw-text-opacity: 1;color:rgb(224 242 254 / var(--tw-text-opacity))}.text-sky-700{--tw-text-opacity: 1;color:rgb(3 105 161 / var(--tw-text-opacity))}.no-underline{text-decoration-line:none}.opacity-50{opacity:.5}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-lg{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.backdrop-blur{--tw-backdrop-blur: blur(8px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.hover\\:bg-sky-100:hover{--tw-bg-opacity: 1;background-color:rgb(224 242 254 / var(--tw-bg-opacity))}.hover\\:opacity-100:hover{opacity:1}@media (prefers-color-scheme: dark){.dark\\:bg-sky-800\\/10{background-color:#0759851a}.dark\\:text-sky-500{--tw-text-opacity: 1;color:rgb(14 165 233 / var(--tw-text-opacity))}.dark\\:hover\\:bg-sky-800\\/20:hover{background-color:#07598533}}';
  const searchEngines = [
    {
      id: "v2ex",
      name: "V2EX",
      url: (w) => `https://www.google.com/search?q=site:v2ex.com/t%20${w}`,
      regUrl: /https:\/\/www.google.com\/search\?q=site:v2ex\.com\/t%20/i,
      getSearchWord: () => {
        const url = new URL(window.location.href);
        const q = url.searchParams.get("q");
        console.log(q, q == null ? void 0 : q.replace("site:v2ex.com/t ", ""));
        return (q == null ? void 0 : q.replace("site:v2ex.com/t ", "")) ?? null;
      }
    },
    {
      id: "baidu",
      name: "百度搜索",
      url: (w) => `https://www.baidu.com/s?wd=${w}`,
      regUrl: /www.baidu.com/i,
      getSearchWord: () => {
        const url = new URL(window.location.href);
        return url.searchParams.get("wd");
      }
    },
    {
      id: "google",
      name: "Google",
      url: (w) => `https://www.google.com/search?q=${w}`,
      regUrl: /www.google.com/i,
      getSearchWord: () => {
        const url = new URL(window.location.href);
        return url.searchParams.get("q");
      }
    },
    {
      id: "bing",
      name: "Bing",
      url: (w) => `https://www.bing.com/search?q=${w}`,
      regUrl: /www.bing.com/i,
      getSearchWord: () => {
        const url = new URL(window.location.href);
        return url.searchParams.get("q");
      }
    },
    {
      id: "bing-cn",
      name: "必应",
      url: (w) => `https://cn.bing.com/search?q=${w}`,
      regUrl: /cn.bing.com/i,
      getSearchWord: () => {
        const url = new URL(window.location.href);
        return url.searchParams.get("q");
      }
    },
    {
      id: "duckduckgo",
      name: "DuckDuckGo",
      url: (w) => `https://duckduckgo.com/?q=${w}`,
      regUrl: /duckduckgo.com/i,
      getSearchWord: () => {
        const url = new URL(window.location.href);
        return url.searchParams.get("q");
      }
    },
    {
      id: "yandex",
      name: "Yandex",
      url: (w) => `https://yandex.com/search/?text=${w}`,
      regUrl: /yandex.com/i,
      getSearchWord: () => {
        const url = new URL(window.location.href);
        return url.searchParams.get("text");
      }
    },
    {
      id: "sogou",
      name: "搜狗",
      url: (w) => `https://www.sogou.com/web?query=${w}`,
      regUrl: /www.sogou.com/i,
      getSearchWord: () => {
        const url = new URL(window.location.href);
        return url.searchParams.get("query");
      }
    },
    {
      id: "github",
      name: "GitHub",
      url: (w) => `https://github.com/search?q=${w}&ref=opensearch&type=repositories`,
      regUrl: /github.com/i,
      getSearchWord: () => {
        const url = new URL(window.location.href);
        return url.searchParams.get("q");
      }
    },
    {
      id: "taobao",
      name: "淘宝",
      url: (w) => `https://s.taobao.com/search?q=${w}`,
      regUrl: /s.taobao.com/i,
      getSearchWord: () => {
        const url = new URL(window.location.href);
        return url.searchParams.get("q");
      }
    },
    {
      id: "npm",
      name: "NPM",
      url: (w) => `https://www.npmjs.com/search?q=${w}`,
      regUrl: /www.npmjs.com/i,
      getSearchWord: () => {
        const url = new URL(window.location.href);
        return url.searchParams.get("q");
      }
    },
    {
      id: "Crate",
      name: "Crate",
      url: (w) => `https://crates.io/search?q=${w}`,
      regUrl: /crates.io/i,
      getSearchWord: () => {
        const url = new URL(window.location.href);
        return url.searchParams.get("q");
      }
    },
    {
      id: "zhihu",
      name: "知乎",
      url: (w) => `https://www.zhihu.com/search?q=${w}`,
      regUrl: /www.zhihu.com/i,
      getSearchWord: () => {
        const url = new URL(window.location.href);
        return url.searchParams.get("q");
      }
    },
    {
      id: "bilibili",
      name: "哔哩哔哩",
      url: (w) => `http://search.bilibili.com/all?keyword=${w}`,
      regUrl: /search.bilibili.com/i,
      getSearchWord: () => {
        const url = new URL(window.location.href);
        return url.searchParams.get("keyword");
      }
    },
    {
      id: "quora",
      name: "Quora",
      url: (w) => `https://www.quora.com/search?q=${w}`,
      regUrl: /(?:www\.)?quora\.com\/search/i,
      getSearchWord: () => {
        const url = new URL(window.location.href);
        return url.searchParams.get("q");
      }
    },
    {
      id: "reddit",
      name: "Reddit",
      url: (w) => `https://www.reddit.com/search/?q=${w}`,
      regUrl: /(?:www\.)?reddit\.com\/search/i,
      getSearchWord: () => {
        const url = new URL(window.location.href);
        return url.searchParams.get("q");
      }
    }
  ];
  customElements.define(
    "engine-switch",
    class extends HTMLElement {
      connectedCallback() {
        const shadow = this.attachShadow({ mode: "open" });
        const twStyle = document.createElement("style");
        twStyle.textContent = twText;
        shadow.appendChild(twStyle);
        function createIndexPanel(shadow2) {
          const indexPanel2 = shadow2.appendChild(document.createElement("div"));
          indexPanel2.setAttribute("id", "ivan_search-engine-switch");
          indexPanel2.className = "fixed -left-16 top-1/3 -translate-y-1/2 rounded shadow-lg flex flex-col transition-all bg-sky-100/50 backdrop-blur text-sky-700 dark:bg-sky-800/10 dark:text-sky-500";
          indexPanel2.style.zIndex = "999999";
          setTimeout(() => {
            indexPanel2.classList.remove("-left-16");
            indexPanel2.classList.add("left-4");
          });
          const ol = indexPanel2.appendChild(document.createElement("ol"));
          ol.className = "divide-dotted divide-y divide-sky-300";
          for (let i = 0; i < searchEngines.length; i++) {
            const engine = searchEngines[i];
            {
              const li = ol.appendChild(document.createElement("li"));
              li.className = "hover:bg-sky-100 dark:hover:bg-sky-800/20 transition";
              const a = li.appendChild(document.createElement("a"));
              a.className = `block px-4 py-2 switch-search-engine ${engine.id} block text-inherit no-underline`;
              a.dataset.engineId = engine.id;
              a.href = "javascript::void(0);";
              a.text = engine.name;
            }
          }
          const foldBtn = indexPanel2.appendChild(
            document.createElement("button")
          );
          foldBtn.className = "absolute -right-3 top-1/2 -translate-y-1/2 h-6 w-6 rounded-full shadow-lg bg-sky-700/50 backdrop-blur text-sky-100 flex items-center justify-center text-xl";
          const foldBtnIcon2 = foldBtn.appendChild(document.createElement("span"));
          foldBtnIcon2.className = " pr-0.5 transition";
          foldBtnIcon2.innerHTML = `<svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16.2426 6.34317L14.8284 4.92896L7.75739 12L14.8285 19.0711L16.2427 17.6569L10.5858 12L16.2426 6.34317Z" fill="currentColor"></path></svg>`;
          foldBtn.onclick = () => {
            console.log("click");
            const folded = foldBtnIcon2.classList.contains("rotate-180");
            if (folded) {
              unfoldPanel();
            } else {
              foldPanel();
            }
          };
          return {
            indexPanel: indexPanel2,
            foldBtnIcon: foldBtnIcon2,
            foldBtn
          };
        }
        const { indexPanel, foldBtnIcon } = createIndexPanel(shadow);
        function unfoldPanel() {
          indexPanel.classList.add("left-4");
          foldBtnIcon.classList.remove("rotate-180");
          indexPanel.classList.remove("opacity-50");
          indexPanel.classList.remove("hover:opacity-100");
          indexPanel.style.left = "";
        }
        function foldPanel() {
          indexPanel.classList.remove("left-4");
          indexPanel.classList.add("opacity-50");
          indexPanel.classList.add("hover:opacity-100");
          foldBtnIcon.classList.add("rotate-180");
          const rightBoardPosX = `-${indexPanel.offsetLeft + indexPanel.offsetWidth - 4}px`;
          indexPanel.style.left = rightBoardPosX;
        }
        function registerJump(shadow2) {
          const linkElems = shadow2.querySelectorAll(
            ".switch-search-engine"
          );
          for (const elem of linkElems) {
            elem.addEventListener("click", () => {
              const currUrl = new URL(window.location.href);
              const currSearchEngine = searchEngines.find(
                (it) => {
                  var _a;
                  return (_a = it.regUrl) == null ? void 0 : _a.test(currUrl.toString());
                }
              );
              if (!currSearchEngine) {
                _GM_log(
                  `The current page does not match the preset search engine. url: ${currUrl}`
                );
                return;
              }
              const words = currSearchEngine.getSearchWord();
              _GM_log(`match words: "${words}", url: ${currUrl}`);
              const engineId = elem.dataset.engineId;
              const targetEngine = searchEngines.find(
                (it) => it.id === engineId
              );
              if (words == null) {
                const url = new URL(targetEngine.url(""));
                url.search = "";
                url.hash = "";
                url.pathname = "";
                elem.setAttribute("href", url.toString());
              } else {
                elem.setAttribute("href", targetEngine.url(words));
              }
            });
          }
        }
        registerJump(shadow);
        function autoHidePanel() {
          const currUrl = new URL(window.location.href);
          const currSearchEngine = searchEngines.find(
            (it) => {
              var _a;
              return (_a = it.regUrl) == null ? void 0 : _a.test(currUrl.toString());
            }
          );
          const keywords = currSearchEngine == null ? void 0 : currSearchEngine.getSearchWord();
          if (keywords == null) {
            foldPanel();
          } else {
            unfoldPanel();
          }
        }
        setTimeout(() => {
          autoHidePanel();
        });
      }
    }
  );
  document.body.appendChild(document.createElement("engine-switch"));
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === "childList") {
        if (!document.getElementsByTagName("engine-switch").length) {
          document.body.appendChild(document.createElement("engine-switch"));
          break;
        }
      }
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });

})();