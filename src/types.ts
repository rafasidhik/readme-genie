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
    content: '# Project Title\n> A professional, highly interactive application.',
  },
  {
    id: 'badges',
    type: 'badges',
    title: 'Badges',
    visible: true,
    techItems: ['MIT', 'PRs Welcome']
  },
  {
    id: 'overview',
    type: 'text',
    title: 'Overview',
    visible: true,
    content: 'Provide a comprehensive overview of your project. Explain the problem it solves, the architecture you chose, and why this solution is optimal for the end-user.',
  },
  {
    id: 'features',
    type: 'list',
    title: 'Features',
    visible: true,
    listItems: ['High-performance architecture', 'Zero-configuration deployment', 'Developer-friendly API'],
  },
  {
    id: 'techStack',
    type: 'techStack',
    title: 'Tech Stack',
    visible: true,
    techItems: ['React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 'installation',
    type: 'text',
    title: 'Installation',
    visible: true,
    content: '```bash\nnpm install my-awesome-project\n```',
  },
  {
    id: 'usage',
    type: 'text',
    title: 'Usage',
    visible: true,
    content: '```typescript\nimport { initialize } from "my-awesome-project";\n\ninitialize({\n  theme: "dark"\n});\n```',
  },
  {
    id: 'contributing',
    type: 'text',
    title: 'Contributing',
    visible: true,
    content: 'We welcome contributions from the community. Please read our contributing guidelines before submitting a pull request.',
  },
  {
    id: 'license',
    type: 'text',
    title: 'License',
    visible: true,
    content: 'This project is licensed under the [MIT License](LICENSE).',
  }
];

export const defaultConfig: ProjectConfig = {
  theme: 'dark',
  sections: defaultSections
};
