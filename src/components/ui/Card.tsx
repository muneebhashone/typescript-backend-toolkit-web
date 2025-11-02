import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const cardVariants = cva(
  'rounded-xl backdrop-blur-sm transition-all duration-300',
  {
    variants: {
      variant: {
        default: 'bg-slate-900/50 border border-slate-800',
        gradient:
          'bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-slate-700',
        glow: 'bg-slate-900/50 border border-slate-700 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20',
      },
      hover: {
        none: '',
        lift: 'hover:-translate-y-1',
        scale: 'hover:scale-[1.02]',
      },
    },
    defaultVariants: {
      variant: 'default',
      hover: 'none',
    },
  },
);

interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

export function Card({
  className,
  variant,
  hover,
  children,
  ...props
}: CardProps) {
  return (
    <div className={cn(cardVariants({ variant, hover, className }))} {...props}>
      {children}
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export function CardHeader({ className, children, ...props }: CardHeaderProps) {
  return (
    <div className={cn('p-6 pb-4', className)} {...props}>
      {children}
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export function CardContent({
  className,
  children,
  ...props
}: CardContentProps) {
  return (
    <div className={cn('p-6 pt-0', className)} {...props}>
      {children}
    </div>
  );
}
