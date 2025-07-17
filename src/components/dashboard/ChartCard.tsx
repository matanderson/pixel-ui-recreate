import React, { ReactNode } from 'react';

interface ChartCardProps {
  children: ReactNode;
  className?: string;
}

export const ChartCard: React.FC<ChartCardProps> = ({ children, className = "" }) => {
  return (
    <article className={`bg-[rgba(10,13,16,1)] overflow-hidden rounded-[20px] ${className}`}>
      {children}
    </article>
  );
};
