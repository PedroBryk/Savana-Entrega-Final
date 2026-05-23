import { cn } from '../../lib/utils';

interface CardIconProps {
    className?: string;
    src: string;
    alt?: string;
}

export const CardIcon = ({ className, src, alt }: CardIconProps) => {
  return (
    <img
    
        src={src}
        alt={alt}
        className={cn("rounded-sm object-cover w-32 h-32 mb-4", className)}
       
    />
  );
};