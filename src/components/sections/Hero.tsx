'use client';

import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Container } from '@/components/layout/Container';
import { ArrowRight, Github, FileText, Star, GitFork } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface GitHubStats {
  stars: number;
  forks: number;
}

export function Hero() {
  const [githubStats, setGithubStats] = useState<GitHubStats>({
    stars: 0,
    forks: 0,
  });

  useEffect(() => {
    // Fetch GitHub stats
    fetch(
      'https://api.github.com/repos/muneebhashone/typescript-backend-toolkit',
    )
      .then((res) => res.json())
      .then((data) => {
        setGithubStats({
          stars: data.stargazers_count || 0,
          forks: data.forks_count || 0,
        });
      })
      .catch(() => {
        // Silently fail, keep default values
      });
  }, []);

  const commands = [
    'pnpm create tbk-app my-app',
    'cd my-app',
    'pnpm install',
    'pnpm dev',
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background gradients */}
      <div className="gradient-blur gradient-blur-1" />
      <div className="gradient-blur gradient-blur-2" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block mb-6"
          >
            <Badge variant="glow" className="text-sm px-4 py-2 animate-float">
              <span className="text-2xl">{'{TS}'}</span>
            </Badge>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Build Production-Ready
            <br />
            <span className="text-gradient">APIs in Minutes</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl sm:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Auto-generated OpenAPI docs from Zod schemas. Artisan-like CLI.
            Type-safe everything.
            <br />
            <span className="text-purple-400 font-semibold">
              Express.js, but with superpowers.
            </span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-6"
          >
            <Button
              size="lg"
              href="https://github.com/muneebhashone/typescript-backend-toolkit"
            >
              <ArrowRight className="w-5 h-5" />
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              href="https://github.com/muneebhashone/typescript-backend-toolkit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5" />
              View on GitHub
            </Button>
            <Button size="lg" variant="ghost" href="#features">
              <FileText className="w-5 h-5" />
              Explore Features
            </Button>
          </motion.div>

          {/* GitHub stats */}
          {githubStats.stars > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center justify-center gap-6 text-sm text-slate-400 mb-12"
            >
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                <span>{githubStats.stars.toLocaleString()} stars</span>
              </div>
              <div className="flex items-center gap-2">
                <GitFork className="w-4 h-4" />
                <span>{githubStats.forks.toLocaleString()} forks</span>
              </div>
            </motion.div>
          )}

          {/* Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="terminal max-w-3xl mx-auto"
          >
            <div className="terminal-header">
              <div className="terminal-button terminal-close" />
              <div className="terminal-button terminal-minimize" />
              <div className="terminal-button terminal-maximize" />
              <span className="ml-2 text-sm text-slate-400">Quick Start</span>
            </div>
            <div className="terminal-body">
              {commands.map((command, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  className="flex items-center gap-3 mb-3 last:mb-0 group"
                >
                  <span className="text-purple-400 font-mono">$</span>
                  <span className="text-slate-200 font-mono text-sm flex-1">
                    {command}
                  </span>
                  <button
                    onClick={() => navigator.clipboard.writeText(command)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-500 hover:text-slate-300 p-1 rounded hover:bg-slate-800"
                    title="Copy command"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
