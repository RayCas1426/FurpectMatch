import React from "react";

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-indigo-600 mb-4">Welcome to Furpect Match!</h1>
            <p className="text-lg text-gray-700 mb-8">
                Find your perfect pet companion here!
            </p>
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700">
                Get Started
            </button>
        </div>
    );
};

export default Home;
