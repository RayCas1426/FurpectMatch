import {Img} from "../Img";
import { Text } from "../Text";
import React from "react";

export default function EmotionalRelationshipComponent({ 
    emotionalText = "Emotional relationship",
    emotionalDescription = "The emotional bond between cats and humans is deeply rooted in felines&#39; unconditional love and companionship.", 
    mainImage = "images/img_image_138.png", 
    ...props
}) {
    return (
        <div
            {...props}
            className={`${props.className} flex flex-col items-start w-full gap-4 p-4 border-gray-300 border border-solid bg-white-a700 rounded-[16px]`} 
        >
            <div className="flex items-center justify-center gap-4 self-stretch">
                <Img src="images/paw.svg" alt="Image" className="h-[48px] w-[40px]" />
                <Text size="textlg" as="p" className="text-[18px] font-normal text-teal-900">
                    {emotionalText} 
                </Text>
            </div>
            <Text size="text" as="p" className="w-full text-[16px] font-normal leading-6 text-black-900"> 
                {emotionalDescription}
            </Text>
            <img src={mainImage} alt="Image" className="h-[52px] w-[22%] object-contain" />
        </div>
    );
}
