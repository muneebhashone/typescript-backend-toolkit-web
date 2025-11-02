'use client';

import { Container } from '@/components/layout/Container';
import { Badge } from '@/components/ui/Badge';
import {
  SpotlightCard,
  SpotlightCardContent,
} from '@/components/ui/SpotlightCard';
import { motion } from 'motion/react';
import {
  FileText,
  Shield,
  Upload,
  CheckCircle,
  Mail,
  ListChecks,
  Database,
  Users,
  Wifi,
  Lock,
  Zap,
  Code,
} from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Code,
      title: 'MagicRouter',
      description:
        'Auto-generated OpenAPI docs from Zod schemas. Routes with superpowers.',
      code: `router.post('/', {
  requestType: { body: schema },
  responses: { 201: responseSchema }
}, handleCreate);`,
    },
    {
      icon: Shield,
      title: 'Session Management',
      description:
        'Built-in session system with MongoDB/Redis. Rotation, TTLs, max sessions.',
      code: `await createSession({
  userId,
  userAgent: req.headers['user-agent'],
  ipAddress: req.ip
});`,
    },
    {
      icon: Upload,
      title: 'File Uploads',
      description:
        'Formidable for file handling. S3/R2/local storage. Zod validation.',
      code: `const schema = z.object({
  avatar: zFile({
    maxSize: 5 * 1024 * 1024,
    allowedTypes: MIME_GROUPS.IMAGES
  })
});`,
    },
    {
      icon: CheckCircle,
      title: 'Zod Validation',
      description:
        'All requests validated with Zod. Type-safe DTOs and automatic error handling.',
      code: `const userSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2)
});`,
    },
    {
      icon: Mail,
      title: 'Email System',
      description:
        'React Email templates. SMTP/Resend/Mailgun. Preview UI in development.',
      code: `await sendEmail({
  to: user.email,
  template: 'welcome',
  data: { name: user.name }
});`,
    },
    {
      icon: ListChecks,
      title: 'Background Jobs',
      description:
        'BullMQ for queues. Redis-backed. Job dashboard UI at /queues.',
      code: `await emailQueue.add('sendWelcome', {
  email,
  name
}, { delay: 5000 });`,
    },
    {
      icon: Database,
      title: 'Database & ORM',
      description:
        'Mongoose for MongoDB. Migrations, seeders, and factories included.',
      code: `const User = mongoose.model('User', {
  email: String,
  name: String
});`,
    },
    {
      icon: Users,
      title: 'Admin Panel',
      description: 'Django-style auto-generated admin UI. Full CRUD at /admin.',
      code: `// Auto-generated from your models
// Visit http://localhost:3000/admin`,
    },
    {
      icon: Wifi,
      title: 'Real-time (Socket.IO)',
      description: 'WebSocket support with Socket.IO. Testing UI at /realtime.',
      code: `io.to(roomId).emit('message', {
  text: 'Hello',
  userId
});`,
    },
    {
      icon: Lock,
      title: 'Security',
      description:
        'Helmet, CORS, rate limiting, JWT auth. Production-ready out of the box.',
      code: `router.get('/', {},
  canAccess(),
  handleGetUser
);`,
    },
    {
      icon: Zap,
      title: 'Caching',
      description: 'Redis or in-memory caching. Cache middleware for routes.',
      code: `router.get('/', {},
  cache({ ttl: 300 }),
  handleGetItems
);`,
    },
    {
      icon: FileText,
      title: 'OpenAPI & SDK',
      description:
        'Generate OpenAPI specs and TypeScript SDKs from your routes.',
      code: `$ pnpm tbk docs:openapi
$ pnpm tbk docs:sdk`,
    },
  ];

  return (
    <section id="features" className="relative py-20 overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="success" className="mb-4">
            Everything Included
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">Production-Ready Features</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Stop configuring. Start building. Every feature you need is already
            here.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <SpotlightCard className="h-full">
                <SpotlightCardContent>
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/20 border border-slate-800 mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-200 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="bg-slate-950/50 rounded-lg p-3 border border-slate-800">
                    <pre className="text-xs font-mono text-slate-300 overflow-x-auto">
                      {feature.code}
                    </pre>
                  </div>
                </SpotlightCardContent>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
