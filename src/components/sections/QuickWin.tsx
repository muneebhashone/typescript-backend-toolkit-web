'use client';

import { Container } from '@/components/layout/Container';
import { CodeBlock } from '@/components/ui/CodeBlock';
import { Badge } from '@/components/ui/Badge';
import { motion } from 'motion/react';
import { X, Check } from 'lucide-react';

export function QuickWin() {
  const withoutTBK = `// Traditional Express Setup
import express from 'express';

const app = express();

// Manual validation (or none at all)
app.post('/api/users', (req, res) => {
  const { email, name } = req.body;

  // Manual validation
  if (!email || !name) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  // No type safety
  // No auto-generated docs
  // No response validation

  res.json({ success: true });
});`;

  const withTBK = `// TypeScript Backend Toolkit
import MagicRouter from '@/plugins/magic/router';
import { R } from '@/plugins/magic/response.builders';
import { z } from 'zod';

const createUserSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2),
});

const responseSchema = R.success(z.object({
  id: z.string(),
  email: z.string()
}));

const router = new MagicRouter('/api/users');

router.post('/', {
  requestType: { body: createUserSchema },
  responses: { 201: responseSchema }
}, canAccess(), async (req, res) => {
  // Fully typed request & response
  // OpenAPI docs auto-generated
  // Response validation enabled

  return res.created?.({
    success: true,
    data: { id: '123', email: req.body.email }
  });
});`;

  return (
    <section id="quick-win" className="relative py-20 overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="primary" className="mb-4">
            The Difference
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">Less Code. More Safety.</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            See how TBK eliminates boilerplate while giving you type safety,
            auto-generated docs, and validated responses out of the box.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Without TBK */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/30">
                <X className="w-5 h-5 text-red-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-200">
                  Traditional Express
                </h3>
                <p className="text-sm text-slate-500">Manual everything</p>
              </div>
            </div>
            <CodeBlock code={withoutTBK} language="typescript" />
            <div className="mt-4 space-y-2">
              <div className="flex items-start gap-2 text-sm text-red-400">
                <X className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>No type safety</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-red-400">
                <X className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Manual API documentation</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-red-400">
                <X className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>No response validation</span>
              </div>
            </div>
          </motion.div>

          {/* With TBK */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-green-500/10 border border-green-500/30">
                <Check className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-200">
                  TypeScript Backend Toolkit
                </h3>
                <p className="text-sm text-slate-500">Auto-magic everywhere</p>
              </div>
            </div>
            <CodeBlock code={withTBK} language="typescript" />
            <div className="mt-4 space-y-2">
              <div className="flex items-start gap-2 text-sm text-green-400">
                <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Full type safety with inferred types</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-green-400">
                <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>OpenAPI docs auto-generated from schemas</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-green-400">
                <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Response validation in development</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
