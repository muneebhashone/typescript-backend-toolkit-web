'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/layout/Container';
import { CodeBlock } from '@/components/ui/CodeBlock';
import { Badge } from '@/components/ui/Badge';
import {
  SpotlightCard,
  SpotlightCardHeader,
  SpotlightCardContent,
} from '@/components/ui/SpotlightCard';
import { motion } from 'motion/react';
import { Sparkles, FileCode, Zap } from 'lucide-react';

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
      title: 'Request & Response Validation',
      description:
        'Zod validates all requests and responses automatically. Invalid data never reaches your handler or your client.',
    },
  ];

  const steps = [
    {
      label: 'Zod Schema',
      code: zodSchema,
      language: 'typescript' as const,
      fileName: 'src/modules/users/users.dto.ts',
    },
    {
      label: 'MagicRouter',
      code: magicRouterCode,
      language: 'typescript' as const,
      fileName: 'src/modules/users/users.router.ts',
    },
    {
      label: 'OpenAPI',
      code: openApiOutput,
      language: 'yaml' as const,
      fileName: 'public/openapi.yml (auto-generated)',
    },
  ];

  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="magic-router" className="relative py-20 overflow-hidden">
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
        <div className="mb-16">
          {/* Segmented control */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-1 rounded-lg border border-slate-800 bg-slate-900/50 p-1">
              {steps.map((step, index) => (
                <Button
                  key={step.label}
                  variant={activeStep === index ? 'primary' : 'ghost'}
                  size="sm"
                  className="px-3 py-1.5"
                  onClick={() => setActiveStep(index)}
                >
                  {step.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Active code block */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="max-w-4xl mx-auto"
          >
            <CodeBlock
              code={steps[activeStep].code}
              language={steps[activeStep].language}
              fileName={steps[activeStep].fileName}
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
            <SpotlightCard key={index} className="border border-slate-800">
              <SpotlightCardHeader>
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/20 border border-primary/30">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
              </SpotlightCardHeader>
              <SpotlightCardContent>
                <h3 className="text-xl font-bold text-slate-200 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-400">{feature.description}</p>
              </SpotlightCardContent>
            </SpotlightCard>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
