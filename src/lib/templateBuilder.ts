import type { ProjectConfig } from '../types';

export function buildMarkdown(config: ProjectConfig): string {
  const {
    title,
    tagline,
    license,
    techStack,
    features,
    installation,
    usage,
    contributing,
    sectionOrder
  } = config;

  const sections: Record<string, string> = {};

  sections['title'] = `# ${title || 'Project Title'}`;
  sections['tagline'] = tagline ? `> ${tagline}` : '';
  
  // Badges
  const licenseBadge = `![License: ${license}](https://img.shields.io/badge/License-${license.replace('-', '%20')}-blue.svg)`;
  sections['badges'] = licenseBadge;

  // Features
  if (features.length > 0) {
    sections['features'] = `## ✨ Features\n\n${features.map((f: string) => `- ${f}`).join('\n')}`;
  } else {
    sections['features'] = '';
  }

  // Tech Stack
  if (techStack.length > 0) {
    const badges = techStack.map((tech: string) => 
      `![${tech}](https://img.shields.io/badge/${encodeURIComponent(tech)}-09090b?style=for-the-badge&logo=${encodeURIComponent(tech.toLowerCase())}&logoColor=white)`
    ).join(' ');
    sections['techStack'] = `## 🛠️ Tech Stack\n\n${badges}`;
  } else {
    sections['techStack'] = '';
  }

  // Installation
  if (installation) {
    sections['installation'] = `## 🚀 Installation\n\n\`\`\`bash\n${installation}\n\`\`\``;
  } else {
    sections['installation'] = '';
  }

  // Usage
  if (usage) {
    sections['usage'] = `## 💡 Usage\n\n\`\`\`javascript\n${usage}\n\`\`\``;
  } else {
    sections['usage'] = '';
  }

  // Contributing
  if (contributing) {
    sections['contributing'] = `## 🤝 Contributing\n\nContributions, issues and feature requests are welcome!\nFeel free to check [issues page](#).`;
  } else {
    sections['contributing'] = '';
  }

  // License
  sections['license'] = `## 📝 License\n\nThis project is [${license}](LICENSE) licensed.`;

  // Combine sections based on order
  return sectionOrder
    .map((key: string) => sections[key])
    .filter((section: string) => section && section.trim() !== '')
    .join('\n\n');
}
