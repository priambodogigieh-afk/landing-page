<div align="center">

  <img src="public/image.png" alt="Nexcent Logo" width="80" height="80" />

  # 🌟 Nexcent — Modern SaaS & Community Landing Page

  <p align="center">
    <b>A high-performance, pixel-perfect, and fully responsive landing page built for modern SaaS & community platforms.</b>
  </p>

  <p align="center">
    <a href="https://github.com/priambodogigieh-afk/landing-page/stargazers"><img src="https://img.shields.io/github/stars/priambodogigieh-afk/landing-page?style=for-the-badge&color=4CAF50" alt="Stars"></a>
    <a href="https://github.com/priambodogigieh-afk/landing-page/network/members"><img src="https://img.shields.io/github/forks/priambodogigieh-afk/landing-page?style=for-the-badge&color=4CAF50" alt="Forks"></a>
    <a href="https://github.com/priambodogigieh-afk/landing-page/issues"><img src="https://img.shields.io/github/issues/priambodogigieh-afk/landing-page?style=for-the-badge&color=4CAF50" alt="Issues"></a>
    <a href="https://github.com/priambodogigieh-afk/landing-page/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge" alt="License"></a>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React 19" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Vite_8-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
    <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
  </p>

</div>

---

## 📌 Overview

**Nexcent** is a modern landing page designed to convert visitors into community members and clients. It features clean typography, vibrant color palettes, custom SVG illustrations, responsive layouts, and interactive UI components.

---

## ✨ Features

- ⚡ **Lightning Fast Performance**: Powered by Vite 8 and React 19.
- 🎨 **Design System**: Modular Vanilla CSS with CSS custom properties (`tokens.css`).
- 📱 **100% Fully Responsive**: Custom breakpoints for Desktop, Tablet, and Mobile screens.
- 🤝 **Client Logo Cloud**: Optically balanced client logos with automatic padding trimming.
- 📊 **Interactive Stats Section**: Custom vector SVG icons displaying platform reach.
- 📰 **Blog & Articles Grid**: Responsive cards with zoom hover effects.
- 💡 **Clean Component Architecture**: Decoupled UI primitives (`Button`, `Card`, `Modal`) and section components.
- 🚀 **Automated CI/CD**: Ready for instant deployment on Vercel.

---

## 🛠️ Tech Stack

- **Frontend**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Styling**: Vanilla CSS (Custom Design Tokens, Utility System, Flexbox/Grid)
- **Deployment**: [Vercel](https://vercel.com/)

---

## 📂 Project Structure

```bash
landing-page/
├── public/                  # Static assets & SVG icons
│   ├── club.svg
│   ├── event.svg
│   ├── member.svg
│   ├── payment copy.svg
│   └── Illustration.svg
├── src/
│   ├── api/                 # API service handlers
│   ├── components/
│   │   ├── sections/        # Main landing page sections (Hero, Clients, Stats, etc.)
│   │   └── ui/              # Reusable UI components (Button, Card, Modal)
│   ├── hooks/               # Custom React hooks (useMobileMenu, useNewsletter)
│   ├── styles/
│   │   ├── tokens.css       # Design tokens (colors, spacing, radius)
│   │   ├── components.css   # Reusable component styles
│   │   └── index.css        # Layout & section styles
│   ├── types/               # TypeScript interfaces & types
│   ├── App.tsx              # Main App entry layout
│   └── main.tsx             # DOM mounting entry
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18.0.0` or higher
- `npm` or `yarn`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/priambodogigieh-afk/landing-page.git
   cd landing-page
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<div align="center">
  <sub>Built with ❤️ using React & Vite.</sub>
</div>
