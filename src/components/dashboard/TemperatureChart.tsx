import React from 'react';
import { ChartCard } from './ChartCard';

interface TemperatureChartProps {
  title: string;
  subtitle: string;
  chartImage: string;
  footerTitle: string;
  footerDescription: string;
}

export const TemperatureChart: React.FC<TemperatureChartProps> = ({
  title,
  subtitle,
  chartImage,
  footerTitle,
  footerDescription
}) => {
  return (
    <ChartCard className="min-h-[522px]">
      <header className="flex w-full items-center gap-3.5 p-[25px] max-md:px-5">
        <div className="self-stretch flex min-w-60 flex-col justify-center flex-1 shrink basis-[18px] my-auto">
          <div className="flex gap-[5px]">
            <div className="flex gap-2.5 overflow-hidden w-[19px] px-1 py-px">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/95883e3e9d71a7a917fa102a9fb151a886b2c3ed?placeholderIfAbsent=true"
                className="aspect-[0.52] object-contain w-[11px]"
                alt="Temperature icon"
              />
            </div>
            <h2 className="text-white text-[22px] font-medium">{title}</h2>
          </div>
        </div>
        <button className="self-stretch flex min-h-10 flex-col overflow-hidden items-center justify-center w-10 my-auto px-[9px] py-3.5 rounded-[50px]">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/e2e4c01a85610c0f143f9bcfb35b054fa775e383?placeholderIfAbsent=true"
            className="aspect-[1.83] object-contain w-[22px]"
            alt="Menu"
          />
        </button>
      </header>
      
      <div className="flex w-full gap-2.5 text-[15px] text-[rgba(206,216,225,1)] font-normal px-[25px] py-2.5 max-md:px-5">
        <p>{subtitle}</p>
      </div>
      
      <section className="flex w-full gap-9 p-[25px] max-md:px-5">
        <img
          src={chartImage}
          className="aspect-[1.53] object-contain w-full min-w-60 flex-1 shrink basis-[0%]"
          alt="Temperature chart"
        />
      </section>
      
      <footer className="w-full overflow-hidden p-[25px] max-md:px-5">
        <h3 className="text-white text-2xl font-medium leading-none">{footerTitle}</h3>
        <p className="text-[#CED8E1] text-base font-normal leading-[23px] tracking-[0.5px] mt-2.5">
          {footerDescription}
        </p>
      </footer>
    </ChartCard>
  );
};
