/*
 * 音乐播放器歌单。
 * 换成你自己的歌：
 *   - 本地文件：把 mp3 放进 public/music/，src 写 "/music/歌名.mp3"
 *   - 网络直链：src 直接填 mp3 的 URL
 *   - cover 封面同理（本地或直链），留空会用渐变唱片占位
 * 默认几首是可公开播放的示例音频（SoundHelix），方便你先听个响。
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
