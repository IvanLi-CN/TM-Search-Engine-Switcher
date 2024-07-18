import { GM_log } from "$";
import twText from "./index.css?inline";

type SearchEngine = {
  id: string;
  name: string;
  url: (keywords: string) => string;
  regUrl: RegExp;
  getSearchWord: () => string | null;
};

const searchEngines: SearchEngine[] = [
  {
    id: "v2ex",
    name: "V2EX",
    url: (w) => `https://www.google.com/search?q=site:v2ex.com/t%20${w}`,
    regUrl: /https:\/\/www.google.com\/search\?q=site:v2ex\.com\/t%20/i,
    getSearchWord: () => {
      const url = new URL(window.location.href);
      const q = url.searchParams.get("q");
      console.log(q, q?.replace("site:v2ex.com/t ", ""));
      return q?.replace("site:v2ex.com/t ", "") ?? null;
    },
  },
  {
    id: "baidu",
    name: "百度搜索",
    url: (w) => `https://www.baidu.com/s?wd=${w}`,
    regUrl: /www.baidu.com/i,
    getSearchWord: () => {
      const url = new URL(window.location.href);
      return url.searchParams.get("wd");
    },
  },
  {
    id: "google",
    name: "Google",
    url: (w) => `https://www.google.com/search?q=${w}`,
    regUrl: /www.google.com/i,
    getSearchWord: () => {
      const url = new URL(window.location.href);
      return url.searchParams.get("q");
    },
  },
  {
    id: "bing",
    name: "Bing",
    url: (w) => `https://www.bing.com/search?q=${w}`,
    regUrl: /www.bing.com/i,
    getSearchWord: () => {
      const url = new URL(window.location.href);
      return url.searchParams.get("q");
    },
  },
  {
    id: "bing-cn",
    name: "必应",
    url: (w) => `https://cn.bing.com/search?q=${w}`,
    regUrl: /cn.bing.com/i,
    getSearchWord: () => {
      const url = new URL(window.location.href);
      return url.searchParams.get("q");
    },
  },
  {
    id: "duckduckgo",
    name: "DuckDuckGo",
    url: (w) => `https://duckduckgo.com/?q=${w}`,
    regUrl: /duckduckgo.com/i,
    getSearchWord: () => {
      const url = new URL(window.location.href);
      return url.searchParams.get("q");
    },
  },
  {
    id: "yandex",
    name: "Yandex",
    url: (w) => `https://yandex.com/search/?text=${w}`,
    regUrl: /yandex.com/i,
    getSearchWord: () => {
      const url = new URL(window.location.href);
      return url.searchParams.get("text");
    },
  },
  {
    id: "sogou",
    name: "搜狗",
    url: (w) => `https://www.sogou.com/web?query=${w}`,
    regUrl: /www.sogou.com/i,
    getSearchWord: () => {
      const url = new URL(window.location.href);
      return url.searchParams.get("query");
    },
  },
  {
    id: "github",
    name: "GitHub",
    url: (w) =>
      `https://github.com/search?q=${w}&ref=opensearch&type=repositories`,
    regUrl: /github.com/i,
    getSearchWord: () => {
      const url = new URL(window.location.href);
      return url.searchParams.get("q");
    },
  },
  {
    id: "taobao",
    name: "淘宝",
    url: (w) => `https://s.taobao.com/search?q=${w}`,
    regUrl: /s.taobao.com/i,
    getSearchWord: () => {
      const url = new URL(window.location.href);
      return url.searchParams.get("q");
    },
  },
  {
    id: "npm",
    name: "NPM",
    url: (w) => `https://www.npmjs.com/search?q=${w}`,
    regUrl: /www.npmjs.com/i,
    getSearchWord: () => {
      const url = new URL(window.location.href);
      return url.searchParams.get("q");
    },
  },
  {
    id: "Crate",
    name: "Crate",
    url: (w) => `https://crates.io/search?q=${w}`,
    regUrl: /crates.io/i,
    getSearchWord: () => {
      const url = new URL(window.location.href);
      return url.searchParams.get("q");
    },
  },
  {
    id: "zhihu",
    name: "知乎",
    url: (w) => `https://www.zhihu.com/search?q=${w}`,
    regUrl: /www.zhihu.com/i,
    getSearchWord: () => {
      const url = new URL(window.location.href);
      return url.searchParams.get("q");
    },
  },
  {
    id: "bilibili",
    name: "哔哩哔哩",
    url: (w) => `http://search.bilibili.com/all?keyword=${w}`,
    regUrl: /search.bilibili.com/i,
    getSearchWord: () => {
      const url = new URL(window.location.href);
      return url.searchParams.get("keyword");
    },
  },
];

