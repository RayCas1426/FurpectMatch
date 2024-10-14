import { Img } from "../../components/Img";
import { Text } from "../../components/Text";
import EmotionalRelationshipComponent from "../../components/EmotionalRelationshipComponent"; 
import React, { Suspense } from "react";

const data = [ 
    {
        emotionalText: "Emotional relationship",
        emotionalDescription:
            "The emotional bond between cats and humans is deeply rooted in felines' unconditional love and companionship.",
        mainImage: "images/image_138.png",
    },
    { 
        emotionalText: "Communication",
        emotionalDescription:
            "Animals can communicate better with people in such conditions, as verbal communication is replaced by non-verbal.",
        mainImage: "images/image_135.png", 
    },
    { 
        emotionalText: "Children and pets",
        emotionalDescription:
            "Pets establish emotional attachments to children, and the relationship turns out positive in terms of affective aspects, in reinforcement of the child's personality.",
        mainImage: "images/image_135.png", 
    },
    { 
        emotionalText: "Health",
        emotionalDescription:
            "Some studies suggest that owning a pet can lower blood pressure and improve heart health.",
        mainImage: "images/image_135.png", 
    },
];

export default function HomepageStackPetAdoption() {
    return (
        <div className="max-w-[1296px] mx-auto relative mt-[18px] h-[700px] sm:h-auto px-[30px] sm:px-4 overflow-hidden"> 
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 items-start justify-center md:relative md:flex-col">
                
               
                <div className="mt-[-70px] flex flex-col items-end gap-4 p-14 pr-[130px] lg:pr-8 md:px-5 sm:px-4 md:order-1 md:ml-8 md:mt-1 md:mb-[-20px] ml-32 "> 
                 <Text
                 size="textlg"
                 as="p"
                  className="text-[32px] font-medium text-black-900 lg:text-[27px] md:text-[26px] sm:text-[27px]"
    >
                  Peaceful Coexistence
                </Text>
               <Text
                size="textlg"
                 as="p"
                   className="mr-7 text-[32px] font-medium text-teal-900 lg:text-[27px] md:mr-6 md:text-[26px] sm:text-[27px] md:mb-[-60px] "
                >
                    Human & Animals
               </Text>
                 </div>
        
                <Img
                    src="images/pet_adoption_illustration.png"
                    alt="Pet adoption"
                    className="absolute left-[5%] h-[484px] w-[44%] object-contain md:bottom-0 md:left-0 md:h-auto md:w-full md:relative md:mt-16 md:order-2 mt-[100px] md:mb-[30px]" 
                />

                
                <div className="flex-1 self-center md:self-stretch md:order-3">
                    <div className="ml-[130px] grid grid-cols-2 gap-6 lg:ml-0 lg:grid-cols-2 md:ml-0 md:grid-cols-1"> 
                        <Suspense fallback={<div>Loading feed...</div>}>
                            {data.map((d, index) => (
                                <EmotionalRelationshipComponent {...d} key={"homepage" + index} className="w-auto"/> 
                            ))} 
                        </Suspense>
                    </div>
                </div>
            </div>
        </div>
    );
}
