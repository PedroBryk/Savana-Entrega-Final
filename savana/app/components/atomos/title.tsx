import { cn } from '../../lib/utils';
import { ReactNode } from 'react';

interface TitleProps {

    children: ReactNode;
    className?: string;

}

export const Title = ({children, className}: TitleProps) => {
    return (
    <h1
      className={cn(
        "text-3xl font-bold",
        className
      )}
    >
      {children}
    </h1>
  );
};