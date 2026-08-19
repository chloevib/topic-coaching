# topic-coaching · 每周「设计美化 + SEO」维护 Plan

> 站点：coaching.rooquiz.com（Next.js 15 纯静态导出）
> 技术栈：**Tailwind CSS v4 + DaisyUI v5**，主题 `emerald`（亮）/ `dim`（跟随系统暗色）。
>
> **核心目标（按优先级）**：
> 1. **美化设计**——每周让站点更好看一点：视觉层级、间距节奏、微交互、暗色打磨、移动端观感。这是本任务的主线。
> 2. **SEO 重点**——设计不能以牺牲搜索表现为代价，且要主动改善它。覆盖两块：
>    - **前端技术 SEO**：标题层级、语义标签、alt、内链结构、结构化数据、metadata/canonical、sitemap/robots/llms.txt、Core Web Vitals（LCP/CLS）。**这块本任务直接改。**
>    - **内容 SEO / GEO**：跨页面审计（重复 title、关键词自相残杀、孤岛页、薄页面、GEO 字段覆盖率），**只诊断出清单，交给每日任务落地文案**。
> 3. **样式 bug 清零**——响应式、对比度、焦点态、死代码等回归问题不过夜。
>
> 执行频率：**每周一次**（定时任务 `topic-coaching-weekly-design-seo`，也可人工跑）。

---

## 与每日任务的分工（重要，别越界）

| | 每日任务 `DAILY_MAINTENANCE.md` | 本任务（每周） |
|---|---|---|
| 文件领地 | `config/site.ts`、`config/categories/*.ts` 的**内容字段** | `src/**`（组件、页面、globals.css、layout、lib/seo.ts、sitemap/robots/llms.txt/opengraph-image） |
| 内容 SEO/GEO | **写文案、补 quiz、转正 draft** | **只审计出清单 → 交办**，不改文案字段 |
| 技术 SEO | 不管 | **归本任务**：schema、metadata、内链模块、标题层级、alt、CWV |
| 设计 / 样式 | 不管 | **归本任务** |

> 交接方式：收尾时用几条一行式待办列出（哪个文件、补哪个字段、目标关键词），让每日任务能直接执行。**不要**直接去改 `config/categories/*.ts` 的文案——工作区可能有每日任务未提交的改动，会打架。

---

## 一分钟背景

- 纯静态导出：**改样式/结构必须重新 build + 部署才生效**，但**不在本地 build**——直接 commit + push，由 Vercel 自动构建部署。
- 主要载体：
  - `src/app/globals.css`：全局 CSS（主题声明、排版、焦点样式、滚动行为、reduced-motion）。
  - `src/app/layout.tsx`：`<html lang>`、body 骨架、全站 JSON-LD 注入、页头页脚挂载。
  - `src/components/SiteChrome.tsx`（页头/页脚）、`MobileNav.tsx`（移动端菜单）、`QuizCard.tsx`、`CategoryGrid.tsx`、`CtaCreateYourOwn.tsx`、`QuizEmbed.tsx`。
  - `src/app/page.tsx`、`src/app/c/[category]/page.tsx`、`src/app/q/[slug]/page.tsx`：三类页面骨架。
  - `src/lib/seo.ts`（metadata + JSON-LD 构造）、`src/app/sitemap.ts`、`robots.ts`、`llms.txt/route.ts`、`opengraph-image.tsx`。
- DaisyUI 语义色：`bg-base-100/200/300`、`text-base-content`、`text-primary`、`bg-primary` + `text-primary-content`；**优先语义色，别写死 hex**。
- 站点规模参考：7 个 Hub 顶层分类 + 大量 niche 子分类（多数仍是 draft 空壳）；页头只放「Categories」一个入口，全部 Hub/niche 收在它的全宽大面板里（md 起显示，窄屏走汉堡菜单）。

---

## 每周 Checklist（按顺序执行）

