import { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { Copy, Download, RefreshCw, Code, Star } from 'lucide-react';
import confetti from 'canvas-confetti';
import type { ProjectConfig } from './types';
import { defaultConfig } from './types';
import { buildMarkdown } from './lib/templateBuilder';
import { EditorForm } from './components/EditorForm';

function App() {
  const [config, setConfig] = useState<ProjectConfig>(() => {
    try {
      const saved = localStorage.getItem('readme-genie-config');
      if (saved) {
        const parsed = JSON.parse(saved);
        // Check if it's the old version without modular sections
        if (parsed.sections && Array.isArray(parsed.sections)) {
          return parsed;
        }
      }
    } catch (e) {
      console.error("Failed to parse config", e);
    }
    return defaultConfig;
  });

  const [copied, setCopied] = useState(false);
  const [leftWidth, setLeftWidth] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !containerRef.current) return;
      const containerWidth = containerRef.current.clientWidth;
      const newWidth = (e.clientX / containerWidth) * 100;
      if (newWidth > 20 && newWidth < 80) {
        setLeftWidth(newWidth);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'col-resize';
      document.body.style.userSelect = 'none';
    } else {
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };
  }, [isDragging]);

  useEffect(() => {
    localStorage.setItem('readme-genie-config', JSON.stringify(config));
  }, [config]);

  const markdown = buildMarkdown(config);

  const handleCopy = () => {
    navigator.clipboard.writeText(markdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'README.md';
    a.click();
    URL.revokeObjectURL(url);
    
    // Fire confetti
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#3b82f6', '#10b981', '#f4f4f5']
    });
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset? All unsaved progress will be lost.')) {
      setConfig(defaultConfig);
    }
  };

  return (
    <div className="min-h-screen bg-background text-textMain flex flex-col font-sans">
      {/* Header */}
      <header className="h-16 border-b border-border flex items-center justify-between px-6 bg-card shrink-0">
        <div className="flex items-center gap-2">
          <span className="text-2xl">✨</span>
          <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
            ReadmeGenie
          </h1>
          <span className="text-xs bg-border px-2 py-0.5 rounded-full ml-2 text-textMuted">v1.0.0</span>
        </div>
        <div className="flex items-center gap-3">
          <a 
            href="https://github.com/rafasidhik/readme-genie" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-textMuted hover:text-textMain transition-colors bg-background px-3 py-1.5 rounded-md border border-border"
          >
            <Star size={16} className="text-yellow-400" />
            <span>Star on GitHub</span>
          </a>
        </div>
      </header>

      {/* Main Split Pane */}
      <main 
        ref={containerRef} 
        className="flex-1 flex flex-col lg:flex-row overflow-hidden relative"
        style={{ '--pane-width': `${leftWidth}%` } as React.CSSProperties}
      >
        {/* Editor Form Pane */}
        <section className="w-full desktop-pane-left flex flex-col border-b lg:border-b-0 lg:border-r border-border bg-background shrink-0">
          <div className="flex-1 overflow-y-auto p-6">
            <EditorForm config={config} setConfig={setConfig} />
          </div>
          
          {/* Footer Actions */}
          <div className="p-4 border-t border-border bg-card flex justify-between shrink-0">
            <button 
              onClick={handleReset}
              className="flex items-center gap-2 text-sm text-textMuted hover:text-red-400 transition-colors px-3 py-2"
            >
              <RefreshCw size={16} />
              Reset Form
            </button>
            <div className="flex gap-3">
              <button 
                onClick={handleCopy}
                className="flex items-center gap-2 text-sm bg-border hover:bg-border/80 text-textMain px-4 py-2 rounded-md transition-all"
              >
                <Copy size={16} />
                {copied ? 'Copied! 📋' : 'Copy Code'}
              </button>
              <button 
                onClick={handleDownload}
                className="flex items-center gap-2 text-sm bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md transition-all shadow-lg shadow-primary/20"
              >
                <Download size={16} />
                Download .md
              </button>
            </div>
          </div>
        </section>

        {/* Resizer */}
        <div 
          className="hidden lg:flex w-2 cursor-col-resize hover:bg-primary/50 active:bg-primary transition-colors items-center justify-center relative z-10 shrink-0"
          onMouseDown={() => setIsDragging(true)}
        >
          <div className="w-0.5 h-8 bg-border rounded-full pointer-events-none" />
        </div>

        {/* Live Preview Pane */}
        <section className="w-full desktop-pane-right flex flex-col bg-[#0d1117] overflow-hidden shrink-0">
          <div className="h-10 border-b border-border bg-card flex items-center px-4 shrink-0">
            <span className="text-sm text-textMuted flex items-center gap-2">
              <Code size={16} />
              Preview (Markdown Style)
            </span>
          </div>
          <div className="flex-1 overflow-y-auto p-8">
            <div className="prose prose-invert prose-blue max-w-none prose-img:inline-block prose-img:m-1">
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
