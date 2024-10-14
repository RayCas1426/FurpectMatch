import { Img } from "../../components/Img";
import { Text } from "../../components/Text";
import React, { Suspense, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";


const petsData = [
  {
    name: "Bella",
    id: 1001,
    story: `Bella is a friendly dog who loves to play with her toys and go for long walks. She is very energetic and enjoys the company of other pets.`,
    images: [
      "images/bella.jpg",
      "images/bella2.jpg",
      "images/bella3.jpg",
      "images/bella4.jpg",
    ],
  },
  {
    name: "Max",
    id: 1002,
    story: `Max is a playful puppy who loves to fetch balls and chase after his friends. He is always up for an adventure!`,
    images: [
      "images/max.jpg",
      "images/max2.jpg",
      "images/max3.jpg",
      "images/max4.jpg",
    ],
  },
  {
    name: "Luna",
    id: 1003,
    story: `Luna is a shy but sweet cat who loves to curl up in her owner's lap. She enjoys quiet time and gentle petting.`,
    images: [
      "images/luna.jpg",
      "images/luna2.jpg",
      "images/luna3.jpg",
      "images/luna4.jpg",
    ],
  },
  {
    name: "Charlie",
    id: 1004,
    story: `Charlie is a calm and gentle cat who enjoys lounging in sunny spots and watching birds from the window. He is very affectionate.`,
    images: [
      "images/charlie.jpg",
      "images/charlie2.jpg",
      "images/charlie3.jpg",
      "images/charlie4.jpg",
    ],
  },
  {
    name: "Milo",
    id: 1005,
    story: `Milo is a quiet and independent Siamese cat who loves to explore.`,
    images: [
      "images/milo.jpg",
      "images/milo2.jpg",
      "images/milo3.jpg",
      "images/milo3.jpg",
    ],
  },
  {
    name: "Coco",
    id: 1006,
    story: `Coco is a friendly and gentle Poodle who enjoys meeting new people and going for walks in the park.`,
    images: [
      "images/coco.jpg",
      "images/coco2.jpg",
      "images/coco3.jpg",
      "images/coco4.jpg",
    ],
  },
  {
    name: "Oliver",
    id: 1007,
    story: `Oliver is a playful and adventurous Ragdoll cat who loves to chase toys.`,
    images: [
      "images/oliver.jpg",
      "images/oliver2.jpg",
      "images/oliver3.jpg",
      "images/oliver4.jpg",
    ],
  },
  {
    name: "Lucy",
    id: 1008,
    story: `Lucy is a clever and active Beagle who loves to explore the outdoors.`,
    images: [
      "images/lucy.jpg",
      "images/lucy2.jpg",
      "images/lucy3.jpg",
      "images/lucy4.jpg",
    ],
  },
  {
    name: "Lily",
    id: 1009,
    story: `Lily is a sweet and cuddly Persian cat who loves to be petted.`,
    images: [
      "images/lily.jpg",
      "images/lily2.jpg",
      "images/lily3.jpg",
      "images/lily4.jpg",
    ],
  },
  {
    name: "Duke",
    id: 1010,
    story: `Duke is a protective and friendly German Shepherd who loves to play with his family.`,
    images: [
      "images/duke.jpg",
      "images/duke2.jpg",
      "images/duke3.jpg",
      "images/duke4.jpg",
    ],
  },
  {
    name: "Simba",
    id: 1011,
    story: `Simba is a curious and bold Maine Coon who enjoys climbing and exploring.`,
    images: [
      "images/simba.jpg",
      "images/simba2.jpg",
      "images/simba3.jpg",
      "images/simba4.jpg",
    ],
  },
  {
    name: "Buddy",
    id: 1012,
    story: `Buddy is a loyal and protective Bulldog who enjoys being around his family.`,
    images: [
      "images/buddy.jpg",
      "images/buddy2.jpg",
      "images/buddy3.jpg",
      "images/buddy4.jpg",
    ],
  },
  {
    name: "Daisy",
    id: 1013,
    story: `Daisy is a playful and curious Shih Tzu who loves to be around people.`,
    images: [
      "images/daisy.jpg",
      "images/daisy2.jpg",
      "images/daisy3.jpeg",
      "images/daisy4.jpg",
    ],
  },
  {
    name: "Chloe",
    id: 1014,
    story: `Chloe is a gentle and quiet British Shorthair who enjoys lounging and being petted.`,
    images: [
      "images/chloe.jpg",
      "images/chloe2.jpg",
      "images/chloe3.jpg",
      "images/chloe4.jpg",
    ],
  },
  {
    name: "Rocky",
    id: 1015,
    story: `Rocky is an active and athletic Border Collie who loves to run and play fetch.`,
    images: [
      "images/rocky.jpeg",
      "images/rocky2.jpg",
      "images/rocky3.jpeg",
      "images/rocky4.jpg",
    ],
  },
];


export default function PetPageColumn() {
  const location = useLocation();
  const petId = location.state?.petId; 
  const [selectedPetIndex, setSelectedPetIndex] = useState(0);
  const [mainImage, setMainImage] = useState(""); 

  useEffect(() => {
    if (petId) {
      const index = petsData.findIndex((pet) => pet.id === petId);
      if (index !== -1) {
        setSelectedPetIndex(index);
        setMainImage(petsData[index].images[0]);
      } else {
        console.error("Pet ID not found in data:", petId);
      }
    }
  }, [petId]);

  const selectedPet = petsData[selectedPetIndex]; 

  if (!selectedPet) {
    return <Text>Loading pet details...</Text>; 
  }

  const { name, id, story, images } = selectedPet;

  return (
    <div className="max-w-[1920px] mx-auto flex flex-col items-start gap-4">
      <Text as="p" className="text-[24px] font-medium text-gray-900 lg:text-[20px]">
        Hi Human!
      </Text>
      <div className="flex flex-col gap-4 self-stretch">
        <div className="flex items-center gap-3 md:flex-col">
          
          <div className="w-[6%] rounded-[46px] border border-dashed border-gray-800 p-1.5 md:w-full md:px-5">
            <Img
              src="images/ellipse_421.png"
              alt="Profile Image"
              className="h-[80px] w-[80px] rounded-[40px] object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col items-start gap-1 md:self-stretch md:px-5">
            <Text as="p" className="text-[24px] font-medium text-teal-900 lg:text-[20px]">
              {name}
            </Text>
            <div className="flex flex-wrap gap-[9px] self-stretch">
              <Text size="textlg" as="p" className="text-[18px] font-normal text-gray-800 lg:text-[15px]">
                | Pet ID:
              </Text>
              <Text size="textlg" as="p" className="text-[18px] font-normal text-teal-900 lg:text-[15px]">
                | {id}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex items-start md:flex-col">
          <Img
            src="images/ph.png"
            alt="Television"
            className="mt-1.5 h-[30px] w-[4%] object-contain md:w-full"
          />
          <div className="flex flex-1 flex-col items-start justify-center self-center px-2.5 md:self-stretch md:px-5">
            <Text size="texts" as="p" className="ml-[58px] text-[16px] font-normal text-black-900 lg:text-[13px] md:ml-0">
              Philippines
            </Text>
            <div className="relative mt-[-4px] flex items-center gap-2.5 self-stretch">
              <Img src="images/location_on.svg" alt="Location" className="h-[24px] w-[24px]" />
              <Text size="texts" as="p" className="self-end text-[16px] font-normal text-black-900 lg:text-[13px]">
                Tagum (12 Km away)
              </Text>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch">
        <div className="flex gap-[30px] md:flex-col">
          <div className="flex flex-1 flex-col gap-8 md:self-stretch md:px-5">
            <div className="flex items-start justify-between gap-5 md:flex-col">
              <div className="relative flex-1 content-center self-center lg:h-auto md:h-auto">
                <Img
                  src={mainImage} 
                  alt="Main Image"
                  className="mx-auto min-h-[300px] max-h-[492px] w-full rounded-[16px] object-cover"
                />
              </div>
            </div>
            <div className="flex justify-center max-w-[1000px] mx-auto">
              <div className="flex gap-2 overflow-x-auto">
                <Suspense fallback={<div>Loading feed...</div>}>
                  {images.map((img, index) => (
                    <Img
                      key={"allpics" + index}
                      src={img}
                      alt="Thumbnail"
                      className="h-auto w-[24%] min-w-[120px] max-w-[240px] rounded-[16px] object-cover cursor-pointer"
                      onClick={() => {
                        setMainImage(img); 
                      }} 
                    />
                  ))}
                </Suspense>
              </div>
            </div>
          </div>
          <div className="w-[32%] md:w-full md:px-5">
            <div className="relative h-[646px] rounded-[16px] border border-solid border-gray-200 bg-gray-50 p-10 lg:h-auto md:h-auto sm:p-4">
              <Text
                size="texts"
                as="p"
                className="w-full text-[25px] font-normal leading-6 text-black-900 lg:text-[16px]"
              >
                <div>
                  <span className="text-[#4F46E5]">{name} Story</span>
                  <br />
                  <br />
                  {story}
                </div>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}