### 0. 起服务（可选但推荐）

能起就起，实际渲染比读代码可靠得多：

```bash
pnpm dev    # 起在 3000；起不来就退回静态审查 + 直接看线上 coaching.rooquiz.com
```

用浏览器在 **375 / 768 / 1024 / 1440** 四个宽度各看一遍首页 / 分类页 / 测评页，亮暗两套主题各一遍。

### 1. 美化设计（主线，每周必做 1–3 项）

每周挑 **1–3 个能明显提升质感的点**落地，不求多但求每次都看得出变化：

- **视觉层级**：hero、区块标题、卡片、CTA band 的权重是否分明；`text-2xl/3xl/4xl` + `font-bold` + `tracking-tight` 是否成体系。
- **间距节奏**：区块 `py-16`、卡片 `p-5/6`、标题 `mb-*` 是否统一；上下文之间是否忽大忽小。
- **圆角 / 阴影层级**：`rounded-lg / xl / 2xl` 与 `shadow-sm / md / lg` 是否各司其职、没有随手乱用。
- **微交互**：hover 抬升、箭头位移、下拉展开、按钮反馈——一致且克制，`transition duration-200` 左右。
- **暗色专项**：`dim` 下淡色文字（`/70`、`/80`）、`bg-primary/5` 一类极淡底色是否还看得见。
- **空状态 / 占位**：无 quiz 的分类、无封面的卡片，观感要体面。
- **移动端观感**：汉堡菜单、卡片单列、hero 字号、可点区域 ≥44px。

### 2. 样式 bug 排查

逐条过一遍，能修的直接修，修不了的记一句：

- **响应式**：`sm/md/lg` 断点布局；**页头一行是否仍是「品牌 · Categories/All quizzes · CTA」三段式不折行**；Categories 大面板在 md（3 列）/xl（4 列）下的高度是否吃掉 `max-h-[75vh]` 之外的屏幕。
- **sticky 头部锚点偏移**：`html { scroll-padding-top }` 是否覆盖头部实际高度。
- **对比度 / 暗色**：`emerald` 与 `dim` 下文字/背景对比达标；`bg-primary` 上的文字用 `text-primary-content`。
- **交互态**：链接/按钮都要有 hover 与**键盘 focus-visible**；下拉菜单键盘可达；移动端菜单支持 **Esc 关闭 / 点击外部关闭**。
- **图片 / 媒体**：`aspect-[16/9] + object-cover` 稳定；QuizEmbed iframe 自适应高度不跳动。
- **无障碍**：`prefers-reduced-motion` 关动画；装饰性图标 `aria-hidden`；导航/面包屑有 `aria-label`；skip-to-content 链接。
- **死代码**：globals.css 里定义但没人用的类（`grep -rn "<类名>" src config` 确认）；重复 className 组合可抽组件。

### 3. 前端技术 SEO 体检（本任务直接改）

- **标题层级**：每页**有且仅有一个 `<h1>`**；`h2/h3` 不跳级、不拿来当纯样式用。
- **语义标签**：`main / nav / section / article / footer` 用对；面包屑 `<nav aria-label="Breadcrumb">`。
- **图片 alt**：`QuizCard` 封面 alt 是否描述性（不是空串、不是文件名）；装饰图 `alt=""` + `aria-hidden`。
- **内链结构**：Hub ↔ niche ↔ quiz 三层互链是否闭环；有没有**孤岛页**（没有任何站内页面指向它）；相关推荐、面包屑、页脚链接覆盖是否合理。
- **结构化数据**（`src/lib/seo.ts` + 各页 `JsonLd`）：Organization / WebSite / BreadcrumbList / ItemList / FAQPage / Quiz 是否都注入且字段完整、无空值；改完用 Google Rich Results Test 心算校验一遍字段合法性。
- **metadata**：`title` 模板、`description` 长度（~150–160 字符）、canonical、OG/Twitter 卡片、`opengraph-image` 是否每类页面都生成。
- **产物文件**：`sitemap.ts` 覆盖所有 live 页面且不含 draft/404；`robots.ts` 没误伤；`llms.txt` / `llms-full.txt` 内容新鲜。
- **Core Web Vitals（前端可控部分）**：
  - **LCP**：首屏 hero 与首屏卡片封面**不要 `loading="lazy"`**（首页前 3 张应 eager + `fetchpriority="high"`）。
  - **CLS**：图片/iframe 有固定 aspect 或 minHeight 占位；字体切换不跳动。
  - 懒加载、`decoding="async"` 用在首屏以下的图片。

