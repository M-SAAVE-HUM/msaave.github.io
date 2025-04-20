# M‑SAAVE Website

A fast, fully‑responsive Next.js site for **Michigan Sustainability Applications for Aerospace Vehicle Engineering (M‑SAAVE)**.  
Built from scratch with the App Router, TypeScript‑ready components, and Tailwind CSS.

---

## ✈️  Features

- **Project overview** (About + HUM Mission) written in Markdown‑friendly JSX  
- **Dynamic galleries** for Team, Leadership, and Faculty — just edit an array, no extra code  
- **Contact form** wired for easy hooking into Formspree, Resend, or your own API route  
- **Optimised images** via `<Image />` and built‑in Next.js caching  

---

## 🛠️  Tech Stack

| Layer      | Choice                                          |
| ---------- | ----------------------------------------------- |
| Framework  | [Next.js 14](https://nextjs.org/)               |
| Styling    | [Tailwind CSS](https://tailwindcss.com/)        |
| Deployment | [Github Pages](https://msaave.com)              |

---

## 🚀  Quick Start

```bash
# 1. Clone the repo
git clone https://github.com/your‑org/msaave‑website.git
cd msaave‑website

# 2. Install deps (npm, pnpm, or yarn)
npm install

# 3. Run in dev‑mode → http://localhost:3000
npm run dev

# 4. Build for production
npm run build && npm start
