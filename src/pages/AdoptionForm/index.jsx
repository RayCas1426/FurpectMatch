import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AdoptionformColumn from "./AdoptionformColumn";
import React from "react";

export default function AdoptionFormPage() {
  return (
    <>
      <Helmet>
        <title>Furpect Match</title>
        <meta name="description" content="website created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-a700">
      
        <AdoptionformColumn />
        <Footer className="mt-[60px]" />
      </div>
    </>
  );
}
