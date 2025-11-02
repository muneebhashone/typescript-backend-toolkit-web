import { Container } from '@/components/layout/Container';
import { Github, Heart, ExternalLink } from 'lucide-react';

export function Footer() {
  const links = {
    product: [
      { label: 'Features', href: '#features' },
      { label: 'MagicRouter', href: '#magic-router' },
      { label: 'CLI', href: '#cli' },
      { label: 'Plugins', href: '#plugins' },
    ],
    resources: [
      {
        label: 'GitHub',
        href: 'https://github.com/muneebhashone/typescript-backend-toolkit',
        external: true,
      },
      {
        label: 'Documentation',
        href: 'https://github.com/muneebhashone/typescript-backend-toolkit#readme',
        external: true,
      },
      {
        label: 'Issues',
        href: 'https://github.com/muneebhashone/typescript-backend-toolkit/issues',
        external: true,
      },
      {
        label: 'Contributing',
        href: 'https://github.com/muneebhashone/typescript-backend-toolkit/blob/main/CONTRIBUTING.md',
        external: true,
      },
    ],
    compare: [
      { label: 'vs Express', href: '#comparison' },
      { label: 'vs NestJS', href: '#comparison' },
      { label: 'vs Fastify', href: '#comparison' },
    ],
  };

  return (
    <footer className="relative border-t border-slate-800 bg-slate-950/50 backdrop-blur-xl py-16">
      <Container>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="https://github.com/muneebhashone/typescript-backend-toolkit/raw/main/logo.png"
                alt="TypeScript Backend Toolkit Logo"
                className="w-8 h-8"
              />
              <span className="font-bold text-slate-100">TBK</span>
            </div>
            <p className="text-sm text-slate-400 mb-4 leading-relaxed">
              TypeScript Backend Toolkit - Build production-ready APIs with auto-generated docs,
              type safety, and developer happiness.
            </p>
            <a
              href="https://github.com/muneebhashone/typescript-backend-toolkit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-dark transition-colors"
            >
              <Github className="w-4 h-4" />
              View on GitHub
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-bold text-slate-200 mb-4">Product</h3>
            <ul className="space-y-3">
              {links.product.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-slate-200 mb-4">Resources</h3>
            <ul className="space-y-3">
              {links.resources.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="text-sm text-slate-400 hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    {link.label}
                    {link.external && <ExternalLink className="w-3 h-3" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Compare */}
          <div>
            <h3 className="font-bold text-slate-200 mb-4">Compare</h3>
            <ul className="space-y-3">
              {links.compare.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} TypeScript Backend Toolkit. Open source under MIT License.
          </p>
          <p className="text-sm text-slate-500 flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by developers, for
            developers
          </p>
        </div>
      </Container>
    </footer>
  );
}
