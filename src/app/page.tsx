import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { QuickWin } from '@/components/sections/QuickWin';
import { MagicRouterShowcase } from '@/components/sections/MagicRouterShowcase';
import { CLIShowcase } from '@/components/sections/CLIShowcase';
import { Features } from '@/components/sections/Features';
import { Comparison } from '@/components/sections/Comparison';
import { PluginArchitecture } from '@/components/sections/PluginArchitecture';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="relative bg-slate-950">
        {/* Background gradients */}
        <div className="gradient-blur gradient-blur-1" />
        <div className="gradient-blur gradient-blur-2" />
        <div className="gradient-blur gradient-blur-3" />

        <Hero />
        <QuickWin />
        <MagicRouterShowcase />
        <CLIShowcase />
        <Features />
        <Comparison />
        <PluginArchitecture />
      </main>
      <Footer />
    </>
  );
}
