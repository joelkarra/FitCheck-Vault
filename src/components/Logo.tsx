import React from 'react';
import { cn } from '../lib/utils';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={cn("flex flex-col items-center justify-center select-none", className)}>
      <div className="flex items-baseline">
        <span className="text-3xl md:text-4xl font-serif font-medium text-[#5D3A1A] tracking-tight">
          FitCheck
        </span>
      </div>
      <div className="flex items-center w-full gap-2 -mt-1">
        <div className="h-[1px] flex-grow bg-[#5D3A1A]/60" />
        <span className="text-[10px] md:text-[11px] font-sans font-bold text-[#5D3A1A] tracking-[0.4em] uppercase">
          Vault
        </span>
        <div className="h-[1px] flex-grow bg-[#5D3A1A]/60" />
      </div>
    </div>
  );
};
