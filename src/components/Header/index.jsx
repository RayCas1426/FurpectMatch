import React, { useState, useEffect } from "react";
import { Button } from "../Button";
import { Img } from "../Img";
import { Heading } from "../Heading";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header({ isLoggedIn, setIsLoggedIn, ...props }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 1000);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleLogout = () => {
        setIsLoggedIn(false);
        setIsDropdownOpen(false);
        navigate("/Homepage");
    };

    return (
        <header {...props} className={`${props.className} flex items-center bg-gray-50_02 relative`}>
            <div className="max-w-[1920px] mx-auto flex w-full items-center justify-between gap-5 rounded-[40px] bg-white-a700 px-10 py-6 shadow-xs my-8">
                <Img src="images/logo.png" alt="Header logo" className="h-[30px] w-[186px] object-contain mx-auto" />

                {!isMobile && (
                    <div className="flex-grow">
                        <ul className="flex items-center justify-center gap-6">
                            <li>
                                <NavLink to="/Homepage">
                                    {({ isActive }) => (
                                        <Heading
                                            size="headingmd"
                                            as="h5"
                                            className={`px-2.5 py-1 font-poppins text-[20px] font-semibold ${isActive ? "text-indigo-400 border-b-2 border-solid border-indigo-400" : ""}`}
                                        >
                                            Home
                                        </Heading>
                                    )}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/Shop">
                                    {({ isActive }) => (
                                        <Heading
                                            size="textxl"
                                            as="p"
                                            className={`px-2.5 py-1 font-poppins text-[20px] font-medium ${isActive ? "text-indigo-400 border-b-2 border-solid border-indigo-400" : "text-black-900 hover:font-semibold hover:text-indigo-400"}`}
                                        >
                                            Adopt
                                        </Heading>
                                    )}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/AboutUs">
                                    {({ isActive }) => (
                                        <Heading
                                            size="textxl"
                                            as="p"
                                            className={`px-2.5 py-1 font-poppins text-[20px] font-medium ${isActive ? "text-indigo-400 border-b-2 border-solid border-indigo-400" : "text-black-900 hover:font-semibold hover:text-indigo-400"}`}
                                        >
                                            About Us
                                        </Heading>
                                    )}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/ContactUs">
                                    {({ isActive }) => (
                                        <Heading
                                            size="textxl"
                                            as="p"
                                            className={`px-2.5 py-1 font-poppins text-[20px] font-medium ${isActive ? "text-indigo-400 border-b-2 border-solid border-indigo-400" : "text-black-900 hover:font-semibold hover:text-indigo-400"}`}
                                        >
                                            Contact Us
                                        </Heading>
                                    )}
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                )}

                {isMobile && (
                    <div className="flex items-center">
                        <button
                            type="button"
                            className="inline-flex items-center p-2 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                            onClick={toggleMenu}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
                        </button>
                    </div>
                )}

                {!isMobile && (
                    <div className="relative">
                        {isLoggedIn ? (
                            <>
                                <Button
                                    color="deep_purple_500"
                                    size="3x1"
                                    variant="outline"
                                    className="flex items-center min-w-[200px] gap-2 rounded-[16px] !border px-[11px] font-medium"
                                    onClick={toggleDropdown}
                                >
                                    <Img src="images/account_circle.svg" alt="Circle" className="h-[24px] w-[24px]" />
                                    Account
                                </Button>
                                {isDropdownOpen && (
                                    <div className="absolute right-0 mt-2 bg-white border rounded shadow-lg z-10">
                                        <NavLink to="/UserOverview" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={() => setIsDropdownOpen(false)}>
                                            Dashboard
                                        </NavLink>
                                        <button onClick={handleLogout} className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left">
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </>
                        ) : (
                            <NavLink to="/LoginAccount">
                                <Button
                                    color="deep_purple_500"
                                    size="3x1"
                                    variant="outline"
                                    className="flex items-center min-w-[200px] gap-2 rounded-[16px] !border px-[11px] font-medium"
                                >
                                    <Img src="images/account_circle.svg" alt="Circle" className="h-[24px] w-[24px]" />
                                    Login
                                </Button>
                            </NavLink>
                        )}
                    </div>
                )}
            </div>

            {isMobile && isOpen && (
                <div className="absolute left-0 right-0 top-full bg-[#ffffff] border-t border-gray-200 shadow-md z-10">
                    <ul className="flex flex-col items-center mt-4">
                        <li className="border-b border-gray-200 w-full">
                            <NavLink to="/Homepage" onClick={toggleMenu} className="block py-2 pr-4 pl-3 text-gray-700 hover:text-[#FFFFFF] hover:bg-[#4F46E5] text-[21px] font-medium font-semibold">
                                Home
                            </NavLink>
                        </li>
                        <li className="border-b border-gray-200 w-full">
                            <NavLink to="/Shop" onClick={toggleMenu} className="block py-2 pr-4 pl-3 text-gray-700 hover:text-[#FFFFFF] hover:bg-[#4F46E5] text-[21px] font-medium font-semibold">
                                Adopt
                            </NavLink>
                        </li>
                        <li className="border-b border-gray-200 w-full">
                            <NavLink to="/AboutUs" onClick={toggleMenu} className="block py-2 pr-4 pl-3 text-gray-700 hover:text-[#FFFFFF] hover:bg-[#4F46E5] text-[21px] font-medium font-semibold">
                                About Us
                            </NavLink>
                        </li>
                        <li className="border-b border-gray-200 w-full">
                            <NavLink to="/ContactUs" onClick={toggleMenu} className="block py-2 pr-4 pl-3 text-gray-700 hover:text-[#FFFFFF] hover:bg-[#4F46E5] text-[21px] font-medium font-semibold">
                                Contact Us
                            </NavLink>
                        </li>
                        <li className="border-b border-gray-200 w-full">
                            {isLoggedIn ? (
                                <>
                                    <button onClick={toggleDropdown} className="block py-2 pr-4 pl-3 text-gray-700 hover:text-[#FFFFFF] hover:bg-[#4F46E5] text-[21px] font-medium font-semibold">
                                        Account
                                    </button>
                                    {isDropdownOpen && (
                                        <div className="absolute left-0 right-0 bg-white border rounded shadow-lg z-10">
                                            <NavLink to="/UserOverview" onClick={toggleMenu} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                                Dashboard
                                            </NavLink>
                                            <button onClick={handleLogout} className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left">
                                                Logout
                                            </button>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <NavLink to="/LoginAccount" onClick={toggleMenu} className="block py-2 pr-4 pl-3 text-gray-700 hover:text-[#FFFFFF] hover:bg-[#4F46E5] text-[21px] font-medium font-semibold">
                                    Login
                                </NavLink>
                            )}
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}
