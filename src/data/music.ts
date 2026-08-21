/*
 * 音乐播放器歌单。
 *
 * 换成你自己的歌：
 *   1) 把 mp3 拷进 public/music/（见那里的 README，有文件名和体积的坑）
 *   2) src 写 "/music/文件名.mp3" —— 路径以 /music/ 开头，不要写 public
 *   3) cover 同理写本地图；留空则用樱花→薰衣草的渐变唱片占位
 *
 * src 也支持直接填外部 URL，但要是你自己控制得住的地址。
 *
 * tracks 为空数组时整个播放器不渲染，不会在页面上留一枚点不动的唱片。
 */

export interface Track {
  title: string;
  artist: string;
  src: string;
  cover?: string;
}

export const music = {
  /** 进站是否自动播放（多数浏览器会拦截，通常需用户先点一下）。 */
  autoplay: false,

  tracks: [
    /*
     * ⬇️ 下面三首是 SoundHelix 的公开演示音频，只是让你先听个响。
     *    换成自己的歌时把 src 改成 "/music/xxx.mp3" 即可，格式参考：
     *
     *    {
     *      title: "晨风拂过",
     *      artist: "某某",
     *      src: "/music/morning-breeze.mp3",
     *      cover: "/music/morning-breeze.jpg",
     *    },
     */
    {
      title: "晨风拂过",
      artist: "示例音频",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      cover: "https://t.alcy.cc/pc",
    },
    {
      title: "午后的猫",
      artist: "示例音频",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
      cover: "https://t.alcy.cc/pc",
    },
    {
      title: "星空絮语",
      artist: "示例音频",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
      cover: "https://t.alcy.cc/pc",
    },
  ] as Track[],
} as const;
