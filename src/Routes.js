import React from "react";
import { useRoutes } from "react-router-dom";
import Homepage from "./pages/Homepage"; 
import Shop from "./pages/Shop";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import PetPage from "./pages/PetPage";
import LoginAccount from "./pages/LoginAccount";
import PetPageColumn from "./pages/PetPage";
import CreateAccount from "./pages/CreateAccount";
import AdoptionForm from "./pages/AdoptionForm";
import UserOverview from "./pages/UserOverview";

const ProjectRoutes = ({ setIsLoggedIn }) => {
    let element = useRoutes([
        { path: "/", element: <Homepage /> }, 
        { path: "/Homepage", element: <Homepage /> },
        { path: "/Shop", element: <Shop /> },
        { path: "/AboutUs", element: <AboutUs /> },
        { path: "/ContactUs", element: <ContactUs /> },
        { path: "/PetPage", element: <PetPage /> },
        { path: "/LoginAccount", element: <LoginAccount setIsLoggedIn={setIsLoggedIn} /> },
        { path: "/CreateAccount", element: <CreateAccount /> },
        { path: "/pet/:id", element: <PetPageColumn /> },
        { path: "/AdoptionForm", element: <AdoptionForm /> },
        { path: "/UserOverview", element: <UserOverview /> },
    ]);
    
    return element;
};

export default ProjectRoutes;
