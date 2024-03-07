import React from "react";
import { Img, Text, Heading, Button } from "../../components";


export const Navbar2=() => {
    return(
        <>

<div className="flex flex-row justify-center w-full">
                      <div className="h-[70px] w-full relative">
                        <div className="flex flex-col items-start justify-center w-full h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
                          <div className="h-[48px] w-full border-blue_gray-100 border-b border-solid" />
                          <Heading
                            size="s"
                            as="h5"
                            className="mt-[-48px] py-3.5 !text-blue-800_01 tracking-[-0.16px] border-blue-A700_01 border-b-[3px] border-solid"
                          >
                            Overview
                          </Heading>
                        </div>
                        <div className="flex flex-row justify-center w-max h-full gap-8 left-0 bottom-0 right-0 top-0 m-auto absolute">
                          <div className="flex flex-row justify-start w-[16%] py-6">
                            <Text size="2xl" as="p" className="!text-gray-800 tracking-[-0.16px]">
                              Fundamentals
                            </Text>
                          </div>
                          <div className="flex flex-row justify-start w-[16%] py-[23px]">
                            <Text size="2xl" as="p" className="mt-0.5 !text-gray-800 tracking-[-0.16px] whitespace-nowrap">
                              News Insights
                            </Text>
                          </div>
                          <div className="flex flex-row justify-start w-[13%] py-6">
                            <Text size="2xl" as="p" className="!text-gray-800 tracking-[-0.16px]">
                              Sentiments
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-start w-[7%] py-6">
                            <Text size="2xl" as="p" className="!text-gray-800 tracking-[-0.16px]">
                              Team
                            </Text>
                          </div>
                          <div className="flex flex-row justify-start w-[13%] py-6">
                            <Text size="2xl" as="p" className="!text-gray-800 tracking-[-0.16px]">
                              Technicals
                            </Text>
                          </div>
                          <div className="flex flex-row justify-start w-[14%] py-6">
                            <Text size="2xl" as="p" className="!text-gray-800 tracking-[-0.16px]">
                              Tokenomics
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
        </>
    )
}