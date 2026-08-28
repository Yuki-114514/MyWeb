# 音频放这里，但不进仓库

mp3 放在这个目录，`.gitignore` 里排掉了 `public/music/*.mp3` —— 文件留在本地，
不进 git 历史（公开仓库，进去了就删不干净）。

## ⚠️ 这决定了本站只能手动部署

Pages 项目开着 Git 集成。git 构建是从仓库拉代码的，仓库里没有 mp3，
**所以任何一次 push 触发的自动构建都会把音频从线上抹掉**。

音频只能靠本地直传发布：

```sh
pnpm build && rm -f dist/music/README.md && wrangler pages deploy dist --project-name=yuki
```

推代码之后如果发现音乐没了，就是被自动构建覆盖了，重跑上面这条即可。

（中间那条 `rm` 是因为 `public/` 里的东西全都会被原样发布，
这份说明不需要挂在 yuki-2fo.pages.dev/music/README.md 上给人看。）

## 加一首歌

1. 文件名用 ASCII，别用中文和空格：`morning-breeze.mp3`。
2. 拷进这个目录。
3. 在 `src/data/music.ts` 的 `tracks` 里加一条，`src` 写 `/music/morning-breeze.mp3`。
4. 跑一次上面的部署命令。

## 几个坑

- **单个文件别超过 25MB** —— Cloudflare Pages 的单文件上限。一首 4 分钟的
  128kbps mp3 大约 4MB，正常碰不到。
- **整站别超过 20000 个文件** —— Pages 的另一个上限，音频攒多了才需要留意。
- **本地 dist/ 就是线上内容**。直传发的是你本地构建出来的东西，
  不是仓库里的东西。构建前记得代码是最新的。
- **只放你有权使用的音频**。站点是公开的。
