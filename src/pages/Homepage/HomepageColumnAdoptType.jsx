import { Heading } from "../../components/Heading";
import DogProfile from "../../components/DogProfile";
import React from "react";

export default function HomepageColumnAdoptType() {
    return (
        <div className="mt-[34px] flex flex-col items-center gap-[72px] 1g:gap-[72px] md:gap-[54px] sm:gap-9">
            <div className="flex w-[78%] justify-center 1g:w-full 1g:px-5 md:w-full md:px-5">
                <div className="container-xs flex justify-center px-14 md:px-5 sm:px-4">
                    <Heading
                        size="heading3x1"
                        as="h2"
                        className="font-poppins text-[50px] font-semibold text-teal-900 lg:text-[42px] md:text-[34px] sm:text-[28px]" 
                    >
                        Adopt By Pet
                    </Heading>
                </div>
            </div>
            <div className="container-xs flex flex-col items-center px-14 1g:px-5 md:px-5">
                <div className="flex w-[76%] gap-[100px] md:w-full md:flex-col">
                    <DogProfile />
                    <DogProfile dogImage="images/cat_img.png" dogTitle="CATS" /> 
                </div>
            </div>
        </div>
    );
}
