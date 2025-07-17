import React from 'react';
import { ChartCard } from './ChartCard';

interface HorizontalBarChartProps {
  title: string;
  subtitle: string;
  name: string;
  role: string;
  avatar: string;
  buttonText?: string;
}

export const HorizontalBarChart: React.FC<HorizontalBarChartProps> = ({
  title,
  subtitle,
  name,
  role,
  avatar,
  buttonText = "profile"
}) => {
  return (
    <ChartCard>
      <header className="flex w-full gap-2.5 overflow-hidden text-[25px] text-white font-bold leading-[37px] p-[25px] max-md:px-5">
        <h2 className="flex-1 shrink basis-[0%]">{title}</h2>
      </header>
      
      <div className="flex w-full flex-col overflow-hidden items-stretch justify-center p-[25px] max-md:px-5">
        <div className="flex w-full items-center gap-2.5 overflow-hidden">
          <div className="self-stretch flex items-center gap-2.5 overflow-hidden flex-1 shrink basis-5 my-auto">
            <div className="self-stretch flex items-center w-[60px] my-auto">
              <img
                src={avatar}
                className="aspect-[1] object-contain w-[60px] self-stretch my-auto rounded-[50px]"
                alt={`${name} avatar`}
              />
            </div>
            <div className="self-stretch flex flex-col overflow-hidden items-stretch justify-center flex-1 shrink basis-[0%] my-auto">
              <h3 className="text-white text-xl font-medium">{name}</h3>
              <p className="text-[rgba(206,216,225,1)] text-[13px] font-normal">{role}</p>
            </div>
          </div>
          <div className="self-stretch flex min-h-[38px] items-center overflow-hidden text-[13px] text-white font-bold whitespace-nowrap text-center uppercase tracking-[1.08px] justify-center my-auto px-2.5 py-[3px] rounded-[7px]">
            <button className="self-stretch flex items-center justify-center my-auto px-4 py-[9px] rounded-[50px] border-white border-solid border-2">
              <span className="text-white self-stretch my-auto">{buttonText}</span>
            </button>
          </div>
        </div>
      </div>
      
      <section className="flex w-full gap-2.5 p-[25px] max-md:px-5">
        <div className="flex min-w-60 w-full flex-col flex-1 shrink basis-[0%]">
          <div className="bg-[rgba(21,26,32,1)] flex min-h-[30px] w-[186px] max-w-full items-stretch overflow-hidden rounded-[50px]">
            <div className="flex min-h-[30px] w-[97px] rounded-[50px]" />
          </div>
          <div className="bg-[rgba(21,26,32,1)] flex min-h-[30px] w-[247px] max-w-full items-stretch overflow-hidden mt-[9px] rounded-[50px]">
            <div className="flex min-h-[30px] w-[173px] rounded-[50px]" />
          </div>
          <div className="bg-[rgba(21,26,32,1)] flex min-h-[30px] w-[158px] max-w-full items-stretch overflow-hidden mt-[9px] rounded-[50px]">
            <div className="flex min-h-[30px] w-[93px] rounded-[50px]" />
          </div>
          <div className="bg-[rgba(21,26,32,1)] flex min-h-[30px] w-[99px] items-stretch overflow-hidden mt-[9px] rounded-[50px]">
            <div className="flex min-h-[30px] w-16 rounded-[50px]" />
          </div>
          <div className="bg-[rgba(21,26,32,1)] flex min-h-[30px] w-[194px] max-w-full items-stretch overflow-hidden mt-[9px] rounded-[50px]">
            <div className="flex min-h-[30px] w-[117px] rounded-[50px]" />
          </div>
        </div>
      </section>
      
      <footer className="flex w-full gap-2.5 overflow-hidden text-base text-[#CED8E1] font-normal tracking-[0.5px] leading-[23px] p-[25px] max-md:px-5">
        <p className="flex-1 shrink basis-[0%]">{subtitle}</p>
      </footer>
    </ChartCard>
  );
};