### 4. 内容 SEO / GEO 审计（只诊断，交办每日任务）

跨页面扫一遍，产出可执行清单，**不改 `config/categories/*.ts` 的文案字段**：

- **重复 / 缺失 title、description**：`grep` 出所有分类与 quiz 的 `title`/`description`，找重复和空缺。
- **关键词自相残杀**：多个页面盯同一个词（例如多个 niche 都主打 "life coach quiz"）→ 建议差异化。
- **薄页面**：live 分类缺 `intro[]`/`faq[]`，或只有 1 个 quiz；live quiz 缺 `overview / whoFor / whatYouLearn / sampleQuestions / howItWorks / faq`。
- **GEO 字段覆盖率**：统计一个百分比，逐周看趋势。
- **孤岛与死链**：指向 draft 分类的链接、已下线 token。

产出：几条一行式待办交给每日任务——`<文件> | <缺什么> | <目标关键词>`。控制在最要紧的 3–5 条，不写成报告。

### 5. 校验并提交推送

**不在本地 build。**

```bash
pnpm typecheck    # 改 .tsx/.ts 时跑；纯 CSS 改动可跳过
```

⚠️ **只提交本任务动到的文件，绝不 `git add -A`**——工作区可能有每日任务遗留的 `config/` 内容改动，别误提交。用「无锁提交」helper，把文件逐个精确列在参数里：

```bash
git_push_lockfree "style: <本周改动摘要>" \
  src/app/globals.css src/components/QuizCard.tsx    # 只列你实际改过的
```

commit 前缀约定：纯视觉 `style:`，技术 SEO `seo:`，两者都有就按主要改动选，摘要里写清楚。

**`git_push_lockfree`——沙盒无人值守提交的标准姿势**。沙盒把用户文件夹以 FUSE 挂载进来，**禁用 unlink（删除）但允许 rename**，常规 `git commit` 一旦被中途打断就会留下删不掉的 `*.lock`，下轮直接卡死。这个 helper 全程不产生会阻塞的锁：索引放原生 `/tmp`、提交走 `commit-tree`、ref 用 rename 更新，开头把历史残留锁改名挪走。**在仓库根目录**定义并调用（`$@` 原样传给 `git add`，所以这里给的是精确文件路径，天然满足「不 `-A`」的要求）：

```bash
git_push_lockfree() {
  local msg="$1"; shift                 # 其余参数原样传给 git add：本任务传精确文件路径
  local gd; gd="$(git rev-parse --git-dir)"
  # 1) 清扫历史残留 *.lock（rename 挪走，不依赖 unlink）
  find "$gd" -name '*.lock' -type f -exec sh -c 'mv -f "$1" "$1.stale" 2>/dev/null' _ {} \;
  # 2) 索引放原生 fs（其锁在 /tmp 上可正常删除，不会残留）
  export GIT_INDEX_FILE="/tmp/gitidx.$$"
  git read-tree HEAD || return 1
  git add "$@"       || return 1
  # 3) 生成对象 + 用 rename 更新 ref（零阻塞锁）
  local tree head commit
  tree=$(git write-tree)   || return 1
  head=$(git rev-parse HEAD)
  commit=$(git commit-tree "$tree" -p "$head" -m "$msg") || return 1
  printf '%s\n' "$commit" > "$gd/refs/heads/.main.new"
  mv -f "$gd/refs/heads/.main.new" "$gd/refs/heads/main" || return 1
  # 4) 刷新默认索引 → 保持 git status 干净
  cp -f "$GIT_INDEX_FILE" "$gd/index.new" && mv -f "$gd/index.new" "$gd/index"
  rm -f "$GIT_INDEX_FILE"; unset GIT_INDEX_FILE
  # 5) 用 deploy key 推送，触发 Vercel
  GIT_SSH_COMMAND="ssh -i .secrets/deploy_key -o IdentitiesOnly=yes -o UserKnownHostsFile=.secrets/known_hosts -o StrictHostKeyChecking=yes" git push origin main
}
```

