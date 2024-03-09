import React, { useState } from "react";
import { TabList, Tab, Tabs } from "react-tabs";
import { Heading } from "../../components";
import GraphContent from "./GraphContent";

export const Bitcoingraph = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("24H"); // Default to 24H

  const handleTabClick = (period) => {
    setSelectedPeriod(period);
  };

  return (
    <>
      <Tabs
        className="flex flex-col items-center justify-start w-[97%] mt-[22px] mb-[9px] gap-[39px]"
        selectedTabClassName="!text-blue-800_01 bg-blue-50_01 rounded-[10px]"
        selectedTabPanelClassName="py-[3px] relative tab-panel--selected"
        style={{ height: "500px" }}
      >
        <div className="flex flex-row justify-between w-[99%]" >
          <Heading size="s" as="h4" className="mt-px !text-gray-900_06">
            Bitcoin Price Chart (USD)
          </Heading>
          <TabList className="flex flex-row justify-between items-center w-auto gap-[17px]">
            <Tab className="h-[16px] text-blue_gray-600 text-[13px] font-medium" onClick={() => handleTabClick("1H")}>1H</Tab>
            <Tab className="text-blue_gray-600 text-[13px] font-medium" onClick={() => handleTabClick("24H")}>24H</Tab>
            <Tab className="h-[16px] text-blue-800_01 text-[13px] font-medium" onClick={() => handleTabClick("7D")}>7D</Tab>
            <Tab className="text-blue_gray-600 text-xs font-medium" onClick={() => handleTabClick("1M")}>1M</Tab>
            <Tab className="h-[16px] text-blue_gray-600 text-[13px] font-medium" onClick={() => handleTabClick("1Y")}>1Y</Tab>
            <Tab className="text-blue_gray-600 text-[13px] font-medium" onClick={() => handleTabClick("ALL")}>ALL</Tab>
          </TabList>
        </div>
        <GraphContent period={selectedPeriod} />
      </Tabs>
    </>
  );
};
