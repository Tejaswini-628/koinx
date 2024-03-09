import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Heading, Button } from "../../components";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";
import { AlsoLike } from "./also like";
import { Team } from "./team";
import { Tokenomics } from "./tokenomics";
import { About } from "./about";
import { Sentiment } from "./sentiment";
import { Performance } from "./performance";
import { Navbar2 } from "./navbar2";
import { TrendingCoins } from "./trending coins";
import { Navbar1 } from "./navbar1";
import { Bitcoingraph } from './bitcoingraph';
import { TradingViewWidget } from './TradingViewWidget';

export default function BitcoinPage() {
  const [bitcoinData, setBitcoinData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,inr&include_24hr_change=true");
        const data = await response.json();
        setBitcoinData(data.bitcoin);
      } catch (error) {
        console.error("Error fetching bitcoin data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Helmet>
        <title>KoinX</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[17px] bg-blue_gray-50_01" id="bitcoin">
        <Navbar1 />
        <div className="flex flex-col items-center justify-start w-full gap-14" >
          <div className="flex flex-col items-start justify-start w-full gap-[17px] max-w-[1328px]">
            <div className="flex flex-row justify-start w-[15%]">
              <div className="flex flex-row justify-start items-center w-[75%] gap-[9px]">
                <a href="#">
                  <Text as="p" className="!text-blue_gray-700_01 !font-normal">
                    Cryptocurrencies
                  </Text>
                </a>
                <Img src="images/img_icon.svg" alt="icon_one" className="h-[10px] w-[10px] mr-1" />
              </div>
              <div className="flex flex-row justify-center w-[26%]">
                <Text as="p" className="!text-gray-900">
                  Bitcoin
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full pb-[22px]">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-row justify-start items-start w-full gap-5">
                  <div className="flex flex-col items-center justify-start w-[67%] gap-[9px]">
                    <div className="flex flex-col items-start justify-start w-[908px] pl-[23px] py-[23px] bg-white-A700 rounded-lg ">
                      <div className="flex flex-row justify-start items-center w-full gap-9">
                        <div className="flex flex-row justify-start w-[19%]">
                          <div className="flex flex-row justify-start w-full">
                            <div className="flex flex-row justify-start items-center w-full">
                              <Img
                                src="images/img_image_160.png"
                                alt="image160_one"
                                className="w-[36px] object-cover"
                              />
                              <div className="flex flex-row justify-end w-[79%]">
                                <div className="flex flex-row justify-start items-start w-[94%] gap-2">
                                  <div className="flex flex-row justify-center w-[67%]">
                                    <Heading as="h1" className="!text-gray-900_06">
                                      Bitcoin
                                    </Heading>
                                  </div>
                                  <Heading size="s" as="h2" className="mt-[3px] !text-blue_gray-600">
                                    BTC
                                  </Heading>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row justify-start w-[10%]">
                          <Button
                            color="blue_gray_400_02"
                            size="lg"
                            className="w-full font-medium border-blue_gray-400 border border-solid whitespace-nowrap"
                          >
                            Rank #1
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-row justify-between items-start w-[67%] mt-10">
                        <div className="flex flex-col items-start justify-start gap-1.5 py-0.5">
                          <Heading size="2xl" as="h3" className="!text-gray-900_06">
                            {bitcoinData ? `$${bitcoinData.usd.toLocaleString()}` : "Loading..."}
                          </Heading>
                          <Text size="2xl" as="p">
                            {bitcoinData ? `₹ ${bitcoinData.inr.toLocaleString()}` : "Loading..."}
                          </Text>
                        </div>
                        <div className="flex flex-row justify-center w-[67%]">
                          <div className="flex flex-row justify-start w-full pb-0.5">
                            <div className="flex flex-row justify-start w-[36%]">
                              <div className="flex flex-row justify-start items-start w-full gap-3 py-[3px]">
                                <Button
                                  leftIcon={<Img src="images/img_polygon_2.svg" alt="Polygon 2" />}
                                  className="mb-0.5 gap-2 font-medium min-w-[84px] rounded ${bitcoinData.usd_24h_change < 0 ? 'text-red-500 bg-red-100' : 'text-green-500'"
                                >
                                  {bitcoinData ? `${bitcoinData.usd_24h_change.toFixed(2)}%` : "Loading..."}
                                </Button>
                                <Text as="p" className="mt-1 !text-blue_gray-400_02">
                                  (24H)
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="h-px w-[97%] mt-6 bg-gray-300_01" />
                      <Bitcoingraph />
                    </div>
                    <Navbar2 />
                  </div>

                  <TrendingCoins />
                </div>
                <Performance />
                <Sentiment/>
                <About />
                <Tokenomics />
                <Team />
              </div>
            </div>
          </div>
          <AlsoLike />

        </div>
      </div>
    </>
  );
}
