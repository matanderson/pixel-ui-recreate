import React, { useState } from 'react';
import { ChartCard } from './ChartCard';

interface ContributionHeatmapProps {
  title: string;
  subtitle: string;
  contributionText: string;
}

export const ContributionHeatmap: React.FC<ContributionHeatmapProps> = ({
  title,
  subtitle,
  contributionText
}) => {
  const [selectedYear, setSelectedYear] = useState('2016');
  const years = ['2016', '2017', '2018', '2019'];

  return (
    <ChartCard>
      <header className="flex w-full gap-2.5 overflow-hidden p-[25px] max-md:px-5">
        <div className="min-w-60 flex-1 shrink basis-5">
          <h2 className="text-white text-[28px] font-bold">{title}</h2>
          <p className="text-[rgba(206,216,225,1)] text-base font-normal leading-10">{subtitle}</p>
        </div>
        <button className="bg-[rgba(21,26,32,1)] flex min-h-10 flex-col overflow-hidden items-center justify-center w-10 h-10 px-2.5 rounded-[50px]">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/a5f32956d5c87dc34856bed753cd5e4ebd117edf?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-[18px]"
            alt="Menu"
          />
        </button>
      </header>
      
      <section className="flex w-full flex-col overflow-hidden items-stretch pb-[25px] px-[25px] max-md:px-5">
        <div className="flex items-center gap-2.5 text-[11px] text-white font-bold whitespace-nowrap text-center uppercase tracking-[0.08px]">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`self-stretch flex items-center justify-center my-auto px-4 py-[9px] rounded-[50px] ${
                selectedYear === year
                  ? 'bg-[rgba(61,228,237,1)] text-black'
                  : 'border-[rgba(0,212,255,1)] border-solid border-2'
              }`}
            >
              <span className="self-stretch my-auto">{year}</span>
            </button>
          ))}
        </div>
        <p className="text-[#CED8E1] text-base font-normal leading-[23px] tracking-[0.5px] mt-2.5">
          {contributionText}
        </p>
        
        <div className="w-full mt-2.5">
          <div className="flex max-w-full w-[310px] items-center gap-[33px] text-sm text-white font-medium whitespace-nowrap leading-10 justify-between">
            <span className="self-stretch my-auto">Nov</span>
            <span className="self-stretch my-auto">Dec</span>
            <span className="self-stretch my-auto">Jan</span>
            <span className="self-stretch my-auto">Feb</span>
            <span className="self-stretch my-auto">Mar</span>
            <span className="self-stretch my-auto">Apr</span>
          </div>
          
          <div className="w-full max-w-[310px] overflow-hidden mt-2.5 rounded-md">
            {[...Array(7)].map((_, rowIndex) => (
              <div key={rowIndex} className="flex w-full items-center gap-[11px] justify-between mt-2.5">
                {[...Array(11)].map((_, colIndex) => {
                  const intensity = Math.random();
                  let bgColor = 'bg-[rgba(0,32,45,1)]';
                  if (intensity > 0.7) bgColor = 'bg-[rgba(163,254,204,1)]';
                  else if (intensity > 0.5) bgColor = 'bg-[rgba(0,124,132,1)]';
                  else if (intensity > 0.3) bgColor = 'bg-[rgba(0,50,70,1)]';
                  
                  return (
                    <div
                      key={colIndex}
                      className={`${bgColor} self-stretch flex w-[18px] shrink-0 h-[18px] my-auto rounded-[1px] cursor-pointer hover:opacity-80`}
                      title={`${Math.floor(intensity * 10)} contributions`}
                    />
                  );
                })}
              </div>
            ))}
          </div>
          
          <div className="flex w-full max-w-[310px] items-center text-[13px] justify-between mt-2.5">
            <div className="self-stretch flex min-w-60 gap-2.5 text-[rgba(91,255,170,1)] font-normal leading-[17px] w-[310px] my-auto">
              <p>Learn how we count contributions</p>
            </div>
            <div className="self-stretch flex items-center gap-2.5 text-white font-medium whitespace-nowrap my-auto">
              <span className="self-stretch my-auto">Less</span>
              <div className="bg-[rgba(0,32,45,1)] self-stretch flex w-[13px] shrink-0 h-[13px] my-auto rounded-[1px]" />
              <div className="bg-[rgba(0,50,70,1)] self-stretch flex w-[13px] shrink-0 h-[13px] my-auto rounded-[1px]" />
              <div className="bg-[rgba(0,124,132,1)] self-stretch flex w-[13px] shrink-0 h-[13px] my-auto rounded-[1px]" />
              <div className="bg-[rgba(163,254,204,1)] self-stretch flex w-[13px] shrink-0 h-[13px] my-auto rounded-[1px]" />
              <span className="self-stretch my-auto">More</span>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="flex w-full items-center gap-2.5 overflow-hidden text-[13px] text-black font-normal leading-none justify-center p-2.5">
        <button className="self-stretch flex min-w-60 w-full items-center gap-2.5 overflow-hidden justify-center flex-1 shrink basis-[0%] my-auto px-[15px] py-3 rounded-[9px]">
          <span className="self-stretch my-auto">Show more activity</span>
        </button>
      </footer>
    </ChartCard>
  );
};
