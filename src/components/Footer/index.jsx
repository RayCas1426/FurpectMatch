import { Img } from "../Img";
import { Heading } from "../Heading";
import { Text } from "../Text";
import React from "react";

export default function Footer({ ...props }) {
  return (
    <footer
      {...props}
      className={`${props.className} flex justify-center items-center px-14 md:px-5 sm:px-4 bg-gray-50_02`}
    >
      <div className="relative mx-auto mt-2 h-[360px] w-full max-w-[1378px] flex flex-col justify-between">
        
        <div className="absolute bottom-0 right-[-1px] top-0 my-auto flex h-max w-full flex-col gap-[54px] sm:gap-[27px]">
          <div className="flex items-center justify-between gap-5 md:flex-col">
            <div className="flex w-[26%] flex-col gap-5 md:w-full">
              <Img src="images/logo.png" alt="Footerlogo" className="h-[30px] w-[126px] object-contain" />
              <Text
                size="textlg"
                as="p"
                className="text-[18px] font-normal leading-[21px] text-black-900 lg:text-[15px]"
              >
                Open your heart and your home to a shelter pet.{" "}
              </Text>
              <div className="flex gap-5">
                <Img src="images/fb.svg" alt="Facebook" className="h-[24px]" />
                <Img src="images/ig.svg" alt="Info" className="h-[24px]" />
                <Img src="images/x.svg" alt="Music" className="h-[24px]" />
                <Img src="images/yt.svg" alt="Warning" className="h-[24px]" />
              </div>
            </div>
            <div className="flex w-[6%] flex-col items-center gap-5 md:w-full">
              <Heading
                size="headings"
                as="h6"
                className="font-poppins text-[16px] font-semibold text-black-900_02 lg:text-[13px]"
              >
                Quick Links
              </Heading>
              <ul className="flex flex-col items-start gap-4 self-stretch">
                <li>
                  <a href="/AboutUs" className="lg:text-[13px]">
                    <Text as="p" className="font-poppins text-[16px] font-normal text-black-900_02">
                      About Us
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="/ContactUs" className="lg:text-[13px]">
                    <Text as="p" className="font-poppins text-[16px] font-normal text-black-900_02">
                      Contact
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="/Shop" target="_blank" rel="noreferrer" className="lg:text-[13px]">
                    <Text as="p" className="font-poppins text-[16px] font-normal text-black-900_02">
                      Adopt
                    </Text>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex w-[14%] flex-col items-start gap-4 self-start md:w-full md:self-auto">
              <Heading
                size="headings"
                as="h6"
                className="font-poppins text-[16px] font-semibold text-black-900_02 lg:text-[13px]"
              >
                Address
              </Heading>
              <div className="flex flex-col items-start gap-2.5 self-stretch">
                <Text as="p" className="font-poppins text-[16px] font-medium text-black-900_02 lg:text-[13px]">
                  UM VISAYAN CAMPUS
                </Text>
                <div className="flex flex-col items-start self-stretch">
                  <Text as="p" className="font-poppins text-[16px] font-medium text-black-900_02 lg:text-[13px]">
                    +63123456789
                  </Text>
                  <Text as="p" className="text-[16px] font-medium text-black-900_02 lg:text-[13px]">
                    furpectmatch@gmail.com
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Text size="texts" as="p" className="mt-auto mx-auto font-poppins text-[14px] font-normal text-black-900_7f">
          Copyright Furpect Match 2024.
        </Text>
      </div>
    </footer>
  );
}