> push 到 main 即触发 Vercel 自动构建部署。若报 `Permission denied (publickey)`，说明 deploy key 未在仓库 Settings → Deploy keys 授权（需勾 Allow write access）。
>
> **关于锁文件（helper 已自动处理）**：沙盒 FUSE 禁 unlink，`rm .git/*.lock` 会报 `Operation not permitted`。helper 用 rename 把残留锁挪成 `*.stale`（git 忽略、无害），等价于删除。

---

## 改动权限边界

- **自动可做（低风险，直接改 + push）**：
  - 设计：间距/圆角/阴影统一、排版层级微调、hover/focus 过渡、暗色打磨、空状态美化、className 归一、死代码清理。
  - 样式 bug：响应式断点修正、对比度修正、focus-visible 与无障碍改进（含 skip link、`aria-label`、Esc 关闭菜单）。
  - 技术 SEO：标题层级修正、语义标签替换、alt 补写、结构化数据字段补全、metadata/canonical 修正、sitemap/robots/llms.txt 修正、LCP/CLS 相关的 loading/priority/占位调整、内链模块补齐。
- **需人工确认再做（只给方案 + 影响面，列到「下一步」）**：
  - 改配色 / 字体 / 主题；重做 hero 或页面结构；导航信息架构重排（如 Hub 分组方式）；引入新依赖；任何影响面较大的重设计。
  - 影响 URL 的改动（改 slug、加/删路由、重定向）——会动索引，必须人工拍板。
- **一律不碰**：quiz 数据、`config/categories/*` 与 `config/site.ts` 的**内容文案字段**（每日任务的地盘）。

---

## 每周产出（**不写报告**）

**本任务不产出报告文档，也不往 `docs/` 写任何报告文件。** 干完活直接收尾，只留一段几行的小结：

- 已 push 的 commit hash + 一句话摘要（无改动就写「无改动」）
- 需要人工拍板的事项（有才写，没有就不写）
- 内容 SEO/GEO 审计发现的缺口，压成几条一行式待办交给每日任务：`<文件> | <缺什么> | <目标关键词>`

不用小标题、不用模板、不复述过程。改动本身在 git 里，说清楚做了什么就够了。

---

## 常用命令速查

```bash
# 样式与 SEO 载体
ls src/components/ src/app && cat src/app/globals.css
cat src/lib/seo.ts src/app/sitemap.ts src/app/robots.ts

# 标题层级自检（每页应只有一个 h1）
grep -rn "<h1" src/app

# 图片 alt / 懒加载自检
grep -rn "loading=\|alt=" src/components

# 死类引用排查
grep -rn "<类名>" src config

# 内容审计（只读，别改）
grep -rho "publicToken: '[^']*'" config/categories/ | sort -u | wc -l
grep -rl "draft: true" config/categories/ | wc -l
grep -rn "title:" config/categories/*.ts | sort -t"'" -k2 | uniq -f1 -d   # 找重复 title

# 类型自检 → 精确提交推送（helper 定义见「5. 校验并提交推送」）
pnpm typecheck
git_push_lockfree "style: <摘要>" src/app/globals.css
```
