# Danrick's Store

A clean, responsive storefront for **Danrick's Store**, a local variety shop located in Barangay Banago, Nagcarlan, Laguna. The site highlights premium taro products sourced from Nagcarlan and everyday household goods for the neighborhood community.

Built with **React**, **Vite**, and **Tailwind CSS**. A minimal [Express](https://www.npmjs.com/package/express) server is included for any backend APIs, and data persistence uses `better-sqlite3`.

> Fresh from Nagcarlan – locally grown, 100 % organic taro.

---

## Features

- Hero section introducing the store and core offerings
- Product highlights: fresh taro, variety goods, local convenience
- Embedded Google Map pointing to the physical location
- Contact information with store hours, phone, and email
- Fully mobile‑responsive layout with smooth animations (via `motion`)

---

## Prerequisites

- [Node.js](https://nodejs.org/) 18+ (npm or yarn available)

---

## Getting Started

1. Clone the repository and enter the directory:
   ```bash
   git clone <repo-url> danrick-store
   cd danrick-store
   ```
2. Install dependencies:
   ```bash
   npm install
   # or `yarn` if you prefer
   ```
3. Copy the example environment file and adjust as needed:
   ```bash
   cp .env.example .env.local
   ```
   - Set `GEMINI_API_KEY` when using AI / chat features (not required for the basic storefront).
   - `APP_URL` is used internally for callbacks; it is automatically injected in AI Studio.
4. Start the development server (default port 3000):
   ```bash
   npm run dev
   ```
5. Open http://localhost:3000 in your browser to view the store.

---

## Scripts

| Command           | Description                              |
|-------------------|------------------------------------------|
| `npm run dev`     | Run the app locally with hot reload       |
| `npm run build`   | Create a production build in `dist/`     |
| `npm run preview` | Preview the production build locally     |
| `npm run clean`   | Remove the `dist/` folder                |
| `npm run lint`    | Type‑check the TypeScript sources        |

---

## Notes & Accuracy Check

- The navigation links (`#about`, `#products`, `#location`, `#contact`) correspond to sections in `src/App.tsx`. Adjust if you modify IDs.
- The contact phone number is placeholder (`+63 (XXX) XXX-XXXX`); replace with the real number before publishing.
- Google Maps iframe coordinates target Banago, Nagcarlan, Laguna. Update the embed if the store moves.
- Tailwind, React, and other dependencies are up‑to‑date as of February 2026.

---

Thank you for visiting Danrick's Store!
