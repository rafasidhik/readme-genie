import React, { useState } from 'react';
import type { ProjectConfig } from '../types';
import { ChevronDown, ChevronRight, Plus, Trash2, GripVertical } from 'lucide-react';

interface Props {
  config: ProjectConfig;
  setConfig: React.Dispatch<React.SetStateAction<ProjectConfig>>;
}

const POPULAR_TECH = [
  'React', 'Vue', 'Angular', 'Svelte',
  'TypeScript', 'JavaScript', 'Python', 'Go',
  'Tailwind CSS', 'Bootstrap', 'Material UI',
  'Node.js', 'Express', 'Django', 'Spring',
  'Docker', 'Kubernetes', 'AWS', 'Vercel'
];

export function EditorForm({ config, setConfig }: Props) {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    general: true,
    features: true,
    tech: false,
    setup: false,
  });

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const updateField = (field: keyof ProjectConfig, value: any) => {
    setConfig(prev => ({ ...prev, [field]: value }));
  };

  const handleAddFeature = () => {
    updateField('features', [...config.features, '']);
  };

  const handleUpdateFeature = (index: number, value: string) => {
    const newFeatures = [...config.features];
    newFeatures[index] = value;
    updateField('features', newFeatures);
  };

  const handleRemoveFeature = (index: number) => {
    const newFeatures = config.features.filter((_, i) => i !== index);
    updateField('features', newFeatures);
  };

  const toggleTech = (tech: string) => {
    if (config.techStack.includes(tech)) {
      updateField('techStack', config.techStack.filter(t => t !== tech));
    } else {
      updateField('techStack', [...config.techStack, tech]);
    }
  };

  const AccordionHeader = ({ id, title, icon }: { id: string, title: string, icon: string }) => (
    <button
      type="button"
      onClick={() => toggleSection(id)}
      className="flex items-center justify-between w-full p-4 bg-card hover:bg-border/50 transition-colors border-b border-border text-left"
    >
      <div className="flex items-center gap-2 font-semibold">
        <span className="text-xl">{icon}</span>
        {title}
      </div>
      {openSections[id] ? <ChevronDown size={20} className="text-textMuted" /> : <ChevronRight size={20} className="text-textMuted" />}
    </button>
  );

  return (
    <div className="space-y-4">
      {/* General Section */}
      <div className="rounded-lg border border-border overflow-hidden bg-background">
        <AccordionHeader id="general" title="General Info" icon="📝" />
        {openSections.general && (
          <div className="p-4 space-y-4">
            <div>
              <label className="block text-sm font-medium text-textMuted mb-1">Project Title</label>
              <input
                type="text"
                value={config.title}
                onChange={e => updateField('title', e.target.value)}
                className="w-full bg-card border border-border rounded-md px-3 py-2 text-textMain focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                placeholder="ReadmeGenie"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-textMuted mb-1">Tagline</label>
              <input
                type="text"
                value={config.tagline}
                onChange={e => updateField('tagline', e.target.value)}
                className="w-full bg-card border border-border rounded-md px-3 py-2 text-textMain focus:outline-none focus:border-primary transition-colors"
                placeholder="A magical markdown generator"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-textMuted mb-1">License</label>
              <select
                value={config.license}
                onChange={e => updateField('license', e.target.value)}
                className="w-full bg-card border border-border rounded-md px-3 py-2 text-textMain focus:outline-none focus:border-primary transition-colors appearance-none"
              >
                <option value="MIT">MIT</option>
                <option value="Apache-2.0">Apache 2.0</option>
                <option value="GPL-3.0">GPL 3.0</option>
                <option value="Unlicense">Unlicense</option>
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Tech Stack Section */}
      <div className="rounded-lg border border-border overflow-hidden bg-background">
        <AccordionHeader id="tech" title="Tech Stack" icon="🛠️" />
        {openSections.tech && (
          <div className="p-4">
            <p className="text-sm text-textMuted mb-3">Click to toggle popular technologies:</p>
            <div className="flex flex-wrap gap-2">
              {POPULAR_TECH.map(tech => (
                <button
                  key={tech}
                  onClick={() => toggleTech(tech)}
                  className={`px-3 py-1.5 rounded-md text-sm border transition-all ${
                    config.techStack.includes(tech)
                      ? 'bg-primary/20 border-primary text-primary'
                      : 'bg-card border-border text-textMuted hover:border-textMuted/50'
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Features Section */}
      <div className="rounded-lg border border-border overflow-hidden bg-background">
        <AccordionHeader id="features" title="Features" icon="✨" />
        {openSections.features && (
          <div className="p-4 space-y-3">
            {config.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <GripVertical size={18} className="text-border cursor-grab" />
                <input
                  type="text"
                  value={feature}
                  onChange={e => handleUpdateFeature(idx, e.target.value)}
                  className="flex-1 bg-card border border-border rounded-md px-3 py-2 text-textMain focus:outline-none focus:border-primary transition-colors"
                  placeholder="Enter a cool feature..."
                />
                <button
                  onClick={() => handleRemoveFeature(idx)}
                  className="p-2 text-textMuted hover:text-red-400 hover:bg-red-400/10 rounded-md transition-colors"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
            <button
              onClick={handleAddFeature}
              className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors mt-2"
            >
              <Plus size={16} /> Add Feature
            </button>
          </div>
        )}
      </div>

      {/* Setup Section */}
      <div className="rounded-lg border border-border overflow-hidden bg-background">
        <AccordionHeader id="setup" title="Installation & Usage" icon="🚀" />
        {openSections.setup && (
          <div className="p-4 space-y-4">
            <div>
              <label className="block text-sm font-medium text-textMuted mb-1">Installation Command</label>
              <textarea
                value={config.installation}
                onChange={e => updateField('installation', e.target.value)}
                className="w-full bg-card border border-border rounded-md px-3 py-2 text-textMain focus:outline-none focus:border-primary transition-colors font-mono text-sm h-20"
                placeholder="npm install package-name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-textMuted mb-1">Usage Example</label>
              <textarea
                value={config.usage}
                onChange={e => updateField('usage', e.target.value)}
                className="w-full bg-card border border-border rounded-md px-3 py-2 text-textMain focus:outline-none focus:border-primary transition-colors font-mono text-sm h-24"
                placeholder="import { init } from 'package-name';"
              />
            </div>
            <div className="flex items-center gap-2 mt-4">
              <input
                type="checkbox"
                id="contributing"
                checked={config.contributing}
                onChange={e => updateField('contributing', e.target.checked)}
                className="w-4 h-4 rounded border-border bg-card text-primary focus:ring-primary focus:ring-offset-background"
              />
              <label htmlFor="contributing" className="text-sm text-textMuted">Include "Contributing" section</label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
