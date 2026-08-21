/*
 * 外观 / 二次元素材配置。
 * 这里放的都是「图片、壁纸、立绘」相关，改这一处就能换掉全站的动漫元素。
 *
 * ⚠️ 关于默认图片：下面壁纸/头像默认用了公共的「随机二次元图片 API」，
 *    所以你不用准备素材也能立刻看到效果。但随机图内容不完全可控，
 *    强烈建议换成你自己喜欢的图：
 *      1) 把图片放进 public/ 文件夹（例如 public/wallpaper.webp）
 *      2) 把下面对应字段改成 "/wallpaper.webp" 这样的本地路径
 */

export const theme = {
  /** 全屏背景壁纸（横屏）。本地文件写 "/xxx.webp"，或填图片直链。 */
  wallpaper: "https://t.alcy.cc/pc",
  /** 手机竖屏壁纸，留空则和上面共用。 */
  wallpaperMobile: "https://t.alcy.cc/mp",

  /** 浅色模式的背景遮罩浓度 0~1：越大文字越清晰、壁纸越淡（小清新建议 0.5~0.7）。 */
  overlay: 0.6,
  /*
   * 深色模式单独一档。深色下正文是浅色字，抽到一张亮壁纸时最容易糊掉，
   * 所以默认压得比浅色更狠。注意：遮罩再浓也保证不了任意壁纸下的对比度
   * （纯白区域算下来最多 3:1 左右），所以正文另外走 .prose 的玻璃底 +
   * 标题的光晕描边，这里只负责整体压暗。
   */
  overlayDark: 0.78,
  /** 壁纸柔化模糊(px)：让背景更梦幻、内容更聚焦。0 为不模糊。 */
  wallpaperBlur: 2,

  /**
   * 首页 hero 的角色立绘（推荐透明背景 PNG，竖构图）。
   * 留空则退回到吉祥物 SVG。放自己的图：public/character.png → "/character.png"
   */
  heroCharacter: "https://t.alcy.cc/mp",

  /**
   * 头像（导航栏、关于页、播放器）。留空则用吉祥物 SVG。
   * 放自己的：public/avatar.jpg → "/avatar.jpg"
   */
  avatar: "https://t.alcy.cc/mp",

  /*
   * 社交分享卡片图（OG image），建议 1200×630。
   * 放 public/og.png → 填 "/og.png"。留空则不输出 og:image，
   * 同时 twitter:card 自动降级成 summary（避免出现空白大卡）。
   */
  ogImage: "",

  /** 首页是否显示「一言」随机句子（hitokoto API）。 */
  hitokoto: true,

  /** 氛围粒子：浅色模式飘落樱花瓣，深色模式换成萤火虫（想更清爽可关掉）。 */
  petals: true,

  /** 右下角 Live2D 看板娘（会从 CDN 加载，手机端自动不显示）。 */
  live2d: false,
} as const;
