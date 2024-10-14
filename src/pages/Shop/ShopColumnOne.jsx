import { Img } from "../../components/Img";
import { SelectBox } from "../../components/SelectBox";
import { Button } from "../../components/Button";
import { Heading } from "../../components/Heading";
import ShopPetCards from "../../components/ShopPetCards";
import React, { Suspense, useState } from "react";

const dropDownOptions = [
    { label: "All Pets", value: "all" },
    { label: "Cats", value: "cat" },
    { label: "Dogs", value: "dog" },
];

const petsData = [
    { id: 1001, name: "Bella", location: "Tagum, Philippines", gender: "Female", breed: "Labrador", age: "2 years", size: "Large", description: "Playful and loving Labrador.", image: "images/bella.jpg", type: "dog", images: ["images/bella1.jpg", "images/bella2.jpg", "images/bella3.jpg"] },
    { id: 1002, name: "Max", location: "Davao, Philippines", gender: "Male", breed: "Retriever", age: "3 years", size: "Large", description: "Loyal and calm Golden Retriever.", image: "images/max.jpg", type: "dog", images: ["images/max1.jpg", "images/max2.jpg"] },
    { id: 1003, name: "Luna", location: "Tagum, Philippines", gender: "Female", breed: "Tabby", age: "1 year", size: "Medium", description: "Curious and affectionate tabby.", image: "images/luna.jpg", type: "cat", images: ["images/luna1.jpg", "images/luna2.jpg"] },
    { id: 1004, name: "Charlie", location: "Tagum, Philippines", gender: "Male", breed: "Husky", age: "4 years", size: "Large", description: "Brave and energetic Husky.", image: "images/charlie.jpg", type: "dog", images: ["images/charlie1.jpg", "images/charlie2.jpg"] },
    { id: 1005, name: "Milo", location: "Tagum, Philippines", gender: "Male", breed: "Siamese", age: "2 years", size: "Small", description: "Quiet and independent Siamese.", image: "images/milo.jpg", type: "cat", images: ["images/milo1.jpg", "images/milo2.jpg"] },
    { id: 1006, name: "Coco", location: "Davao, Philippines", gender: "Female", breed: "Poodle", age: "5 years", size: "Medium", description: "Friendly and gentle Poodle.", image: "images/coco.jpg", type: "dog", images: ["images/coco1.jpg", "images/coco2.jpg"] },
    { id: 1007, name: "Oliver", location: "Tagum, Philippines", gender: "Male", breed: "Ragdoll", age: "3 years", size: "Medium", description: "Playful and adventurous Ragdoll.", image: "images/oliver.jpg", type: "cat", images: ["images/oliver1.jpg", "images/oliver2.jpg"] },
    { id: 1008, name: "Lucy", location: "Davao, Philippines", gender: "Female", breed: "Beagle", age: "1.5 years", size: "Small", description: "Clever and active Beagle.", image: "images/lucy.jpg", type: "dog", images: ["images/lucy1.jpg", "images/lucy2.jpg"] },
    { id: 1009, name: "Lily", location: "Tagum, Philippines", gender: "Female", breed: "Persian", age: "4 years", size: "Medium", description: "Sweet and cuddly Persian.", image: "images/lily.jpg", type: "cat", images: ["images/lily1.jpg", "images/lily2.jpg"] },
    { id: 1010, name: "Duke", location: "Davao, Philippines", gender: "Male", breed: "German Shepherd", age: "6 years", size: "Large", description: "Protective and friendly German Shepherd.", image: "images/duke.jpg", type: "dog", images: ["images/duke1.jpg", "images/duke2.jpg"] },
    { id: 1011, name: "Simba", location: "Tagum, Philippines", gender: "Male", breed: "Maine Coon", age: "2.5 years", size: "Large", description: "Curious and bold Maine Coon.", image: "images/simba.jpg", type: "cat", images: ["images/simba1.jpg", "images/simba2.jpg"] },
    { id: 1012, name: "Buddy", location: "Davao, Philippines", gender: "Male", breed: "Bulldog", age: "3.5 years", size: "Medium", description: "Loyal and protective Bulldog.", image: "images/buddy.jpg", type: "dog", images: ["images/buddy1.jpg", "images/buddy2.jpg"] },
    { id: 1013, name: "Daisy", location: "Tagum, Philippines", gender: "Female", breed: "Shih Tzu", age: "1 year", size: "Small", description: "Playful and curious Shih Tzu.", image: "images/daisy.jpg", type: "dog", images: ["images/daisy1.jpg", "images/daisy2.jpg"] },
    { id: 1014, name: "Chloe", location: "Tagum, Philippines", gender: "Female", breed: "British Shorthair", age: "5 years", size: "Small", description: "Gentle and quiet British Shorthair.", image: "images/chloe.jpg", type: "cat", images: ["images/chloe1.jpg", "images/chloe2.jpg"] },
    { id: 1015, name: "Rocky", location: "Davao, Philippines", gender: "Male", breed: "Border Collie", age: "4 years", size: "Medium", description: "Active and athletic Border Collie.", image: "images/rocky.jpg", type: "dog", images: ["images/rocky1.jpg", "images/rocky2.jpg"] },
];



