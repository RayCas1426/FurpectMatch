import { Img } from "../Img";
import { Heading } from "../Heading";
import React from "react";

export default function DogProfile({ dogImage = "images/dog_img.png", dogTitle = "DOGS", ...props }) {
    return (
        <div {...props} className={`${props.className} flex flex-col items-center w-[50%] md:w-full rounded-[20px]`}>
            <Img src={dogImage} alt="Dogs" className="h-[300px] w-full rounded-tl-[20px] rounded-tr-[20px] object-cover" /> 
            <div className="flex items-start justify-between gap-5 self-stretch bg-gray-50_02 px-4 py-1.5">
                <Heading size="headinglg" as="h3" className="font-poppins text-[28px] font-semibold text-black-900_02">
                    {dogTitle}
                </Heading>
                <a href="/Shop">
                    <Img src="images/arrow_right.svg" alt="Go to Shop" className="mb-[22px] mt-3 h-[50px] w-[50px] rounded-[50%] cursor-pointer" /> 
                </a>
            </div>
        </div>
    );
}
