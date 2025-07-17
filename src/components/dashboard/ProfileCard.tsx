import React from 'react';
import { ChartCard } from './ChartCard';

interface ProfileCardProps {
  name: string;
  role: string;
  avatar: string;
  title: string;
  subtitle: string;
  buttonText?: string;
  icon?: string;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  role,
  avatar,
  title,
  subtitle,
  buttonText = "profile",
  icon
}) => {
  return (
    <ChartCard>
      <header className="flex w-full flex-col overflow-hidden items-stretch p-[25px] max-md:px-5">
        <div className="flex items-center gap-2.5 text-[28px] text-white font-bold">
          {icon && (
            <img
              src={icon}
              className="aspect-[1] object-contain w-[26px] self-stretch shrink-0 my-auto"
              alt="Icon"
            />
          )}
          <h2 className="self-stretch my-auto">{title}</h2>
        </div>
        <p className="text-[#CED8E1] text-base font-normal leading-[23px] tracking-[0.5px] mt-2.5">
          {subtitle}
        </p>
      </header>
      
      <section className="flex w-full flex-col overflow-hidden items-stretch justify-center p-[25px] max-md:px-5">
        <div className="w-full">
          <div className="flex w-full gap-7 justify-between">
            <div className="w-5 rounded-[10px] max-md:hidden">
              <div className="bg-[rgba(21,26,32,1)] pt-[253px] rounded-[10px] max-md:hidden max-md:pt-[100px]">
                <div className="bg-[rgba(255,195,0,1)] flex shrink-0 h-[89px] rounded-[10px]" />
              </div>
            </div>
            <div className="w-5 px-px rounded-[10px] max-md:hidden">
              <div className="bg-[rgba(21,26,32,1)] pt-[209px] rounded-[10px] max-md:hidden max-md:pt-[100px]">
                <div className="bg-[rgba(255,195,0,1)] flex shrink-0 h-[133px] rounded-[10px]" />
              </div>
            </div>
            <div className="w-5 rounded-[10px] max-md:hidden">
              <div className="bg-[rgba(21,26,32,1)] flex flex-col pt-36 px-px rounded-[10px] max-md:hidden max-md:pt-[100px]">
                <div className="bg-[rgba(255,195,0,1)] flex shrink-0 h-[198px] rounded-[10px] max-md:hidden" />
              </div>
            </div>
            <div className="w-5 rounded-[10px] max-md:hidden">
              <div className="bg-[rgba(21,26,32,1)] pt-[253px] rounded-[10px] max-md:hidden max-md:pt-[100px]">
                <div className="bg-[rgba(255,195,0,1)] flex shrink-0 h-[89px] rounded-[10px]" />
              </div>
            </div>
            <div className="w-[19px] rounded-[10px] max-md:hidden">
              <div className="bg-[rgba(21,26,32,1)] pt-[117px] rounded-[10px] max-md:hidden max-md:pt-[100px]">
                <div className="bg-[rgba(255,195,0,1)] flex shrink-0 h-[225px] rounded-[10px] max-md:hidden" />
              </div>
            </div>
            <div className="w-[19px] rounded-[10px] max-md:hidden">
              <div className="bg-[rgba(21,26,32,1)] pt-[65px] rounded-[10px] max-md:hidden">
                <div className="bg-[rgba(255,195,0,1)] flex shrink-0 h-[277px] rounded-[10px] max-md:hidden" />
              </div>
            </div>
            <div className="w-5 rounded-[10px] max-md:hidden">
              <div className="bg-[rgba(21,26,32,1)] pt-[209px] rounded-[10px] max-md:hidden max-md:pt-[100px]">
                <div className="bg-[rgba(255,195,0,1)] flex shrink-0 h-[133px] rounded-[10px]" />
              </div>
            </div>
          </div>
          <div className="flex w-full gap-[30px] text-[11px] text-white font-normal whitespace-nowrap text-center justify-between mt-2.5">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span className="bg-blend-normal">Sun</span>
          </div>
        </div>
      </section>
      
      <footer className="flex w-full flex-col overflow-hidden items-stretch justify-center p-[25px] max-md:px-5">
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
              <span className="self-stretch my-auto">{buttonText}</span>
            </button>
          </div>
        </div>
      </footer>
    </ChartCard>
  );
};
