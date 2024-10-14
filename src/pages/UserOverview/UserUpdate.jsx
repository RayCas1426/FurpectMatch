import { Button } from "../../components/Button";
import { Text } from "../../components/Text";
import React, { useState, useEffect } from "react";

export default function UserUpdate({ onSelectComponent }) {
  const monthInSeconds = 30 * 24 * 60 * 60; 
  const [petData, setPetData] = useState([
    { age: "1 Month", image: null, description: "", isLocked: false, unlockTime: null, submitted: false },
    { age: "3 Months", image: null, description: "", isLocked: true, unlockTime: 3 * monthInSeconds, submitted: false }, 
    { age: "6 Months", image: null, description: "", isLocked: true, unlockTime: 6 * monthInSeconds, submitted: false }, 
    { age: "1 Year", image: null, description: "", isLocked: true, unlockTime: 12 * monthInSeconds, submitted: false }, 
  ]);

  const handleImageChange = (index, e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPetData((prevData) => {
          const newData = [...prevData];
          newData[index].image = reader.result;
          return newData;
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDescriptionChange = (index, e) => {
    const { value } = e.target;
    setPetData((prevData) => {
      const newData = [...prevData];
      newData[index].description = value;
      return newData;
    });
  };

  const handleSubmit = (index) => {
    console.log(`Submitting data for ${petData[index].age}:`, petData[index]);

    
    setPetData((prevData) => {
      const newData = [...prevData];
      newData[index].submitted = true;
      return newData;
    });
  };

  
  useEffect(() => {
    const timers = petData.map((pet, index) => {
      if (pet.isLocked && pet.unlockTime) {
        const countdown = setInterval(() => {
          setPetData((prevData) => {
            const newData = [...prevData];
            if (newData[index].unlockTime > 0) {
              newData[index].unlockTime -= 1; 
            } else {
              newData[index].isLocked = false; 
              clearInterval(countdown);
            }
            return newData;
          });
        }, 1000); 

        return countdown;
      }
      return null;
    });

    
    return () => {
      timers.forEach((timer) => {
        if (timer) clearInterval(timer);
      });
    };
  }, [petData]);

  const formatTimeRemaining = (seconds) => {
    const days = Math.floor(seconds / (24 * 60 * 60));
    const hours = Math.floor((seconds % (24 * 60 * 60)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${days} days: ${hours} hours: ${minutes} mins`;
  };

  return (
    <div className="flex justify-center bg-white-a700 py-32 sm:py-6">
      <div className="flex w-[80%] items-start justify-between lg:w-full md:w-full md:flex-col">
        
        <div className="w-[18%] self-end lg:w-full md:self-auto h-full md:w-full md:mb-4">
          <div className="bg-white border border-gray-300 rounded-lg p-2">
            <nav className="flex flex-col">
              {["Profile", "Adopt", "Update"].map((menu) => (
                <div 
                  key={menu} 
                  className={`py-3 px-2 cursor-pointer transition duration-300 rounded-lg mb-2 
                    ${menu === "Update" ? 'bg-[#675BC8]' : 'hover:bg-[#675BC8]'}`}
                  onClick={() => onSelectComponent(menu.toLowerCase())}
                >
                  <Text 
                    size="textlg" 
                    as="p" 
                    className={`text-left pl-6 ${menu === "Update" ? 'text-[#fff8f8]' : 'text-[#675BC8]'}`}
                  >
                    {menu}
                  </Text>
                </div>
              ))}
            </nav>
          </div>
        </div>

       
        <div className="ml-8 flex flex-col w-[64%] items-start justify-center gap-4 border-[0.25px] border-solid border-gray-500 p-6 md:w-full md:flex-col md:p-5 sm:p-4 mt-4">
          <div className="w-full text-center">
            <Text as="h2" className="text-[28px] md:text-[20px] font-bold text-[#0A453A] mb-6">
              Submit an Update of Your Pet
            </Text>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-6 w-full">
            {petData.map((pet, index) => (
              <div key={index} className="bg-white border border-gray-300 rounded-lg p-4 shadow-md flex flex-col">
                <Text className="font-semibold mb-2">{pet.age}</Text>
                {!pet.submitted && (
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageChange(index, e)}
                    className="border border-gray-300 rounded mb-2"
                    disabled={pet.isLocked}
                  />
                )}
                {pet.submitted && (
                  <div className="mt-2">
                    <Text className="font-semibold">Image:</Text>
                    <img src={pet.image} alt={`Pet ${pet.age}`} className="h-[250px] w-[100%] object-cover mb-2" />
                    <Text className="font-semibold">Description:</Text>
                    <Text>{pet.description}</Text>
                  </div>
                )}
                {!pet.submitted && (
                  <textarea
                    value={pet.description}
                    onChange={(e) => handleDescriptionChange(index, e)}
                    className="border border-gray-300 rounded p-2 w-full h-[60px] resize-none"
                    placeholder="Enter description"
                    disabled={pet.isLocked}
                  />
                )}
                <Button
                  color="indigo_400"
                  size="md"
                  variant="outline"
                  shape="round"
                  onClick={() => handleSubmit(index)}
                  className={`mt-2 ${pet.isLocked || pet.submitted ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#675BC8] text-white'}`}
                  disabled={pet.isLocked || pet.submitted}
                  style={{ backgroundColor: pet.isLocked || pet.submitted ? '#d1d5db' : '#675BC8', color: pet.isLocked || pet.submitted ? '#6b7280' : '#ffffff' }}
                >
                  {pet.submitted ? "Submitted" : pet.isLocked ? `Locked (${formatTimeRemaining(Math.floor(pet.unlockTime))})` : "Submit"}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
