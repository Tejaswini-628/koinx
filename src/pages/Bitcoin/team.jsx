import React from "react";
import { Img, Text, Heading, Button } from "../../components";


export const Team = () =>{
    return (
        <>
          <div className="h-[776px] w-[69%] mt-5 relative">
                  <div className="justify-center h-full w-full left-0 bottom-0 right-0 top-0 m-auto absolute bg-white-A700 rounded-lg" />
                  <div className="flex flex-row justify-start w-full right-0 top-[3%] pl-10 m-auto absolute">
                    <Heading as="h4" className="mb-2">Team</Heading>
                  </div>
                  <div className="flex flex-col items-center justify-center w-full h-full gap-6 left-0 bottom-0 right-0 top-0 m-auto absolute pl-10 pr-10">
                    <div className="flex flex-row justify-center w-full">
                      <div className="flex flex-row justify-center w-full mt-10 ">
                        <Text size="2xl" as="p" className="!text-gray-800 !leading-[160%]">
                          Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi
                          integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col w-[99%] gap-[23px]">
                      <div className="flex flex-row justify-start items-center w-full gap-4 p-[9px] pl-5 pr-5 border-light_blue-A700 border border-solid bg-blue-50 rounded-[7px]">
                        <div className="flex flex-col items-center justify-start w-[16%] gap-3">
                          <div className="flex flex-col items-center justify-start w-[75%]">
                            <div className="flex flex-col items-center justify-start w-full bg-blue_gray-800 rounded-md">
                              <Img
                                src="images/img_image_209.png"
                                alt="john_smith_one"
                                className="w-full object-cover rounded-md"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start w-[77%] gap-[5px]">
                            <Heading size="xs" as="p" className="text-center">
                              John Smith
                            </Heading>
                            <Text size="s" as="p" className="!text-blue_gray-400_03 text-center !font-medium">
                              Designation here
                            </Text>
                          </div>
                        </div>
                        <Text as="p" className="w-[81%] mr-[9px] !text-gray-900 !font-normal leading-[160%]">
                          Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit
                          id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis
                          laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis
                          consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam
                          mi gravida praesent interdu
                        </Text>
                      </div>
                      <div className="flex flex-row justify-start items-center w-full gap-4 p-[9px] pl-5 pr-5 border-light_blue-A700 border border-solid bg-blue-50 rounded-[7px]">
                        <div className="flex flex-col items-center justify-start w-[16%] gap-3">
                          <div className="flex flex-col items-center justify-start w-[75%]">
                            <div className="flex flex-col items-center justify-start w-full bg-blue_gray-800 rounded-md">
                              <Img
                                src="images/img_image_209_104x96.png"
                                alt="image209_one"
                                className="w-full object-cover rounded-md"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start w-[79%] gap-[5px]">
                            <Heading size="xs" as="p" className="text-center">
                              Elina Williams
                            </Heading>
                            <Text size="s" as="p" className="!text-blue_gray-400_03 text-center !font-medium">
                              Designation here
                            </Text>
                          </div>
                        </div>
                        <Text as="p" className="w-[81%] mr-[9px] !text-gray-900 !font-normal leading-[160%]">
                          Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit
                          id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis
                          laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis
                          consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam
                          mi gravida praesent interdu
                        </Text>
                      </div>
                      <div className="flex flex-row justify-start items-center w-full gap-4 p-[9px] pl-5 pr-5 border-light_blue-A700 border border-solid bg-blue-50 rounded-[7px]">
                        <div className="flex flex-col items-center justify-start w-[16%] gap-3">
                          <div className="flex flex-col items-center justify-start w-[75%]">
                            <div className="flex flex-col items-center justify-start w-full bg-blue_gray-800 rounded-md">
                              <Img
                                src="images/img_image_209_1.png"
                                alt="image209_one"
                                className="w-full object-cover rounded-md"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start w-[77%] gap-[5px]">
                            <Heading size="xs" as="p" className="text-center">
                              John Smith
                            </Heading>
                            <Text size="s" as="p" className="!text-blue_gray-400_03 text-center !font-medium">
                              Designation here
                            </Text>
                          </div>
                        </div>
                        <Text as="p" className="w-[81%] mr-[9px] !text-gray-900 !font-normal leading-[160%]">
                          Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit
                          id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis
                          laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis
                          consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam
                          mi gravida praesent interdu
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
        </>
    )
}