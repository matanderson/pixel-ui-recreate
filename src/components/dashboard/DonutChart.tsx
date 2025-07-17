import React from 'react';
import { ChartCard } from './ChartCard';

interface DonutChartProps {
  title: string;
  subtitle: string;
  percentage: string;
  chartImage: string;
  legendItems: Array<{ color: string; label: string }>;
}

export const DonutChart: React.FC<DonutChartProps> = ({
  title,
  subtitle,
  percentage,
  chartImage,
  legendItems
}) => {
  return (
    <ChartCard>
      <header className="flex w-full gap-2.5 overflow-hidden p-[25px] max-md:px-5">
        <div className="min-w-60 flex-1 shrink basis-5">
          <h2 className="text-white text-[28px] font-bold">{title}</h2>
          <p className="text-[#CED8E1] text-base font-normal leading-[23px] tracking-[0.5px] mt-2.5">
            {subtitle}
          </p>
        </div>
        <button className="bg-[rgba(21,26,32,1)] flex min-h-10 flex-col overflow-hidden items-center justify-center w-10 h-10 px-2.5 rounded-[50px]">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/036c72918d311c8094f0094e95a9e57e291f9531?placeholderIfAbsent=true"
            className="aspect-[1.11] object-contain w-5"
            alt="Menu"
          />
        </button>
      </header>
      
      <div className="flex w-full items-center gap-[35px] overflow-hidden text-base text-white font-medium whitespace-nowrap justify-between p-[25px] max-md:px-5">
        <button className="rounded bg-[rgba(232,0,84,1)] self-stretch flex items-center justify-center my-auto px-[15px] py-2.5">
          <span className="self-stretch my-auto">Firefox</span>
        </button>
        <button className="rounded bg-[rgba(21,26,32,1)] self-stretch flex items-center justify-center my-auto px-[15px] py-2.5">
          <span className="self-stretch my-auto">Chrome</span>
        </button>
        <button className="rounded bg-[rgba(21,26,32,1)] self-stretch flex items-center justify-center my-auto px-[15px] py-2.5">
          <span className="self-stretch my-auto">Opera</span>
        </button>
      </div>
      
      <section className="flex w-full items-center gap-2.5 overflow-hidden text-2xl text-white font-bold whitespace-nowrap text-center leading-none justify-center p-[25px] max-md:px-5">
        <div className="self-stretch flex w-52 flex-col items-center justify-center my-auto px-[70px] py-[88px] max-md:px-5">
          <span>{percentage}</span>
        </div>
      </section>
      
      <footer className="flex w-full items-stretch gap-2.5 overflow-hidden text-base text-white font-normal whitespace-nowrap leading-none p-[25px] max-md:px-5">
        <div className="flex min-w-60 w-full items-center gap-3 overflow-hidden h-full flex-1 shrink basis-[0%]">
          {legendItems.map((item, index) => (
            <div key={index} className="self-stretch flex items-center gap-2.5 my-auto">
              <div className={`${item.color} self-stretch flex w-[27px] shrink-0 h-[13px] my-auto rounded-[20px]`} />
              <span className="self-stretch my-auto">{item.label}</span>
            </div>
          ))}
        </div>
      </footer>
    </ChartCard>
  );
};
