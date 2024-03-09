import React, { useEffect, useState } from "react";
import { Img, Text, Heading, Button } from "../../components";
import { Slidebar } from "./slidebar";

export const Performance = () => {
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
        setPerformanceData(data);
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
    <div className="h-[632px] w-[69%] mt-[9px] relative -ml-2" id="performance">
      <div className="h-[632px] w-[99%] left-0 bottom-0 right-0 top-0 m-auto bg-white-A700 absolute rounded-lg pr-10 ">
        <div className="flex flex-row justify-start w-full right-0 top-[3%] m-auto absolute pl-10">
          <Heading as="h4">Performance</Heading>
        </div>


        <div className="flex items-center mt-20 ml-10">
          <div>
            <Text as="p" className="!text-blue_gray-400_02 mb-1.5">
              Today's Low
            </Text>
          </div>
          <div className=" mr-4">
            <Slidebar />
          </div>
          <div className="ml-30">
            <Text as="p" className="!text-blue_gray-400_02 mb-1.5 ml-32">
              Today's High
            </Text>
          </div>
        </div>


        <div className="grid grid-cols-2 mt-2 ml-10 gap-y-3">
          <div>
          <Text size="lg" as="p" className="!text-gray-900_03 mb-1.5 ">
          ${formatNumberWithCommas(performanceData?.market_data?.low_24h?.usd)}
          </Text>
          </div>
          <div className="text-right pr-10">
          <Text size="lg" as="p" className="!text-gray-900_03 mb-1.5">
          ${formatNumberWithCommas(performanceData?.market_data?.high_24h?.usd)}
          </Text>
          </div>
        </div>


        <div className="flex items-center mt-10 ml-10">
          <div>
            <Text as="p" className="!text-blue_gray-400_02 mb-1.5">
              52W Low
            </Text>
          </div>
          <div className="ml-5 mr-4">
            <Slidebar />
          </div>
          <div className="ml-30">
            <Text as="p" className="!text-blue_gray-400_02 mb-1.5 ml-36">
              52W High
            </Text>
          </div>
        </div>


        <div className="grid grid-cols-2 mt-2 ml-10 gap-y-3">
          <div>
          <Text size="lg" as="p" className="!text-gray-900_03 mb-1.5 ">
          $19,593
          </Text>
          </div>
          <div className="text-right pr-10">
          <Text size="lg" as="p" className="!text-gray-900_03 mb-1.5">
          ${formatNumberWithCommas(performanceData?.market_data?.ath?.usd)}
          </Text>
          </div>
        </div>
        {/* heading */}
        <div className="flex flex-row justify-start items-center w-[64%] mt-[22px] gap-10 pl-10">
            <div className="flex flex-row justify-start w-[10%]">
                <Heading size="md" as="h6" className="!text-blue_gray-800_02 !text-[18.91px]">
                    Fundamentals
                </Heading>
            </div>
          <Img src="images/img_svg_margin.svg" alt="svgmargin_one" className="h-[20px] ml-10" />
        </div>
        {/* first row */}
        <div>
            <div className="grid grid-cols-2 mt-2 ml-10 mr-5">
              <div className="flex flex-row justify-between items-center w-full pr-[11px] py-[11px] border-blue_gray-100 border-b border-solid mt-3">
               <Text as="p" className="mt-[7px] mb-[5px] !text-blue_gray-400_02">
                 Bitcoin Price
               </Text>
               <Text size="lg" as="p" className="!text-gray-900_03 mb-1 text-right ">
               ${formatNumberWithCommas(performanceData?.market_data?.current_price?.usd)}
               </Text>
              </div>

            <div className="grid grid-rows-1 gap-y-3 mt-3 ml-7 ">
              <div className="flex flex-row justify-between items-center w-full pr-[11px] py-[11px] border-blue_gray-100 border-b border-solid">
                <Text as="p" className="mt-[7px] mb-3 !text-blue_gray-400_02 ">
                  Market Cap
                </Text>
                <Text size="lg" as="p" className="!text-gray-900_03 mb-1 text-right">
                ${formatNumberWithCommas(performanceData?.market_data?.market_cap?.usd)}
                </Text>
              </div>
            </div>
          </div>
         {/* second row */}
            <div className="grid grid-cols-2 gap-y-3 ml-10 mr-5">
              <div className="flex flex-row justify-between items-center w-full pr-[11px] py-[11px] border-blue_gray-100 border-b border-solid ">
               <Text as="p" className="mt-[7px] mb-[5px] !text-blue_gray-400_02">
                   24h Low / 24h High
               </Text>
              <Text size="lg" as="p" className="!text-gray-900_03 mb-1 text-right ">
              ${formatNumberWithCommas(performanceData?.market_data?.low_24h?.usd)} /{" "}
              ${formatNumberWithCommas(performanceData?.market_data?.high_24h?.usd)}
               </Text>
              </div>

            <div className="grid grid-rows-1 gap-y-3 ml-7 ">
              <div className="flex flex-row justify-between items-center w-full pr-[11px] py-[11px] border-blue_gray-100 border-b border-solid">
                <Text as="p" className="mt-[7px] mb-3 !text-blue_gray-400_02 ">
                 Market Cap Dominance
                </Text>
                <Text size="lg" as="p" className="!text-gray-900_03 mb-1 text-right">
                51.89%
                </Text>
              </div>
            </div>
          </div>

          {/* third row */}

          <div className="grid grid-cols-2 gap-y-3 ml-10 mr-5">
              <div className="flex flex-row justify-between items-center w-full pr-[11px] py-[11px] border-blue_gray-100 border-b border-solid ">
               <Text as="p" className="mt-[7px] mb-[5px] !text-blue_gray-400_02">
                 7d Low / 7d High
               </Text>
               <Text size="lg" as="p" className="!text-gray-900_03 mb-1 text-right ">
               $60,453 /$68,789
               </Text>
              </div>

            <div className="grid grid-rows-1 gap-y-3 ml-7">
              <div className="flex flex-row justify-between items-center w-full pr-[11px] py-[11px] border-blue_gray-100 border-b border-solid">
                <Text as="p" className="mt-[7px] mb-3 !text-blue_gray-400_02 ">
                 Volume / Market Cap
                </Text>
                <Text size="lg" as="p" className="!text-gray-900_03 mb-1 text-right">
                ${formatNumberWithCommas(performanceData?.market_data?.total_volume?.usd)}
                </Text>
              </div>
            </div>
          </div>

          {/* fourth row */}

          <div className="grid grid-cols-2 gap-y-3 ml-10 mr-5">
              <div className="flex flex-row justify-between items-center w-full pr-[11px] py-[11px] border-blue_gray-100 border-b border-solid ">
               <Text as="p" className="mt-[7px] mb-[5px] !text-blue_gray-400_02">
                 Trading Volume
               </Text>
               <Text size="lg" as="p" className="!text-gray-900_03 mb-1 text-right ">
               ${formatNumberWithCommas(performanceData?.market_data?.total_volume?.usd)}
               </Text>
              </div>

            <div className="grid grid-rows-1 gap-y-3 ml-7 ">
              <div className="flex flex-row justify-between items-center w-full pr-[11px] py-[11px] border-blue_gray-100 border-b border-solid">
                <Text as="p" className="mt-[7px] mb-3 !text-blue_gray-400_02 ">
                 All-Time High
                </Text>
                <div className="flex flex-col mr-1">
                <Text size="lg" as="p" className="!text-gray-900_03 mb-1 text-right">
                ${formatNumberWithCommas(performanceData?.market_data?.ath?.usd)}
                </Text>
                <Text size="xs" as="p" className="!text-gray-900_03 text-right !text-[11.2px]">
                 March 7, 2024
                </Text>
              </div>
              </div>
            </div>
          </div>

          {/* fifth row */}

          <div className="grid grid-cols-2 gap-y-3 ml-10 mr-5">
              <div className="flex flex-row justify-between items-center w-full pr-[11px] py-[11px] border-blue_gray-100 border-b border-solid ">
               <Text as="p" className="mt-[7px] mb-[5px] !text-blue_gray-400_02">
               Market Cap Rank
               </Text>
               <Text size="lg" as="p" className="!text-gray-900_03 mb-1 text-right ">
               #{performanceData?.market_cap_rank}
               </Text>
              </div>

            <div className="grid grid-rows-1 gap-y-3 ml-7 ">
              <div className="flex flex-row justify-between items-center w-full pr-[11px] py-[11px] border-blue_gray-100 border-b border-solid">
                <Text as="p" className="mt-[7px] mb-3 !text-blue_gray-400_02 ">
                 All Time Low
                </Text>
                <div className="flex flex-col mr-1">
                <Text size="lg" as="p" className="!text-gray-900_03 mb-1 text-right">
                ${formatNumberWithCommas(performanceData?.market_data?.atl?.usd)}
                </Text>
                <Text size="xs" as="p" className="!text-gray-900_03 text-right !text-[11.2px]">
                  Jul 06, 2013 (over 9 years)
                </Text>
        
              </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Performance;
