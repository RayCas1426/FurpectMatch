import { Helmet } from "react-helmet";
import {Button} from "../../components/Button";
import { Img } from "../../components/Img";
import { Text } from "../../components/Text";
import { Heading } from "../../components/Heading";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ShopColumn from "./ShopColumn";
import ShopColumnOne from "./ShopColumnOne";
import React from "react";

export default function ShopPage() {
    return (
        <div>
            <Helmet>
                <title>Furpect Match</title>
                <meta name="description" content="web site created using create-react-app" />
            </Helmet>

            

            <div className="relative h-[550px] bg-gray-50_02 px-11 lg:mx-auto md:px-5 sm:px-4 pt-20 overflow-hidden">
                <div className="max-w-[1920px] mx-auto flex flex-1 flex-col items-center">
                    <div className="relative flex w-[82%] flex-col items-center gap-14 lg:w-full md:w-full sm:gap-7">
                        <div className="st-[122px] flex flex-col items-start gap-[42px] self-stretch">
                            <div className="flex flex-col items-start gap-4 self-stretch">
                                <Heading
                                    size="headings"
                                    as="h1"
                                    className="text-[16px] font-bold capitalize text-teal-900 lg:text-[13px]"
                                >
                                    Adopt
                                </Heading>
                                <Heading
                                    size="heading4xl"
                                    as="h2"
                                    className="w-[42%] font-poppins text-[54px] font-bold leading-[81px] text-black-900_02 lg:w-full lg:text-[45px] md:w-full md:text-[34px] sm:text-[28px]"
                                >
                                    The friendly and 
                                    caring small pet 
                                </Heading>
                            </div>
                            <Text
                                size="textlg"
                                as="p"
                                className="w-[34%] text-[18px] font-normal leading-[21px] text-black-900 lg:w-full lg:text-[15px] md:w-full"
                            >
                                Whether you're looking for a playful puppy, a cuddly kitten, or a unique pet companion, we’ve got you covered
                            </Text>
                            
                        </div>
                    </div>
                </div>

              
                <div className="absolute bottom-[-30px] left-[400px] right-0 m-auto max-w-[1920px] w-full flex flex-1 items-start justify-center px-5 lg:px-0">
                    <div className="relative flex flex-col items-center">
                        <Img
                            src="images/shapes_pattern.png"
                            alt="Shapes pattern"
                            className="h-auto w-[80%] max-w-[1000px] object-cover block lg:block sm:absolute sm:bottom-[-120px] sm:left-1/2 sm:transform sm:-translate-x-1/2" 
                        />
                       
                        <div className="absolute bottom-[30px] flex space-x-5">
                           
                            <Img
                                src="images/dog2.png"
                                alt="Dog 2"
                                className="h-auto w-[100%] max-w-[300px] object-cover" 
                            />
                        </div>
                    </div>
                </div>
            </div>
                <div className="relative z-[4] w-full bg-white-a700 py-[68px] lg:py-8 md:mx-0 md:py-5 sm:py-4">
                <ShopColumn />
                </div>
                <ShopColumnOne />
                <Footer className="mt-[60px]" />
            </div>
        
    );
}
