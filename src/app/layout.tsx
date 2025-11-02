import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  title: 'TypeScript Backend Toolkit - Build Production-Ready APIs in Minutes',
  description:
    'Auto-generated OpenAPI docs from Zod schemas. Artisan-like CLI. Type-safe everything. Express.js framework with MagicRouter, JWT auth, file uploads, background jobs, admin panel, and more.',
  keywords: [
    'TypeScript',
    'Backend',
    'Express',
    'API',
    'OpenAPI',
    'Swagger',
    'Zod',
    'MagicRouter',
    'REST API',
    'Node.js',
    'Type-safe',
    'Backend framework',
    'Express framework',
    'TypeScript framework',
    'API documentation',
    'Backend toolkit',
  ],
  authors: [{ name: 'Muneeb Hussain Modi' }],
  openGraph: {
    images: [
      {
        url: 'https://raw.githubusercontent.com/muneebhashone/typescript-backend-toolkit/main/logo.png',
        width: 1200,
        height: 630,
        alt: 'TypeScript Backend Toolkit - Build Production-Ready APIs',
      },
    ],
    title:
      'TypeScript Backend Toolkit - Auto-Generated OpenAPI, Type-Safe Everything',
    description:
      'Express.js with superpowers. MagicRouter auto-generates OpenAPI docs from Zod schemas. Artisan-like CLI, JWT auth, file uploads, background jobs, admin panel. Production-ready in minutes.',
    type: 'website',
    siteName: 'TypeScript Backend Toolkit',
    url: 'https://github.com/muneebhashone/typescript-backend-toolkit',
  },
  twitter: {
    images: [
      {
        url: 'https://raw.githubusercontent.com/muneebhashone/typescript-backend-toolkit/main/logo.png',
        width: 1200,
        height: 630,
        alt: 'TypeScript Backend Toolkit - Build Production-Ready APIs',
      },
    ],
    card: 'summary_large_image',
    title:
      'TypeScript Backend Toolkit - Auto-Generated OpenAPI, Type-Safe Everything',
    description:
      'Express.js with superpowers. MagicRouter auto-generates OpenAPI docs from Zod schemas. Production-ready APIs in minutes.',
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL(
    'https://github.com/muneebhashone/typescript-backend-toolkit',
  ),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
