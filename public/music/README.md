# 音乐文件放这里

把 mp3 拷进这个文件夹，然后在 `src/data/music.ts` 的 `tracks` 里按
`src: "/music/文件名.mp3"` 引用（路径以 `/music/` 开头，不要写 `public`）。

封面同理：`cover: "/music/文件名.jpg"`。留空则用渐变唱片占位。

## 几个坑

- **文件名别用中文和空格**，部分 CDN 对 URL 编码处理不一致。用 `morning-breeze.mp3` 这种。
- **单个文件别超过 25MB** —— Cloudflare Pages 的单文件上限。一首 4 分钟的
  128kbps mp3 大约 4MB，正常不会碰到。
- **音频会进 Git**。几首歌没问题，攒到几十首要考虑 Git LFS，
  或者干脆改用外部直链（`src` 直接写 URL 也支持）。
- **只放你有权使用的音频**。个人站公开播放有版权的音乐是有风险的。
