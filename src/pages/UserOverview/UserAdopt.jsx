import { Button } from "../../components/Button";
import { Text } from "../../components/Text";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function UserAdopt({ onSelectComponent, selectedComponent }) {
  const [profileData, setProfileData] = useState({
    name: "UserAdopt",
    location: "California",
    bio: "Hello, I am Raymond, 22 years old. I live with my girlfriend and Papi (my dog). Papi has been living with us for 5 years and needs a friend and playmate. That's why we thought of adopting a dog.",
  });

  const [userImage, setUserImage] = useState("/images/raycas.jpg"); 
  const [petImage, setPetImage] = useState("/images/bella.jpg"); 
  const [isEditing, setIsEditing] = useState(false);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("10:00");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleUserImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleApply = () => {
    alert(`Appointment set for ${date.toLocaleDateString()} at ${time}`);
  };

  const handleCancel = () => {
    setDate(new Date());
    setTime("10:00");
  };

  const isActive = (menu) => menu === selectedComponent;

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
                    ${menu === "Adopt" ? 'bg-[#675BC8]' : 'hover:bg-[#675BC8]'}`}
                  onClick={() => onSelectComponent(menu.toLowerCase())}
                >
                  <Text 
                    size="textlg" 
                    as="p" 
                    className={`text-left pl-6 ${menu === "Adopt" ? 'text-[#fff8f8]' : 'text-[#675BC8]'}`}
                  >
                    {menu}
                  </Text>
                </div>
              ))}
            </nav>
          </div>
        </div>

        
        <div className="ml-8 flex w-[64%] items-start justify-center gap-4 md:w-full md:flex-col md:p-5 sm:p-4 mt-4">
          <div className="flex flex-col w-full">
            <div className="flex items-start mb-4">
              <div className="relative h-[128px] w-[128px] mr-4">
                {userImage ? (
                  <img
                    src={userImage}
                    alt="User"
                    className="h-full w-full rounded-full object-cover md:h-[100px] md:w-[100px] sm:h-[80px] sm:w-[80px]" 
                  />
                ) : (
                  <div className="h-full w-full rounded-full bg-gray-200" />
                )}
              </div>
              <div>
                <Text className="text-lg font-bold">Dear Raymond,</Text>
                <Text className="text-md">Your request to adopt "name of dog" has been approved. Kindly select a date for the appointment.</Text>
              </div>
            </div>

            <div className="flex gap-8">
              
              <div className="flex flex-col items-center border border-gray-300 rounded-lg p-4 w-full">
                <Text className="text-2xl font-bold mb-4">Pet ID: 12345</Text>
                <div className="relative h-[128px] w-[128px] mb-4">
                  <img src={petImage} alt="Pet" className="h-[128px] w-[128px] rounded-full object-cover" />
                </div>
                <Text className="text-black text-xl mb-2">Name: <span className="text-[#675BC8]">Buddy</span></Text>
                <div className="grid grid-cols-2 gap-2 w-full text-[#675BC8] text-center">
                  <Text>Breed: <span className="text-[#675BC8]">Golden Retriever</span></Text>
                  <Text>Age: <span className="text-[#675BC8]">3 years</span></Text>
                  <Text>Size: <span className="text-[#675BC8]">Medium</span></Text>
                  <Text>Gender: <span className="text-[#675BC8]">Male</span></Text>
                </div>
              </div>
              
              
              <div className="flex flex-col items-center border border-gray-300 rounded-lg p-4 w-full pt-4">
                <Text className="text-lg font-bold mb-4" style={{ color: '#0A453A' }}>Choose the right time to meet</Text>
                <label className="text-md mb-2">Date:</label>
                <div className="border border-gray-300 rounded w-full max-w-[300px] mb-4">
                  <DatePicker
                    selected={date}
                    onChange={(date) => setDate(date)}
                    className="px-2 py-1 w-full"
                    dateFormat="MM/dd/yyyy"
                  />
                </div>

                <label className="text-md mb-2 pt-4">Time:</label>
                <select 
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="border border-gray-300 rounded px-2 py-1 mb-4 w-full max-w-[300px]"
                >
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="13:00">1:00 PM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="16:00">4:00 PM</option>
                  <option value="17:00">5:00 PM</option>
                </select>

                <div className="mt-4">
                  <div className="flex gap-2">
                    <Button 
                      onClick={handleApply} 
                      className="bg-[#675BC8] border border-[#675BC8] rounded px-4 py-2 transition duration-300 hover:bg-[#675BC8] hover:bg-opacity-75"
                      style={{ color: '#FFFFFF' }} 
                    >
                      Apply
                    </Button>
                    <Button 
                      onClick={handleCancel} 
                      className="border border-black text-black rounded px-4 py-2 transition duration-300 hover:bg-gray-200"
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
