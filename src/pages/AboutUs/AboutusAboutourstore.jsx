import { Text } from "../../components/Text";
import {Heading} from "../../components/Heading";
import React from "react";

export default function AboutusAboutourstore() {
  return (
    <div className="flex flex-col items-center py-11 md:py-5 sm:py-4">
      <div className="container-xs mb-3.5 flex flex-col items-start gap-3.5 lg:px-5 md:px-5">
        <Heading
          size="heading2x1"
          as="h2"
          className="font-poppins text-[40px] font-semibold text-black-900_02 lg:text-[34px] md:text-[34px] sm:text-[32px]"
        >
          About Furpect Match
        </Heading>
        <div className="flex justify-between gap-5 self-stretch md:flex-col">
          <Text
            className="w-[44%] font-poppins text-[16px] font-normal leading-[160%] text-black-900_cc lg:w-[44%] lg:text-[13px] md:w-full"
            as="p"
          >
            Welcome to Furrfect Match, a place where you can find your new best friend! We believe that every pet deserves a loving home, and our mission is to connect kind-hearted people with amazing pets in need of adoption.
          </Text>
          <Text
            className="mr-16 w-[46%] font-poppins text-[16px] font-normal leading-[160%] text-black-900_cc lg:w-[46%] lg:text-[13px] md:mr-0 md:w-full"
            as="p"
          >
            At Furrfect Match, we're passionate about ensuring that every adoption is a positive experience, both for you and the pet. That's why we've made the process simple. Browse through our categories, fill out an adoption form, and wait for approval. Once your new friend joins your family, you can even share updates and pictures, showing how they're settling into their new home!
          </Text>
        </div>
      </div>
    </div>
  );
}
