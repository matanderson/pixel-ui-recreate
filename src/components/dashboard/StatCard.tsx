import React from 'react';
import { ChartCard } from './ChartCard';

interface StatCardProps {
  value: string;
  trend?: string;
  trendIcon?: string;
  title: string;
  subtitle: string;
  chartImage?: string;
  showChart?: boolean;
}

export const StatCard: React.FC<StatCardProps> = ({
  value,
  trend,
  trendIcon,
  title,
  subtitle,
  chartImage,
  showChart = true
}) => {
  return (
    <ChartCard>
      <header className="flex w-full items-center gap-[40px_100px] justify-between p-[25px] max-md:px-5">
        <div className="self-stretch flex items-center gap-[5px] my-auto">
          <h2 className="text-white text-[28px] font-bold self-stretch my-auto">{value}</h2>
          {trend && (
            <div className="self-stretch flex items-center text-base text-[rgba(0,250,255,1)] font-normal my-auto">
              {trendIcon && (
                <img
                  src={trendIcon}
                  className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
                  alt="Trend"
                />
              )}
              <span className="self-stretch my-auto">{trend}</span>
            </div>
          )}
        </div>
        <button className="self-stretch flex min-h-10 flex-col overflow-hidden items-center justify-center w-10 my-auto p-2.5 rounded-[50px]">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/788e594034fb60a040aa892af75cd7fa959fa730?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-1"
            alt="Menu"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/788e594034fb60a040aa892af75cd7fa959fa730?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-1 mt-1"
            alt="Menu"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/788e594034fb60a040aa892af75cd7fa959fa730?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-1 mt-1"
            alt="Menu"
          />
        </button>
      </header>
      
      {showChart && (
        <section className="flex w-full flex-col items-stretch justify-center p-[25px] max-md:px-5">
          <div className="flex min-h-[146px] w-full" />
        </section>
      )}
      
      <footer className="w-full overflow-hidden p-[25px] max-md:px-5">
        <h3 className="text-white text-[28px] font-bold">{title}</h3>
        <p className="text-[#CED8E1] text-base font-normal leading-[23px] tracking-[0.5px] mt-2.5">
          {subtitle}
        </p>
      </footer>
    </ChartCard>
  );
};