export default function ShopColumnOne() {
    const [selectedFilter, setSelectedFilter] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);
    const petsPerPage = 9;

    const handleFilterChange = (option) => {
        setSelectedFilter(option.value);
        setCurrentPage(1); 
    };


const filteredPets = selectedFilter === "all"
    ? petsData
    : petsData.filter(pet => pet.type === selectedFilter);


   
    const indexOfLastPet = currentPage * petsPerPage;
    const indexOfFirstPet = indexOfLastPet - petsPerPage;
    const currentPets = filteredPets.slice(indexOfFirstPet, indexOfLastPet);
    const totalPages = Math.ceil(filteredPets.length / petsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prev => prev + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prev => prev - 1);
        }
    };

    return (
        <div className="mt-28 flex flex-col items-center">
            <div className="container-xs flex flex-col items-center gap-[60px] px-14 lg:px-5 md:px-5 sm:gap-[30px]">
                
                <div className="mx-[60px] flex w-[90%] items-center justify-between gap-5 lg:w-full md:mx-0 md:w-full sm:flex-col">
                    <Heading
                        size="textxl"
                        as="h2"
                        className="self-end font-poppins text-[20px] font-medium text-gray-600_01 lg:text-[17px] sm:self-auto"
                    >
                        Showing {indexOfFirstPet + 1}-{Math.min(indexOfLastPet, filteredPets.length)} of {filteredPets.length} results
                    </Heading>
                    <SelectBox
                        shape="round"
                        indicator={<Img src="images/arrow.svg" alt="Arrow Down" className="h-[20px] w-[20px]" />}
                        name="filter"
                        placeholder="Sort by Pet"
                        options={dropDownOptions}
                        onChange={handleFilterChange} 
                        className="w-[18%] gap-4 rounded-md !border-[1.5px] px-2 font-poppins font-medium sm:w-full"
                    />
                </div>

               
                <div className="w-[92%] lg:w-full md:w-full">
                    <div className="grid grid-cols-3 justify-center gap-[50px] gap-y-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                    <Suspense fallback={<div>Loading feed...</div>}>
    {currentPets.map((pet, index) => (
        <ShopPetCards
        key={pet.id}
            {...pet} 
            className="rounded-[16px] border border-solid border-gray-300 bg-white-a700"
        />
    ))}
</Suspense>

                    </div>
                </div>

                
                <div className="mx-[60px] flex w-[90%] justify-between lg:w-full md:mx-8 md:w-full">
                    <Button
                        color="indigo-400"
                        size="x1"
                        shape="round"
                        className="min-w-[104px] px-4 font-poppins font-semibold"
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1} 
                    >
                        Previous
                    </Button>
                    <div className="flex items-center justify-center font-poppins font-semibold">
                        Page {currentPage} of {totalPages}
                    </div>
                    <Button
                        color="gray-600"
                        size="x1"
                        shape="round"
                        className="min-w-[104px] px-4 font-poppins font-semibold"
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    );
}