customElements.define(
  "engine-switch",
  class extends HTMLElement {
    connectedCallback() {
      const shadow = this.attachShadow({ mode: "open" });
      // Tailwind CSS
      const twStyle = document.createElement("style");
      twStyle.textContent = twText;
      shadow.appendChild(twStyle);

      // Create Panel
      function createIndexPanel(shadow: ShadowRoot) {
        // this = EngineSwitch Custom Element Instance

        // index panel
        const indexPanel = shadow.appendChild(document.createElement("div"));
        indexPanel.setAttribute("id", "ivan_search-engine-switch");
        indexPanel.className =
          "fixed -left-16 top-1/3 -translate-y-1/2 rounded shadow-lg flex flex-col transition-all " +
          "bg-sky-100/50 backdrop-blur text-sky-700 dark:bg-sky-800/10 dark:text-sky-500";
        indexPanel.style.zIndex = "999999";

        setTimeout(() => {
          indexPanel.classList.remove("-left-16");
          indexPanel.classList.add("left-4");
        });

        // engine list
        const ol = indexPanel.appendChild(document.createElement("ol"));
        ol.className = "divide-dotted divide-y divide-sky-300";

        for (let i = 0; i < searchEngines.length; i++) {
          const engine = searchEngines[i];
          if (true) {
            const li = ol.appendChild(document.createElement("li"));
            li.className =
              "hover:bg-sky-100 dark:hover:bg-sky-800/20 transition";

            const a = li.appendChild(document.createElement("a"));
            a.className = `block px-4 py-2 switch-search-engine ${engine.id} block text-inherit no-underline`;
            a.dataset.engineId = engine.id;
            a.href = "javascript::void(0);";
            a.text = engine.name;
          }
        }

        // fold
        const foldBtn = indexPanel.appendChild(
          document.createElement("button"),
        );
        foldBtn.className =
          "absolute -right-3 top-1/2 -translate-y-1/2 h-6 w-6 rounded-full shadow-lg bg-sky-700/50 backdrop-blur text-sky-100 flex items-center justify-center text-xl";

        const foldBtnIcon = foldBtn.appendChild(document.createElement("span"));
        foldBtnIcon.className = " pr-0.5 transition";
        foldBtnIcon.innerHTML = `<svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16.2426 6.34317L14.8284 4.92896L7.75739 12L14.8285 19.0711L16.2427 17.6569L10.5858 12L16.2426 6.34317Z" fill="currentColor"></path></svg>`;

        foldBtn.onclick = () => {
          console.log("click");
          const folded = foldBtnIcon.classList.contains("rotate-180");
          if (folded) {
            unfoldPanel();
          } else {
            foldPanel();
          }
        };

        return {
          indexPanel,
          foldBtnIcon,
          foldBtn,
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

        const rightBoardPosX = `-${
          indexPanel.offsetLeft + indexPanel.offsetWidth - 4
        }px`;
        indexPanel.style.left = rightBoardPosX;
      }

      // Register Event Handlers for Jump
      function registerJump(shadow: ShadowRoot) {
        const linkElems = shadow.querySelectorAll<HTMLElement>(
          ".switch-search-engine",
        );
        for (const elem of linkElems) {
          elem.addEventListener("click", () => {
            const currUrl = new URL(window.location.href);
            const currSearchEngine = searchEngines.find((it) =>
              it.regUrl?.test(currUrl.toString()),
            );

            if (!currSearchEngine) {
              GM_log(
                `The current page does not match the preset search engine. url: ${currUrl}`,
              );
              return;
            }

            const words = currSearchEngine.getSearchWord();
            GM_log(`match words: "${words}", url: ${currUrl}`);

            const engineId = elem.dataset.engineId!;
            const targetEngine = searchEngines.find(
              (it) => it.id === engineId,
            )!;

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

      // Auto Hide When Not in search result page
      function autoHidePanel() {
        const currUrl = new URL(window.location.href);
        const currSearchEngine = searchEngines.find((it) =>
          it.regUrl?.test(currUrl.toString()),
        );

        const keywords = currSearchEngine?.getSearchWord();

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
  },
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
