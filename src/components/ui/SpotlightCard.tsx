'use client';

import { useRef, useState, type MouseEvent } from 'react';
import { cn } from '@/lib/utils';

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  spotlightColor?: string;
  spotlightSize?: number;
}

export function SpotlightCard({
  children,
  className,
  spotlightColor = 'rgba(99, 102, 241, 0.15)',
  spotlightSize = 250,
  ...props
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        'relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm transition-all duration-300',
        className,
      )}
      {...props}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(${spotlightSize}px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
        }}
      />
      {children}
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface SpotlightCardHeaderProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function SpotlightCardHeader({
  className,
  children,
  ...props
}: SpotlightCardHeaderProps) {
  return (
    <div className={cn('relative z-10 p-6 pb-4', className)} {...props}>
      {children}
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface SpotlightCardContentProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function SpotlightCardContent({
  className,
  children,
  ...props
}: SpotlightCardContentProps) {
  return (
    <div className={cn('relative z-10 p-6', className)} {...props}>
      {children}
    </div>
  );
}
