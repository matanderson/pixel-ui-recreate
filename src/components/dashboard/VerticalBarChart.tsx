import React from 'react';
import { ChartCard } from './ChartCard';

interface VerticalBarChartProps {
  title: string;
  subtitle: string;
  data?: any[];
  showLegend?: boolean;
}

export const VerticalBarChart: React.FC<VerticalBarChartProps> = ({ 
  title, 
  subtitle, 
  showLegend = true 
}) => {
  return (
    <ChartCard>
      <header className="flex w-full gap-[40px_100px] overflow-hidden justify-between p-[25px] max-md:px-5">
        <div>
          <h2 className="text-white text-[28px] font-bold">{title}</h2>
          <p className="text-[rgba(206,216,225,1)] text-base font-normal">{subtitle}</p>
        </div>
        <button className="flex min-h-10 flex-col overflow-hidden items-center justify-center w-10 p-2.5 rounded-[50px]">
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
      
      {showLegend && (
        <div className="flex w-full items-center gap-3 overflow-hidden text-sm text-white font-medium tracking-[0.5px] leading-loose px-[25px] py-2.5 max-md:px-5">
          <div className="self-stretch flex items-center gap-2.5 my-auto">
            <div className="bg-[rgba(247,37,133,1)] self-stretch flex w-[27px] shrink-0 h-[13px] my-auto rounded-[20px]" />
            <span className="self-stretch my-auto">Data one</span>
          </div>
          <div className="self-stretch flex items-center gap-2.5 my-auto">
            <div className="bg-[rgba(114,9,183,1)] self-stretch flex w-[27px] shrink-0 h-[13px] my-auto rounded-[20px]" />
            <span className="self-stretch my-auto">Data two</span>
          </div>
        </div>
      )}
      
      <section className="flex w-full flex-col items-stretch justify-center p-[25px] max-md:px-5">
        <div className="w-full max-w-[307px]">
          <div className="flex w-full items-stretch">
            <div className="flex mr-[-212px] items-stretch grow shrink basis-auto">
              <div className="mr-[-259px] w-full">
                <div className="border w-px shrink-0 h-[123px] ml-2.5 border-[rgba(50,75,85,1)] border-solid" />
                <div className="flex items-stretch">
                  <div className="bg-[rgba(247,37,133,1)] flex w-[22px] shrink-0 h-[115px] rounded-[30px_30px_0px_0px]" />
                  <div className="border shrink h-px grow basis-auto mt-[114px] border-[rgba(50,75,85,1)] border-solid max-md:mt-10" />
                </div>
              </div>
              <div className="flex flex-col items-stretch">
                <div className="border self-center w-px shrink-0 h-[123px] border-[rgba(50,75,85,1)] border-solid" />
                <div className="bg-[rgba(247,37,133,1)] flex shrink-0 h-[30px] rounded-[30px_30px_0px_0px]" />
              </div>
            </div>
            <div className="flex items-stretch gap-[26px]">
              <div className="flex flex-col items-stretch">
                <div className="border self-center w-px shrink-0 h-[123px] border-[rgba(50,75,85,1)] border-solid" />
                <div className="bg-[rgba(247,37,133,1)] flex shrink-0 h-[81px] rounded-[30px_30px_0px_0px]" />
              </div>
              <div className="flex flex-col items-stretch">
                <div className="border self-center w-px shrink-0 h-[123px] border-[rgba(50,75,85,1)] border-solid" />
                <div className="bg-[rgba(247,37,133,1)] flex shrink-0 h-[50px] rounded-[30px_30px_0px_0px]" />
              </div>
              <div className="flex flex-col items-stretch">
                <div className="border self-center w-px shrink-0 h-[123px] border-[rgba(50,75,85,1)] border-solid" />
                <div className="bg-[rgba(247,37,133,1)] flex shrink-0 h-[59px] rounded-[30px_30px_0px_0px]" />
              </div>
              <div className="flex flex-col items-stretch">
                <div className="border self-center w-px shrink-0 h-[123px] border-[rgba(50,75,85,1)] border-solid" />
                <div className="bg-[rgba(247,37,133,1)] flex shrink-0 h-[63px] rounded-[30px_30px_0px_0px]" />
              </div>
              <div className="flex flex-col items-stretch">
                <div className="border self-center w-px shrink-0 h-[123px] border-[rgba(50,75,85,1)] border-solid" />
                <div className="bg-[rgba(247,37,133,1)] flex shrink-0 h-[78px] rounded-[30px_30px_0px_0px]" />
              </div>
            </div>
          </div>
          <div className="flex gap-5 justify-between">
            <div className="bg-[rgba(114,9,183,1)] flex w-[22px] shrink-0 h-[18px] rounded-[30px_30px_0px_0px]" />
            <div className="bg-[rgba(114,9,183,1)] flex w-[21px] shrink-0 h-[41px] rounded-[30px_30px_0px_0px]" />
            <div className="bg-[rgba(114,9,183,1)] flex w-[22px] shrink-0 h-[26px] rounded-[30px_30px_0px_0px]" />
            <div className="bg-[rgba(114,9,183,1)] flex w-[21px] shrink-0 h-[35px] rounded-[30px_30px_0px_0px]" />
            <div className="bg-[rgba(114,9,183,1)] self-stretch flex w-[22px] shrink-0 h-14 rounded-[30px_30px_0px_0px]" />
            <div className="bg-[rgba(114,9,183,1)] flex w-[21px] shrink-0 h-[41px] rounded-[30px_30px_0px_0px]" />
            <div className="bg-[rgba(114,9,183,1)] flex w-[22px] shrink-0 h-[35px] rounded-[30px_30px_0px_0px]" />
          </div>
        </div>
      </section>
    </ChartCard>
  );
};
