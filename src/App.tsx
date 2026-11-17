import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const heroRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance
      gsap.from(titleRef.current, {
        y: 120,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        delay: 0.3,
      })

      gsap.from(subtitleRef.current?.children || [], {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.8,
      })

      // About reveal
      gsap.from('.about-reveal', {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 75%',
        },
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="min-h-screen bg-punk-black text-punk-white font-sans overflow-x-hidden">
      <div className="noise"></div>
      <div className="scanlines"></div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 flex justify-between items-center mix-blend-difference">
        <span className="font-mono text-sm tracking-widest">DENG</span>
        <div className="hidden md:flex gap-8 font-mono text-xs tracking-wider">
          <a href="#about" className="hover:text-punk-red transition-colors">[ABOUT]</a>
          <a href="#experience" className="hover:text-punk-red transition-colors">[WORK]</a>
          <a href="#projects" className="hover:text-punk-red transition-colors">[PROJECTS]</a>
          <a href="#contact" className="hover:text-punk-red transition-colors">[CONTACT]</a>
        </div>
      </nav>

      {/* Hero */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 overflow-hidden"
      >
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-punk-red/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-punk-green/10 rounded-full blur-[100px]"></div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="mb-6">
            <span className="tape text-xs">NO AI-SLOP ZONE</span>
          </div>

          <h1
            ref={titleRef}
            className="font-display text-[18vw] md:text-[14vw] leading-[0.8] font-black tracking-tighter mb-8"
          >
            <span className="punk-title block" data-text="邓博文">邓博文</span>
          </h1>

          <div ref={subtitleRef} className="space-y-2 md:space-y-4">
            <p className="font-mono text-punk-red text-sm md:text-base tracking-[0.2em]">
              AGENT SYSTEMS · MULTI-AGENT ORCHESTRATION · LLM TOOLING
            </p>
            <p className="font-mono text-punk-muted text-xs md:text-sm max-w-2xl leading-relaxed">
              在百度网盘构建办公 Agent，在本地 Agent 上搭建 AI 项目工厂。
              <br />
              工作围绕一个核心：让模型真正调用工具，完成复杂任务。
            </p>
          </div>

          <div className="mt-16 flex items-center gap-6">
            <a
              href="#about"
              className="group inline-flex items-center gap-3 border-2 border-punk-white px-6 py-3 font-mono text-sm tracking-wider hover:bg-punk-white hover:text-punk-black transition-all duration-300"
            >
              进入站点
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <span className="font-mono text-xs text-punk-muted">SCROLL TO EXPLORE</span>
          </div>
        </div>

        <div className="absolute bottom-8 right-6 md:right-12">
          <div className="stamp text-sm">RAW · UNFILTERED · AGENTIC</div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        ref={aboutRef}
        className="relative py-32 md:py-48 px-6 md:px-12 bg-punk-surface border-y-4 border-punk-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="about-reveal font-mono text-punk-red text-sm tracking-[0.3em] mb-4">// ABOUT</p>
              <h2 className="about-reveal font-display text-6xl md:text-8xl font-bold leading-[0.9] tracking-tight mb-8">
                WHO THE<br />
                <span className="text-punk-black bg-punk-white px-2 inline-block transform -rotate-1">HELL</span>
              </h2>
              <div className="about-reveal">
                <span className="stamp">NO BULLSHIT</span>
              </div>
            </div>

            <div className="space-y-8">
              <p className="about-reveal text-xl md:text-2xl leading-relaxed font-light">
                实习于百度网盘 PSIG，参与库库 AI GenFlow 办公 Agent 研发，负责意图理解、任务规划、工具调用链路、记忆系统迭代与效果评测基建。
              </p>
              <p className="about-reveal text-lg text-punk-muted leading-relaxed">
                个人侧在本地 Agent 平台构建 longmao-factory：一个需求路由 + 专业 Skill 调度的交付引擎，覆盖网页搭建、文档生成与比赛设计。同时完成微信私聊自动化、chatterbox-tts 本地部署、语义记忆索引修复等工程实践。
              </p>
              <p className="about-reveal text-lg text-punk-muted leading-relaxed">
                擅长把大模型能力封装成可运行、可验证、可迭代的系统。
              </p>

              <div className="about-reveal grid grid-cols-2 gap-6 pt-8 border-t border-punk-muted/30">
                <div>
                  <p className="font-display text-5xl text-punk-red">3+</p>
                  <p className="font-mono text-xs text-punk-muted mt-2">AGENT 项目交付</p>
                </div>
                <div>
                  <p className="font-display text-5xl text-punk-green">4</p>
                  <p className="font-mono text-xs text-punk-muted mt-2">轮 BATON 迭代</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-32 md:py-48 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <p className="font-mono text-punk-red text-sm tracking-[0.3em] mb-4">// EXPERIENCE</p>
              <h2 className="font-display text-6xl md:text-8xl font-bold leading-[0.9] tracking-tight">
                WORK<br />HISTORY
              </h2>
            </div>
            <div className="tape text-xs">ON THE ROAD</div>
          </div>

          <div className="border-t-4 border-punk-white pt-12">
            <article className="grid md:grid-cols-12 gap-8 pb-12 border-b border-punk-muted/30">
              <div className="md:col-span-4">
                <p className="font-mono text-punk-red text-sm mb-2">2026.06 — 2026.09</p>
                <h3 className="font-display text-3xl md:text-4xl font-bold leading-tight">百度网盘</h3>
                <p className="font-mono text-punk-muted text-sm mt-2">PSIG · Agent 开发实习生</p>
              </div>
              <div className="md:col-span-8 space-y-4">
                <p className="text-lg text-punk-white/90 leading-relaxed">
                  参与库库 AI GenFlow 办公 Agent 研发，面向 Word / PPT / Excel 等多模态办公场景构建智能体协同能力。
                </p>
                <ul className="grid md:grid-cols-2 gap-3 font-mono text-xs text-punk-muted">
                  <li className="flex gap-2"><span className="text-punk-red">▸</span> 意图解析模块开发</li>
                  <li className="flex gap-2"><span className="text-punk-red">▸</span> 任务规划与工具调用链路</li>
                  <li className="flex gap-2"><span className="text-punk-red">▸</span> 会话记忆全局化迭代</li>
                  <li className="flex gap-2"><span className="text-punk-red">▸</span> 埋点 / AB Test / 数据监控</li>
                  <li className="flex gap-2"><span className="text-punk-red">▸</span> Agent 效果评测框架</li>
                  <li className="flex gap-2"><span className="text-punk-red">▸</span> Harness 基建</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-32 md:py-48 px-6 md:px-12 bg-punk-surface border-y-4 border-punk-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <p className="font-mono text-punk-green text-sm tracking-[0.3em] mb-4">// PROJECTS</p>
              <h2 className="font-display text-6xl md:text-8xl font-bold leading-[0.9] tracking-tight">
                SELECTED<br />WORKS
              </h2>
            </div>
            <div className="stamp text-sm">HANDMADE</div>
          </div>

          <div className="space-y-8">
            <article className="project-card group relative bg-punk-black border-2 border-punk-white hard-shadow p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                <div>
                  <span className="font-mono text-punk-red text-xs tracking-widest">01 / LOCAL AGENT</span>
                  <h3 className="font-display text-4xl md:text-5xl font-bold mt-2">AI 项目工厂</h3>
                </div>
                <span className="tape text-xs">longmao-factory</span>
              </div>
              <p className="text-punk-muted leading-relaxed max-w-3xl mb-6">
                需求路由与交付引擎。输入一句话需求，自动分发至网页搭建、文档生成或比赛设计 Skill，输出可构建、可预览、可审计的产物。
              </p>
              <div className="flex flex-wrap gap-2 font-mono text-xs">
                <span className="border border-punk-muted px-2 py-1">React</span>
                <span className="border border-punk-muted px-2 py-1">Tailwind</span>
                <span className="border border-punk-muted px-2 py-1">Vite</span>
                <span className="border border-punk-muted px-2 py-1">DeepSeek</span>
                <span className="border border-punk-muted px-2 py-1">火山引擎</span>
              </div>
            </article>

            <article className="project-card group relative bg-punk-black border-2 border-punk-white hard-shadow-green p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                <div>
                  <span className="font-mono text-punk-green text-xs tracking-widest">02 / PORTFOLIO</span>
                  <h3 className="font-display text-4xl md:text-5xl font-bold mt-2">摄影师作品集</h3>
                </div>
                <span className="tape text-xs">awwwards</span>
              </div>
              <p className="text-punk-muted leading-relaxed max-w-3xl mb-6">
                longmao-factory 首个完整交付案例。4 轮 baton 迭代输出高端静态站点，通过构建验证与 1440px / 375px 双端预览。
              </p>
              <div className="flex flex-wrap gap-2 font-mono text-xs">
                <span className="border border-punk-muted px-2 py-1">React</span>
                <span className="border border-punk-muted px-2 py-1">TypeScript</span>
                <span className="border border-punk-muted px-2 py-1">Tailwind</span>
                <span className="border border-punk-muted px-2 py-1">Vite</span>
              </div>
            </article>

            <article className="project-card group relative bg-punk-black border-2 border-punk-white hard-shadow-orange p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                <div>
                  <span className="font-mono text-punk-orange text-xs tracking-widest">03 / AUTOMATION</span>
                  <h3 className="font-display text-4xl md:text-5xl font-bold mt-2">微信私聊智能回复</h3>
                </div>
                <span className="tape text-xs">wechaty</span>
              </div>
              <p className="text-punk-muted leading-relaxed max-w-3xl mb-6">
                基于 wechaty-puppet-wechat4u 的私聊自动化 Agent，接入火山引擎 Doubao 模型。改造触发策略为私聊默认自动回复，完成技术方案与原型验证。
              </p>
              <div className="flex flex-wrap gap-2 font-mono text-xs">
                <span className="border border-punk-muted px-2 py-1">Node.js</span>
                <span className="border border-punk-muted px-2 py-1">wechaty</span>
                <span className="border border-punk-muted px-2 py-1">火山引擎</span>
              </div>
            </article>

            <article className="project-card group relative bg-punk-black border-2 border-punk-white hard-shadow p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                <div>
                  <span className="font-mono text-punk-red text-xs tracking-widest">04 / TTS</span>
                  <h3 className="font-display text-4xl md:text-5xl font-bold mt-2">本地化语音合成</h3>
                </div>
                <span className="tape text-xs">chatterbox</span>
              </div>
              <p className="text-punk-muted leading-relaxed max-w-3xl mb-6">
                在个人设备完成 chatterbox-tts 本地化部署，修复 Windows 平台兼容性问题，配置 HuggingFace 镜像通道跑通推理链路。
              </p>
              <div className="flex flex-wrap gap-2 font-mono text-xs">
                <span className="border border-punk-muted px-2 py-1">Python</span>
                <span className="border border-punk-muted px-2 py-1">TTS</span>
                <span className="border border-punk-muted px-2 py-1">HuggingFace</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-32 md:py-48 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="font-mono text-punk-orange text-sm tracking-[0.3em] mb-4">// CAPABILITIES</p>
            <h2 className="font-display text-6xl md:text-8xl font-bold leading-[0.9] tracking-tight">
              SKILL<br />SET
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="skill-card border-2 border-punk-white bg-punk-surface p-6 hard-shadow">
              <p className="font-mono text-punk-red text-xs mb-3">01</p>
              <h3 className="font-display text-2xl font-bold mb-3">AGENT 架构</h3>
              <p className="font-mono text-xs text-punk-muted leading-relaxed">意图解析 · 任务规划 · 工具调用链 · 多智能体编排 · 记忆召回与注入</p>
            </div>
            <div className="skill-card border-2 border-punk-white bg-punk-surface p-6 hard-shadow-green">
              <p className="font-mono text-punk-green text-xs mb-3">02</p>
              <h3 className="font-display text-2xl font-bold mb-3">前端工程</h3>
              <p className="font-mono text-xs text-punk-muted leading-relaxed">React · TypeScript · Tailwind CSS · Vite · 响应式交付 · 构建验证</p>
            </div>
            <div className="skill-card border-2 border-punk-white bg-punk-surface p-6 hard-shadow-orange">
              <p className="font-mono text-punk-orange text-xs mb-3">03</p>
              <h3 className="font-display text-2xl font-bold mb-3">大模型接入</h3>
              <p className="font-mono text-xs text-punk-muted leading-relaxed">火山引擎 Ark / Doubao · DeepSeek · OpenAI API · Prompt 工程 · 异常回退</p>
            </div>
            <div className="skill-card border-2 border-punk-white bg-punk-surface p-6 hard-shadow-orange">
              <p className="font-mono text-punk-orange text-xs mb-3">04</p>
              <h3 className="font-display text-2xl font-bold mb-3">数据评测</h3>
              <p className="font-mono text-xs text-punk-muted leading-relaxed">埋点设计 · AB Test · 数据监控 · Agent 效果评估 · Harness 基建</p>
            </div>
            <div className="skill-card border-2 border-punk-white bg-punk-surface p-6 hard-shadow">
              <p className="font-mono text-punk-red text-xs mb-3">05</p>
              <h3 className="font-display text-2xl font-bold mb-3">工程部署</h3>
              <p className="font-mono text-xs text-punk-muted leading-relaxed">Python · Node.js · OpenClaw · Windows 本地化 · 模型镜像 · 故障排查</p>
            </div>
            <div className="skill-card border-2 border-punk-white bg-punk-surface p-6 hard-shadow-green">
              <p className="font-mono text-punk-green text-xs mb-3">06</p>
              <h3 className="font-display text-2xl font-bold mb-3">办公自动化</h3>
              <p className="font-mono text-xs text-punk-muted leading-relaxed">Word / PPT / Excel 多模态任务编排 · 长对话上下文管理</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 md:py-48 px-6 md:px-12 bg-punk-red text-punk-black">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-mono text-sm tracking-[0.3em] mb-6">// CONTACT</p>
          <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.95] mb-8">
            SEND A<br />SIGNAL
          </h2>
          <p className="font-mono text-sm md:text-base mb-12 max-w-xl mx-auto">
            Agent 系统 · 智能体协同 · LLM 工程实践 — 有想法可以聊。
          </p>
          <a
            href="mailto:d2281886620@iCloud.com"
            className="inline-block font-mono text-lg md:text-2xl font-bold border-4 border-punk-black px-8 py-4 hover:bg-punk-black hover:text-punk-red transition-all duration-300"
          >
            d2281886620@iCloud.com
          </a>
          <p className="font-mono text-xs mt-12 text-punk-black/70">上海 · 中国</p>
        </div>
      </section>

      <footer className="py-8 px-6 md:px-12 border-t border-punk-muted/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-xs text-punk-muted">
          <p>© 2026 邓博文 · AGENT DEV</p>
          <p>BUILT WITH REACT + VITE + TAILWIND + GSAP</p>
        </div>
      </footer>
    </div>
  )
}

export default App
