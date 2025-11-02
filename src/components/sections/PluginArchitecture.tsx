'use client';

import { Container } from '@/components/layout/Container';
import { Badge } from '@/components/ui/Badge';
import {
  SpotlightCard,
  SpotlightCardContent,
} from '@/components/ui/SpotlightCard';
import { CodeBlock } from '@/components/ui/CodeBlock';
import { motion } from 'motion/react';
import { Blocks, ArrowDown } from 'lucide-react';

export function PluginArchitecture() {
  const pluginExample = `import type { ToolkitPlugin, AppContext } from '@/types';

export const myPlugin: ToolkitPlugin = {
  name: 'my-plugin',
  priority: 50, // Higher priority = registered first

  async register(context: AppContext) {
    const { app, logger } = context;

    // Add middleware
    app.use((req, res, next) => {
      logger.info('Request received');
      next();
    });

    // Add routes
    app.get('/my-endpoint', (req, res) => {
      res.json({ message: 'Hello from plugin!' });
    });

    // Return URLs to display on startup
    return ['http://localhost:3000/my-endpoint'];
  },

  async onShutdown() {
    // Cleanup logic (optional)
  },
};`;

  const builtInPlugins = [
    {
      name: 'logger',
      description:
        'Pino logger with pretty printing, HTTP request logging, child logger factory',
      priority: 100,
    },
    {
      name: 'observability',
      description: 'Prometheus metrics, request IDs, health checks at /health',
      priority: 90,
    },
    {
      name: 'security',
      description: 'Helmet, CORS, rate limiting, XSS protection',
      priority: 80,
    },
    {
      name: 'cache',
      description: 'Redis/memory caching with middleware support',
      priority: 70,
    },
    {
      name: 'magic',
      description: 'MagicRouter, OpenAPI generation, response validation',
      priority: 60,
    },
    {
      name: 'auth',
      description: 'JWT extraction, session management, canAccess() middleware',
      priority: 50,
    },
    {
      name: 'admin',
      description: 'Django-style admin panel at /admin',
      priority: 40,
    },
    {
      name: 'realtime',
      description: 'Socket.IO with testing UI at /realtime',
      priority: 30,
    },
    {
      name: 'lifecycle',
      description: 'Graceful shutdown handling, cleanup on SIGTERM/SIGINT',
      priority: 20,
    },
  ];

  return (
    <section id="plugins" className="relative py-20 overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="primary" className="mb-4">
            <Blocks className="w-4 h-4" />
            Extensible Architecture
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">Plugin System</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Modular by design. Add features without touching core code. Every
            plugin can hook into the app lifecycle.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Plugin Flow Diagram */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-slate-200 mb-6">
              How Plugins Work
            </h3>
            <div className="space-y-4">
              <SpotlightCard>
                <SpotlightCardContent>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 border border-primary/50 text-primary font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-200">
                        Define Plugin
                      </h4>
                      <p className="text-sm text-slate-400">
                        Implement ToolkitPlugin interface
                      </p>
                    </div>
                  </div>
                </SpotlightCardContent>
              </SpotlightCard>

              <div className="flex justify-center">
                <ArrowDown className="w-6 h-6 text-primary" />
              </div>

              <SpotlightCard>
                <SpotlightCardContent>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-light/20 border border-primary-light/50 text-primary-light font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-200">
                        Register in createApp()
                      </h4>
                      <p className="text-sm text-slate-400">
                        Plugins sorted by priority
                      </p>
                    </div>
                  </div>
                </SpotlightCardContent>
              </SpotlightCard>

              <div className="flex justify-center">
                <ArrowDown className="w-6 h-6 text-primary" />
              </div>

              <SpotlightCard>
                <SpotlightCardContent>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-dark/20 border border-primary-dark/50 text-primary-dark font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-200">App Starts</h4>
                      <p className="text-sm text-slate-400">
                        Plugins initialize in order
                      </p>
                    </div>
                  </div>
                </SpotlightCardContent>
              </SpotlightCard>

              <div className="flex justify-center">
                <ArrowDown className="w-6 h-6 text-primary" />
              </div>

              <SpotlightCard>
                <SpotlightCardContent>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500/20 border border-green-500/50 text-green-400 font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-200">Ready to Use</h4>
                      <p className="text-sm text-slate-400">
                        Plugin features available
                      </p>
                    </div>
                  </div>
                </SpotlightCardContent>
              </SpotlightCard>
            </div>
          </motion.div>

          {/* Code Example */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-slate-200 mb-6">
              Create Your Own Plugin
            </h3>
            <CodeBlock code={pluginExample} language="typescript" />
            <div className="mt-4 p-4 rounded-lg bg-primary/10 border border-slate-800">
              <p className="text-sm text-primary-light">
                <strong>Pro tip:</strong> Use{' '}
                <code className="text-primary">pnpm tbk generate:plugin</code>{' '}
                to scaffold a plugin automatically!
              </p>
            </div>
          </motion.div>
        </div>

        {/* Built-in Plugins */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-slate-200 mb-6 text-center">
            Built-in Plugins (9 Total)
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {builtInPlugins.map((plugin, index) => (
              <SpotlightCard key={index}>
                <SpotlightCardContent className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-bold text-slate-200">{plugin.name}</h4>
                    <Badge variant="default" className="text-xs">
                      P{plugin.priority}
                    </Badge>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {plugin.description}
                  </p>
                </SpotlightCardContent>
              </SpotlightCard>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
