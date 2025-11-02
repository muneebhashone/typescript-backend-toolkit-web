'use client';

import { useState } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import typescript from 'react-syntax-highlighter/dist/esm/languages/hljs/typescript';
import bash from 'react-syntax-highlighter/dist/esm/languages/hljs/bash';
import yaml from 'react-syntax-highlighter/dist/esm/languages/hljs/yaml';
import json from 'react-syntax-highlighter/dist/esm/languages/hljs/json';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Check, Copy } from 'lucide-react';
import { cn } from '@/lib/utils';

// Register languages
SyntaxHighlighter.registerLanguage('typescript', typescript);
SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('yaml', yaml);
SyntaxHighlighter.registerLanguage('json', json);

interface CodeBlockProps {
  code: string;
  language?: 'typescript' | 'bash' | 'yaml' | 'json';
  showLineNumbers?: boolean;
  fileName?: string;
  className?: string;
}

export function CodeBlock({
  code,
  language = 'typescript',
  showLineNumbers = false,
  fileName,
  className,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn('relative rounded-lg overflow-hidden border border-slate-800', className)}>
      {fileName && (
        <div className="flex items-center justify-between px-4 py-2 bg-slate-900/80 border-b border-slate-800">
          <span className="text-xs font-mono text-slate-400">{fileName}</span>
          <button
            onClick={copyToClipboard}
            className="flex items-center gap-1.5 px-2 py-1 text-xs text-slate-400 hover:text-slate-200 transition-colors rounded-md hover:bg-slate-800"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5" />
                Copied
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                Copy
              </>
            )}
          </button>
        </div>
      )}
      {!fileName && (
        <button
          onClick={copyToClipboard}
          className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-2 py-1 text-xs text-slate-400 hover:text-slate-200 transition-colors rounded-md bg-slate-900/80 hover:bg-slate-800 backdrop-blur-sm"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5" />
              Copied
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              Copy
            </>
          )}
        </button>
      )}
      <SyntaxHighlighter
        language={language}
        style={atomOneDark}
        showLineNumbers={showLineNumbers}
        customStyle={{
          margin: 0,
          padding: '1rem',
          fontSize: '0.875rem',
          background: 'transparent',
        }}
        codeTagProps={{
          style: {
            fontFamily: 'var(--font-geist-mono), monospace',
          },
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
