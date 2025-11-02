import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition-all',
  {
    variants: {
      variant: {
        default: 'bg-slate-800 text-slate-300 border border-slate-700',
        primary: 'bg-primary/20 text-primary-light border border-primary/50',
        success: 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50',
        warning: 'bg-amber-500/20 text-amber-300 border border-amber-500/50',
        glow: 'bg-primary/20 text-primary-light border border-primary/50 shadow-lg shadow-primary/20',
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
