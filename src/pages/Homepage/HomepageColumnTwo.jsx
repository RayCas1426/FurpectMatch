import { Button } from "../../components/Button";
import { Heading } from "../../components/Heading";
import ShopPetCards from "../../components/ShopPetCards";
import React, { Suspense } from "react";
import { Link } from "react-router-dom"; 

const petsData = [
    { id: 1001, name: "Bella", location: "Tagum, Philippines", gender: "Female", breed: "Labrador", age: "2 years", size: "Large", description: "Playful and loving Labrador.", image: "images/bella.jpg", type: "dog", images: ["images/bella1.jpg", "images/bella2.jpg", "images/bella3.jpg"] },
    { id: 1002, name: "Max", location: "Davao, Philippines", gender: "Male", breed: "Retriever", age: "3 years", size: "Large", description: "Loyal and calm Golden Retriever.", image: "images/max.jpg", type: "dog", images: ["images/max1.jpg", "images/max2.jpg"] },
    { id: 1003, name: "Luna", location: "Tagum, Philippines", gender: "Female", breed: "Tabby", age: "1 year", size: "Medium", description: "Curious and affectionate tabby.", image: "images/luna.jpg", type: "cat", images: ["images/luna1.jpg", "images/luna2.jpg"] },
    { id: 1004, name: "Charlie", location: "Tagum, Philippines", gender: "Male", breed: "Husky", age: "4 years", size: "Large", description: "Brave and energetic Husky.", image: "images/charlie.jpg", type: "dog", images: ["images/charlie1.jpg", "images/charlie2.jpg"] },
];

export default function HomepageColumnTwo() {
    return (
        <div className="mt-[126px] flex flex-col items-center">
            <div className="container-xs flex flex-col items-center gap-[54px] lg:px-5 md:px-5 sm:gap-[27px]">
                <div className="flex flex-col items-center gap-[54px] self-stretch sm:gap-[27px]">
                    <Heading
                        size="text2x1"
                        as="h2"
                        className="font-poppins text-[40px] font-semibold text-gray-100 lg:text-[34px] md:text-[34px] sm:text-[32px]"
                    >
                        <span className="text-black-900">Take a Look at Some of</span>
                        <span className="text-gray-100">&nbsp;</span>
                        <span className="text-teal-900">Our Pets</span>
                    </Heading>
                    <div className="flex gap-[30px] self-stretch md:flex-col justify-center">
                        <Suspense fallback={<div>Loading feed...</div>}>
                            {petsData.slice(0, 4).map((pet) => (
                                <div className="first-letter:md:w-full" key={pet.id}>
                                    <ShopPetCards
                                        id={pet.id} 
                                        name={pet.name}
                                        location={pet.location}
                                        gender={pet.gender}
                                        breed={pet.breed}
                                        age={pet.age}
                                        size={pet.size}
                                        description={pet.description}
                                        image={pet.image}
                                    />
                                </div>
                            ))}
                        </Suspense>
                    </div>
                </div>
                <Link to="/Shop"> 
                <Button
                style={{
                 color: "#4F46E5",
                 border: "2px solid #4F46E5", 
                 minWidth: "94px",
                 borderRadius: "8px", 
                 padding: "7px 7px", 
                 backgroundColor: "transparent" 
                  }}
                >
                See more
                </Button>

                </Link>
            </div>
        </div>
    );
}
