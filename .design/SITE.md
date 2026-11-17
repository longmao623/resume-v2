# SITE.md · 摇滚朋克个人展示站

## 站点信息
- **名称**：龙猫先生 · AGENT DEV
- **风格**：摇滚朋克 / DIY Zine / 粗野主义
- **技术栈**：React + Vite + Tailwind CSS + GSAP
- **页面**：单页滚动（Hero / About / Experience / Projects / Skills / Contact）

## 视觉系统

### 色彩
- bg: #0a0a0a （烟熏黑）
- surface: #141414 （卡片/区块）
- accent-red: #e63946 （血红）
- accent-orange: #f4a261 （锈橙）
- accent-green: #2a9d8f （毒绿）
- text: #f5f5f5 （做旧白）
- muted: #737373 （灰暗）

### 字体
- 英文标题：Oswald, 700
- 英文装饰：Rubik Glitch / Bebas Neue
- 中文正文：Noto Sans SC
- 等宽：Space Mono

### 质感元素
- 全局噪点 overlay
- 扫描线 scanlines
- 撕裂边缘 clip-path
- 胶带贴条 rotated tape strips
- 圆形印章 stamps
- 手写涂鸦箭头/叉号
- 粗黑边框 + 硬阴影

### 动效
- Glitch 文字效果
- 打字机标题
- 滚动视差
- 悬浮抖动
- 频闪/闪烁（谨慎使用）

## 页面结构

### 1. Hero
- 全屏黑底
- 巨大姓名 "龙猫先生" 居中或偏左，带 glitch 效果
- 副标题：AGENT SYSTEMS / MULTI-AGENT ORCHESTRATION
- 底部小字：基于 OpenClaw & Baidu Netdisk 经验
- 一个撕裂的 "ENTER" 或向下箭头

### 2. About
- 黑白反转区块或黑底
- 左侧大标题 "WHO THE HELL" / "我是谁"
- 右侧文案，用高端版 copywriting
- 加一个红色印章 "NO AI-SLOP"

### 3. Experience
- 时间线，但不是精致时间线
- 用海报/传单布局：大字号公司名、日期像演出票根
- 职责点用等宽字体列表

### 4. Projects
- 4 个项目卡片，像演出海报/专辑封面
- 每个卡片有编号、标题、标签、撕裂边缘
- 悬停时 glitch / 变色

### 5. Skills
- 技能像乐队周边贴纸/标签
- 不规则网格，大小不一
- 粗边框，硬阴影

### 6. Contact
- 大字邮箱，像演出海报底部信息
- 黑底 + 红字或白底 + 黑字反转
- CTA："WORK WITH ME" 或 "SEND A SIGNAL"

## 反 AI-slop 检查清单
- [ ] 没有大圆角卡片
- [ ] 没有柔和渐变
- [ ] 没有 emoji 装饰
- [ ] 没有居中三段式作品集
- [ ] 没有默认 Tailwind 阴影
- [ ] 有明确视觉主张和粗糙质感
