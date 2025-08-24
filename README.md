# Bradley's Portfolio

A modern, responsive developer portfolio built with **React** and **Vite**.  
Showcases projects, skills, and contact information with smooth animations and a clean UI.

## Features

- ⚡ **Vite** for fast development and builds
- 🎨 **Tailwind CSS** for styling
- 🎬 **Motion One** for smooth, modern animations
- 📱 Responsive design for all devices
- 🗂️ Project showcase with modal details and live/source links
- 🔗 Smooth scrolling navigation

## Demo

[View Live Portfolio](https://BradleyXiX.github.io/Portfolio-2.0)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

```sh
git clone https://github.com/BradleyXiX/Portfolio-2.0.git
cd Portfolio-2.0
npm install
```

### Running Locally

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### Building for Production

```sh
npm run build
```

### Deploying to GitHub Pages

1. Add this to your `package.json`:
   ```json
   "homepage": "https://BradleyXiX.github.io/Portfolio-2.0"
   ```
2. Install the deploy tool:
   ```sh
   npm install --save gh-pages
   ```
3. Add scripts to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. Deploy:
   ```sh
   npm run deploy
   ```

## Folder Structure

```
src/
  components/      // Reusable UI components (ProjectDetails, etc.)
  sections/        // Page sections (Navbar, About, Projects, etc.)
  constants/       // Data for projects, skills, etc.
  assets/          // Images and icons
```

## Customization

- **Projects:** Edit `src/constants/index.js` to add or update your projects.
- **Sections:** Update or add sections in `src/sections/`.
- **Styling:** Tweak Tailwind classes or add custom CSS as needed.

## Credits

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Motion One](https://motion.dev/)

---
