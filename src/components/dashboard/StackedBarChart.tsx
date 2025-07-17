import React from 'react';
import { ChartCard } from './ChartCard';

interface StackedBarChartProps {
  title: string;
  subtitle: string;
  percentage: string;
  icon: string;
}

export const StackedBarChart: React.FC<StackedBarChartProps> = ({
  title,
  subtitle,
  percentage,
  icon
}) => {
  return (
    <ChartCard>
      <header className="w-full overflow-hidden p-[25px] max-md:px-5">
        <div className="flex w-full items-center gap-[40px_85px] text-white font-medium justify-between">
          <div className="self-stretch flex items-center gap-2.5 text-[28px] leading-none my-auto">
            <img
              src={icon}
              className="aspect-[1] object-contain w-[23px] self-stretch shrink-0 my-auto"
              alt="Chart icon"
            />
            <h2 className="self-stretch my-auto">{title}</h2>
          </div>
          <div className="self-stretch flex items-center gap-2 text-base whitespace-nowrap leading-10 my-auto">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/4e9d33b6d28bb09289658637fd437ff938fcf95c?placeholderIfAbsent=true"
              className="aspect-[2.54] object-contain w-7 self-stretch shrink-0 my-auto"
              alt="Trend indicator"
            />
            <span className="self-stretch my-auto">{percentage}</span>
          </div>
        </div>
        <p className="text-[#CED8E1] text-base font-normal leading-[23px] tracking-[0.5px] mt-2.5">
          {subtitle}
        </p>
      </header>
      
      <section className="flex w-full flex-col items-stretch justify-center p-[25px] max-md:px-5">
        <div className="flex w-full gap-[7px]">
          <div className="bg-[rgba(243,243,243,1)] min-h-40 overflow-hidden w-[31px] rounded-[5px]">
            <div className="bg-[rgba(232,0,84,1)] flex min-h-[37px] w-full flex-1 py-2.5" />
            <div className="bg-[rgba(255,195,0,1)] flex min-h-[37px] w-full flex-1 py-2.5" />
            <div className="bg-[rgba(86,11,173,1)] flex min-h-[86px] w-full" />
          </div>
          <div className="bg-[rgba(243,243,243,1)] min-h-[148px] overflow-hidden w-[31px] rounded-[5px]">
            <div className="bg-[rgba(232,0,84,1)] flex min-h-[23px] w-full flex-1 py-2.5" />
            <div className="bg-[rgba(255,195,0,1)] flex min-h-[76px] w-full" />
            <div className="bg-[rgba(86,11,173,1)] flex min-h-[49px] w-full" />
          </div>
          <div className="bg-[rgba(243,243,243,1)] min-h-[131px] overflow-hidden w-[31px] rounded-[5px]">
            <div className="bg-[rgba(232,0,84,1)] flex min-h-9 w-full flex-1 py-2.5" />
            <div className="bg-[rgba(255,195,0,1)] flex min-h-[67px] w-full" />
            <div className="bg-[rgba(86,11,173,1)] flex min-h-7 w-full" />
          </div>
          <div className="bg-[rgba(243,243,243,1)] min-h-[101px] overflow-hidden w-[31px] rounded-[5px]">
            <div className="bg-[rgba(232,0,84,1)] flex min-h-[18px] w-full flex-1 py-2.5" />
            <div className="bg-[rgba(255,195,0,1)] flex min-h-[34px] w-full" />
            <div className="bg-[rgba(86,11,173,1)] flex min-h-[49px] w-full" />
          </div>
          <div className="bg-[rgba(243,243,243,1)] min-h-[76px] overflow-hidden w-[31px] rounded-[5px]">
            <div className="bg-[rgba(232,0,84,1)] flex min-h-[37px] w-full flex-1 py-2.5" />
            <div className="bg-[rgba(255,195,0,1)] flex min-h-[18px] w-full" />
            <div className="bg-[rgba(86,11,173,1)] flex min-h-[21px] w-full" />
          </div>
          <div className="bg-[rgba(243,243,243,1)] min-h-[62px] overflow-hidden w-[31px] rounded-[5px]">
            <div className="bg-[rgba(232,0,84,1)] flex min-h-3 w-full flex-1 py-2.5" />
            <div className="bg-[rgba(255,195,0,1)] flex min-h-6 w-full" />
            <div className="bg-[rgba(86,11,173,1)] flex min-h-[26px] w-full" />
          </div>
          <div className="bg-[rgba(243,243,243,1)] min-h-[49px] overflow-hidden w-[31px] rounded-[5px]">
            <div className="bg-[rgba(232,0,84,1)] flex min-h-[21px] w-full flex-1 py-2.5" />
            <div className="bg-[rgba(255,195,0,1)] flex min-h-3 w-full" />
            <div className="bg-[rgba(86,11,173,1)] flex min-h-4 w-full" />
          </div>
          <div className="bg-[rgba(243,243,243,1)] min-h-[66px] overflow-hidden w-[31px] rounded-[5px]">
            <div className="bg-[rgba(232,0,84,1)] flex min-h-[49px] w-full flex-1 py-2.5" />
            <div className="bg-[rgba(255,195,0,1)] flex min-h-2 w-full" />
            <div className="bg-[rgba(86,11,173,1)] flex min-h-[9px] w-full" />
          </div>
        </div>
      </section>
    </ChartCard>
  );
};
