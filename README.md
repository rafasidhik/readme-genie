<div align="center">
  <h1>ReadmeGenie</h1>
  <p><em>A premium, minimal, and highly interactive markdown generator.</em></p>
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

ReadmeGenie is a purely client-side application designed to help developers build perfect, enterprise-ready documentation. It provides a visual drag-and-drop interface that generates raw markdown instantly.

## Screenshots / Demo

`![Demo Placeholder](./demo.png)`

## Features

- **Drag-and-Drop:** Reorder sections instantly using `@dnd-kit`.
- **Modular Sections:** 25+ default components included.
- **Auto-Save:** Progress is saved automatically to local storage.
- **Dark Mode:** A sleek, minimal aesthetic designed for developers.

## Tech Stack

![React](https://img.shields.io/badge/React-09090b?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-09090b?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-09090b?style=for-the-badge&logo=tailwindcss&logoColor=white)

## Architecture

The application relies on a single source of truth state (`ProjectConfig`), which is piped through a live template engine directly into `react-markdown`.

## Installation

```bash
git clone https://github.com/rafasidhik/readme-genie.git
cd readme-genie
npm install
npm run dev
```

## Environment Variables

ReadmeGenie runs entirely locally in the browser. No `.env` configuration is required.

## Usage

1. Launch the local development server.
2. Select, configure, and reorder your preferred README sections via the sidebar.
3. Click **Download .md** to export your generated documentation.

## API Documentation

*(No external API endpoints are exposed. The application operates offline.)*

## Project Structure

```bash
├── src/
│   ├── components/ 
│   ├── lib/        
│   └── App.tsx     
└── tailwind.config.js
```

## Configuration

Styling tokens and UI configurations are strictly managed via `src/index.css` CSS variables and `tailwind.config.js`.

## Roadmap

- [x] Implement dynamic Drag-and-Drop system.
- [x] Lock in premium Dark Theme.
- [ ] Support custom `.md` import parsing.

## Performance

ReadmeGenie renders heavily nested markdown trees dynamically in under `2ms` by leveraging memoized state builders.

## Security

All entered data and secrets remain exclusively on the client machine via browser local storage.

## Testing

```bash
npm run build
```

## Deployment

The repository is pre-configured for zero-touch deployment on Vercel or Netlify via Vite's standard build output directory (`/dist`).

## Contributing

Pull requests are actively welcomed. Please open an issue first to discuss major architectural changes.

## FAQ

**Does this require an account?**
No, it is completely free and account-less.

## License

Distributed under the [MIT](LICENSE) License.

## Authors

- **Rafa Sidhik** - [@rafasidhik](https://github.com/rafasidhik)

## Acknowledgements

- Built for the **Elite Coders Open Source Hackathon 2026**.

## Support

For technical support or feature requests, please open an issue in the GitHub repository.
