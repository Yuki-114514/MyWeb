/*
 * 音乐播放器歌单。
 *
 * 音频不进仓库（.gitignore 排掉了 public/music/*.mp3），但要进构建产物。
 * 因此本站的音频只能靠本地 `wrangler pages deploy` 发布 ——
 * 走 git 推送触发的自动构建会拿不到 mp3。详见 public/music/README.md。
 *
 * cover 是从 mp3 内嵌 ID3 封面里抽出来的，缩到 256×256（唱片只显示 48px）。
 * 换歌时用 ffmpeg 抽一张同名 jpg 即可，命令见 public/music/README.md。
 * 留空则掉回樱花→薰衣草的渐变唱片 + ♪ 占位。
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
     * 注意：这首是 Yuusuke 的钢琴独奏版（专辑 Honesty 〜Piano Solo〜），
     * 不是截图里 glassmoon / RainDrops 的那一版 —— 同名不同曲。
     * 想换回去就替掉 public/music/ame-agari-no-sora.mp3 再把 artist 改回来。
     */
    {
      title: "雨上がりの空",
      artist: "Yuusuke",
      src: "/music/ame-agari-no-sora.mp3",
      cover: "/music/ame-agari-no-sora.jpg",
    },
    {
      title: "Travelers' encore",
      artist: "Andrew Prahlow",
      src: "/music/travelers-encore.mp3",
      cover: "/music/travelers-encore.jpg",
    },
    {
      title: "茉莉の夢",
      artist: "RADWIMPS",
      src: "/music/jasmine-dream.mp3",
      cover: "/music/jasmine-dream.jpg",
    },
  ] as Track[],
} as const;
