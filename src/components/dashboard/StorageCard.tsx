import React from 'react';
import { ChartCard } from './ChartCard';

interface StorageCardProps {
  title: string;
  usedStorage: string;
  chartImage: string;
  legendItems: Array<{ color: string; label: string }>;
}

export const StorageCard: React.FC<StorageCardProps> = ({
  title,
  usedStorage,
  chartImage,
  legendItems
}) => {
  return (
    <ChartCard className="min-h-[360px] px-[31px] py-[34px] max-md:px-5">
      <section className="flex w-full items-center gap-10 overflow-hidden text-xs text-white font-normal whitespace-nowrap justify-between">
        <img
          src={chartImage}
          className="aspect-[1] object-contain w-[164px] self-stretch shrink-0 my-auto"
          alt="Storage chart"
        />
        <div className="self-stretch flex min-h-[82px] flex-col overflow-hidden justify-center w-[94px] my-auto">
          {legendItems.map((item, index) => (
            <div key={index} className="flex items-center gap-[11px] overflow-hidden mt-1.5 first:mt-0">
              <div className={`${item.color} self-stretch flex w-[11px] shrink-0 h-[11px] my-auto rounded-sm`} />
              <span className="self-stretch my-auto">{item.label}</span>
            </div>
          ))}
        </div>
      </section>
      
      <header className="flex w-full flex-col overflow-hidden text-[23px] text-white font-bold mt-[25px] max-md:pr-5">
        <h2>{title}</h2>
      </header>
      
      <footer className="flex w-full items-center gap-[40px_96px] overflow-hidden justify-between mt-[25px]">
        <div className="self-stretch flex flex-col overflow-hidden items-stretch w-[152px] my-auto py-px">
          <p className="text-white text-[15px] font-normal">Used storage</p>
          <div className="flex items-stretch gap-5 justify-between mt-1">
            <div className="bg-[rgba(58,12,163,1)] flex flex-col items-center w-[23px] h-[23px] mt-[5px] px-[5px] rounded-[50%]">
              <div className="bg-[rgba(255,214,0,1)] flex flex-col items-center w-[23px] h-[23px] px-0.5 rounded-[50%] max-md:mr-[-11px]">
                <div className="bg-[rgba(0,197,201,1)] flex flex-col items-center w-[23px] h-[23px] px-0.5 rounded-[50%] max-md:mr-[-11px]">
                  <div className="bg-[rgba(247,37,133,1)] flex w-[23px] shrink-0 h-[23px] rounded-[50%] max-md:mr-[-11px]" />
                </div>
              </div>
            </div>
            <span className="text-white text-[28px] font-bold">{usedStorage}</span>
          </div>
        </div>
        <button className="bg-[rgba(21,26,32,1)] self-stretch flex items-center gap-2.5 overflow-hidden justify-center w-12 h-12 my-auto px-3.5 rounded-[50px]">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/b0faff0640583a27895fbecf2f55460c7677f624?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-5 self-stretch my-auto"
            alt="Settings"
          />
        </button>
      </footer>
    </ChartCard>
  );
};
