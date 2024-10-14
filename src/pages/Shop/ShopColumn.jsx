import { Img } from "../../components/Img";
import { Heading } from "../../components/Heading";
import React from "react";

export default function ShopColumn() {
    return (
        <div className="mt-[38px] flex flex-col items-center">
            <div className="container-xs flex flex-col gap-10 lg:px-5 md:px-5">
                
                <div className="flex flex-col items-center gap-10 px-14 md:px-5 sm:px-4">
                    <Heading
                        size="heading2x1"
                        as="h2"
                        className="font-poppins text-[40px] font-semibold text-teal-900 text-center lg:text-[34px] md:text-[30px] sm:text-[26px]"
                    >
                        Hi Human!! I Need a Home
                    </Heading>

                    
                    <div className="flex justify-center w-full gap-20 md:gap-10 md:w-3/4 sm:w-full sm:gap-6">
                        
                        <div className="flex flex-col items-center w-1/2 md:w-[45%] sm:w-[40%]">
                            <div className="relative h-[204px] w-full">
                                <Img
                                    src="images/purple_vector.png"
                                    alt="Vector"
                                    className="absolute bottom-0 left-[19px] h-[186px] w-full object-contain"
                                />
                                <Img
                                    src="images/cat2.png"
                                    alt="Cat"
                                    className="absolute top-0 left-0 h-[188px] w-full object-contain"
                                />
                            </div>
                            <Heading
                                size="headingmd"
                                as="h3"
                                className="mt-4 font-poppins text-[20px] font-semibold text-black-900_02 text-center lg:text-[18px] md:text-[16px] sm:text-[14px]"
                            >
                                Cat
                            </Heading>
                        </div>

                       
                        <div className="flex flex-col items-center w-1/2 md:w-[45%] sm:w-[40%]">
                            <div className="relative h-[204px] w-full">
                                <Img
                                    src="images/purple_vector.png"
                                    alt="Vector"
                                    className="absolute bottom-0 left-[19px] h-[186px] w-full object-contain"
                                />
                                <Img
                                    src="images/shopdog.png"
                                    alt="Dog"
                                    className="absolute top-0 left-0 h-[188px] w-full object-contain"
                                />
                            </div>
                            <Heading
                                size="headingmd"
                                as="h4"
                                className="mt-4 font-poppins text-[20px] font-semibold text-black-900_02 text-center lg:text-[18px] md:text-[16px] sm:text-[14px]"
                            >
                                Dog
                            </Heading>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
