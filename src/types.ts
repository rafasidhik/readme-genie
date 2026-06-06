export type SectionType = 'header' | 'badges' | 'text' | 'list' | 'techStack' | 'toc';

export interface Section {
  id: string;
  type: SectionType;
  title: string;
  visible: boolean;
  content?: string;
  listItems?: string[];
  techItems?: string[];
}

export interface ProjectConfig {
  theme: 'light' | 'dark';
  sections: Section[];
}

export const defaultSections: Section[] = [
  {
    id: 'header',
    type: 'header',
    title: 'Project Header',
    visible: true,
    content: '# ReadmeGenie\n\n*An elegant, highly interactive, and developer-focused markdown generator engineered to streamline open-source documentation.*',
  },
  {
    id: 'badges',
    type: 'badges',
    title: 'Badges',
    visible: true,
    techItems: ['MIT', 'PRs Welcome', 'React', 'Tailwind CSS']
  },
  {
    id: 'toc',
    type: 'toc',
    title: 'Table of Contents',
    visible: true,
  },
  {
    id: 'overview',
    type: 'text',
    title: 'Overview',
    visible: true,
    content: 'Writing comprehensive, well-structured documentation is arguably the most critical component of maintaining a successful open-source project. **ReadmeGenie** eliminates the friction of formatting raw markdown by providing developers with a fluid, strictly visual drag-and-drop interface. By abstracting away the syntax layer, ReadmeGenie allows maintainers to focus exclusively on content quality while enforcing an enterprise-grade structural standard.',
  },
  {
    id: 'screenshots',
    type: 'text',
    title: 'Screenshots / Demo',
    visible: true,
    content: '`![Application Interface](./demo.png)`',
  },
  {
    id: 'features',
    type: 'list',
    title: 'Features',
    visible: true,
    listItems: [
      '**Kinetic Drag-and-Drop Management:** Seamlessly construct complex documentation hierarchies using an intuitive, collision-optimized sorting interface powered by `@dnd-kit`.',
      '**Comprehensive Modular Blueprints:** Shipped with 25 pre-configured, enterprise-ready documentation sections ranging from System Architectures to Security Policies.',
      '**Persistent State Architecture:** Your configuration progress is instantaneously bound and preserved within your browser\'s local storage engine, guaranteeing zero data loss.',
      '**Client-Side Exclusivity:** Zero backend dependencies ensure instantaneous rendering, immediate interactivity, and absolute data privacy.',
      '**Curated Developer Aesthetics:** Encapsulated within a polished, distraction-free obsidian dark mode environment.'
    ],
  },
  {
    id: 'techStack',
    type: 'techStack',
    title: 'Tech Stack',
    visible: true,
    techItems: ['Vite', 'React', 'Tailwind CSS', 'TypeScript'],
  },
  {
    id: 'architecture',
    type: 'text',
    title: 'Architecture',
    visible: true,
    content: 'ReadmeGenie leverages a highly modular **State-Driven Rendering Pipeline**. The application revolves around a centralized `ProjectConfig` data structure. As users interact with the visual sidebar, this state is mutated and instantly piped through a generic template-builder matrix. This matrix concatenates the localized states into a unified raw Markdown string, which is concurrently parsed and rendered by the live preview engine.',
  },
  {
    id: 'installation',
    type: 'text',
    title: 'Installation',
    visible: true,
    content: 'To initialize the development environment locally, clone the repository and execute the following dependency commands:\n\n```bash\ngit clone https://github.com/rafasidhik/readme-genie.git\ncd readme-genie\nnpm install\nnpm run dev\n```',
  },
  {
    id: 'envVars',
    type: 'text',
    title: 'Environment Variables',
    visible: true,
    content: 'ReadmeGenie is engineered to operate autonomously on the client side. No `.env` configuration or third-party API keys are required for the core compilation engine to function.',
  },
  {
    id: 'usage',
    type: 'text',
    title: 'Usage',
    visible: true,
    content: '1. Initialize the application via your preferred browser.\n2. Navigate to the left-hand configuration panel to isolate specific documentation modules.\n3. Utilize the structural grip handles to drag and reorder modules vertically.\n4. Toggle visibility using the focal icon, or permanently purge unnecessary modules.\n5. Review the instantaneous markdown compilation in the preview pane.\n6. Export the final artifact directly to your clipboard or download as a `.md` file.',
  },
  {
    id: 'apiDocs',
    type: 'text',
    title: 'API Documentation',
    visible: true,
    content: '*(No external REST or GraphQL APIs are exposed, as the application logic is inherently bound to the client execution context.)*',
  },
  {
    id: 'projectStructure',
    type: 'text',
    title: 'Project Structure',
    visible: true,
    content: '```bash\n├── public/               # Static browser assets\n├── src/\n│   ├── components/       # React UI Components (EditorForm, SortableSection)\n│   ├── lib/              # Core logic layer (templateBuilder.ts)\n│   ├── types.ts          # State interfaces & default configurations\n│   ├── App.tsx           # Primary application layout and state container\n│   └── index.css         # Global Tailwind directives & CSS variables\n├── tailwind.config.js    # Tailwind specification tokens\n└── package.json          # Node dependencies and project metadata\n```',
  },
  {
    id: 'config',
    type: 'text',
    title: 'Configuration',
    visible: true,
    content: 'Styling tokens and UI configurations are strictly managed via standard CSS variables in `src/index.css`. To dynamically modify the primary accent color or adjust the background obsidian theme, overwrite the `--color-primary` and `--color-background` variables located at the root layer.',
  },
  {
    id: 'roadmap',
    type: 'text',
    title: 'Roadmap',
    visible: true,
    content: '- [x] Establish the initial Vite + React compilation pipeline.\n- [x] Integrate the `react-markdown` live preview engine.\n- [x] Implement the `@dnd-kit` kinetic sorting matrices.\n- [x] Enforce a premium, developer-focused Dark Theme globally.\n- [ ] Implement Vibe-Coding Assist (AI-powered copywriting tooltips).\n- [ ] Establish support for custom `.md` blueprint importing.',
  },
  {
    id: 'performance',
    type: 'text',
    title: 'Performance',
    visible: true,
    content: 'By intentionally bypassing the Virtual DOM for heavy, generic string concatenations and utilizing highly memoized builder functions, ReadmeGenie compiles and renders deeply nested, complex markdown trees dynamically in under `2ms`.',
  },
  {
    id: 'security',
    type: 'text',
    title: 'Security',
    visible: true,
    content: 'ReadmeGenie is inherently secure by design. All textual inputs, structural decisions, and configuration states are processed and stored exclusively within your local machine utilizing browser storage protocols. No telemetry or form data is transmitted to an external server.',
  },
  {
    id: 'testing',
    type: 'text',
    title: 'Testing',
    visible: true,
    content: 'To execute the automated test suites:\n\n```bash\nnpm run test\n```',
  },
  {
    id: 'deployment',
    type: 'text',
    title: 'Deployment',
    visible: true,
    content: 'This Vite project is heavily optimized and pre-configured for zero-touch continuous deployment environments. To deploy, simply connect your Git provider to Vercel or Netlify, setting the build command to `npm run build` and targeting the `/dist` output directory.',
  },
  {
    id: 'contributing',
    type: 'text',
    title: 'Contributing',
    visible: true,
    content: 'We strongly encourage open-source contributions. If you intend to introduce significant architectural changes or complex plugins, please open a preliminary issue to discuss the implementation strategy with the maintainers before submitting a pull request.',
  },
  {
    id: 'faq',
    type: 'text',
    title: 'FAQ',
    visible: true,
    content: '**Q: Are there any account or authentication requirements?**\nA: None. ReadmeGenie is a fully localized client-side tool. \n\n**Q: How is my unsaved progress recovered in the event of a crash?**\nA: The application employs an aggressive auto-save mechanism that constantly binds your configuration state to local storage.',
  },
  {
    id: 'license',
    type: 'text',
    title: 'License',
    visible: true,
    content: 'This software is distributed under the [MIT](LICENSE) License.',
  },
  {
    id: 'authors',
    type: 'text',
    title: 'Authors',
    visible: true,
    content: '- **Rafa Sidhik** - [@rafasidhik](https://github.com/rafasidhik)',
  },
  {
    id: 'acknowledgements',
    type: 'text',
    title: 'Acknowledgements',
    visible: true,
    content: '- Architected specifically for the **Elite Coders Open Source Hackathon 2026**.\n- Design paradigms and visual language inspired heavily by the exceptional engineering teams at Vercel.',
  },
  {
    id: 'support',
    type: 'text',
    title: 'Support',
    visible: true,
    content: 'For technical support, feature requests, or vulnerability disclosures, please open an issue directly within this GitHub repository.',
  }
];

export const defaultConfig: ProjectConfig = {
  theme: 'dark',
  sections: defaultSections,
};
