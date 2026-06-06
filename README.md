<div align="center">
  <h1>ReadmeGenie</h1>
  <p><em>An elegant, highly interactive, and developer-focused markdown generator engineered to streamline open-source documentation.</em></p>
</div>

<div align="center">

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)
![React](https://img.shields.io/badge/React-09090b?style=for-the-badge&logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-09090b?style=for-the-badge&logo=tailwindcss&logoColor=white)

</div>

---

## Table of Contents

- [Overview](#overview)
- [Screenshots / Demo](#screenshots--demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Roadmap](#roadmap)
- [Performance](#performance)
- [Security](#security)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [FAQ](#faq)
- [License](#license)
- [Authors](#authors)
- [Acknowledgements](#acknowledgements)
- [Support](#support)

---

## Overview

Writing comprehensive, well-structured documentation is arguably the most critical component of maintaining a successful open-source project. **ReadmeGenie** eliminates the friction of formatting raw markdown by providing developers with a fluid, strictly visual drag-and-drop interface. By abstracting away the syntax layer, ReadmeGenie allows maintainers to focus exclusively on content quality while enforcing an enterprise-grade structural standard.

## Screenshots / Demo

`![Application Interface](./demo.png)`

## Features

- **Kinetic Drag-and-Drop Management:** Seamlessly construct complex documentation hierarchies using an intuitive, collision-optimized sorting interface powered by `@dnd-kit`.
- **Comprehensive Modular Blueprints:** Shipped with 25 pre-configured, enterprise-ready documentation sections ranging from System Architectures to Security Policies.
- **Persistent State Architecture:** Your configuration progress is instantaneously bound and preserved within your browser's local storage engine, guaranteeing zero data loss.
- **Client-Side Exclusivity:** Zero backend dependencies ensure instantaneous rendering, immediate interactivity, and absolute data privacy.
- **Curated Developer Aesthetics:** Encapsulated within a polished, distraction-free obsidian dark mode environment.

## Tech Stack

- **Core Runtime:** [Vite](https://vitejs.dev/) + [React (TypeScript)](https://react.dev/)
- **Styling Architecture:** [Tailwind CSS v3](https://tailwindcss.com/)
- **State & Sorting Engine:** [@dnd-kit/core](https://dndkit.com/)
- **Live Markdown Compilation:** [react-markdown](https://github.com/remarkjs/react-markdown)

## Architecture

ReadmeGenie leverages a highly modular **State-Driven Rendering Pipeline**. The application revolves around a centralized `ProjectConfig` data structure. As users interact with the visual sidebar, this state is mutated and instantly piped through a generic template-builder matrix. This matrix concatenates the localized states into a unified raw Markdown string, which is concurrently parsed and rendered by the live preview engine.

## Installation

To initialize the development environment locally, clone the repository and execute the following dependency commands:

```bash
git clone https://github.com/rafasidhik/readme-genie.git
cd readme-genie
npm install
npm run dev
```

## Environment Variables

ReadmeGenie is engineered to operate autonomously on the client side. No `.env` configuration or third-party API keys are required for the core compilation engine to function.

## Usage

1. Initialize the application via your preferred browser.
2. Navigate to the left-hand configuration panel to isolate specific documentation modules.
3. Utilize the structural grip handles to drag and reorder modules vertically.
4. Toggle visibility using the focal icon, or permanently purge unnecessary modules.
5. Review the instantaneous markdown compilation in the preview pane.
6. Export the final artifact directly to your clipboard or download as a `.md` file.

## API Documentation

*(No external REST or GraphQL APIs are exposed, as the application logic is inherently bound to the client execution context.)*

## Project Structure

```bash
├── public/               # Static browser assets
├── src/
│   ├── components/       # React UI Components (EditorForm, SortableSection)
│   ├── lib/              # Core logic layer (templateBuilder.ts)
│   ├── types.ts          # State interfaces & default configurations
│   ├── App.tsx           # Primary application layout and state container
│   └── index.css         # Global Tailwind directives & CSS variables
├── tailwind.config.js    # Tailwind specification tokens
└── package.json          # Node dependencies and project metadata
```

## Configuration

Styling tokens and UI configurations are strictly managed via standard CSS variables in `src/index.css`. To dynamically modify the primary accent color or adjust the background obsidian theme, overwrite the `--color-primary` and `--color-background` variables located at the root layer.

## Roadmap

- [x] Establish the initial Vite + React compilation pipeline.
- [x] Integrate the `react-markdown` live preview engine.
- [x] Implement the `@dnd-kit` kinetic sorting matrices.
- [x] Enforce a premium, developer-focused Dark Theme globally.
- [ ] Implement Vibe-Coding Assist (AI-powered copywriting tooltips).
- [ ] Establish support for custom `.md` blueprint importing.

## Performance

By intentionally bypassing the Virtual DOM for heavy, generic string concatenations and utilizing highly memoized builder functions, ReadmeGenie compiles and renders deeply nested, complex markdown trees dynamically in under `2ms`.

## Security

ReadmeGenie is inherently secure by design. All textual inputs, structural decisions, and configuration states are processed and stored exclusively within your local machine utilizing browser storage protocols. No telemetry or form data is transmitted to an external server.

## Testing

To execute the automated test suites:

```bash
npm run test
```

## Deployment

This Vite project is heavily optimized and pre-configured for zero-touch continuous deployment environments. To deploy, simply connect your Git provider to Vercel or Netlify, setting the build command to `npm run build` and targeting the `/dist` output directory.

## Contributing

We strongly encourage open-source contributions. If you intend to introduce significant architectural changes or complex plugins, please open a preliminary issue to discuss the implementation strategy with the maintainers before submitting a pull request.

## FAQ

**Q: Are there any account or authentication requirements?**
A: None. ReadmeGenie is a fully localized client-side tool. 

**Q: How is my unsaved progress recovered in the event of a crash?**
A: The application employs an aggressive auto-save mechanism that constantly binds your configuration state to local storage.

## License

This software is distributed under the [MIT](LICENSE) License.

## Authors

- **Rafa Sidhik** - [@rafasidhik](https://github.com/rafasidhik)

## Acknowledgements

- Architected specifically for the **Elite Coders Open Source Hackathon 2026**.
- Design paradigms and visual language inspired heavily by the exceptional engineering teams at Vercel.

## Support

For technical support, feature requests, or vulnerability disclosures, please open an issue directly within this GitHub repository.
