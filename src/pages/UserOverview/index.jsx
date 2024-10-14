import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import UserProfile from "./UserProfile";
import UserAdopt from "./UserAdopt";
import UserUpdate from "./UserUpdate";
import React, { useState } from "react";

export default function UserOverview() {
  const [currentComponent, setCurrentComponent] = useState("profile");

  const renderComponent = () => {
    switch (currentComponent) {
      case "profile":
        return <UserProfile onSelectComponent={setCurrentComponent} />;
      case "adopt":
        return <UserAdopt onSelectComponent={setCurrentComponent} />;
      case "update":
        return <UserUpdate onSelectComponent={setCurrentComponent} />;
      default:
        return <UserProfile onSelectComponent={setCurrentComponent} />; 
    }
  };

  return (
    <>
      <Helmet>
        <title>Furpect Match</title>
        <meta name="description" content="website created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-a700">
       
        {renderComponent()}
        <Footer className="mt-[60px]" />
      </div>
    </>
  );
}
