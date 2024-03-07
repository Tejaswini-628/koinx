import React, { useEffect, useState } from "react";
import { Img, Text, Heading, Button } from "../../components";
const axios = require('axios');

export const Performance = () =>{
  const [performanceData, setPerformanceData] = useState(null);

  useEffect(() => {
    // Fetch performance data from CoinGecko API
    async function fetchData() {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/bitcoin"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();

        // Extract required values from the data
        const todaysLow = data.market_data.low_24h.usd;
        const todaysHigh = data.market_data.high_24h.usd;
        const allTimeLow = data.market_data.ath.usd;
        const allTimeHigh = data.market_data.atl.usd;
        const marketCap = data.market_data.market_cap.usd;
        const volume = data.market_data.total_volume.usd;

        console.log('Today\'s Low:', todaysLow);
        console.log('Today\'s High:', todaysHigh);
        console.log('All-Time Low:', allTimeLow);
        console.log('All-Time High:', allTimeHigh);
        console.log('Market Cap:', marketCap);
        console.log('Volume:', volume);

        setPerformanceData(data);
        console.log(data)
      } catch (error) {
        console.error("Error fetching performance data:", error);
      }
    }

    fetchData();
  }, []);
  const formatNumberWithCommas = (number) => {
    return number?.toLocaleString("en-US");
  };

    return (
        <>
           <div className="h-[632px] w-[69%] mt-[9px] relative">
                  <div className=" h-[632px] w-[99%] left-0 bottom-0 right-0 top-0 m-auto bg-white-A700 absolute rounded-lg pr-10" />
                  <div className="flex flex-row justify-start w-full right-0 top-[3%] m-auto absolute pl-10">
                    <Heading as="h4">Performance</Heading>
                  </div>
                  <div className="flex flex-col items-start justify-center w-max h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
                    
                    <div className="flex flex-row justify-start items-center w-[64%] mt-[22px] gap-px pl-10">
                      <div className="flex flex-row justify-start w-[10%]">
                        <Heading size="md" as="h6" className="!text-blue_gray-800_02 !text-[18.91px]">
                          Fundamentals
                        </Heading>
                      </div>
                      <Img src="images/img_svg_margin.svg" alt="svgmargin_one" className="h-[20px]" />
                    </div>
                    <div className="flex flex-row justify-between items-center w-[41%] mt-1.5 mb-2">
                      <div className="flex flex-col items-center justify-start w-[42%] pt-[18px] ml-10 mb-2">
                        <div className="flex flex-row justify-between items-center w-full pr-[13px]">
                          <Text as="p" className="!text-blue_gray-400_02 mb-1.5">
                            Bitcoin Price
                          </Text>
                          <Text size="md" as="p" className="!text-gray-900_03 text-right mb-1.5">
                          ${formatNumberWithCommas(performanceData?.market_data?.current_price?.usd)}
                          </Text>
                        </div>
                        <div className="justify-center h-[130px] ml-10 w-[350px] left-0 bottom-0 right-0 top-0 m-auto border-blue_gray-100 border-b border-solid absolute " />
                        <div className="flex flex-row justify-between items-center w-full pr-[11px] py-[11px] border-blue_gray-100 border-b border-solid">
                            <Text as="p" className=" mb-[5px] !text-blue_gray-400_02 mt-5">
                              24hr Low / 24hr High
                            </Text>
                            <Text as="p" className="!text-gray-900_03 text-right mt-2">
                            ${formatNumberWithCommas(performanceData?.market_data?.low_24h?.usd)} /{" "}
              ${formatNumberWithCommas(performanceData?.market_data?.high_24h?.usd)}
                            </Text>
                          </div>
                          <div className="flex flex-row justify-between items-center w-full pr-[11px] py-[11px] border-blue_gray-100 border-b border-solid">
                            <Text as="p" className="mt-[7px] mb-[5px] !text-blue_gray-400_02">
                              7d Low / 7d High
                            </Text>
                            <Text size="md" as="p" className="!text-gray-900_03 text-right">
                            $60,453 /$68,789
                            </Text>
                          </div>
                          <div className="flex flex-row justify-between w-full pr-3 py-3 border-blue_gray-100 border-b border-solid">
                            <Text as="p" className="mt-[7px] mb-[5px] !text-blue_gray-400_02">
                              Trading Volume
                            </Text>
                            <Text as="p" className="!text-gray-900_03 text-right mt-2">
                            ${formatNumberWithCommas(performanceData?.market_data?.total_volume?.usd)}
                            </Text>
                          </div>
                          <div className="flex flex-row justify-between items-center w-full pr-3 py-3 border-blue_gray-100 border-b border-solid">
                            <Text as="p" className="mt-1.5 mb-1 !text-blue_gray-400_02">
                              Market Cap Rank
                            </Text>
                            <Text size="md" as="p" className="h-[16px] !text-gray-900_03 text-right">
                            #{performanceData?.market_cap_rank}
                            </Text>
                          </div>
                     
                      </div>
                      <div className="flex flex-row justify-center w-[48%]">
                        <div className="flex flex-col items-center justify-start w-full mb-4 ">
                          <div className="flex flex-row justify-between items-center w-full pr-1 py-1 border-blue_gray-100 border-b border-solid ">
                            <div className="flex flex-row justify-start py-3">
                              <Text as="p" className="mt-0.5 !text-blue_gray-400_02">
                                Market Cap
                              </Text>
                            </div>
                            <div className="flex flex-row justify-center mr-[7px]">
                              <Text as="p" className="!text-gray-900_03 text-right">
                              ${formatNumberWithCommas(performanceData?.market_data?.market_cap?.usd)}
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row justify-between items-center w-full pr-1 py-1 border-blue_gray-100 border-b border-solid">
                            <div className="flex flex-row justify-start py-[13px]">
                              <Text as="p" className="mt-px !text-blue_gray-400_02">
                                Market Cap Dominance
                              </Text>
                            </div>
                            <div className="flex flex-row justify-center mr-2">
                              <Text as="p" className="!text-gray-900_03 text-right">
                              51.89%
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row justify-between items-center w-full pr-1 py-1 z-[1] border-blue_gray-100 border-b border-solid ">
                            <div className="flex flex-row justify-start py-[13px]">
                              <Text as="p" className="mt-px !text-blue_gray-400_02">
                                Volume / Market Cap
                              </Text>
                            </div>
                            <div className="flex flex-row justify-center mr-[7px]">
                              <Text size="md" as="p" className="!text-gray-900_03 text-right">
                              {(performanceData?.market_data?.total_volume?.usd / performanceData?.market_data?.market_cap?.usd)?.toFixed(4)}
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row justify-center w-full mt-[-3px]">
                            <div className="flex flex-col w-full">
                              <div className="flex flex-row justify-center w-full">
                                <div className="h-[61px] w-full py-[3px] relative">
                                  <div className="justify-center h-[54px] w-full left-0 bottom-0 right-0 top-0 m-auto border-blue_gray-100 border-b border-solid absolute" />
                                  <div className="flex flex-row justify-between items-center w-[99%] top-[18%] right-0 left-0 m-auto absolute">
                                    <Text as="p" className="!text-blue_gray-400_02 mt-3">
                                      All-Time High
                                    </Text>
                                    <div className="flex flex-col items-end justify-start gap-[3px]">
                                   
                                        <Text as="p" className="!text-gray-900_03 !font-roboto text-right ">
                                        <span className="text-gray-900_03 font-inter ">$68,789.63 </span>
                                      </Text>
                                        <Text size="xs" as="p" className="!text-gray-900_03 text-right !text-[11.2px]">
                                        March 7, 2024 
                                        </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-row justify-center w-full">
                                <div className="h-[60px] w-full py-[3px] relative">
                                  <div className="justify-center h-[54px] w-full left-0 bottom-0 right-0 top-0 m-auto border-blue_gray-100 border-b border-solid absolute" />
                                  <div className="flex flex-row justify-between items-center w-max h-max left-0 bottom-0 right-0 top-0 m-auto absolute ml-10">
                                    <Text as="p" className="!text-blue_gray-400_02 ml-[-38px] ">
                                      All-Time Low
                                    </Text>
                                    <div className="flex flex-col items-end justify-start gap-[7px] ml-20">
                                      <Text as="p" className="!text-gray-900_03 !font-roboto text-right ">
                                        <span className="text-gray-900_03 font-inter ">$67.81 </span>
                                      </Text>
                                      <Text size="xs" as="p" className="!text-gray-900_03 text-right mr-[20px] !text-[11.2px] ml-20">
                                        Jul 06, 2013 (over 9 years)
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
        </>
    )
}