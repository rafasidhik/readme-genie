import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical, Eye, EyeOff, Trash2, ChevronDown, ChevronRight } from 'lucide-react';

interface SortableSectionProps {
  id: string;
  title: string;
  visible: boolean;
  isOpen: boolean;
  onToggleOpen: () => void;
  onToggleVisible: () => void;
  onDelete: () => void;
  children: React.ReactNode;
}

export function SortableSection({
  id,
  title,
  visible,
  isOpen,
  onToggleOpen,
  onToggleVisible,
  onDelete,
  children
}: SortableSectionProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 10 : 1,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div 
      ref={setNodeRef} 
      style={style} 
      className={`rounded-lg border border-border overflow-hidden bg-background mb-3 shadow-sm ${!visible ? 'opacity-60 grayscale' : ''}`}
    >
      <div className="flex items-center justify-between p-3 bg-card border-b border-border transition-colors hover:bg-border/30">
        <div className="flex items-center gap-3">
          <div {...attributes} {...listeners} className="cursor-grab text-textMuted hover:text-textMain p-1">
            <GripVertical size={18} />
          </div>
          <button onClick={onToggleOpen} className="flex items-center gap-2 font-medium text-left">
            {isOpen ? <ChevronDown size={18} className="text-primary" /> : <ChevronRight size={18} className="text-textMuted" />}
            {title}
          </button>
        </div>
        
        <div className="flex items-center gap-2">
          <button 
            onClick={onToggleVisible} 
            className={`p-1.5 rounded-md transition-colors ${visible ? 'text-primary hover:bg-primary/10' : 'text-textMuted hover:bg-border'}`}
            title={visible ? 'Hide section' : 'Show section'}
          >
            {visible ? <Eye size={16} /> : <EyeOff size={16} />}
          </button>
          <button 
            onClick={onDelete} 
            className="p-1.5 text-textMuted hover:text-red-400 hover:bg-red-400/10 rounded-md transition-colors"
            title="Delete section"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
      
      {isOpen && (
        <div className="p-4 bg-background">
          {children}
        </div>
      )}
    </div>
  );
}
