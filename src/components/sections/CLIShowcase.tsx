'use client';

import { Container } from '@/components/layout/Container';
import { CodeBlock } from '@/components/ui/CodeBlock';
import { Badge } from '@/components/ui/Badge';
import {
  SpotlightCard,
  SpotlightCardContent,
} from '@/components/ui/SpotlightCard';
import { motion } from 'motion/react';
import { Terminal, Rocket, PackagePlus, Wrench } from 'lucide-react';

export function CLIShowcase() {
  const generateModule = `$ pnpm tbk generate:module products --path /api/v1

✨ Generating module: products
✅ Created src/modules/products/products.dto.ts
✅ Created src/modules/products/products.model.ts
✅ Created src/modules/products/products.schema.ts
✅ Created src/modules/products/products.service.ts
✅ Created src/modules/products/products.controller.ts
✅ Created src/modules/products/products.router.ts

📁 Module structure:
   products/
   ├── products.dto.ts        # Zod schemas & types
   ├── products.model.ts      # Mongoose model
   ├── products.schema.ts     # Request/response schemas
   ├── products.service.ts    # Business logic
   ├── products.controller.ts # HTTP handlers
   └── products.router.ts     # MagicRouter routes

🎯 Next steps:
   1. Register router in src/routes/routes.ts
   2. Customize the model with your fields
   3. Implement service functions
   4. Run \`pnpm tbk docs:openapi\` to generate docs`;

  const generateDocs = `$ pnpm tbk docs:openapi

📝 Generating OpenAPI documentation...
✅ Scanned 12 routes across 5 modules
✅ Generated public/openapi.yml
✅ Swagger UI available at http://localhost:3000/docs

$ pnpm tbk docs:sdk

🔨 Generating TypeScript SDK...
✅ Created client/sdk/
✅ Type-safe API client ready to use in your frontend!`;

  const otherCommands = [
    {
      command: 'pnpm tbk generate:plugin auth-provider',
      description: 'Scaffold a new plugin',
    },
    {
      command: 'pnpm tbk generate:middleware rate-limiter',
      description: 'Create a custom middleware',
    },
    {
      command: 'pnpm tbk generate:factory User',
      description: 'Generate factory for testing',
    },
    {
      command: 'pnpm tbk seed',
      description: 'Run database seeders',
    },
  ];

  const cliFeatures = [
    {
      icon: PackagePlus,
      title: 'Scaffold Complete Modules',
      description:
        'Generate all 6 files (DTOs, model, schema, service, controller, router) following best practices.',
    },
    {
      icon: Rocket,
      title: 'Auto-Generate Documentation',
      description:
        'Create OpenAPI specs and TypeScript SDKs from your existing routes.',
    },
    {
      icon: Wrench,
      title: 'Extend With Plugins',
      description:
        'Generate plugins, middleware, factories, and more with a single command.',
    },
  ];

  return (
    <section id="cli" className="relative py-20 overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="primary" className="mb-4">
            <Terminal className="w-4 h-4" />
            Artisan-like CLI
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">
              tbk CLI: Laravel Artisan Vibes
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Scaffold modules, generate docs, seed databases - all from your
            terminal. Productivity on steroids.
          </p>
        </motion.div>

        {/* Generate Module Demo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-slate-200 mb-4">
            Generate a complete module in seconds
          </h3>
          <CodeBlock code={generateModule} language="bash" />
        </motion.div>

        {/* Generate Docs Demo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-slate-200 mb-4">
            Auto-generate docs and SDK
          </h3>
          <CodeBlock code={generateDocs} language="bash" />
        </motion.div>

        {/* Other Commands */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-slate-200 mb-6">
            More CLI commands
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {otherCommands.map((item, index) => (
              <SpotlightCard key={index}>
                <SpotlightCardContent>
                  <code className="text-sm text-primary font-mono block mb-2">
                    {item.command}
                  </code>
                  <p className="text-sm text-slate-400">{item.description}</p>
                </SpotlightCardContent>
              </SpotlightCard>
            ))}
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {cliFeatures.map((feature, index) => (
            <SpotlightCard key={index}>
              <SpotlightCardContent>
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/20 border border-slate-800 mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
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
