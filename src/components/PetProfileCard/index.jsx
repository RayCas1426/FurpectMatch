import { Img } from "../Img";
import { Button } from "../Button";
import { Text } from "../Text";
import { Heading } from "../Heading";
import React from "react";
import { Link } from "react-router-dom"; 

export default function PetProfileCard({
  newTwo = "New",
  petName = "Pitter", 
  locationText = "Tagum, Philippines", 
  genderLabel = "Gender:", 
  genderValue = "Male", 
  breedLabel = "Breed:", 
  breedValue = "Pit Bull", 
  ageLabel = "Age:", 
  ageValue = "5 years", 
  sizeLabel = "Size:", 
  sizeValue = "Large", 
  descriptionText = "Pitter is a friendly, playful, smart male dog. Only adopted to a house with fenced yard. He loves running around",
  moreInfoButton = "More Info", 
  moreInfoLink = "/PetPage", 
  ...props 
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-center w-[24%] md:w-full`}> 
      <div className="flex flex-col items-start self-stretch">
        <div className="relative mt-[-18px] flex flex-col items-start self-stretch">
          <div className="self-stretch rounded-[16px] border border-solid border-gray-300 bg-white-a700">
            <div className="relative h-[158px]">
              <Img 
                src="images/pet1.png"
                alt="New" 
                className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[158px] w-full flex-1 object-cover"
              />
              <div className="absolute left-0 right-0 top-px m-auto flex w-[74%] flex-col items-start"> 
                <div className="flex w-[40px] justify-center bg-deep_purple-600">
                  
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3.5 p-4">
              <div className="flex items-center justify-between gap-5">
                <Heading as="h6" className="text-[18px] font-bold text-indigo-900">
                  {petName}
                </Heading>
              </div>
              <div className="flex gap-2">
                <Img src="images/location_on.svg" alt="Tagum, Philippines" className="h-[16px] w-[16px]" /> 
                <Heading as="p" className="text-[14px] font-semibold text-teal-900">
                  {locationText}
                </Heading>
              </div>
              <div className="flex gap-6">
                <div className="flex w-full justify-center gap-1.5">
                  <Text size="texts" as="p" className="text-[16px] font-medium text-black-900">
                    {genderLabel}
                  </Text>
                  <Button color="deep_purple_50" shape="round" className="w-full rounded-lg px-2.5"> 
                    {genderValue}
                  </Button>
                </div>
                <div className="flex w-full justify-center gap-4">
                  <Text size="texts" as="p" className="text-[16px] font-medium text-black-900">
                    {breedLabel}
                  </Text>
                  <Button color="deep_purple_50" shape="round" className="w-full rounded-lg px-1"> 
                    {breedValue}
                  </Button>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex w-full justify-center gap-4">
                  <Text size="texts" as="p" className="text-[16px] font-medium text-black-900">
                    {ageLabel}
                  </Text>
                  <Button color="deep_purple_50" shape="round" className="min-w-[64px] rounded-lg px-2.5"> 
                    {ageValue}
                  </Button>
                </div>
                <div className="flex w-full justify-center gap-6">
                  <Text size="texts" as="p" className="text-[16px] font-medium text-black-900">
                    {sizeLabel} 
                  </Text>
                  <Button color="deep_purple_50" shape="round" className="min-w-[54px] rounded-lg px-2.5"> 
                    {sizeValue}
                  </Button>
                </div>
              </div>
              <Text size="texts" as="p" className="text-[16px] font-normal leading-6 text-black-900">
                {descriptionText}
              </Text>
              <Link to={moreInfoLink}> 
                <Button 
                  size="3x1"
                  shape="round"
                  className="mb-2 self-stretch rounded-lg border border-solid border-indigo-400 px-[33px] font-medium sm:px-5"
                >
                  {moreInfoButton} 
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
