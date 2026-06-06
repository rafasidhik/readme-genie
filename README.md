<div align="center">
  <h1>ReadmeGenie</h1>
  <p><em>A premium, interactive markdown generator designed to streamline open-source documentation.</em></p>
</div>

<div align="center">

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

</div>

---

## Overview

ReadmeGenie is a client-side application engineered to help developers build perfect, enterprise-ready documentation without friction. By abstracting away the tedious process of writing raw markdown and formatting tables, it provides a strictly visual drag-and-drop interface. The application relies entirely on browser local storage, ensuring that no sensitive project data is ever transmitted to a backend server. 

## Features

- **Dynamic Drag-and-Drop Editor:** Reorder documentation sections instantly using `@dnd-kit`'s collision and sorting algorithms.
- **Client-Side Architecture:** Zero backend dependencies. The live preview is rendered dynamically from memoized state builders.
- **State Persistence:** Edits are automatically bound to local storage, preventing data loss across sessions.
- **Curated Developer Theme:** A polished, obsidian dark mode interface inspired by modern developer tools.

## Tech Stack

![React](https://img.shields.io/badge/React-09090b?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-09090b?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-09090b?style=for-the-badge&logo=tailwindcss&logoColor=white)

## Installation

Clone the repository and install the dependencies to run ReadmeGenie locally:

```bash
git clone https://github.com/rafasidhik/readme-genie.git
cd readme-genie
npm install
npm run dev
```

## Usage

1. Start the Vite development server and open `localhost:5173`.
2. Use the left-hand panel to toggle the visibility of documentation sections (such as *Features*, *Tech Stack*, or *License*).
3. Drag sections via the grip handles to structure the layout hierarchy.
4. The live markdown preview on the right will update instantaneously. Click **Download .md** to export the final file.

## Contributing

We welcome community contributions. If you're interested in extending ReadmeGenie with new features or markdown parser plugins, please open an issue to discuss your proposed architectural changes before submitting a pull request.

## License

This software is distributed under the [MIT](LICENSE) License.
