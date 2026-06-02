export interface ProjectConfig {
  title: string;
  tagline: string;
  license: 'MIT' | 'Apache-2.0' | 'GPL-3.0' | 'Unlicense';
  techStack: string[];
  features: string[];
  installation: string;
  usage: string;
  contributing: boolean;
  sectionOrder: string[];
}

export const defaultSectionOrder = [
  'title',
  'badges',
  'tagline',
  'features',
  'techStack',
  'installation',
  'usage',
  'contributing',
  'license'
];

export const defaultConfig: ProjectConfig = {
  title: 'My Awesome Project',
  tagline: 'An elegant solution to a common problem.',
  license: 'MIT',
  techStack: ['React', 'TypeScript', 'Tailwind CSS'],
  features: ['Zero-friction UX', 'Modular Architecture', 'Dark Mode Ready'],
  installation: 'npm install my-awesome-project',
  usage: 'import { MyAwesomeProject } from "my-awesome-project";',
  contributing: true,
  sectionOrder: defaultSectionOrder
};
