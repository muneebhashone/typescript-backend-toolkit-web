import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition-all',
  {
    variants: {
      variant: {
        default: 'bg-slate-800 text-slate-300 border border-slate-700',
        primary: 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/50',
        success: 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50',
        warning: 'bg-amber-500/20 text-amber-300 border border-amber-500/50',
        glow: 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-blue-300 border border-blue-500/50 shadow-lg shadow-blue-500/20',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, children, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, className }))} {...props}>
      {children}
    </div>
  );
}
