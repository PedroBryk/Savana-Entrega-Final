import { cn } from '../../lib/utils';
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      className={cn(
        "rounded-sm px-4 py-2 bg-inputColor text-inputTextColor min-w-[300px] max-w-[700px]",
        className
      )}
      {...props}
    />
  );
};
