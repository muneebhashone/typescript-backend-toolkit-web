'use client';

import { Container } from '@/components/layout/Container';
import { Badge } from '@/components/ui/Badge';
import { motion } from 'motion/react';
import { Check, X, Minus } from 'lucide-react';

export function Comparison() {
  const frameworks = [
    { name: 'TBK', highlight: true },
    { name: 'Express', highlight: false },
    { name: 'NestJS', highlight: false },
    { name: 'Fastify', highlight: false },
  ];

  const features = [
    {
      category: 'Documentation',
      items: [
        {
          name: 'Auto-generated OpenAPI from schemas',
          tbk: 'check',
          express: 'x',
          nestjs: 'partial',
          fastify: 'partial',
        },
        {
          name: 'Interactive Swagger UI',
          tbk: 'check',
          express: 'x',
          nestjs: 'check',
          fastify: 'check',
        },
        {
          name: 'SDK generation',
          tbk: 'check',
          express: 'x',
          nestjs: 'x',
          fastify: 'x',
        },
      ],
    },
    {
      category: 'Developer Experience',
      items: [
        {
          name: 'Artisan-like CLI',
          tbk: 'check',
          express: 'x',
          nestjs: 'check',
          fastify: 'x',
        },
        {
          name: 'Module scaffolding',
          tbk: 'check',
          express: 'x',
          nestjs: 'check',
          fastify: 'x',
        },
        {
          name: 'Type-safe routes',
          tbk: 'check',
          express: 'x',
          nestjs: 'check',
          fastify: 'partial',
        },
        {
          name: 'Response validation',
          tbk: 'check',
          express: 'x',
          nestjs: 'partial',
          fastify: 'partial',
        },
      ],
    },
    {
      category: 'Built-in Features',
      items: [
        {
          name: 'Admin panel',
          tbk: 'check',
          express: 'x',
          nestjs: 'x',
          fastify: 'x',
        },
        {
          name: 'Background jobs & queue UI',
          tbk: 'check',
          express: 'x',
          nestjs: 'x',
          fastify: 'x',
        },
        {
          name: 'Email system with preview',
          tbk: 'check',
          express: 'x',
          nestjs: 'x',
          fastify: 'x',
        },
        {
          name: 'Session management',
          tbk: 'check',
          express: 'partial',
          nestjs: 'partial',
          fastify: 'partial',
        },
        {
          name: 'Real-time (Socket.IO)',
          tbk: 'check',
          express: 'x',
          nestjs: 'check',
          fastify: 'x',
        },
      ],
    },
    {
      category: 'Architecture',
      items: [
        {
          name: 'Plugin system',
          tbk: 'check',
          express: 'x',
          nestjs: 'check',
          fastify: 'check',
        },
        {
          name: 'Opinionated structure',
          tbk: 'check',
          express: 'x',
          nestjs: 'check',
          fastify: 'x',
        },
        {
          name: 'Learning curve',
          tbk: 'Low',
          express: 'Low',
          nestjs: 'High',
          fastify: 'Medium',
        },
      ],
    },
  ];

  const getIcon = (value: string) => {
    switch (value) {
      case 'check':
        return <Check className="w-5 h-5 text-green-400" />;
      case 'x':
        return <X className="w-5 h-5 text-red-400" />;
      case 'partial':
        return <Minus className="w-5 h-5 text-yellow-400" />;
      default:
        return <span className="text-sm text-slate-400">{value}</span>;
    }
  };

  return (
    <section id="comparison" className="relative py-20 overflow-hidden">
      <Container size="xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="warning" className="mb-4">
            Framework Comparison
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">How Does TBK Stack Up?</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Compare features with popular Node.js frameworks. TBK gives you
            Express simplicity with NestJS features.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-x-auto"
        >
          <div className="min-w-[800px]">
            {/* Header */}
            <div className="grid grid-cols-5 gap-4 mb-4">
              <div className="col-span-1"></div>
              {frameworks.map((framework, index) => (
                <div
                  key={index}
                  className={`text-center p-4 rounded-lg ${
                    framework.highlight
                      ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-500/50'
                      : 'bg-slate-900/50 border border-slate-800'
                  }`}
                >
                  <div className="text-lg font-bold text-slate-200">
                    {framework.name}
                  </div>
                  {framework.highlight && (
                    <Badge variant="glow" className="mt-2 text-xs">
                      Recommended
                    </Badge>
                  )}
                </div>
              ))}
            </div>

            {/* Features by category */}
            {features.map((category, catIndex) => (
              <div key={catIndex} className="mb-8">
                <h3 className="text-xl font-bold text-slate-300 mb-4">
                  {category.category}
                </h3>
                <div className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="grid grid-cols-5 gap-4 p-4 rounded-lg bg-slate-900/30 border border-slate-800 hover:border-slate-700 transition-colors"
                    >
                      <div className="col-span-1 flex items-center">
                        <span className="text-sm text-slate-300">
                          {item.name}
                        </span>
                      </div>
                      <div className="flex items-center justify-center">
                        {getIcon(item.tbk)}
                      </div>
                      <div className="flex items-center justify-center">
                        {getIcon(item.express)}
                      </div>
                      <div className="flex items-center justify-center">
                        {getIcon(item.nestjs)}
                      </div>
                      <div className="flex items-center justify-center">
                        {getIcon(item.fastify)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-6 p-6 rounded-xl bg-slate-900/50 border border-slate-800">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-400" />
              <span className="text-sm text-slate-400">Built-in</span>
            </div>
            <div className="flex items-center gap-2">
              <Minus className="w-5 h-5 text-yellow-400" />
              <span className="text-sm text-slate-400">Requires plugins</span>
            </div>
            <div className="flex items-center gap-2">
              <X className="w-5 h-5 text-red-400" />
              <span className="text-sm text-slate-400">Not available</span>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
