import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PetPageColumn from "./PetPageColumn";
import PetPageRow from "./PetPageRow";
import React from "react";

export default function PetPagePage() {
  return (
    <>
      <Helmet>
        <title>Furpect Match</title>
        <meta name="description" content="web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-a700">
        
        <div className="mx-[200px] flex flex-col gap-[92px] bg-white-a700 py-[58px] lg:gap-[92px] md:mx-0 md:gap-[69px] md:py-5 sm:gap-[46px] sm:py-4">
          <PetPageColumn />
          <PetPageRow />
        </div>
        <Footer />
      </div>
    </>
  );
}
