import React from "react";
import { Img, Text, Heading, Button } from "../../components";


export const Navbar1 = () => {
    return (
        <>
          <header className="flex justify-center items-center w-full border-gray-300 border-b border-solid bg-white-A700 shadow-xs">
          <div className="flex flex-row justify-center w-full mx-auto max-w-[1324px]">
            <div className="flex flex-row justify-between items-center w-full">
              <div className="flex flex-row justify-center py-6">
                <Img src="images/img_1_koinx_logo.png" alt="1koinxlogo_one" className="max-w-[90px] h-auto" />
              </div>
              <div className="flex flex-row justify-start items-center w-[69%] gap-[45px]">
                <div className="flex flex-row justify-start items-center w-[81%] pl-[355px] gap-8">
                  <Text />
                  <Heading
                    size="s"
                    as="h6"
                    className="flex justify-center items-center w-[79px] h-[70px] py-[25px] tracking-[-0.16px] bg-white-A700 whitespace-nowrap"
                  >
                    Crypto Taxes
                  </Heading>
                  <Heading
                    size="s"
                    as="h6"
                    className="flex justify-center items-center w-[79px] h-[70px] py-[25px] tracking-[-0.16px] bg-white-A700"
                  >
                    Free Tools
                  </Heading>
                  <Heading
                    size="s"
                    as="h6"
                    className="flex justify-center items-center w-[128px] h-[70px] py-[25px] tracking-[-0.16px] bg-white-A700 "
                  >
                    Resource Center
                  </Heading>
                </div>
                <Button
                 size="lg"
                 variant="gradient"
                 color="blue_A400_indigo_A700"
                 className="tracking-[-0.16px] font-semibold min-w-[136px] transition-transform duration-300 ease-in-out transform hover:scale-110 "
                >
                Get Started
                </Button>

              </div>
            </div>
          </div>
        </header>
        </>
    )
}