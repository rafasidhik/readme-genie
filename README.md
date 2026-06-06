<div align="center">
  <h1>✨ ReadmeGenie</h1>
  <p><em>An elegant, highly interactive, and developer-focused markdown generator built for the Elite Coders Open Source Hackathon 2026.</em></p>
</div>

<div align="center">
  
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)
![React](https://img.shields.io/badge/React-09090b?style=for-the-badge&logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-09090b?style=for-the-badge&logo=tailwindcss&logoColor=white)

</div>

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Screenshots / Demo](#-screenshots--demo)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [Usage](#-usage)
- [API Documentation](#-api-documentation)
- [Project Structure](#-project-structure)
- [Configuration](#-configuration)
- [Roadmap](#-roadmap)
- [Performance](#-performance)
- [Security](#-security)
- [Testing](#-testing)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [FAQ](#-faq)
- [License](#-license)
- [Authors](#-authors)
- [Acknowledgements](#-acknowledgements)
- [Support](#-support)

---

## 🔭 Overview

Most README generators are either too complex (requiring account setups) or too basic (unstyled textareas). **ReadmeGenie** wins by combining high-fidelity aesthetics with hyper-focused interactive tools that guide developers into writing perfect open-source documentation. It operates completely on the client-side, ensuring zero friction, extreme speed, and total privacy.

## 📸 Screenshots / Demo

*(Add your beautiful Vercel-inspired dark mode UI screenshot here!)*
`![ReadmeGenie Demo](./demo-placeholder.png)`

## ✨ Features

- **Dynamic Drag-and-Drop Manager:** Visually reorder your README sections instantly using a buttery-smooth drag-and-drop interface powered by `@dnd-kit`.
- **Modular Sections:** 25+ pre-loaded enterprise-ready documentation sections. Toggle visibility or delete the ones you don't need.
- **Zero-friction UX:** No sign-up, fully client-side, instant load times.
- **State Persistence:** Never lose your work. Your configuration is auto-saved directly to your browser's `localStorage`.
- **Premium Dark Mode:** A sleek, curated obsidian dark theme designed specifically for modern developers.
- **One-Click Exports:** Copy to clipboard with toast notifications or download directly as a `README.md` file (complete with a satisfying confetti burst!).

## 🛠️ Tech Stack

ReadmeGenie is built with modern, production-ready tools:
- **Core:** [Vite](https://vitejs.dev/) + [React (TypeScript)](https://react.dev/)
- **Styling Engine:** [Tailwind CSS v3](https://tailwindcss.com/)
- **Drag and Drop:** [@dnd-kit/core](https://dndkit.com/)
- **Markdown Parsing:** [react-markdown](https://github.com/remarkjs/react-markdown)
- **Icons:** [Lucide React](https://lucide.dev/)

## 🏗️ Architecture

ReadmeGenie utilizes a highly modular **State-Driven Architecture**. The entire application operates around a single source of truth called `ProjectConfig`. 

As the user interacts with the sidebar forms or drags-and-drops sections, the centralized state updates. This state is instantly passed to a generic `templateBuilder` engine which parses the state into raw Markdown strings that are passed down to the `react-markdown` live preview.

## 🚀 Installation

To run this project locally, clone the repository and install the dependencies:

```bash
git clone https://github.com/rafasidhik/readme-genie.git
cd readme-genie
npm install
npm run dev
```

## 🔐 Environment Variables

ReadmeGenie runs entirely on the client side and does not require any backend keys. However, if you plan to extend this with backend API storage in the future, you will need to configure your `.env` file. 

## 💡 Usage

1. Open the application.
2. Expand the accordion sections on the left-hand panel.
3. Drag the sections up or down using the grip icon to arrange your structure.
4. Click the "Eye" icon to hide a section, or the "Trash" icon to remove it.
5. Watch the Live Preview on the right update instantly.
6. Click **Download .md** when finished!

## 📡 API Documentation

While there is no external REST API, the core internal engine relies on the `Section` schema:

```typescript
export interface Section {
  id: string;            // Unique ID (e.g., 'features')
  type: SectionType;     // Determines the UI editor (text, list, badges)
  title: string;         // The markdown heading
  visible: boolean;      // Toggle state
  content?: string;      // Markdown payload
}
```

## 📁 Project Structure

```bash
├── public/               # Static assets
├── src/
│   ├── components/       # React UI Components (EditorForm, SortableSection)
│   ├── lib/              # Core logic (templateBuilder.ts)
│   ├── types.ts          # State interfaces & default configurations
│   ├── App.tsx           # Main application layout and layout state
│   └── index.css         # Global Tailwind directives & Dark Mode CSS vars
├── tailwind.config.js    # Tailwind configuration
└── package.json          # Project dependencies
```

## ⚙️ Configuration

The default application themes and colors are defined via CSS variables in `src/index.css`. To modify the primary accent color or the background obsidian theme, adjust the `--color-primary` and `--color-background` variables at the root layer.

## 🛣️ Roadmap

- [x] Initial Vite + React scaffolding.
- [x] Implement the `react-markdown` live preview engine.
- [x] Integrate `@dnd-kit` for visual section reordering.
- [x] Lock application to a premium developer-focused Dark Mode.
- [ ] Add Vibe-Coding Assist (AI-powered copywriting tooltips).
- [ ] Support custom Markdown Template importing.

## ⚡ Performance

Because ReadmeGenie completely bypasses the Virtual DOM for heavy generic string concatenations and directly utilizes memoized builders, generating large, complex READMEs happens in under `2ms`.

## 🛡️ Security

Your data is 100% yours. All form entries, API keys typed into templates, and configuration states are saved locally in your browser's `localStorage`. No data is ever sent to an external server.

## 🧪 Testing

To run the automated tests (if configured):

```bash
npm run test
```

## ☁️ Deployment

This Vite project is ready to be deployed to platforms like Vercel or Netlify with zero-config. Simply link your GitHub repository and set the build command to `npm run build` and output directory to `dist/`.

## 🤝 Contributing

Contributions, issues, and feature requests are incredibly welcome! This project was built for the Open Source community.
Feel free to check the [issues page](https://github.com/rafasidhik/readme-genie/issues).

## ❓ FAQ

**Q: Do I need to create an account?**
A: No! ReadmeGenie operates completely client-side.

**Q: Can I retrieve a README I accidentally closed?**
A: Yes. The application auto-saves your progress to your browser's local storage.

## 📝 License

This project is [MIT](LICENSE) licensed.

## 🧑‍💻 Authors

- **Rafa Sidhik** - [@rafasidhik](https://github.com/rafasidhik)

## 👏 Acknowledgements

- Built for the Elite Coders Open Source Hackathon 2026.
- UI Inspiration drawn from Vercel's brilliant design systems.
- Shields.io for the dynamic developer badges.

## 💬 Support

If you love this tool, please give it a ⭐ on GitHub! For support, open an issue on the repository.
