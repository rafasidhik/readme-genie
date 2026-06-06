import type { ProjectConfig } from '../types';

export function buildMarkdown(config: ProjectConfig): string {
  const visibleSections = config.sections.filter(s => s.visible);
  
  return visibleSections.map(section => {
    switch (section.type) {
      case 'header':
        if (!section.content) return '';
        return `<div align="center">\n\n${section.content}\n\n</div>`;
        
      case 'badges':
        if (!section.techItems || section.techItems.length === 0) return '';
        const badges = section.techItems.map(b => {
          if (b === 'MIT') return `![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)`;
          if (b === 'Apache-2.0') return `![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
          if (b === 'GPL-3.0') return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
          if (b === 'PRs Welcome') return `![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)`;
          if (b === 'Stars') return `![GitHub stars](https://img.shields.io/github/stars/yourusername/yourrepo.svg)`;
          return `![${b}](https://img.shields.io/badge/${encodeURIComponent(b)}-09090b?style=for-the-badge&logo=${encodeURIComponent(b.toLowerCase())}&logoColor=white)`;
        }).join(' ');
        return `<div align="center">\n\n${badges}\n\n</div>`;
        
      case 'toc':
        // Generate TOC based on all visible sections that have titles (except header, badges, toc)
        const tocItems = visibleSections
          .filter(s => !['header', 'badges', 'toc'].includes(s.type) && s.title)
          .map(s => `- [${s.title}](#${s.title.toLowerCase().replace(/\s+/g, '-')})`)
          .join('\n');
        return `## Table of Contents\n\n${tocItems}`;
        
      case 'text':
        if (!section.content) return '';
        return `## ${section.title}\n\n${section.content}`;
        
      case 'list':
        if (!section.listItems || section.listItems.length === 0) return '';
        return `## ${section.title}\n\n${section.listItems.map(item => `- ${item}`).join('\n')}`;
        
      case 'techStack':
        if (!section.techItems || section.techItems.length === 0) return '';
        const techBadges = section.techItems.map(tech => 
          `![${tech}](https://img.shields.io/badge/${encodeURIComponent(tech)}-09090b?style=for-the-badge&logo=${encodeURIComponent(tech.toLowerCase())}&logoColor=white)`
        ).join(' ');
        return `## ${section.title}\n\n${techBadges}`;
        
      default:
        return '';
    }
  }).filter(content => content.trim() !== '').join('\n\n');
}
