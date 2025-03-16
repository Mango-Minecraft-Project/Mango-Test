import { enusNavbar, zhtwNavbar, zhcnNavbar } from "./navbar/index.js";
import { enusSidebar, zhtwSidebar, zhcnSidebar } from "./sidebar/index.js";

import { zhTWLocale } from "./patch/i18n/zh_tw.js";

export default {
  "/": {
    navbar: enusNavbar,
    sidebar: enusSidebar,

    author: "MangoJellyPudding",
  },
  "/zh-tw/": {
    navbar: zhtwNavbar,
    sidebar: zhtwSidebar,

    author: "芒果凍布丁",

    ...zhTWLocale,
    navbarLocales: {
      langName: "正體中文",
    },
  },
  "/zh-cn/": {
    navbar: zhcnNavbar,
    sidebar: zhcnSidebar,

    author: "芒果凍布丁",
  },
};
