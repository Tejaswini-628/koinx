import React, { useState } from 'react';
import TradingViewWidget from './TradingViewWidget';
import { Img, Text, Heading, Button } from "../../components";

const coins = [
  { symbol: 'OANDA:XAUUSD', name: 'GOLD' },
  { symbol: 'NASDAQ:META', name: 'META' },
  { symbol: 'COINBASE:ETHUSD', name: 'ETHERIUM' },
  { symbol: 'NASDAQ:COIN', name: 'COINBASE' },
  // Add more coins as needed
];

const coins2 = [
  { symbol: 'NASDAQ:NVDA', name: 'NVIDIA' },
  { symbol: 'NASDAQ:AAPL', name: 'APPLE' },
  { symbol: 'NASDAQ:GOOGL', name: 'GOOGLE' },
  { symbol: 'NASDAQ:TSLA', name: 'TESLA' },
  // Add more coins as needed
];
export const AlsoLike = () => {
  return (
    <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col w-full gap-px p-[25px] bg-white-A700 ">
              <div className="flex flex-col items-center justify-start w-full mt-4 pb-[30px] gap-5 mx-auto max-w-[1330px] "></div>
              <div className="flex flex-row justify-start w-[98%] pl-20" style={{paddingBottom: "30px"}}>
                  <Heading as="h2" className="mt-1 !text-gray-900_01 pl-10">
                    You May Also Like
                  </Heading>
                </div>
    <div className="flex flex-row justify-center w-full">
    <div className="flex flex-wrap justify-center gap-6">
      {coins.map((coin, index) => (
        <div className="flex flex-col items-start justify-center w-[20%] p-[17px] border-gray-300_04 border border-solid rounded-[10px] ">
        <div className="flex justify-between ">
          <div>
            <h5 className="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">{coin.price}</h5>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400 mt-1">{coin.name}</p>
          </div>
        </div>
        <div id="trading-widget-container">
          <TradingViewWidget symbol={coin.symbol} />
        </div>
      </div>

      ))}
    </div>
  </div>

  <div className="flex flex-col items-center justify-start w-full mt-4 pb-[30px] gap-5 mx-auto max-w-[1330px]"></div>
              <div className="flex flex-row justify-start w-[98%] pl-20" style={{paddingBottom: "30px"}}>
                  <Heading as="h2" className="mt-1 !text-gray-900_01 pl-10">
                    Trending Coins
                  </Heading>
                </div>
    <div className="flex flex-row justify-center w-full mb-20">
    <div className="flex flex-wrap justify-center gap-6 ">
      {coins2.map((coin, index) => (
        <div className="flex flex-col items-start justify-center w-[20%] p-[17px] border-gray-300_04 border border-solid rounded-[10px] ">
        <div className="flex justify-between ">
          <div>
            <h5 className="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2 mt-">{coin.price}</h5>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400 mt-1">{coin.name}</p>
          </div>
        </div>
        <div id="trading-widget-container">
          <TradingViewWidget symbol={coin.symbol} />
        </div>
      </div>

      ))}
    </div>
  </div>
  </div>
  </div>
  );
}


// export default AlsoLike;
