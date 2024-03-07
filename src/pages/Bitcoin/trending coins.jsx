import React, { useState, useEffect } from "react";
import { Img, Text, Heading, Button } from "../../components";

export const TrendingCoins = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);

    useEffect(() => {
        fetchTrendingCoins();
    }, []);

    const fetchTrendingCoins = async () => {
      try {
          const response = await fetch('https://api.coingecko.com/api/v3/search/trending');
          if (!response.ok) {
              throw new Error('Failed to fetch trending coins');
          }
          const data = await response.json();
          // Extracting only the top 3 trending coins
          const top3Coins = data.coins.slice(0, 3);
          // Set the trending coins state with updated data structure
          setTrendingCoins(top3Coins.map(item => ({
              name: item.item.name,
              symbol: item.item.symbol,
              percentageChange: item.item.data.price_change_percentage_24h.usd, // Assuming USD change here and fixing to 3 decimal places
              icon: item.item.thumb
          })));
      } catch (error) {
          console.error('Error fetching trending coins:', error.message);
      }
  };
  
    return (
        <>
           <div className="flex flex-col items-center justify-start w-[33%] gap-5">
                    <div className="flex flex-col items-center justify-start w-full gap-[19px] p-[31px] bg-blue-A700_01 rounded-[16px]">
                      <div className="flex flex-col items-center justify-start w-[90%] pb-4 gap-3.5">
                        <Heading as="h6" className="w-[82%] !text-white-A700 text-center !font-bold !leading-10">
                          Get Started with KoinX for FREE
                        </Heading>
                        <Text as="p" className="!text-gray-100_01 text-center leading-6">
                          With our range of features that you can equip for free,
                          <br />
                          KoinX allows you to be more educated and aware of your tax reports.
                        </Text>
                      </div>
                      <Img src="images/img_frame.svg" alt="image_two" className="h-[166px]" />
                      <Button
                        color="white_A700"
                        size="xl"
                        rightIcon={
                          <Img src="images/img_iconly_light_arrow_right.svg" alt="Iconly/Light/Arrow - Right" />
                        }
                        className="mb-[18px] gap-2.5 font-semibold min-w-[237px]"
                      >
                        Get Started for FREE
                        <br />
                      </Button>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full gap-[23px] p-6 bg-white-A700 rounded-lg">
                <div className="flex flex-row justify-start w-full">
                    <Heading as="h4">Trending Coins (24h)</Heading>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col w-full gap-5">
                        {trendingCoins.map((coin, index) => (
                            <div key={index} className="flex flex-row justify-between items-center w-full">
                                <div className="flex flex-row justify-start items-center gap-1.5">
                                    <Button color="white" size="xs" shape="circle" className="w-[35px]">
                                        <Img src={coin.icon} />
                                    </Button>
                                    <Text size="2xl" as="p" className="!text-gray-900">
                                        {coin.name} ({coin.symbol})
                                    </Text>
                                </div>
                                <Button
                                    leftIcon={<Img src="images/img_polygon_2.svg" alt="Polygon 2" />}
                                    className="gap-2 font-medium min-w-[84px] rounded"
                                >
                                    {coin.percentageChange.toFixed(2)}%
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

                  </div>
        </>
    )
}