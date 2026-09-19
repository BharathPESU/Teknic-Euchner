# TEKNIC EUCHNER - Industrial Precision & Safety Systems

Modern, high-performance web application showcasing TEKNIC EUCHNER industrial automation, precision switches, safety interlocks, and control solutions.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite 8](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Motion](https://motion.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/) (configured via `vercel.json`)

---

## 🚀 Quick Start (Local Development)

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build locally
npm run preview
```

---

## 📦 Project Structure

```text
├── public/                 # Static assets served at root path
│   ├── assets/             # Brand graphics, 1080p background videos, fonts
├── src/
│   ├── components/         # Modular UI sections (Header, HeroSection, Products, etc.)
│   ├── App.tsx             # Root application orchestrator
│   ├── main.tsx            # React entry point
│   ├── index.css           # Global Tailwind stylesheet
│   └── site.css            # Industrial theme animations & custom styling
├── index.html              # HTML entry point with metadata
├── package.json            # Dependencies and scripts
├── tsconfig.json           # Strict TypeScript configuration
├── vercel.json             # Vercel SPA routing and caching headers
└── vite.config.ts          # Vite build and plugin configuration
```

---

## 🌐 Deploy to Vercel

### Method 1: Deploy via GitHub (Recommended)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "feat: complete industrial web portal"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```

2. **Import into Vercel**:
   - Go to [vercel.com](https://vercel.com) and log in.
   - Click **"Add New..."** > **"Project"**.
   - Select your GitHub repository.
   - Vercel automatically detects the **Vite** framework preset:
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`
     - **Install Command**: `npm install`
   - Click **Deploy**. Your site will be live on a `*.vercel.app` domain in seconds!

### Method 2: Deploy directly via Vercel CLI

```bash
npm install -g vercel
vercel
```
Follow the interactive terminal prompts to deploy immediately.
