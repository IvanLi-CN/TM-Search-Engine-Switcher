import { GM_log } from "$";
import twText from "./index.css?inline";

("use strict");

const searchEngines = [
  {
    id: "baidu",
    name: "百度搜索",
    url: "https://www.baidu.com/s?wd=",
    regUrl: /www.baidu.com/i,
    getSearchWord: () => {
      const url = new URL(window.location.href);
      return url.searchParams.get("wd");
    },
  },
  {
    id: "google",
    name: "Google",
    url: "https://www.google.com/search?q=",
    regUrl: /www.google.com/i,
    getSearchWord: () => {
      const url = new URL(window.location.href);
      return url.searchParams.get("q");
    },
  },
  {
    id: "bing",
    name: "Bing",
    url: "https://www.bing.com/search?q=",
    regUrl: /www.bing.com/i,
    getSearchWord: () => {
      const url = new URL(window.location.href);
      return url.searchParams.get("q");
    },
  },
  {
    id: "bing-cn",
    name: "必应",
    url: "https://cn.bing.com/search?q=",
    regUrl: /cn.bing.com/i,
    getSearchWord: () => {
      const url = new URL(window.location.href);
      return url.searchParams.get("q");
    },
  },
  {
    id: "sogou.com",
    name: "搜狗",
    url: "https://www.sogou.com/web?query=",
    regUrl: /www.sogou.com/i,
    getSearchWord: () => {
      const url = new URL(window.location.href);
      return url.searchParams.get("query");
    },
  },
  {
    id: "duckduckgo",
    name: "DuckDuckGo",
    url: "https://duckduckgo.com/?q=",
    regUrl: /duckduckgo.com/i,
    getSearchWord: () => {
      const url = new URL(window.location.href);
      return url.searchParams.get("q");
    },
  },
  {
    id: "yandex",
    name: "Yandex",
    url: "https://yandex.com/search/?text=",
    regUrl: /yandex.com/i,
    getSearchWord: () => {
      const url = new URL(window.location.href);
      return url.searchParams.get("text");
    },
  },
  {
    id: "zhihu",
    name: "知乎",
    url: "https://www.zhihu.com/search?q=",
    regUrl: /www.zhihu.com/i,
    getSearchWord: () => {
      const url = new URL(window.location.href);
      return url.searchParams.get("q");
    },
  },
  {
    id: "bilibili",
    name: "哔哩哔哩",
    url: "http://search.bilibili.com/all?keyword=",
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

      createIndexPanel(shadow);

      registerJump(shadow);
    }
  }
);

const rootElement = document.body.appendChild(
  document.createElement("engine-switch")
);

console.log(rootElement);

// Create Panel
function createIndexPanel(shadow: ShadowRoot) {
  // this = EngineSwitch Custom Element Instance

  // index panel
  const indexPanel = shadow.appendChild(document.createElement("div"));
  indexPanel.setAttribute("id", "ivan_search-engine-switch");
  indexPanel.className =
    "fixed -left-16 top-1/3 -translate-y-1/2 bg-sky-100/50 backdrop-blur text-sky-700 rounded shadow-lg flex flex-col transition-all";
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
      li.className = "px-4 py-2 hover:bg-sky-100 transition cursor-pointer";

      const a = li.appendChild(document.createElement("a"));
      a.className = `switch-search-engine ${engine.id} block text-inherit no-underline`;
      a.dataset.url = engine.url;
      a.href = "javascript::void(0);";
      a.text = engine.name;
    }
  }

  // fold
  const foldBtn = indexPanel.appendChild(document.createElement("button"));
  foldBtn.className =
    "absolute -right-3 top-1/2 -translate-y-1/2 h-6 w-6 rounded-full shadow-lg bg-sky-700/50 backdrop-blur text-sky-100 flex items-center justify-center text-xl";

  const foldBtnIcon = foldBtn.appendChild(document.createElement("span"));
  foldBtnIcon.className = " pr-0.5 transition";
  foldBtnIcon.innerHTML = `<svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16.2426 6.34317L14.8284 4.92896L7.75739 12L14.8285 19.0711L16.2427 17.6569L10.5858 12L16.2426 6.34317Z" fill="currentColor"></path></svg>`;

  foldBtn.onclick = function () {
    const folded = foldBtnIcon.classList.contains("rotate-180");
    if (folded) {
      indexPanel.classList.add("left-4");
      foldBtnIcon.classList.remove("rotate-180");
      indexPanel.classList.remove("opacity-50");
      indexPanel.classList.remove("hover:opacity-100");
      indexPanel.style.left = "";
    } else {
      indexPanel.classList.remove("left-4");
      indexPanel.classList.add("opacity-50");
      indexPanel.classList.add("hover:opacity-100");
      foldBtnIcon.classList.add("rotate-180");

      const rightBoardPosX = `-${
        indexPanel.offsetLeft + indexPanel.offsetWidth - 4
      }px`;
      indexPanel.style.left = rightBoardPosX;
    }
  };
}

// Register Event Handlers for Jump
function registerJump(shadow: ShadowRoot) {
  const linkElems = shadow.querySelectorAll<HTMLElement>(
    ".switch-search-engine"
  );
  for (const elem of linkElems) {
    elem.addEventListener("click", function () {
      const currUrl = new URL(window.location.href);
      const currSearchEngine = searchEngines.find((it) =>
        it.regUrl?.test(currUrl.toString())
      );

      if (!currSearchEngine) {
        GM_log(
          `The current page does not match the preset search engine. url: ${currUrl}`
        );
        return;
      }

      const words = currSearchEngine.getSearchWord();
      GM_log(`match words: "${words}", url: ${currUrl}`);

      const urlPrefix = elem.dataset.url;
      elem.setAttribute("href", `${urlPrefix}${words}`);
    });
  }
}
