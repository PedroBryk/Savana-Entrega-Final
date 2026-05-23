import { ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface DescriptionProps {
  className?: string;
  children: ReactNode;
}

export const Description = ({ className, children }: DescriptionProps) => {
  return (
    <p className={cn("text-sm text-gray-500", className)}>{children}</p>
  );
};