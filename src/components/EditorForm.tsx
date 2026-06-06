import { useState } from 'react';
import type { ProjectConfig, Section } from '../types';
import { SortableSection } from './SortableSection';
import { Plus, GripVertical, Trash2 } from 'lucide-react';
import { 
  DndContext, 
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import type { DragEndEvent } from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

interface Props {
  config: ProjectConfig;
  setConfig: React.Dispatch<React.SetStateAction<ProjectConfig>>;
}

const POPULAR_TECH = [
  'React', 'Vue', 'Angular', 'Svelte',
  'TypeScript', 'JavaScript', 'Python', 'Go',
  'Tailwind CSS', 'Bootstrap', 'Node.js', 'Express',
  'Docker', 'AWS', 'Vercel', 'PostgreSQL'
];

export function EditorForm({ config, setConfig }: Props) {
  const [openSectionId, setOpenSectionId] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setConfig((prev) => {
        const oldIndex = prev.sections.findIndex(s => s.id === active.id);
        const newIndex = prev.sections.findIndex(s => s.id === over.id);
        return {
          ...prev,
          sections: arrayMove(prev.sections, oldIndex, newIndex)
        };
      });
    }
  };

  const toggleSectionOpen = (id: string) => {
    setOpenSectionId(prev => prev === id ? null : id);
  };

  const updateSection = (id: string, updates: Partial<Section>) => {
    setConfig(prev => ({
      ...prev,
      sections: prev.sections.map(s => s.id === id ? { ...s, ...updates } : s)
    }));
  };

  const deleteSection = (id: string) => {
    if (window.confirm('Are you sure you want to delete this section?')) {
      setConfig(prev => ({
        ...prev,
        sections: prev.sections.filter(s => s.id !== id)
      }));
    }
  };

  // Section Editors
  const renderEditor = (section: Section) => {
    if (section.type === 'text' || section.type === 'header') {
      return (
        <textarea
          value={section.content || ''}
          onChange={(e) => updateSection(section.id, { content: e.target.value })}
          className="w-full h-40 bg-card border border-border rounded-md px-3 py-2 text-textMain focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors font-mono text-sm"
          placeholder="Enter markdown content..."
        />
      );
    }
    
    if (section.type === 'list') {
      const items = section.listItems || [];
      return (
        <div className="space-y-3">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <GripVertical size={16} className="text-border" />
              <input
                type="text"
                value={item}
                onChange={(e) => {
                  const newItems = [...items];
                  newItems[idx] = e.target.value;
                  updateSection(section.id, { listItems: newItems });
                }}
                className="flex-1 bg-card border border-border rounded-md px-3 py-2 text-textMain focus:outline-none focus:border-primary transition-colors"
                placeholder="List item..."
              />
              <button
                onClick={() => {
                  const newItems = items.filter((_, i) => i !== idx);
                  updateSection(section.id, { listItems: newItems });
                }}
                className="p-2 text-textMuted hover:text-red-400 hover:bg-red-400/10 rounded-md transition-colors"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
          <button
            onClick={() => updateSection(section.id, { listItems: [...items, ''] })}
            className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors mt-2"
          >
            <Plus size={16} /> Add Item
          </button>
        </div>
      );
    }

    if (section.type === 'techStack' || section.type === 'badges') {
      const selected = section.techItems || [];
      const options = section.type === 'badges' ? ['MIT', 'Apache-2.0', 'GPL-3.0', 'PRs Welcome', 'Stars'] : POPULAR_TECH;
      const allOptions = Array.from(new Set([...options, ...selected]));
      
      return (
        <div>
          <p className="text-sm text-textMuted mb-3">Click to toggle badges:</p>
          <div className="flex flex-wrap gap-2">
            {allOptions.map(tech => (
              <button
                key={tech}
                onClick={() => {
                  if (selected.includes(tech)) {
                    updateSection(section.id, { techItems: selected.filter(t => t !== tech) });
                  } else {
                    updateSection(section.id, { techItems: [...selected, tech] });
                  }
                }}
                className={`px-3 py-1.5 rounded-md text-sm border transition-all ${
                  selected.includes(tech)
                    ? 'bg-primary/20 border-primary text-primary'
                    : 'bg-card border-border text-textMuted hover:border-textMuted/50'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
          
          {(section.type === 'techStack' || section.type === 'badges') && (
            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border">
              <input
                id={`new-tech-${section.id}`}
                type="text"
                placeholder={section.type === 'badges' ? "Custom badge" : "Custom tech (e.g. Next.js)"}
                className="bg-background border border-border rounded-md px-3 py-1.5 text-sm text-textMain focus:outline-none focus:border-primary transition-colors flex-1"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    document.getElementById(`add-tech-btn-${section.id}`)?.click();
                  }
                }}
              />
              <button
                id={`add-tech-btn-${section.id}`}
                onClick={() => {
                  const input = document.getElementById(`new-tech-${section.id}`) as HTMLInputElement;
                  const val = input?.value.trim();
                  if (val && !selected.includes(val)) {
                    updateSection(section.id, { techItems: [...selected, val] });
                    if (input) input.value = '';
                  }
                }}
                className="flex items-center gap-2 px-3 py-1.5 bg-primary text-white text-sm rounded-md hover:bg-primary/90 transition-colors shadow-sm"
              >
                <Plus size={16} /> Add
              </button>
            </div>
          )}
        </div>
      );
    }

    if (section.type === 'toc') {
      return <p className="text-sm text-textMuted italic">The Table of Contents is auto-generated based on the visible sections.</p>;
    }

    return null;
  };

  return (
    <div className="w-full pb-10">
      <p className="text-sm text-textMuted mb-4 italic">
        Drag to reorder sections. Toggle the eye icon to hide from preview.
      </p>
      
      <DndContext 
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext 
          items={config.sections.map(s => s.id)}
          strategy={verticalListSortingStrategy}
        >
          {config.sections.map(section => (
            <SortableSection
              key={section.id}
              id={section.id}
              title={section.title}
              visible={section.visible}
              isOpen={openSectionId === section.id}
              onToggleOpen={() => toggleSectionOpen(section.id)}
              onToggleVisible={() => updateSection(section.id, { visible: !section.visible })}
              onDelete={() => deleteSection(section.id)}
            >
              {renderEditor(section)}
            </SortableSection>
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
}
