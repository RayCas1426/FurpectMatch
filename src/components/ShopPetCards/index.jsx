import { Img } from "../Img";
import { Button } from "../Button";
import { Text } from "../Text";
import { Heading } from "../Heading";
import React from "react";
import { useNavigate } from "react-router-dom"; 

export default function ShopPetcards({
  name,
  location,
  gender,
  breed,
  age,
  size,
  description,
  image,
  id, 
  handlePetSelection, 
  ...props
}) {
  const navigate = useNavigate(); 

 
  const handleMoreInfo = () => {
    
    if (handlePetSelection) {
      handlePetSelection(id); 
    }

   
    navigate("/PetPage", {
      state: { petId: id }, 
    });
  };

  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center w-full  border rounded-lg overflow-hidden`}
    >
      <Img
        src={image}
        className="h-[158px] w-full object-cover rounded-t-lg"
        alt={name}
      />
      <div className="flex flex-col items-start gap-3.5 p-4 w-full">
        <div className="flex items-center justify-between w-full">
          <Heading as="h6" className="text-[18px] font-bold text-indigo-900">
            {name}
          </Heading>
        </div>

        <div className="flex gap-2 items-center">
          <Img src="images/location_on.svg" alt="location" className="h-[16px] w-[16px]" />
          <Heading as="p" className="text-[14px] font-semibold text-teal-900">
            {location}
          </Heading>
        </div>

        <div className="flex flex-wrap w-full justify-between gap-4">
          <div className="flex items-center gap-2">
            <Text size="texts" as="p" className="text-[16px] font-medium text-black-900">
              Gender:
            </Text>
            <Button color="deep_purple_50" shape="round" className="px-2.5">
              {gender}
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Text size="texts" as="p" className="text-[16px] font-medium text-black-900">
              Breed:
            </Text>
            <Text size="textxs" as="p" className="px-2 py-1 rounded bg-deep_purple-50 text-[12px] font-normal text-indigo-900">
              {breed}
            </Text>
          </div>
        </div>

        <div className="flex flex-wrap w-full justify-between gap-4">
          <div className="flex items-center gap-2">
            <Text size="texts" as="p" className="text-[16px] font-medium text-black-900">
              Age:
            </Text>
            <Button color="deep_purple_50" shape="round" className="px-2.5">
              {age}
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Text size="texts" as="p" className="text-[16px] font-medium text-black-900">
              Size:
            </Text>
            <Button color="deep_purple_50" shape="round" className="px-2.5">
              {size}
            </Button>
          </div>
        </div>

        <Text size="texts" as="p" className="w-full text-[16px] font-normal leading-6 text-black-900">
          {description}
        </Text>

        <Button
          size="3x1"
          shape="round"
          className="w-full mt-4 rounded border border-solid border-indigo-400 px-4 py-2 font-medium"
          onClick={handleMoreInfo}
        >
          More Info
        </Button>
      </div>
    </div>
  );
}
