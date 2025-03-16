import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";

import theme from "./theme.js";

const Dir = ($path: string) => path.resolve(getDirname(import.meta.url), $path);

export default defineUserConfig({
  base: "/",
  port: 8081,

  locales: {
    "/": {
      lang: "en-US",
    },
    "/zh-tw/": {
      lang: "zh-TW",
    },
    "/zh-cn/": {
      lang: "zh-CN",
    },
  },

  theme,

  clientConfigFile: Dir("./client.ts"),

  alias: {
    "@components": Dir("./components"),
    "@private-components": Dir("./components/private"),
    "@theme-hope": "vuepress-theme-hope",
  },
});
