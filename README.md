<div align="center">

#   ALDRIN K JOHNI — Portfolio

**A cinematic, dark-themed developer portfolio with scroll-driven 3D animations and interactive UI.**

[![Live Site](https://img.shields.io/badge/🔴_LIVE-akj--666.github.io/my__portfolio-FF2400?style=for-the-badge&labelColor=050505)](https://akj-666.github.io/my_portfolio/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=white&labelColor=050505)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white&labelColor=050505)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white&labelColor=050505)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-FF0055?style=flat-square&logo=framer&logoColor=white&labelColor=050505)](https://www.framer.com/motion/)
[![Deploy](https://img.shields.io/badge/Deploy-GitHub_Pages-181717?style=flat-square&logo=githubactions&logoColor=white&labelColor=050505)](https://pages.github.com)

<br/>

<img src="https://capsule-render.vercel.app/api?type=waving&color=FF2400&height=2&section=header" width="100%"/>

</div>

<br/>

## ⚡ Overview

A high-performance, single-page portfolio built with **React + Vite + Tailwind CSS**, featuring cinematic scroll-driven animations powered by Framer Motion and butter-smooth scrolling via Lenis. Every interaction — from magnetic skill cards to the X-Ray project reveal slider — is designed to feel immersive and responsive.

<br/>

## 🎬 Highlights

| Feature | Description |
|:--------|:------------|
| **🃏 3D Stacking Project Deck** | Scroll-driven card stack with perspective transforms — cards fly toward the camera as you scroll |
| **🔬 X-Ray Reveal Slider** | Hover-to-reveal slider that peels back polished imagery to expose the underlying source code |
| **🧲 Magnetic Skill Cards** | Cards with spring-physics cursor tracking and a scarlet glow that follows your mouse |
| **📜 Animated Timeline** | Education timeline with scroll-linked progress bar and node activation |
| **🔄 Smooth Scrolling** | Lenis-powered buttery smooth scrolling with cinematic easing curves |
| **🎨 Cinematic Loader** | Custom loading sequence with staggered text animations |
| **📱 Fully Responsive** | Adapts seamlessly from mobile to ultra-wide desktop |

<br/>

## 🏗️ Architecture

```
src/
├── App.jsx                      # Root — Lenis scroll + loader orchestration
├── main.jsx                     # Entry point
├── index.css                    # Tailwind directives & globals
└── components/
    ├── Loader.jsx               # Cinematic intro loader
    ├── Navigation.jsx           # Sticky nav with section links
    ├── Hero.jsx                 # Full-screen hero with staggered reveal
    ├── Projects.jsx             # 3D stacking deck + X-Ray slider
    ├── WorkProcess.jsx          # 5-step process with scroll progress line
    ├── Skills.jsx               # Magnetic cards grid
    ├── EducationAchievements.jsx # Timeline + achievements
    ├── Contact.jsx              # Contact form + info cards
    └── Footer.jsx               # Footer
```

<br/>

## 🛠️ Tech Stack

<div align="center">

| Layer | Technology |
|:------|:-----------|
| **Framework** | React 18 |
| **Build Tool** | Vite 8 |
| **Styling** | Tailwind CSS 3.4 + custom theme |
| **Animation** | Framer Motion 11 (scroll-linked transforms) |
| **Smooth Scroll** | Lenis |
| **Icons** | Lucide React |
| **Fonts** | Inter (body) + Outfit (display) |
| **Deploy** | GitHub Pages via GitHub Actions CI/CD |

</div>

<br/>

## 🎨 Design System

```
Color Palette
─────────────────────────────────────────
  Scarlet     #FF2400  ███████  Accent / CTAs
  Dark BG     #050505  ███████  Background
  Surface     #111111  ███████  Cards / Panels
  Border      #222222  ███████  Dividers / Borders
  White       #FFFFFF  ███████  Primary text
  Gray 400    #9CA3AF  ███████  Secondary text

Typography
─────────────────────────────────────────
  Display     Outfit     Bold / Black
  Body        Inter      Light / Regular
```

<br/>

## 🚀 Quick Start

```bash
# Clone the repo
git clone https://github.com/akj-666/my_portfolio.git
cd my_portfolio

# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

<br/>

## 📦 Deployment

This project auto-deploys to **GitHub Pages** on every push to `main` via the included GitHub Actions workflow.

```
Push to main → npm ci → npm run build → Deploy ./dist to GitHub Pages
```

<br/>

## 📬 Contact

<div align="center">

[![Email](https://img.shields.io/badge/Email-aldrinkjohni@gmail.com-FF2400?style=for-the-badge&logo=gmail&logoColor=white&labelColor=050505)](mailto:aldrinkjohni@gmail.com)
[![Website](https://img.shields.io/badge/Website-aldrinkjohni.com-FF2400?style=for-the-badge&logo=googlechrome&logoColor=white&labelColor=050505)](https://www.aldrinkjohni.com)
[![GitHub](https://img.shields.io/badge/GitHub-akj--666-FF2400?style=for-the-badge&logo=github&logoColor=white&labelColor=050505)](https://github.com/akj-666)

</div>

<br/>

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=FF2400&height=80&section=footer" width="100%"/>

*Designed & built by **Aldrin K Johni** — Kerala, India*

</div>
