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
  theme: 'dark' | 'light';
  sections: Section[];
}

export const defaultSections: Section[] = [
  {
    id: 'header',
    type: 'header',
    title: 'Project Header',
    visible: true,
    content: '# Project Title\n> An elegant solution to a common problem.',
  },
  {
    id: 'badges',
    type: 'badges',
    title: 'Badges',
    visible: true,
    techItems: ['MIT', 'PRs Welcome']
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
    content: 'Provide a brief overview of what this project does and why it exists.',
  },
  {
    id: 'screenshots',
    type: 'text',
    title: 'Screenshots / Demo',
    visible: true,
    content: '![Demo](https://via.placeholder.com/800x400.png?text=App+Screenshot)',
  },
  {
    id: 'features',
    type: 'list',
    title: 'Features',
    visible: true,
    listItems: ['Zero-friction UX', 'Modular Architecture', 'Dark Mode Ready'],
  },
  {
    id: 'techStack',
    type: 'techStack',
    title: 'Tech Stack',
    visible: true,
    techItems: ['React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 'architecture',
    type: 'text',
    title: 'Architecture',
    visible: true,
    content: 'Explain the high-level architecture of your application here.',
  },
  {
    id: 'installation',
    type: 'text',
    title: 'Installation',
    visible: true,
    content: '```bash\nnpm install my-awesome-project\n```',
  },
  {
    id: 'envVars',
    type: 'text',
    title: 'Environment Variables',
    visible: true,
    content: 'To run this project, you will need to add the following environment variables to your .env file\n\n`API_KEY`\n`ANOTHER_API_KEY`',
  },
  {
    id: 'usage',
    type: 'text',
    title: 'Usage',
    visible: true,
    content: '```javascript\nimport { MyAwesomeProject } from "my-awesome-project";\n```',
  },
  {
    id: 'apiDocs',
    type: 'text',
    title: 'API Documentation',
    visible: true,
    content: 'Detail your API endpoints, request bodies, and responses here.',
  },
  {
    id: 'projectStructure',
    type: 'text',
    title: 'Project Structure',
    visible: true,
    content: '```bash\n├── src/\n│   ├── components/\n│   └── lib/\n├── public/\n└── package.json\n```',
  },
  {
    id: 'config',
    type: 'text',
    title: 'Configuration',
    visible: true,
    content: 'Explain how to configure the application (e.g. config.js, tailwind.config.js).',
  },
  {
    id: 'roadmap',
    type: 'text',
    title: 'Roadmap',
    visible: true,
    content: '- [ ] Feature 1\n- [ ] Feature 2\n- [ ] Feature 3',
  },
  {
    id: 'performance',
    type: 'text',
    title: 'Performance',
    visible: true,
    content: 'Notes on performance metrics and optimizations.',
  },
  {
    id: 'security',
    type: 'text',
    title: 'Security',
    visible: true,
    content: 'Details on security practices and vulnerability reporting.',
  },
  {
    id: 'testing',
    type: 'text',
    title: 'Testing',
    visible: true,
    content: '```bash\nnpm run test\n```',
  },
  {
    id: 'deployment',
    type: 'text',
    title: 'Deployment',
    visible: true,
    content: 'Instructions on how to deploy the application to production.',
  },
  {
    id: 'contributing',
    type: 'text',
    title: 'Contributing',
    visible: true,
    content: 'Contributions, issues and feature requests are welcome!\nFeel free to check [issues page](#).',
  },
  {
    id: 'faq',
    type: 'text',
    title: 'FAQ',
    visible: true,
    content: '#### Question 1?\nAnswer to question 1.\n\n#### Question 2?\nAnswer to question 2.',
  },
  {
    id: 'license',
    type: 'text',
    title: 'License',
    visible: true,
    content: 'This project is [MIT](LICENSE) licensed.',
  },
  {
    id: 'authors',
    type: 'text',
    title: 'Authors',
    visible: true,
    content: '- [@your_github_username](https://github.com/your_github_username)',
  },
  {
    id: 'acknowledgements',
    type: 'text',
    title: 'Acknowledgements',
    visible: true,
    content: '- [Awesome Resource](https://example.com)\n- [Another Resource](https://example.com)',
  },
  {
    id: 'support',
    type: 'text',
    title: 'Support',
    visible: true,
    content: 'For support, email support@example.com or join our Slack channel.',
  }
];

export const defaultConfig: ProjectConfig = {
  theme: 'dark',
  sections: defaultSections
};
