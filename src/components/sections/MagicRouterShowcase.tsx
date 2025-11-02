'use client';

import { Container } from '@/components/layout/Container';
import { CodeBlock } from '@/components/ui/CodeBlock';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, FileCode, Zap } from 'lucide-react';

export function MagicRouterShowcase() {
  const zodSchema = `// 1. Define your Zod schemas
import { z } from 'zod';

export const createUserSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2),
  age: z.number().min(18).optional(),
});

export const userResponseSchema = z.object({
  id: z.string(),
  email: z.string(),
  name: z.string(),
  createdAt: z.string().datetime(),
});`;

  const magicRouterCode = `// 2. Use MagicRouter (not plain Express)
import MagicRouter from '@/plugins/magic/router';
import { R } from '@/plugins/magic/response.builders';

const router = new MagicRouter('/api/users');

router.post('/', {
  requestType: { body: createUserSchema },
  responses: { 201: R.success(userResponseSchema) }
}, canAccess(), handleCreateUser);

export default router.getRouter();`;

  const openApiOutput = `# 3. OpenAPI docs auto-generated!
/api/users:
  post:
    summary: Create User
    requestBody:
      required: true
      content:
        application/json:
          schema:
            type: object
            properties:
              email:
                type: string
                format: email
              name:
                type: string
                minLength: 2
              age:
                type: number
                minimum: 18
            required: [email, name]
    responses:
      201:
        description: Success
        content:
          application/json:
            schema:
              type: object
              properties:
                success:
                  type: boolean
                data:
                  type: object
                  properties:
                    id:
                      type: string
                    email:
                      type: string
                    name:
                      type: string
                    createdAt:
                      type: string
                      format: date-time`;

  const features = [
    {
      icon: Sparkles,
      title: 'Auto-Generated OpenAPI',
      description:
        'Swagger docs generated from your Zod schemas. No manual YAML writing.',
    },
    {
      icon: Zap,
      title: 'Type-Safe Responses',
      description:
        'ResponseExtended<T> gives you typed response helpers. No more res.json() chaos.',
    },
    {
      icon: FileCode,
      title: 'Request Validation',
      description:
        'Zod validates all requests automatically. Invalid data never reaches your handler.',
    },
  ];

  return (
    <section id="magic-router" className="relative py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="gradient-blur gradient-blur-3" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="glow" className="mb-4">
            <Sparkles className="w-4 h-4" />
            The Magic
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            MagicRouter:{' '}
            <span className="text-gradient">Write Schemas, Get APIs</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Define Zod schemas once. Get validated routes, typed responses, and
            auto-generated OpenAPI documentation. No manual work required.
          </p>
        </motion.div>

        {/* Code flow */}
        <div className="space-y-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <CodeBlock
              code={zodSchema}
              language="typescript"
              fileName="src/modules/users/users.dto.ts"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex justify-center"
          >
            <ArrowRight className="w-8 h-8 text-purple-500 animate-pulse-glow" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <CodeBlock
              code={magicRouterCode}
              language="typescript"
              fileName="src/modules/users/users.router.ts"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="flex justify-center"
          >
            <ArrowRight className="w-8 h-8 text-purple-500 animate-pulse-glow" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <CodeBlock
              code={openApiOutput}
              language="yaml"
              fileName="public/openapi.yml (auto-generated)"
            />
          </motion.div>
        </div>

        {/* Features grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <Card
              key={index}
              variant="gradient"
              hover="lift"
              className="p-6 border-purple-500/20"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-4">
                <feature.icon className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-200 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-400">{feature.description}</p>
            </Card>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
