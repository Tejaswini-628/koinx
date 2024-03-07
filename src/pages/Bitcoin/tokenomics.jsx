import React from "react";
import { Img, Text, Heading, Button } from "../../components";


export const Tokenomics = () => {
    return (
        <> 
          <div className="h-[539px] w-[69%] mt-[3px] relative">
          <div className="justify-center h-full w-full left-0 bottom-0 right-0 top-0 m-auto absolute bg-white-A700 rounded-lg" />
                  <div className="flex flex-row justify-start w-full right-0 top-[4%] m-auto absolute pl-10">
                    <Heading as="h4">Tokenomics</Heading>
                  </div>
                  <div className="flex flex-col items-center justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                    <div className="flex flex-col items-center justify-start w-[98%]">
                      <div className="flex flex-row justify-start w-full py-1">
                        <Heading size="lg" as="h5" className="mb-px !text-gray-900_02 !font-semibold pl-9">
                          Initial Distribution
                        </Heading>
                      </div>
                      <div className="flex flex-row justify-start items-center w-full gap-6 py-[15px] pl-10">
                        <Img src="images/img_frame_1116601936.svg" alt="image_three" className="h-[179px] w-[179px] " />
                        <div className="flex flex-row justify-start w-[27%]">
                          <div className="flex flex-col items-center justify-start w-full gap-4 py-[27px] pl-10">
                            <div className="flex flex-row justify-center w-full">
                              <Img
                                src="images/img_span_circle_margin.svg"
                                alt="image_four"
                                className="h-[20px] w-[21px]"
                              />
                              <div className="flex flex-row justify-center w-[91%]">
                                <Text size="2xl" as="p" className="!text-gray-900_01 !font-normal">
                                  Crowdsale investors: 80%
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-row justify-start w-full">
                              <Img
                                src="images/img_span_circle_margin_amber_700.svg"
                                alt="image_five"
                                className="h-[20px] w-[21px]"
                              />
                              <div className="flex flex-row justify-center w-[60%]">
                                <Text size="2xl" as="p" className="!text-gray-900_01 !font-normal">
                                  Foundation: 20%
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Text size="2xl" as="p" className="!text-gray-800 !leading-[160%] pl-10 pr-10 mt-5">
                      Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim
                      vel consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce
                      eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis
                      augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget justo dui
                      metus odio rutrum. Vel ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit
                      mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.
                    </Text>
                  </div>
                </div>
        </>
    )
}