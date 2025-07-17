import React from 'react';
import { VerticalBarChart } from '@/components/dashboard/VerticalBarChart';
import { TemperatureChart } from '@/components/dashboard/TemperatureChart';
import { StackedBarChart } from '@/components/dashboard/StackedBarChart';
import { DonutChart } from '@/components/dashboard/DonutChart';
import { ProfileCard } from '@/components/dashboard/ProfileCard';
import { StatCard } from '@/components/dashboard/StatCard';
import { ContributionHeatmap } from '@/components/dashboard/ContributionHeatmap';
import { StorageCard } from '@/components/dashboard/StorageCard';
import { HorizontalBarChart } from '@/components/dashboard/HorizontalBarChart';
import { ChartCard } from '@/components/dashboard/ChartCard';

const Index = () => {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="flex gap-[25px] overflow-hidden flex-wrap">
        {/* First Column */}
        <div className="flex flex-col">
          <VerticalBarChart 
            title="Vertical bar"
            subtitle="Statistics of the month"
          />
          
          <div className="mt-[25px]">
            <TemperatureChart
              title="Temperatures"
              subtitle="Average temperatures for July"
              chartImage="https://api.builder.io/api/v1/image/assets/TEMP/33770ca21d24f3a0c0c779b55990ab8d8737a43b?placeholderIfAbsent=true"
              footerTitle="Area range and line"
              footerDescription="Minim dolor in amet nulla laboris enim dolore consequatt..."
            />
          </div>
          
          <div className="mt-[25px]">
            <StackedBarChart
              title="Bar chart"
              subtitle="Minim dolor in amet nulla laboris enim dolore consequatt..."
              percentage="+86%"
              icon="https://api.builder.io/api/v1/image/assets/TEMP/8d1fe2f55fc12d3a2b17e1664960eefde3dc7844?placeholderIfAbsent=true"
            />
          </div>
          
          <div className="mt-[25px]">
            <DonutChart
              title="Contributions"
              subtitle="Minim dolor in amet nulla laboris enim dolore consequatt."
              percentage="99%"
              chartImage=""
              legendItems={[
                { color: "bg-[rgba(232,0,84,1)]", label: "Firefox" },
                { color: "bg-[rgba(255,195,0,1)]", label: "Chrome" },
                { color: "bg-[rgba(0,213,255,1)]", label: "Opera" }
              ]}
            />
          </div>
          
          <div className="mt-[25px]">
            <ProfileCard
              name="Robert Fox"
              role="Software Developer"
              avatar="https://api.builder.io/api/v1/image/assets/TEMP/74b5b2980ddea0303ce85e5a2a01eb25c52b1550?placeholderIfAbsent=true"
              title="Contributions"
              subtitle="Minim dolor in amet nulla laboris enim dolore consequatt."
              icon="https://api.builder.io/api/v1/image/assets/TEMP/d7bb87ee725569a29d71e063fa0444ad60095cc2?placeholderIfAbsent=true"
            />
          </div>
        </div>

        {/* Second Column */}
        <div className="flex flex-col">
          <StatCard
            value="854"
            trend="25 upward"
            trendIcon="https://api.builder.io/api/v1/image/assets/TEMP/cb93fc7aa3ada0f79173e2545f25ff98461f5652?placeholderIfAbsent=true"
            title="Vertical bar"
            subtitle="Minim dolor in amet nulla laboris enim dolore consequatt..."
          />
          
          <div className="mt-[25px]">
            <ChartCard>
              <header className="flex w-full items-center gap-[40px_100px] justify-between p-[25px] max-md:px-5">
                <div className="self-stretch flex items-center gap-[5px] my-auto">
                  <h2 className="text-white text-[28px] font-bold self-stretch my-auto">854</h2>
                  <div className="self-stretch flex items-center w-6 my-auto">
                    <div className="self-stretch flex min-h-6 w-6 my-auto" />
                  </div>
                </div>
                <button className="self-stretch flex min-h-10 flex-col overflow-hidden items-center justify-center w-10 h-10 my-auto px-[9px] py-3.5 rounded-[50px]">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/dbd8b9277de83c8d661e14a9cbd0542ee7611c74?placeholderIfAbsent=true"
                    className="aspect-[1.83] object-contain w-[22px]"
                    alt="Menu"
                  />
                </button>
              </header>
              <section className="flex w-full gap-9 p-[25px] max-md:px-5">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/6afe3195f4461c409b946dfcd922931d2c902f38?placeholderIfAbsent=true"
                  className="aspect-[1.53] object-contain w-full min-w-60 flex-1 shrink basis-[0%]"
                  alt="Chart"
                />
              </section>
              <footer className="w-full overflow-hidden p-[25px] max-md:px-5">
                <h3 className="text-white text-2xl font-medium leading-[33px]">
                  Atmosphere Temperature <br />
                  by Altitude
                </h3>
                <p className="text-[#CED8E1] text-base font-normal leading-[23px] tracking-[0.5px] mt-2.5">
                  Minim dolor in amet nulla laboris enim dolore consequatt...
                </p>
              </footer>
            </ChartCard>
          </div>
          
          <div className="mt-[25px]">
            <HorizontalBarChart
              title="Horizontal bar chart with border radius"
              subtitle="Minim dolor in amet nulla laboris enim dolore consequatt..."
              name="Andres"
              role="Team Leader"
              avatar="https://api.builder.io/api/v1/image/assets/TEMP/35ae4b76c983caee4fcfe1d2ca4c8dee98814c64?placeholderIfAbsent=true"
            />
          </div>
          
          <div className="mt-[25px]">
            <ContributionHeatmap
              title="Sales per employee per month"
              subtitle="263 contributions in the last year"
              contributionText="Minim dolor in amet nulla laboris enim dolore consequatt."
            />
          </div>
          
          <div className="mt-[25px]">
            <ChartCard>
              <header className="w-full overflow-hidden p-[25px] max-md:px-5">
                <div className="flex w-full items-center gap-[40px_43px] justify-between">
                  <h2 className="text-white text-2xl font-bold self-stretch my-auto">Status of imports</h2>
                  <span className="text-[rgba(206,216,225,1)] text-[13px] font-normal self-stretch my-auto">January 2021</span>
                </div>
                <p className="text-[#CED8E1] text-base font-normal leading-[23px] tracking-[0.5px] mt-2.5">
                  Minim dolor in amet nulla laboris enim dolore consequatt.
                </p>
              </header>
              <section className="flex w-full items-center gap-2.5 overflow-hidden justify-center p-2.5">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/17e5bfa6339b1a5d29b9c300fd80a5f3564bdc31?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-[287px] self-stretch min-w-60 my-auto"
                  alt="Status chart"
                />
              </section>
            </ChartCard>
          </div>
        </div>

        {/* Third Column */}
        <div className="flex flex-col">
          <ChartCard>
            <header className="flex w-full items-center gap-[40px_54px] justify-between p-[25px] max-md:px-5">
              <div className="self-stretch flex items-center gap-2.5 text-xl text-white font-medium tracking-[0.5px] my-auto">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/2d83024ed68203ee9cff4b70f3a1a09bd382d453?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
                  alt="Temperature icon"
                />
                <h2 className="self-stretch my-auto">Temperature theme</h2>
              </div>
              <button className="bg-[rgba(21,26,32,1)] self-stretch flex min-h-10 flex-col overflow-hidden items-center justify-center w-10 h-10 my-auto px-2.5 rounded-[50px]">
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
            <section className="w-full text-[28px] text-white font-bold whitespace-nowrap px-[25px] max-md:px-5">
              <span>4.875</span>
            </section>
            <div className="w-full overflow-hidden text-[13px] text-white font-normal whitespace-nowrap tracking-[0.5px] pt-[27px] pb-[43px] px-[22px] max-md:px-5">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/29d52ed7ee40ad3e6961ee2663a45af419b022e1?placeholderIfAbsent=true"
                className="aspect-[3] object-contain w-full"
                alt="Temperature graph"
              />
              <div className="border w-[310px] shrink-0 max-w-full h-px mt-[17px] border-[rgba(21,26,32,1)] border-solid max-md:mr-0.5" />
              <div className="border w-[310px] shrink-0 max-w-full h-px mt-[29px] border-[rgba(21,26,32,1)] border-solid max-md:mr-0.5" />
              <div className="flex items-center gap-[15px] justify-between mt-4 max-md:mr-0.5">
                <span className="self-stretch my-auto">8:00am</span>
                <span className="self-stretch my-auto">10:00am</span>
                <span className="self-stretch my-auto">12:00am</span>
                <span className="self-stretch my-auto">1:00pm</span>
                <span className="self-stretch my-auto">3:00pm</span>
              </div>
            </div>
          </ChartCard>
          
          <div className="mt-[25px]">
            <ChartCard>
              <header className="flex w-full items-center gap-[40px_100px] justify-between p-[25px] max-md:px-5">
                <div className="self-stretch flex items-center gap-[5px] my-auto">
                  <h2 className="text-white text-[33px] font-medium self-stretch my-auto">85km/h</h2>
                  <div className="self-stretch flex items-center w-6 my-auto">
                    <div className="self-stretch flex min-h-6 w-6 my-auto" />
                  </div>
                </div>
                <button className="bg-[rgba(21,26,32,1)] self-stretch flex min-h-10 flex-col overflow-hidden items-center justify-center w-10 h-10 my-auto px-2.5 rounded-[50px]">
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
              <section className="flex min-h-[107px] w-full flex-col items-stretch justify-center px-[25px] py-px max-md:px-5">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/4445bf5d4ddfa6311b6922c8ac10557cb1300fb6?placeholderIfAbsent=true"
                  className="aspect-[2.92] object-contain w-full"
                  alt="Wind speed chart"
                />
              </section>
              <footer className="w-full overflow-hidden p-[25px] max-md:px-5">
                <div className="flex w-full items-center gap-[40px_93px] justify-between">
                  <h3 className="text-white text-[29px] font-bold self-stretch my-auto">Win speed</h3>
                  <span className="text-[rgba(206,216,225,1)] text-[17px] font-normal self-stretch my-auto">Sunday 23</span>
                </div>
                <p className="text-[#CED8E1] text-base font-normal leading-[23px] tracking-[0.5px] mt-2.5">
                  Minim dolor in amet nulla laboris enim dolore consequatt...
                </p>
              </footer>
            </ChartCard>
          </div>
          
          <div className="mt-[25px]">
            <ChartCard>
              <header className="w-full overflow-hidden p-[25px] max-md:px-5">
                <h2 className="text-white text-[28px] font-bold leading-[37px]">Average of the first economies</h2>
                <p className="text-[#CED8E1] text-base font-normal leading-[23px] tracking-[0.5px] mt-2.5">
                  Minim dolor in amet nulla laboris enim dolore consequatt.
                </p>
              </header>
              <section className="flex w-full flex-col overflow-hidden items-stretch text-[15px] justify-center pb-[25px] px-[25px] max-md:px-5">
                <div className="flex w-full gap-[40px_100px] font-normal justify-between">
                  <span className="text-white">List of countries</span>
                  <span className="text-[rgba(206,216,225,1)]">8 countries</span>
                </div>
                <div className="flex w-full flex-col text-black font-medium text-center mt-3">
                  <div className="bg-[rgba(2,62,138,1)] self-stretch flex w-full items-center gap-2.5 overflow-hidden text-white whitespace-nowrap px-[15px] py-2.5 rounded-[6px_6px_0px_0px]">
                    <span className="self-stretch my-auto">Noruega</span>
                  </div>
                  <div className="bg-[rgba(0,119,182,1)] flex w-[280px] max-w-full items-center gap-2.5 overflow-hidden whitespace-nowrap px-[15px] py-2.5 rounded-[0px_0px_6px_0px]">
                    <span className="self-stretch my-auto">Australia</span>
                  </div>
                  <div className="bg-[rgba(0,150,199,1)] flex w-[251px] max-w-full items-center gap-2.5 overflow-hidden whitespace-nowrap px-[15px] py-2.5 rounded-[0px_0px_6px_0px]">
                    <span className="self-stretch my-auto">Suiza</span>
                  </div>
                  <div className="bg-[rgba(0,180,216,1)] flex w-56 max-w-full items-center gap-2.5 overflow-hidden px-[15px] py-2.5 rounded-[0px_0px_6px_0px]">
                    <span className="self-stretch my-auto">Países Bajos</span>
                  </div>
                  <div className="bg-[rgba(72,202,228,1)] flex w-[195px] max-w-full items-center gap-2.5 overflow-hidden px-[15px] py-2.5 rounded-[0px_0px_6px_0px]">
                    <span className="self-stretch my-auto">Estados Unidos</span>
                  </div>
                  <div className="bg-[rgba(144,224,239,1)] flex w-[187px] max-w-full items-center gap-2.5 overflow-hidden whitespace-nowrap px-[15px] py-2.5 rounded-[0px_0px_6px_0px]">
                    <span className="self-stretch my-auto">Alemania</span>
                  </div>
                  <div className="bg-[rgba(173,232,244,1)] flex w-[133px] max-w-full items-center gap-2.5 overflow-hidden px-[15px] py-2.5 rounded-[0px_0px_6px_0px]">
                    <span className="self-stretch my-auto">Nueva Zelanda</span>
                  </div>
                  <div className="bg-[rgba(202,240,248,1)] flex w-[101px] max-w-full items-center gap-2.5 overflow-hidden px-[15px] py-2.5 rounded-[0px_0px_6px_6px]">
                    <span className="self-stretch my-auto">Canadá</span>
                  </div>
                </div>
              </section>
              <footer className="flex w-full flex-col overflow-hidden items-stretch text-base text-[#CED8E1] font-normal tracking-[0.5px] leading-[23px] justify-center p-[25px] max-md:px-5">
                <p>Minim dolor in amet nulla laboris enim dolore consequatt.</p>
              </footer>
            </ChartCard>
          </div>
          
          <div className="mt-[25px]">
            <ChartCard className="flex flex-col items-stretch justify-center">
              <header className="flex w-full items-center gap-[40px_58px] justify-between p-[25px] max-md:px-5">
                <h2 className="text-white text-[22px] font-bold self-stretch my-auto">Personal Diagnostics</h2>
                <button className="bg-[rgba(21,26,32,1)] self-stretch flex min-h-10 flex-col overflow-hidden items-center justify-center w-10 h-10 my-auto px-2.5 rounded-[50px]">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/a5f32956d5c87dc34856bed753cd5e4ebd117edf?placeholderIfAbsent=true"
                    className="aspect-[1] object-contain w-[18px]"
                    alt="Menu"
                  />
                </button>
              </header>
              <div className="flex w-full text-center justify-center pt-[25px] px-[25px] max-md:px-5">
                <div className="min-w-60 w-full overflow-hidden flex-1 shrink basis-[0%]">
                  <div className="flex w-full flex-col overflow-hidden items-stretch">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/81dd4805d37b51d537106d6def19e240181b6fb3?placeholderIfAbsent=true"
                      className="aspect-[1] object-contain w-[100px] self-center max-w-full"
                      alt="Profile"
                    />
                    <div className="flex w-full flex-col overflow-hidden items-stretch mt-2.5">
                      <h3 className="text-white text-lg font-medium self-center">Marvin McKinney</h3>
                      <p className="text-[rgba(195,217,225,1)] text-[15px] font-normal leading-[26px] tracking-[0.5px]">
                        Scrum Master
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <section className="flex w-full flex-col items-center text-center p-[25px] max-md:px-5">
                <div className="text-6xl font-black leading-[1.1] max-md:text-[40px]">8K</div>
                <p className="text-white text-base font-normal leading-[23px] mt-1.5">
                  263 contributions in <br />
                  the last year
                </p>
                <div className="flex min-h-14 gap-1 mt-1.5" />
              </section>
            </ChartCard>
          </div>
          
          <div className="mt-[25px]">
            <ChartCard>
              <header className="flex w-full items-stretch gap-3.5 p-[25px] max-md:px-5">
                <div className="flex min-w-60 items-center gap-2.5 overflow-hidden h-full flex-1 shrink basis-5">
                  <div className="self-stretch flex min-w-60 w-full items-center gap-2.5 overflow-hidden flex-1 shrink basis-[0%] my-auto">
                    <div className="self-stretch flex items-center w-[60px] my-auto">
                      <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/38c02f1b46d1d20debb98dab80c1cb178fd67782?placeholderIfAbsent=true"
                        className="aspect-[1] object-contain w-[60px] self-stretch my-auto rounded-[50px]"
                        alt="Jenny Wilson"
                      />
                    </div>
                    <div className="self-stretch flex flex-col overflow-hidden items-stretch justify-center flex-1 shrink basis-[0%] my-auto">
                      <h3 className="text-white text-xl font-medium">Jenny Wilson</h3>
                      <p className="text-[rgba(206,216,225,1)] text-[13px] font-normal">Software Developer</p>
                    </div>
                  </div>
                </div>
                <button className="flex min-h-10 items-center gap-1 overflow-hidden justify-center w-10 my-auto px-2.5 py-[18px] rounded-[50px]">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/df6e01a82ee21937ee8d477720f97484d3e98262?placeholderIfAbsent=true"
                    className="aspect-[1] object-contain w-1 self-stretch shrink-0 my-auto"
                    alt="Menu"
                  />
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/df6e01a82ee21937ee8d477720f97484d3e98262?placeholderIfAbsent=true"
                    className="aspect-[1] object-contain w-1 self-stretch shrink-0 my-auto"
                    alt="Menu"
                  />
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/df6e01a82ee21937ee8d477720f97484d3e98262?placeholderIfAbsent=true"
                    className="aspect-[1] object-contain w-1 self-stretch shrink-0 my-auto"
                    alt="Menu"
                  />
                </button>
              </header>
              <div className="w-full text-[15px] p-[25px] max-md:px-5">
                <p className="text-[rgba(206,216,225,1)] font-normal leading-loose tracking-[0.5px]">
                  Minim dolor in amet nulla laboris
                </p>
                <div className="flex w-full flex-col text-[rgba(232,0,83,1)] font-bold whitespace-nowrap justify-center mt-[9px] px-[70px] py-px rounded-[0px_0px_0px_0px] max-md:pl-5">
                  <span>MAX/83%</span>
                </div>
              </div>
              <section className="flex w-full gap-9 p-[25px] max-md:px-5">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/9d5dd2e4f30ee712ab472cee87274dd3c71d630f?placeholderIfAbsent=true"
                  className="aspect-[1.53] object-contain w-full min-w-60 flex-1 shrink basis-[0%]"
                  alt="Transaction chart"
                />
              </section>
              <footer className="w-full overflow-hidden p-[25px] max-md:px-5">
                <h3 className="text-white text-2xl font-medium leading-[33px]">
                  Value of transactions in the last year
                </h3>
                <p className="text-[#CED8E1] text-base font-normal leading-[23px] tracking-[0.5px] mt-2.5">
                  Minim dolor in amet nulla laboris enim dolore consequatt...
                </p>
              </footer>
            </ChartCard>
          </div>
        </div>

        {/* Fourth Column */}
        <div className="flex flex-col">
          <ChartCard>
            <header className="flex w-full items-stretch gap-2.5 p-[25px] max-md:px-5">
              <div className="flex items-center overflow-hidden h-full flex-1 shrink basis-[0%]">
                <div className="self-stretch flex w-full items-center gap-2.5 overflow-hidden flex-1 shrink basis-[0%] my-auto">
                  <div className="self-stretch flex items-center w-10 my-auto">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/317a25c0369b9ad7f427b34f97a9346215f8dc3e?placeholderIfAbsent=true"
                      className="aspect-[1] object-contain w-10 self-stretch my-auto rounded-[50px]"
                      alt="Arthur"
                    />
                  </div>
                  <div className="self-stretch flex flex-col overflow-hidden items-stretch text-lg text-white font-medium whitespace-nowrap justify-center flex-1 shrink basis-[0%] my-auto">
                    <span>Arthur</span>
                  </div>
                </div>
              </div>
              <div className="text-white text-lg font-medium leading-none tracking-[-0.36px] text-center my-auto">
                +23.45%
              </div>
            </header>
            <section className="w-full text-[rgba(206,216,225,1)] font-normal pb-[25px] px-[25px] max-md:px-5">
              <p className="text-sm leading-loose tracking-[-0.28px]">Statement of earnings</p>
              <h3 className="text-white text-[28px] font-bold mt-[9px]">$9834.72</h3>
              <p className="text-base leading-[27px] tracking-[0.5px] mt-[9px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
              </p>
            </section>
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/04bd92d5e739202e0485fa87649144380ccaf5a7?placeholderIfAbsent=true"
              className="aspect-[1.85] object-contain w-full"
              alt="Earnings chart"
            />
          </ChartCard>
          
          <div className="mt-[25px]">
            <ChartCard className="flex flex-col items-stretch pt-[22px]">
              <div className="flex w-[253px] max-w-full items-start gap-5 justify-between mr-[23px] max-md:mr-2.5">
                <div className="flex flex-col items-center font-bold text-center mt-7">
                  <p className="text-[rgba(206,216,225,1)] text-sm font-normal leading-loose tracking-[-0.28px]">
                    Expected earnings
                  </p>
                  <h3 className="text-white text-[28px] mt-2.5">Є682.5</h3>
                  <div className="bg-[rgba(255,214,10,1)] flex min-h-[30px] w-[72px] items-center gap-2.5 overflow-hidden text-xs text-black whitespace-nowrap tracking-[-0.24px] leading-loose justify-center mt-2.5 px-3 py-[5px] rounded-[58px]">
                    <span className="self-stretch my-auto">+2.45%</span>
                  </div>
                </div>
                <button className="bg-[rgba(21,26,32,1)] flex items-center gap-2.5 overflow-hidden w-[43px] justify-center h-[43px] px-3 rounded-[7px]">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/dde088d3a443e58db2806e5f5f97574d0681ca08?placeholderIfAbsent=true"
                    className="aspect-[1] object-contain w-[19px] self-stretch my-auto"
                    alt="Chart button"
                  />
                </button>
              </div>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/3cb14307fb891c969676429ccd2f5855c2b5483b?placeholderIfAbsent=true"
                className="aspect-[2.55] object-contain w-full mt-[49px] max-md:mt-10"
                alt="Expected earnings chart"
              />
            </ChartCard>
          </div>
          
          <div className="mt-[25px]">
            <ChartCard>
              <header className="w-full overflow-hidden p-[25px] max-md:px-5">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/53565f4d4dbdb0feb80efd115922f270b4a0f9b1?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-6"
                  alt="Weather icon"
                />
                <div className="flex w-full items-center gap-[40px_44px] justify-between mt-2.5">
                  <h2 className="text-white text-[28px] font-bold leading-10 self-stretch my-auto">
                    Monthly Average <br />
                    Rainfall
                  </h2>
                  <button className="bg-[rgba(21,26,32,1)] self-stretch flex items-center gap-2.5 overflow-hidden justify-center w-[47px] h-[47px] my-auto px-[15px] rounded-[50px]">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/25e8825cf5aa8630cf27733ea321f77ba62a1a83?placeholderIfAbsent=true"
                      className="aspect-[0.94] object-contain w-4 self-stretch my-auto"
                      alt="Share"
                    />
                  </button>
                </div>
                <p className="text-[#CED8E1] text-base font-normal leading-[23px] tracking-[0.5px] mt-2.5">
                  Minim dolor in amet nulla laboris enim dolore consequatt.
                </p>
              </header>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/70acfcc1d6615b64648ea68e30772a59308f5840?placeholderIfAbsent=true"
                className="aspect-[2.71] object-contain w-full"
                alt="Rainfall chart"
              />
            </ChartCard>
          </div>
          
          <div className="mt-[25px]">
            <ChartCard className="z-10 mt-[-9px]">
              <header className="w-full overflow-hidden p-[25px] max-md:px-5">
                <h2 className="text-white text-[25px] font-bold leading-[34px]">
                  Most common desktop screen readers
                </h2>
                <p className="text-[#CED8E1] text-base font-normal leading-[23px] tracking-[0.5px] mt-2.5">
                  Minim dolor in amet nulla laboris enim dolore consequatt.
                </p>
              </header>
              <section className="flex w-full flex-col items-stretch justify-center p-[25px] max-md:px-5">
                <div className="flex w-full max-w-[300px] flex-col items-stretch">
                  <div className="z-10 flex w-full flex-col items-stretch pl-7 pr-2.5 pt-[66px] max-md:pl-5">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/42e2d2193758cf1f1a2b5ccc6983f14deaec3c17?placeholderIfAbsent=true"
                      className="aspect-[5.95] object-contain w-[262px] mt-[66px] max-md:mt-10"
                      alt="Screen reader chart"
                    />
                    <div className="z-10 flex mt-[-110px] items-stretch gap-[34px] text-[9px] text-black font-normal whitespace-nowrap tracking-[0.5px]">
                      <div className="bg-[rgba(21,26,32,1)] flex w-px shrink-0 h-[177px]" />
                      <div className="bg-[rgba(21,26,32,1)] flex w-px shrink-0 h-[177px]" />
                      <div className="flex items-stretch">
                        <div className="w-full pt-[34px]">
                          <div className="bg-[rgba(0,213,255,1)] shadow-[0px_2px_22px_rgba(0,0,0,0.17)] z-10 flex items-center gap-2.5 overflow-hidden justify-center mt-[34px] px-3 py-[7px] rounded-[50px]">
                            <span className="self-stretch my-auto">49%</span>
                          </div>
                          <div className="bg-[rgba(21,26,32,1)] flex mt-[-59px] w-px shrink-0 h-[177px]" />
                        </div>
                        <div className="bg-[rgba(21,26,32,1)] flex w-px shrink-0 h-[177px]" />
                      </div>
                      <div className="bg-[rgba(21,26,32,1)] flex w-px shrink-0 h-[177px]" />
                    </div>
                    <div className="bg-[rgba(21,26,32,1)] flex mt-[-177px] w-0 shrink-0 h-[177px]" />
                    <div className="z-10 flex mt-[-177px] items-stretch gap-9 ml-[38px] max-md:ml-2.5">
                      <div className="bg-[rgba(21,26,32,1)] flex w-px shrink-0 h-[177px]" />
                      <div className="bg-[rgba(21,26,32,1)] flex w-px shrink-0 h-[177px]" />
                    </div>
                  </div>
                  <div className="mt-[-177px] min-h-[183px] text-[13px] text-white font-normal tracking-[0.5px] max-md:hidden">
                    <div>75</div>
                    <div className="mt-[41px] max-md:mt-10">50</div>
                    <div className="mt-[41px] max-md:mt-10">25</div>
                    <div className="mt-[41px] max-md:mt-10">0</div>
                  </div>
                  <div className="flex items-center gap-4 text-[13px] text-white font-normal whitespace-nowrap tracking-[0.5px] justify-between mt-[5px]">
                    <span className="self-stretch my-auto">-80</span>
                    <span className="self-stretch my-auto">-70</span>
                    <span className="self-stretch my-auto">-60</span>
                    <span className="self-stretch my-auto">-50</span>
                    <span className="self-stretch my-auto">-40</span>
                    <span className="self-stretch my-auto">-30</span>
                    <span className="self-stretch my-auto">-20</span>
                    <span className="self-stretch my-auto">-10</span>
                  </div>
                </div>
              </section>
              <footer className="flex w-full flex-col overflow-hidden items-stretch justify-center p-[25px] max-md:px-5">
                <div className="flex w-full items-center gap-2.5 overflow-hidden">
                  <div className="self-stretch flex items-center gap-2.5 overflow-hidden flex-1 shrink basis-5 my-auto">
                    <div className="self-stretch flex items-center w-[60px] my-auto">
                      <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/471e93565c11541d05d435ffa41824a10a49b787?placeholderIfAbsent=true"
                        className="aspect-[1] object-contain w-[60px] self-stretch my-auto rounded-[50px]"
                        alt="Jacob"
                      />
                    </div>
                    <div className="self-stretch flex flex-col overflow-hidden items-stretch justify-center flex-1 shrink basis-[0%] my-auto">
                      <h3 className="text-white text-xl font-medium">Jacob</h3>
                      <div className="flex items-stretch gap-0.5">
                        <div className="flex flex-col overflow-hidden items-center justify-center w-[15px] p-1">
                          <img
                            src="https://api.builder.io/api/v1/image/assets/TEMP/403d58b88071d79e98a83a15656a38f4bd15808b?placeholderIfAbsent=true"
                            className="aspect-[1.4] object-contain w-[7px]"
                            alt="Check"
                          />
                        </div>
                        <p className="text-[rgba(206,216,225,1)] text-xs font-normal">Marketing Coordinator</p>
                      </div>
                    </div>
                  </div>
                  <button className="bg-[rgba(21,26,32,1)] self-stretch flex min-h-[38px] items-center overflow-hidden justify-center w-[83px] my-auto px-2.5 py-2 rounded-[7px]">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/4a4c2068bde06b600231d14b551ee63dbd303dd3?placeholderIfAbsent=true"
                      className="aspect-[2.74] object-contain w-[63px] self-stretch my-auto"
                      alt="Action button"
                    />
                  </button>
                </div>
              </footer>
            </ChartCard>
          </div>
          
          <div className="mt-[25px]">
            <ChartCard className="flex flex-col items-stretch justify-center">
              <header className="flex w-full items-center gap-[40px_100px] justify-between p-[25px] max-md:px-5">
                <h2 className="text-white text-[28px] font-bold self-stretch my-auto">Collection</h2>
                <button className="bg-[rgba(21,26,32,1)] self-stretch flex min-h-10 flex-col overflow-hidden items-center justify-center w-10 h-10 my-auto px-2.5 rounded-[50px]">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/53de9aea91752b61c605f84e55ecb4d6ca6a0fa4?placeholderIfAbsent=true"
                    className="aspect-[1] object-contain w-[18px]"
                    alt="Menu"
                  />
                </button>
              </header>
              <section className="flex w-full flex-col items-center text-base font-normal text-center p-[25px] max-md:px-5">
                <p className="text-[rgba(195,217,225,1)] leading-none">Diagnostics</p>
                <div className="text-[rgba(232,0,84,1)] text-[55px] leading-[1.2] mt-1.5 max-md:text-[40px]">2,4K</div>
                <p className="text-white leading-[23px] mt-1.5">
                  263 contributions in <br />
                  the last year
                </p>
                <div className="flex min-h-14 gap-1 mt-1.5" />
              </section>
            </ChartCard>
          </div>
          
          <div className="mt-[25px]">
            <ChartCard>
              <header className="flex w-full gap-2.5 overflow-hidden justify-center p-[25px] max-md:px-5">
                <div className="min-w-60 flex-1 shrink basis-[19px]">
                  <h2 className="text-white text-[29px] font-bold">Statistic</h2>
                  <p className="text-[#CED8E1] text-base font-normal leading-[23px] tracking-[0.5px] mt-1.5">
                    Minim dolor in amet nulla laboris enim dolore consequatt.
                  </p>
                </div>
                <button className="bg-[rgba(21,26,32,1)] flex min-h-10 flex-col overflow-hidden items-center justify-center w-10 h-10 pl-2.5 pr-[9px] rounded-[50px]">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/c26ef862e3c3f95f15a3601f66eda2e5458559b1?placeholderIfAbsent=true"
                    className="aspect-[1.31] object-contain w-[21px] rounded-sm"
                    alt="Menu"
                  />
                </button>
              </header>
              <section className="flex w-full flex-col overflow-hidden items-center justify-center p-[25px] max-md:px-5">
                <div className="flex w-full max-w-[300px] flex-col items-stretch pt-1.5 pb-5">
                  <div className="border z-10 w-[261px] shrink-0 max-w-full h-px border-[rgba(30,33,37,1)] border-dashed max-md:mr-2.5" />
                  <div className="mt-[-7px] text-[13px] text-white font-normal tracking-[0.5px]">
                    <div>8k</div>
                    <div className="mt-[27px]">6k</div>
                  </div>
                  <div className="z-10 flex mt-[-45px] w-full flex-col items-stretch pl-[29px] pr-[9px] pt-9 max-md:pl-5">
                    <div className="border w-[261px] shrink-0 max-w-full h-px mt-9 border-[rgba(30,33,37,1)] border-dashed" />
                    <div className="z-10 flex mt-[-37px] gap-[13px]">
                      <div className="bg-[rgba(232,0,84,1)] flex w-4 shrink-0 h-[119px] rounded-[50px]" />
                      <div className="bg-[rgba(255,214,10,1)] flex w-4 shrink-0 h-[69px] mt-[60px] rounded-[50px] max-md:mt-10" />
                      <div className="bg-[rgba(232,0,84,1)] flex w-4 shrink-0 h-[78px] mt-[42px] rounded-[50px] max-md:mt-10" />
                      <div className="bg-[rgba(255,214,10,1)] flex w-4 shrink-0 h-[29px] mt-[70px] rounded-[50px] max-md:mt-10" />
                    </div>
                  </div>
                  <div className="mt-[-72px] w-full max-md:mr-2.5">
                    <div className="flex items-stretch gap-[13px]">
                      <div className="text-white text-[13px] font-normal tracking-[0.5px] grow my-auto">4k</div>
                      <div className="flex items-stretch grow shrink basis-auto">
                        <div className="border mr-[-247px] shrink-0 h-px my-auto border-[rgba(30,33,37,1)] border-dashed" />
                        <div className="bg-[rgba(255,214,10,1)] flex w-4 shrink-0 h-12 rounded-[50px]" />
                      </div>
                    </div>
                    <div className="flex items-stretch gap-[13px] text-[13px] text-white font-normal tracking-[0.5px] mt-[9px]">
                      <div>2k</div>
                      <div className="border w-[261px] shrink-0 max-w-full h-px my-auto border-[rgba(30,33,37,1)] border-dashed" />
                    </div>
                  </div>
                  <div className="self-center z-10 flex mt-[-92px] w-[103px] max-w-full gap-[13px]">
                    <div className="bg-[rgba(232,0,84,1)] flex w-4 shrink-0 h-[31px] mt-[61px] rounded-[50px] max-md:mt-10" />
                    <div className="bg-[rgba(255,214,10,1)] flex w-4 shrink-0 h-[62px] rounded-[50px]" />
                    <div className="bg-[rgba(232,0,84,1)] flex w-4 shrink-0 h-[33px] mt-[17px] rounded-[50px]" />
                    <div className="bg-[rgba(127,0,226,1)] flex w-4 shrink-0 h-[97px] mt-5 rounded-[50px]" />
                  </div>
                  <div className="flex items-stretch gap-5 text-[13px] text-white font-normal tracking-[0.5px] max-md:mr-2.5">
                    <div>0</div>
                    <div className="border w-[261px] shrink-0 max-w-full h-px my-auto border-[rgba(30,33,37,1)] border-dashed" />
                  </div>
                </div>
                <div className="self-stretch flex w-full items-center gap-2.5 text-[13px] text-[rgba(206,216,225,1)] font-normal mt-[15px]">
                  <p className="self-stretch flex-1 shrink basis-[0%] my-auto">Year 2021</p>
                </div>
                <div className="flex overflow-hidden text-[13px] text-black font-normal whitespace-nowrap tracking-[0.5px] justify-between mt-[15px]">
                  <button className="bg-[rgba(214,243,255,1)] flex items-center gap-2.5 justify-center px-3 py-[7px] rounded-[50px]">
                    <span className="self-stretch my-auto">24h</span>
                  </button>
                  <button className="bg-[rgba(214,243,255,1)] flex items-center gap-2.5 justify-center px-3 py-[7px] rounded-[50px]">
                    <span className="self-stretch my-auto">1d</span>
                  </button>
                  <button className="bg-[rgba(127,0,226,1)] flex items-center gap-2.5 text-white justify-center px-3 py-[7px] rounded-[50px]">
                    <span className="self-stretch my-auto">3d</span>
                  </button>
                  <button className="bg-[rgba(214,243,255,1)] flex items-center gap-2.5 justify-center px-3 py-[7px] rounded-[50px]">
                    <span className="self-stretch my-auto">1w</span>
                  </button>
                  <button className="bg-[rgba(214,243,255,1)] flex items-center gap-2.5 justify-center px-3 py-[7px] rounded-[50px]">
                    <span className="self-stretch my-auto">3w</span>
                  </button>
                  <button className="bg-[rgba(214,243,255,1)] flex items-center gap-2.5 justify-center px-3 py-[7px] rounded-[50px]">
                    <span className="self-stretch my-auto">1m</span>
                  </button>
                </div>
              </section>
            </ChartCard>
          </div>
        </div>

        {/* Fifth Column - Wide Cards */}
        <div className="max-md:max-w-full">
          <div className="max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
              <div className="w-6/12 max-md:w-full max-md:ml-0">
                <ChartCard className="min-h-[573px] mx-auto max-md:mt-[25px]">
                  <section className="w-full text-[rgba(206,216,225,1)] font-normal p-[25px] max-md:px-5">
                    <div className="flex w-full items-center gap-[40px_100px] text-sm tracking-[-0.28px] leading-6 justify-between">
                      <span className="self-stretch my-auto">Tarragona, Salou</span>
                      <span className="self-stretch my-auto">Wednesday 18</span>
                    </div>
                    <h2 className="text-white text-[28px] font-bold mt-[9px]">Wind speed</h2>
                    <p className="text-base leading-[27px] tracking-[0.5px] mt-[9px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                    </p>
                  </section>
                  <div className="flex w-full items-center gap-3 overflow-hidden text-base text-white font-normal tracking-[0.5px] leading-none px-[25px] py-2.5 max-md:px-5">
                    <div className="self-stretch flex items-center gap-2.5 my-auto">
                      <div className="bg-[rgba(0,255,41,1)] self-stretch flex w-[27px] shrink-0 h-[13px] my-auto rounded-[20px]" />
                      <span className="self-stretch my-auto">Zone one</span>
                    </div>
                    <div className="self-stretch flex items-center gap-2.5 my-auto">
                      <div className="bg-[rgba(1,153,179,1)] self-stretch flex w-[27px] shrink-0 h-[13px] my-auto rounded-[20px]" />
                      <span className="self-stretch my-auto">Zone two</span>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-center justify-center p-[25px] max-md:px-5">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/1afd4c9e786b4138167530ea2aa3f550704dc381?placeholderIfAbsent=true"
                      className="aspect-[1.72] object-contain w-[295px] max-w-full"
                      alt="Wind speed chart"
                    />
                  </div>
                  <footer className="flex w-full items-stretch gap-2.5 p-[25px] max-md:px-5">
                    <div className="flex items-center overflow-hidden h-full flex-1 shrink basis-[0%]">
                      <div className="self-stretch flex w-full items-center gap-2.5 overflow-hidden flex-1 shrink basis-[0%] my-auto">
                        <div className="self-stretch flex items-center w-10 my-auto">
                          <img
                            src="https://api.builder.io/api/v1/image/assets/TEMP/e1f59181597b0f4f8201c1b42d0c9fbebe3c78f2?placeholderIfAbsent=true"
                            className="aspect-[1] object-contain w-10 self-stretch my-auto rounded-[50px]"
                            alt="Mathias"
                          />
                        </div>
                        <div className="self-stretch flex flex-col overflow-hidden items-stretch text-lg text-white font-medium whitespace-nowrap justify-center flex-1 shrink basis-[0%] my-auto">
                          <span>Mathias</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-[rgba(0,255,41,1)] text-lg font-medium leading-none tracking-[-0.36px] text-center my-auto">
                      +23.45%
                    </div>
                  </footer>
                </ChartCard>
              </div>
              
              <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
                <ChartCard className="mx-auto max-md:mt-[25px]">
                  <header className="flex w-full items-center gap-[40px_100px] overflow-hidden justify-between p-[25px] max-md:px-5">
                    <h2 className="text-white text-[28px] font-medium self-stretch my-auto">America</h2>
                    <button className="self-stretch flex min-h-10 flex-col overflow-hidden items-center justify-center w-10 my-auto px-[9px] py-3.5 rounded-[50px]">
                      <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/2108476a6ddd317475dd0239cf50c784e972bb90?placeholderIfAbsent=true"
                        className="aspect-[1.83] object-contain w-[22px]"
                        alt="Menu"
                      />
                    </button>
                  </header>
                  <section className="flex w-full gap-[18px] justify-between p-[25px] max-md:px-5">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/98ff6087237e99d30e0a54496d2d352e935eb9c0?placeholderIfAbsent=true"
                      className="aspect-[0.04] object-contain w-[9px] shrink-0"
                      alt="Chart bar"
                    />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/7077baa3ba94f60e894db31063af9a8a73577462?placeholderIfAbsent=true"
                      className="aspect-[0.04] object-contain w-[9px] shrink-0"
                      alt="Chart bar"
                    />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/c03c3eb9fa96ac0d1039fc09dce2115c875c54df?placeholderIfAbsent=true"
                      className="aspect-[0.04] object-contain w-[9px] shrink-0"
                      alt="Chart bar"
                    />
                    <div className="w-[9px]">
                      <div className="bg-[rgba(21,26,32,1)] pt-[13px] rounded-[10px]">
                        <div className="bg-[rgba(232,0,84,1)] flex shrink-0 h-[11px] rounded-[5px]" />
                        <div className="bg-[rgba(114,9,183,1)] flex shrink-0 h-[54px] rounded-[5px]" />
                        <div className="bg-[rgba(232,0,84,1)] flex shrink-0 h-[125px] rounded-[5px]" />
                      </div>
                    </div>
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/7a31c8347a5ccba1ce9cc1d9571fc75b55dbf199?placeholderIfAbsent=true"
                      className="aspect-[0.04] object-contain w-[9px] shrink-0"
                      alt="Chart bar"
                    />
                    <div className="w-[9px]">
                      <div className="bg-[rgba(21,26,32,1)] pt-[13px] rounded-[10px]">
                        <div className="bg-[rgba(232,0,84,1)] flex shrink-0 h-[11px] rounded-[5px]" />
                        <div className="bg-[rgba(114,9,183,1)] flex shrink-0 h-[54px] rounded-[5px]" />
                        <div className="bg-[rgba(232,0,84,1)] flex shrink-0 h-[125px] rounded-[5px]" />
                      </div>
                    </div>
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/106c93e8a1a7645e87934e1983159bca6b8201d9?placeholderIfAbsent=true"
                      className="aspect-[0.04] object-contain w-[9px] shrink-0"
                      alt="Chart bar"
                    />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/4775c0741a1ab1163d970e67deb7c9e8c672739e?placeholderIfAbsent=true"
                      className="aspect-[0.04] object-contain w-[9px] shrink-0"
                      alt="Chart bar"
                    />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/f1261285439a18f9ce9c731f83835dda4dd0e67b?placeholderIfAbsent=true"
                      className="aspect-[0.04] object-contain w-[9px] shrink-0"
                      alt="Chart bar"
                    />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/1ce0034daed03a562f65e962e24e800e2aa5eef8?placeholderIfAbsent=true"
                      className="aspect-[0.04] object-contain w-[9px] shrink-0"
                      alt="Chart bar"
                    />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/6c170cc727aa5a3235edabc72dd2a168146634b6?placeholderIfAbsent=true"
                      className="aspect-[0.04] object-contain w-[9px] shrink-0"
                      alt="Chart bar"
                    />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/331e1dbc21dcadcc3307ef084293d783418b429a?placeholderIfAbsent=true"
                      className="aspect-[0.04] object-contain w-[9px] shrink-0"
                      alt="Chart bar"
                    />
                  </section>
                  <div className="flex w-full items-stretch gap-2.5 overflow-hidden text-[15px] text-white font-medium whitespace-nowrap tracking-[0.5px] leading-loose p-[25px] max-md:px-5">
                    <div className="flex min-w-60 w-full items-center gap-3 overflow-hidden h-full flex-1 shrink basis-[0%]">
                      <div className="self-stretch flex items-center gap-2.5 my-auto">
                        <div className="bg-[rgba(232,0,84,1)] self-stretch flex w-[27px] shrink-0 h-[13px] my-auto rounded-[20px]" />
                        <span className="self-stretch my-auto">2010</span>
                      </div>
                      <div className="self-stretch flex items-center gap-2.5 my-auto">
                        <div className="bg-[rgba(114,9,183,1)] self-stretch flex w-[27px] shrink-0 h-[13px] my-auto rounded-[20px]" />
                        <span className="self-stretch my-auto">2011</span>
                      </div>
                      <div className="self-stretch flex items-center gap-2.5 my-auto">
                        <div className="bg-[rgba(255,195,0,1)] self-stretch flex w-[27px] shrink-0 h-[13px] my-auto rounded-[20px]" />
                        <span className="self-stretch my-auto">2012</span>
                      </div>
                    </div>
                  </div>
                  <footer className="w-full overflow-hidden p-[25px] max-md:px-5">
                    <h3 className="text-white text-xl font-medium">Historic World Population</h3>
                    <p className="text-[rgba(206,216,225,1)] text-base font-normal leading-[27px] tracking-[0.5px] mt-2.5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                    </p>
                  </footer>
                </ChartCard>
              </div>
            </div>
          </div>
          
          {/* Wide Chart */}
          <div className="mt-[18px]">
            <ChartCard className="max-md:max-w-full">
              <header className="flex w-full items-center gap-[40px_100px] justify-between flex-wrap p-[25px] max-md:max-w-full max-md:px-5">
                <h2 className="text-white text-4xl font-medium self-stretch w-[150px] my-auto">$890.93</h2>
                <button className="bg-[rgba(21,26,32,1)] self-stretch flex items-center gap-2.5 overflow-hidden justify-center w-[43px] h-[43px] my-auto px-3 rounded-[7px]">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/4e59914e5cc80b32b54bc11cc173ccbac5553b2c?placeholderIfAbsent=true"
                    className="aspect-[1] object-contain w-[19px] self-stretch my-auto"
                    alt="Chart button"
                  />
                </button>
              </header>
              <section className="flex w-full flex-col items-stretch justify-center mt-2.5 p-[25px] max-md:max-w-full max-md:px-5">
                <div className="flex w-full items-center gap-[9px] text-xs text-[rgba(0,196,201,1)] font-bold whitespace-nowrap tracking-[-0.24px] leading-loose flex-wrap max-md:max-w-full">
                  <div className="self-stretch min-w-60 w-[660px] shrink h-0 flex-1 basis-[0%] my-auto border-[rgba(50,75,85,1)] border-dashed border-[3px]" />
                  <span className="self-stretch my-auto">MAX</span>
                </div>
                <div className="flex w-full gap-5 justify-between flex-wrap max-md:max-w-full">
                  <div className="bg-[rgba(11,67,87,1)] flex w-[39px] shrink-0 h-[58px] rounded-lg" />
                  <div className="bg-[rgba(11,67,87,1)] flex w-[39px] shrink-0 h-[142px] rounded-lg" />
                  <div className="bg-[rgba(11,67,87,1)] flex w-[39px] shrink-0 h-[98px] rounded-lg" />
                  <div className="bg-[rgba(11,67,87,1)] flex w-[39px] shrink-0 h-28 rounded-lg" />
                  <div className="bg-[rgba(11,67,87,1)] flex w-[39px] shrink-0 h-[90px] rounded-lg" />
                  <div className="bg-[rgba(0,196,201,1)] flex w-[39px] shrink-0 h-[161px] rounded-lg" />
                  <div className="bg-[rgba(11,67,87,1)] flex w-[39px] shrink-0 h-[78px] rounded-lg" />
                  <div className="bg-[rgba(11,67,87,1)] flex w-[39px] shrink-0 h-[142px] rounded-lg" />
                  <div className="bg-[rgba(11,67,87,1)] flex w-[39px] shrink-0 h-[39px] rounded-lg" />
                  <div className="bg-[rgba(11,67,87,1)] flex w-[39px] shrink-0 h-28 rounded-lg" />
                  <div className="bg-[rgba(11,67,87,1)] flex w-[39px] shrink-0 h-[63px] rounded-lg" />
                  <div className="bg-[rgba(11,67,87,1)] flex w-[39px] shrink-0 h-[98px] rounded-lg" />
                </div>
                <div className="flex w-full gap-[19px] text-xs text-[#CADFE7] font-medium whitespace-nowrap text-center tracking-[-0.24px] leading-5 justify-between flex-wrap max-md:max-w-full">
                  <span className="w-10">Jan</span>
                  <span className="w-10">Feb</span>
                  <span className="w-10">Mar</span>
                  <span className="w-10">Apr</span>
                  <span className="w-10">May</span>
                  <span className="w-10">Jun</span>
                  <span className="w-10">Jul</span>
                  <span className="w-10">Aug</span>
                  <span className="w-10">Sep</span>
                  <span className="w-10">Oct</span>
                  <span className="w-10">Nov</span>
                  <span className="w-10">Dec</span>
                </div>
              </section>
            </ChartCard>
          </div>
        </div>

        {/* Storage and Final Cards */}
        <div className="self-stretch">
          <StorageCard
            title="Storage of your device"
            usedStorage="137GB"
            chartImage="https://api.builder.io/api/v1/image/assets/TEMP/93e9a782ff340d2f10addec30082ce656bd94e95?placeholderIfAbsent=true"
            legendItems={[
              { color: "bg-[rgba(58,12,163,1)]", label: "Documents" },
              { color: "bg-[rgba(181,23,158,1)]", label: "Videos" },
              { color: "bg-[rgba(76,201,240,1)]", label: "Photos" },
              { color: "bg-[rgba(247,37,133,1)]", label: "Music" }
            ]}
          />
          
          <div className="mt-[25px]">
            <ChartCard className="min-h-[479px]">
              <header className="flex w-full items-center gap-[40px_100px] overflow-hidden justify-between p-[25px] max-md:px-5">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/6f9612dd62ba2dcaebe193f72acee787a3ae23c8?placeholderIfAbsent=true"
                  className="aspect-[0.92] object-contain w-[22px] self-stretch shrink-0 my-auto"
                  alt="Storage icon"
                />
                <button className="bg-[rgba(21,26,32,1)] self-stretch flex min-h-10 flex-col overflow-hidden items-center justify-center w-10 h-10 my-auto px-2.5 rounded-[50px]">
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
              <section className="flex w-full flex-col overflow-hidden items-center text-4xl text-white font-bold justify-center px-[78px] py-[25px] max-md:px-5">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/438b1b5a52a5c602c775e2030b05972bc343aa89?placeholderIfAbsent=true"
                  className="aspect-[1.08] object-contain w-[204px] max-w-full"
                  alt="Storage visualization"
                />
                <h2 className="mt-[15px]">My storage</h2>
              </section>
              <footer className="flex min-h-[119px] w-full items-center gap-[5px] overflow-hidden justify-between px-[25px] py-[34px] max-md:px-5">
                <div className="self-stretch flex flex-col overflow-hidden text-sm text-white font-medium justify-center w-[201px] my-auto">
                  <div className="flex items-center gap-2.5 overflow-hidden whitespace-nowrap">
                    <div className="rounded bg-[rgba(255,195,0,1)] self-stretch flex w-5 shrink-0 h-5 my-auto" />
                    <span className="self-stretch my-auto">Used</span>
                  </div>
                  <div className="flex items-center gap-2.5 overflow-hidden mt-2.5 py-px">
                    <div className="rounded bg-[rgba(21,26,32,1)] self-stretch flex w-5 shrink-0 h-5 my-auto" />
                    <span className="self-stretch my-auto">Total space</span>
                  </div>
                </div>
                <button className="rounded bg-[rgba(255,195,0,1)] self-stretch flex items-center text-[13px] text-black font-bold text-center uppercase tracking-[1.08px] justify-center my-auto px-4 py-3">
                  <span className="self-stretch my-auto">Buy more</span>
                </button>
              </footer>
            </ChartCard>
          </div>
          
          <div className="mt-[25px]">
            <ChartCard>
              <header className="flex w-full gap-2.5 overflow-hidden text-[19px] text-white font-medium tracking-[-0.38px] leading-7 p-[25px] max-md:px-5">
                <div className="flex min-w-60 w-full items-stretch gap-2.5 flex-1 shrink basis-[0%]">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/6133a7ffee5c55da38b3596e576b4d508263964e?placeholderIfAbsent=true"
                    className="aspect-[0.44] object-contain w-6 shrink flex-1 basis-[0%]"
                    alt="Population icon"
                  />
                  <h2 className="w-[276px]">Countries compared by population density and total area.</h2>
                </div>
              </header>
              <div className="flex w-full items-center overflow-hidden px-[25px] max-md:px-5">
                <div className="self-stretch flex-1 shrink basis-[0%] my-auto">
                  <p className="text-[rgba(195,217,225,1)] text-[13px] font-normal leading-6 tracking-[-0.26px]">
                    January, 221
                  </p>
                  <h3 className="text-white text-[15px] font-medium tracking-[-0.3px]">
                    More densely populate
                  </h3>
                </div>
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/86d8dfff0902a5c5667843a58d753634f252b096?placeholderIfAbsent=true"
                  className="aspect-[2.77] object-contain w-[83px] self-stretch shrink-0 my-auto"
                  alt="Population trend"
                />
              </div>
              <section className="flex w-full items-center gap-2.5 overflow-hidden justify-center p-[25px] max-md:px-5">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/c497f8c2e3d1f0be68051fd67b1a917a6f34edf5?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-56 self-stretch my-auto"
                  alt="Population chart"
                />
              </section>
              <footer className="w-full overflow-hidden p-[25px] max-md:px-5">
                <div className="flex w-full items-center gap-[40px_100px] justify-between">
                  <h3 className="text-white text-xl font-medium leading-none tracking-[-0.4px] self-stretch my-auto">
                    List countries
                  </h3>
                  <button className="bg-[rgba(21,26,32,1)] self-stretch flex min-h-10 items-center gap-2.5 overflow-hidden justify-center w-10 h-10 my-auto px-[9px] rounded-[50px]">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/9b1bed422ef4e154303c7fad0effcd91de3593e1?placeholderIfAbsent=true"
                      className="aspect-[0.9] object-contain w-[18px] self-stretch my-auto"
                      alt="Chart icon"
                    />
                  </button>
                </div>
                <div className="flex w-full items-center gap-2.5 text-sm text-white font-medium justify-between mt-[26px]">
                  <div className="self-stretch flex flex-col overflow-hidden whitespace-nowrap justify-center w-[150px] my-auto">
                    <div className="flex items-center gap-2.5 overflow-hidden">
                      <div className="rounded bg-[rgba(59,0,154,1)] self-stretch flex w-5 shrink-0 h-5 my-auto" />
                      <span className="self-stretch my-auto">Germany</span>
                    </div>
                    <div className="flex items-center gap-2.5 overflow-hidden mt-2.5">
                      <div className="rounded bg-[rgba(86,11,173,1)] self-stretch flex w-5 shrink-0 h-5 my-auto" />
                      <span className="self-stretch my-auto">Spain</span>
                    </div>
                    <div className="flex items-center gap-2.5 overflow-hidden mt-2.5">
                      <div className="rounded bg-[rgba(114,9,183,1)] self-stretch flex w-5 shrink-0 h-5 my-auto" />
                      <span className="self-stretch my-auto">Italy</span>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col w-[150px] my-auto">
                    <div className="flex items-center gap-2.5 overflow-hidden whitespace-nowrap py-px">
                      <div className="rounded bg-[rgba(181,23,158,1)] self-stretch flex w-5 shrink-0 h-5 my-auto" />
                      <span className="self-stretch my-auto">France</span>
                    </div>
                    <div className="flex items-center gap-2.5 overflow-hidden whitespace-nowrap mt-2.5 py-px">
                      <div className="rounded bg-[rgba(247,37,133,1)] self-stretch flex w-5 shrink-0 h-5 my-auto" />
                      <span className="self-stretch my-auto">Poland</span>
                    </div>
                    <div className="flex items-center gap-2.5 overflow-hidden mt-2.5 py-px">
                      <div className="rounded bg-[rgba(0,180,216,1)] self-stretch flex w-5 shrink-0 h-5 my-auto" />
                      <span className="self-stretch my-auto">Czech Republic</span>
                    </div>
                  </div>
                </div>
              </footer>
            </ChartCard>
          </div>
          
          <div className="mt-[25px]">
            <ChartCard>
              <header className="bg-[rgba(18,23,29,1)] w-full overflow-hidden p-[25px] max-md:px-5">
                <div className="flex w-full items-center gap-2.5 text-2xl text-white font-bold whitespace-nowrap leading-none">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/47ba924d3b48b387caf157e1dbd3ac87c350f9c7?placeholderIfAbsent=true"
                    className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
                    alt="Doughnut icon"
                  />
                  <h2 className="self-stretch my-auto">Doughnut</h2>
                </div>
                <p className="text-[#CED8E1] text-base font-normal leading-[23px] tracking-[0.5px] mt-2.5">
                  Browser market shares at a specific website, 2014
                </p>
              </header>
              <div className="flex w-full items-stretch gap-2.5 overflow-hidden text-[15px] text-white font-medium whitespace-nowrap tracking-[0.5px] leading-loose pt-[25px] px-[25px] max-md:px-5">
                <div className="flex min-w-60 w-full items-center gap-3 overflow-hidden h-full flex-1 shrink basis-[0%]">
                  <div className="self-stretch flex items-center gap-2.5 my-auto">
                    <div className="bg-[rgba(226,18,105,1)] self-stretch flex w-[27px] shrink-0 h-[13px] my-auto rounded-[20px]" />
                    <span className="self-stretch my-auto">css</span>
                  </div>
                  <div className="self-stretch flex items-center gap-2.5 my-auto">
                    <div className="bg-[rgba(86,11,173,1)] self-stretch flex w-[27px] shrink-0 h-[13px] my-auto rounded-[20px]" />
                    <span className="self-stretch my-auto">html</span>
                  </div>
                  <div className="self-stretch flex items-center gap-2.5 my-auto">
                    <div className="bg-[rgba(255,195,0,1)] self-stretch flex w-[27px] shrink-0 h-[13px] my-auto rounded-[20px]" />
                    <span className="self-stretch my-auto">sass</span>
                  </div>
                </div>
              </div>
              <section className="flex w-full items-center gap-2.5 overflow-hidden justify-center p-2.5">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/d17c143d3d4a6a7c1f5ff10c269a7d81125a1d8e?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-[287px] self-stretch min-w-60 my-auto"
                  alt="Doughnut chart"
                />
              </section>
              <footer className="flex w-full items-stretch gap-2.5 overflow-hidden p-[25px] max-md:px-5">
                <div className="flex min-w-60 w-full items-center gap-2.5 overflow-hidden h-full flex-1 shrink basis-[0%]">
                  <div className="self-stretch flex items-center gap-2.5 overflow-hidden flex-1 shrink basis-5 my-auto">
                    <div className="self-stretch flex items-center w-[60px] my-auto">
                      <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/46695e2ae346183d7b97ee4575e5bd9edcb54efa?placeholderIfAbsent=true"
                        className="aspect-[1] object-contain w-[60px] self-stretch my-auto rounded-[50px]"
                        alt="Robert Fox"
                      />
                    </div>
                    <div className="self-stretch flex flex-col overflow-hidden items-stretch justify-center flex-1 shrink basis-[0%] my-auto">
                      <h3 className="text-white text-xl font-medium">Robert Fox</h3>
                      <p className="text-[rgba(206,216,225,1)] text-[13px] font-normal">Software Developer</p>
                    </div>
                  </div>
                  <div className="self-stretch flex min-h-[38px] items-center overflow-hidden text-[13px] text-white font-bold whitespace-nowrap text-center uppercase tracking-[1.08px] justify-center my-auto px-2.5 py-[3px] rounded-[7px]">
                    <button className="bg-[rgba(51,60,70,1)] self-stretch flex items-center justify-center my-auto px-4 py-[9px] rounded-[50px]">
                      <span className="self-stretch my-auto">profile</span>
                    </button>
                  </div>
                </div>
              </footer>
            </ChartCard>
          </div>
          
          <div className="mt-[25px]">
            <ChartCard>
              <header className="bg-[rgba(18,23,29,1)] flex w-full overflow-hidden p-[25px] max-md:px-5">
                <h2 className="text-white text-[25px] font-bold leading-[34px] flex-1 shrink basis-5">
                  Estimated Worldwide Population
                </h2>
                <button className="flex min-h-10 items-center gap-1 overflow-hidden justify-center w-10 px-2.5 py-[18px] rounded-[50px]">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/788e594034fb60a040aa892af75cd7fa959fa730?placeholderIfAbsent=true"
                    className="aspect-[1] object-contain w-1 self-stretch shrink-0 my-auto"
                    alt="Menu"
                  />
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/788e594034fb60a040aa892af75cd7fa959fa730?placeholderIfAbsent=true"
                    className="aspect-[1] object-contain w-1 self-stretch shrink-0 my-auto"
                    alt="Menu"
                  />
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/788e594034fb60a040aa892af75cd7fa959fa730?placeholderIfAbsent=true"
                    className="aspect-[1] object-contain w-1 self-stretch shrink-0 my-auto"
                    alt="Menu"
                  />
                </button>
              </header>
              <div className="flex w-full gap-2.5 overflow-hidden text-sm text-black font-medium whitespace-nowrap pt-[25px] px-[25px] max-md:px-5">
                <button className="rounded bg-[rgba(0,232,162,1)] flex items-center justify-center px-[13px] py-1.5">
                  <span className="self-stretch my-auto">America</span>
                </button>
                <button className="rounded bg-[rgba(0,232,162,1)] flex items-center justify-center px-[13px] py-1.5">
                  <span className="self-stretch my-auto">Europe</span>
                </button>
                <button className="rounded bg-[rgba(0,232,162,1)] flex items-center justify-center px-[13px] py-1.5">
                  <span className="self-stretch my-auto">Asia</span>
                </button>
              </div>
              <section className="flex w-full flex-col overflow-hidden items-stretch tracking-[0.5px] justify-center px-[19px] py-[25px]">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/e2ed5c75faa8eb203e110e8fb1dc456d85feffbe?placeholderIfAbsent=true"
                  className="aspect-[2.99] object-contain w-[322px] self-center max-w-full"
                  alt="Population chart"
                />
                <p className="text-[#CED8E1] text-base font-normal leading-[23px] mt-2.5">
                  Minim dolor in amet nulla laboris enim dolore consequatt.
                </p>
                <div className="flex w-full items-center gap-3 overflow-hidden text-[15px] text-white font-medium whitespace-nowrap leading-loose mt-2.5">
                  <div className="self-stretch flex items-center gap-2.5 my-auto">
                    <div className="bg-[rgba(3,167,119,1)] self-stretch flex w-[27px] shrink-0 h-[13px] my-auto" />
                    <span className="self-stretch my-auto">2011</span>
                  </div>
                  <div className="self-stretch flex items-center gap-2.5 my-auto">
                    <div className="bg-[rgba(8,57,45,1)] self-stretch flex w-[27px] shrink-0 h-[13px] my-auto" />
                    <span className="self-stretch my-auto">2012</span>
                  </div>
                </div>
              </section>
              <footer className="w-full overflow-hidden p-[25px] max-md:px-5">
                <div className="flex w-full items-center gap-2.5 overflow-hidden">
                  <div className="self-stretch flex items-center gap-2.5 overflow-hidden flex-1 shrink basis-5 my-auto">
                    <div className="self-stretch flex items-center w-[60px] my-auto">
                      <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/cca627abe30da8f937a4dfdb727dc1471c65b961?placeholderIfAbsent=true"
                        className="aspect-[1] object-contain w-[60px] self-stretch my-auto rounded-[50px]"
                        alt="Ralph Edwards"
                      />
                    </div>
                    <div className="self-stretch flex flex-col overflow-hidden items-stretch justify-center flex-1 shrink basis-[0%] my-auto">
                      <h3 className="text-white text-xl font-medium">Ralph Edwards</h3>
                      <p className="text-[rgba(206,216,225,1)] text-[13px] font-normal">Team Leader</p>
                    </div>
                  </div>
                  <div className="self-stretch flex items-center overflow-hidden justify-center w-[60px] my-auto p-2.5 rounded-[7px]">
                    <button className="bg-[rgba(21,26,32,1)] self-stretch flex min-h-10 w-10 flex-col overflow-hidden items-center justify-center h-10 my-auto px-2 rounded-[50px]">
                      <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/8f756e5f821208603b9e864bd4ce62c79bc581a4?placeholderIfAbsent=true"
                        className="aspect-[1] object-contain w-full"
                        alt="Action button"
                      />
                    </button>
                  </div>
                </div>
                <p className="text-[#CED8E1] text-base font-normal leading-[23px] tracking-[0.5px] mt-[19px]">
                  Minim dolor in amet nulla laboris enim dolore consequatt.
                </p>
              </footer>
            </ChartCard>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Index;
