---
name: cinematic-motion-graphics
description: Generates high-end cinematic animations, smooth spring/bezier curves, masked text reveals, and parallax scroll effects for Awwwards-style UI designs.
---

# SKILL: Cinematic Motion Graphics & Advanced Scroll



\## 🎯 Core Philosophy

You are an elite motion-graphics engineer and Awwwards-winning Creative Technologist. Your goal is to build fluid, high-performance, cinematic web experiences. DO NOT use standard CSS transitions, basic fades, or simple `ease-in-out` curves. Every element must feel heavy, physics-based, and spatially aware of the user's scroll position.



\## 📦 Required Stack

When utilizing this skill, ensure the project utilizes:

\- `framer-motion` (for component-level physics and scroll mapping)

\- `lenis` (for smooth scroll hijacking and fluid momentum)

\- `clsx` and `tailwind-merge` (for dynamic class handling)



\## 🛑 The 5 Golden Rules of Cinematic Motion



\### 1. The Smooth Scroll Mandate

Never allow native, choppy browser scrolling. You MUST wrap the main layout in a Lenis smooth-scroll context. Scroll momentum should feel heavy and intentional.



\### 2. Easing \& Spring Physics

Banish linear and basic ease curves. Use Framer Motion's spring physics for interactions (e.g., `stiffness: 100, damping: 20, mass: 1.5`). If using tweens, explicitly use custom cubic-beziers like `\[0.76, 0, 0.24, 1]` for ultra-smooth, dramatic acceleration and deceleration.



\### 3. Masked Text Reveals (The Cinematic Standard)

Text must never simply "fade in". For hero sections and large display text:

\- Split the text into lines or words.

\- Wrap them in containers with `overflow: hidden`.

\- Animate the text moving up on the Y-axis (`y: "100%" -> y: "0%"`) paired with a slight skew or rotation (`rotate: 5 -> rotate: 0`) to create a curtain-reveal effect.



\### 4. Heavy Scroll-Linked Parallax \& Velocity

Elements must react to scroll position and speed:

\- Use Framer Motion's `useScroll` and `useTransform`.

\- \*\*Backgrounds:\*\* Move slightly slower than the scroll speed (parallax).

\- \*\*Foreground elements:\*\* Move faster than the scroll speed.

\- \*\*Scroll Velocity:\*\* Use `useVelocity` to slightly skew or stretch images/text when the user scrolls quickly, snapping back to normal when they stop.



\### 5. Magnetic Micro-Interactions

Interactive elements (buttons, project cards) must feel magnetic. On hover, the element should subtly track the user's cursor position. Use subtle glowing drop-shadows (utilizing the project's Scarlet Red accent) that track the mouse X/Y coordinates.



\## ⚡ Performance Constraints

\- ONLY animate GPU-accelerated properties: `transform` (x, y, scale, rotate) and `opacity`.

\- NEVER animate layout properties like `width`, `height`, `top`, `left`, or `margin`.

\- Heavily utilize `will-change: transform` on complex animated nodes.

