import { Img } from "../../components/Img";
import { Button } from "../../components/Button";
import { Text } from "../../components/Text";
import { Heading } from "../../components/Heading";
import React from "react";

export default function ContactUsColumnTwo() {
  return (
    <div className="flex flex-col items-center py-[38px] sm:py-4">
      <div className="container-xs mb-5 flex flex-col items-center gap-10 px-14 1g:px-5 md:px-5">
        <div className="flex w-[54%] flex-col items-start gap-5 lg:w-full md:w-full">
          <Heading
            size="heading2x1"
            as="h2"
            className="font-poppins text-[40px] font-semibold text-black-900_02 lg:text-[34px] md:text-[34px] sm:text-[32px]"
          >
            Feel free to contact us
          </Heading>
          <Text
            as="p"
            className="w-full font-poppins text-[16px] font-normal leading-[160%] text-black-900_cc lg:text-[13px]"
          >
            Have questions or need assistance? We&#39;re here to help! Feel free to reach out to us using the details below, and we'll get back to you as soon as possible.
          </Text>
        </div>

        <div className="flex w-[54%] flex-col gap-10 lg:w-full md:w-full">
          <div className="flex items-center gap-5">
            <Img src="images/Icon.svg" alt="Iconbg" className="h-[40px] w-[40px] rounded-[50%]" />
            <Heading
              size="headingmd"
              as="h3"
              className="self-end font-poppins text-[20px] font-semibold text-black-900_02 1g:text-[17px]"
            >
              Um Visayan Campus
            </Heading>
          </div>

          <div className="flex items-center gap-5">
            <Button color="indigo_400" size="lg" shape="circle" className="w-[40px] rounded-[20px] px-1.5">
              <img src="images/Icon1.svg" />
            </Button>
            <Heading
              size="headingmd"
              as="h4"
              className="self-end font-poppins text-[20px] font-semibold text-black-900_02 1g:text-[17px]"
            >
              furpectmatch@gmail.com
            </Heading>
          </div>

          <div className="flex items-center gap-5">
            <Button color="indigo_400" size="lg" shape="circle" className="w-[40px] rounded-[20px] px-2.5">
              <img src="images/Icon2.svg" />
            </Button>
            <Heading
              size="headingmd"
              as="h5"
              className="font-poppins text-[20px] font-semibold text-black-900_02 1g:text-[17px]"
            >
              +63123456789
            </Heading>
          </div>

          <div className="flex items-center gap-5">
            <Img
              src="images/Icon3.svg" 
              alt="Calendar"
              className="h-[40px] w-[40px] rounded-[50%]"
            />
            <Heading
              size="headingmd"
              as="h5"
              className="font-poppins text-[20px] font-semibold text-black-900_02 1g:text-[17px]"
            >
              Open Monday to Friday
            </Heading>
          </div>

        </div>
      </div>
    </div>
  );
}
