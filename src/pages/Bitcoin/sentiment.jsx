  import React from "react";
  import { Img, Text, Heading, Button } from "../../components";

  export const Sentiment = () => {
      return (
          <>
            <div className="h-[556px] w-[72%] mt-5 relative" id="sentiments">
                    <div className="justify-center h-[566px] w-[95%] left-0 bottom-0 right-0 top-0 m-auto absolute">
                      <div className="justify-center h-full w-full left-0 bottom-0 right-0 top-0 m-auto absolute bg-white-A700 rounded-lg -ml-7" />
                      <div className="flex flex-row justify-start w-full right-0 top-[4%] m-auto absolute pl-5">
                        <Heading as="h4">Sentiment</Heading>
                      </div>
                      <div className="flex flex-col items-center justify-start w-[78%] gap-[33px] bottom-[5%] left-[3%] m-auto absolute pl-5">
                        <div className="flex flex-col items-start justify-start w-full gap-3.5 mr-12 mb-5">
                          <div className="flex flex-row justify-start items-center w-full gap-px">
                            <div className="flex flex-row justify-start w-[15%] ">
                              <Heading size="md" as="h6" className="!text-blue_gray-800_02 !text-[18.91px]">
                                Key Events
                              </Heading>
                            </div>
                            <Img
                              src="images/img_svg_margin_blue_gray_400_01.svg"
                              alt="svgmargin_three"
                              className="h-[20px]"
                            />
                          </div>
                          <div className="flex flex-col w-[65%] gap-px" style={{ paddingRight: '70px' }}>
                            <div className="flex flex-row justify-start items-start w-full gap-2 p-[17px] border-blue-50 border border-solid bg-blue-50 rounded-[12px]" style={{ marginRight: '90px' }}>
                              <Img src="images/img_aside.svg" alt="image" className="h-[147px]" />
                              <div className="flex flex-col items-center justify-start w-[88%] mb-[10px] gap-2">
                                <div className="flex flex-row justify-center w-full">
                                  <div className="flex flex-row justify-start w-full">
                                    <Text as="p" className="w-[95%] !text-gray-900_04 !font-sfprotext leading-5">
                                      Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim
                                      tincidunt.Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis.
                                    Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a
                                    bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-full pb-[22px] gap-[21px]">
                          <div className="flex flex-row justify-start items-center w-full gap-px mr-12 ">
                            <div className="flex flex-row justify-start w-[24%]">
                              <Heading size="md" as="h6" className="!text-blue_gray-800_02 !text-[18.91px]">
                                Analyst Estimates
                              </Heading>
                            </div>
                            <Img
                              src="images/img_svg_margin_blue_gray_400_01.svg"
                              alt="svgmargin_five"
                              className="h-[20px]"
                            />
                          </div>
                          <div className="flex flex-row justify-center items-center w-full mr-12">
                            <div className="flex flex-row justify-start w-[22%]">
                              <div className="flex flex-col items-center justify-center w-[75%] p-[27px] bg-blue_gray-50 rounded-[50%]">
                                <div className="flex flex-row justify-start items-center w-[97%] gap-0.5 py-[3px] my-1">
                                  <div className="flex flex-col items-center justify-center w-[74%]">
                                    <Text size="4xl" as="p" className="h-[45px] mb-px !text-teal-A700 !text-[36.41px]">
                                      76
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-center justify-start w-[24%]">
                                    <Text size="2xl" as="p" className="!text-teal-A700">
                                      %
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col w-[78%] gap-px">
                              <div className="flex flex-row justify-start items-center w-full p-2">
                                <div className="flex flex-row justify-start w-[10%]">
                                  <Text size="xl" as="p" className="mt-0.5 !text-blue_gray-400_01">
                                    Buy
                                  </Text>
                                </div>
                                <div className="h-[8px] w-[65%] bg-teal-500 rounded-sm" />
                                <div className="flex flex-row justify-end w-[8%]">
                                  <Text as="p" className="!text-blue_gray-400_01 !text-[14.25px]">
                                    76%
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-row justify-start items-center w-full p-2">
                                <div className="flex flex-row justify-start w-[10%]">
                                  <Text size="xl" as="p" className="mt-px !text-blue_gray-400_01 !text-[15.13px]">
                                    Hold
                                  </Text>
                                </div>
                                <div className="h-[8px] w-[7%] bg-gray-400 rounded-sm" />
                                <div className="flex flex-row justify-center w-[8%]">
                                  <Text size="xl" as="p" className="!text-blue_gray-400_01 !text-[15.63px]">
                                    8%
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-row justify-start items-center w-full p-2">
                                <div className="flex flex-row justify-start w-[10%]">
                                  <Text size="xl" as="p" className="mt-px !text-blue_gray-400_01 !text-[15.13px]">
                                    Sell
                                  </Text>
                                </div>
                                <div className="h-[8px] w-[13%] bg-red-500 rounded-sm" />
                                <div className="flex flex-row justify-end w-[8%]">
                                  <Text size="xl" as="p" className="!text-blue_gray-400_01 !text-[15.63px]">
                                    16%
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                    <div className="flex flex-row justify-center w-[45%] right-0 top-[20%] p-[17px] mr-4 border-blue-50 border border-solid bg-blue_gray-50 absolute rounded-[12px] h-[185px] "style={{ marginRight: '80px' }}>
                      <div className="flex flex-row justify-start items-start w-full mb-[21px] gap-2">
                        <Img
                          src="images/img_frame_1116601921.svg"
                          alt="circleimage"
                          className="h-[44px] w-[44px] mt-px rounded-[50%]"
                        />
                        <div className="flex flex-col items-center justify-start w-[88%] gap-2 mb-[px]">
                          <div className="flex flex-row justify-center w-full">
                            <div className="flex flex-row justify-start w-full">
                              <Text as="p" className="w-[95%] !text-gray-900_04 !font-sfprotext leading-5">
                                Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt. Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Amet sapien quam viverra adipiscing condimentum. tincidunt.Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis.
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
          </>
      )
  }