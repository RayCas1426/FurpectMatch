import { Button } from "../../components/Button";
import { Text } from "../../components/Text";
import React, { useState, useEffect } from "react";

export default function UserProfile({ onSelectComponent, selectedComponent }) {
 
  const [profileData, setProfileData] = useState({
    name: "Raymond Cascaño", 
    email: "", 
    location: "Philippines, Tagum City",
    bio: "Write an information about yourself here...",
  });


  const [image, setImage] = useState("/images/raycas.jpg");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData) {
      setProfileData((prevData) => ({
        ...prevData,
        name: userData.name || prevData.name,
        email: userData.email || prevData.email,
      }));
     
    }
  }, []);

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({ ...prevData, [name]: value }));
  };

 
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); 
      };
      reader.readAsDataURL(file);
    }
  };


  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

 
  useEffect(() => {
    if (selectedComponent === "profile") {
      setIsEditing(true); 
    } else {
      setIsEditing(false); 
    }
  }, [selectedComponent]);

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
                    ${menu === "Profile" ? 'bg-[#675BC8]' : 'hover:bg-[#675BC8]'}`}
                  onClick={() => onSelectComponent(menu.toLowerCase())}
                >
                  <Text 
                    size="textlg" 
                    as="p" 
                    className={`text-left pl-6 ${menu === "Profile" ? 'text-[#fdf9f9]' : 'text-[#675BC8]'}`}
                  >
                    {menu}
                  </Text>
                </div>
              ))}
            </nav>
          </div>
        </div>

       
        <div className=" ml-8 flex w-[64%] items-start justify-center gap-4 border-[0.25px] border-solid border-gray-500 p-6 md:w-full md:flex-col md:p-5 sm:p-4 mt-4">
          <div className="relative h-[128px] w-[128px]">
           
            {image ? (
              <img src={image} alt="Profile" className="h-[128px] w-[128px] rounded-full object-cover" />
            ) : (
              <div className="h-[128px] w-[128px] rounded-full bg-gray-200" />
            )}
          </div>
          <div className="mb-[38px] flex flex-1 flex-col items-start gap-4 md:self-stretch w-full">
            <div className="flex flex-col items-start gap-4 self-stretch w-full">
              <Text className="text-[18px] font-bold text-teal-900 lg:text-[15px]">
                {isEditing ? (
                  <input
                    name="name"
                    value={profileData.name}
                    onChange={handleChange}
                    className="border border-gray-300 rounded px-2 w-full"
                    placeholder="Name"
                  />
                ) : (
                  profileData.name
                )}
              </Text>
              <div className="flex items-start self-stretch">
                <Text size="textsm" as="p" className="self-center text-[14.09px] font-normal text-black-900">
                  {isEditing ? (
                    <input
                      name="location"
                      value={profileData.location}
                      onChange={handleChange}
                      className="border border-gray-300 rounded px-2 w-full"
                      placeholder="Location"
                    />
                  ) : (
                    profileData.location
                  )}
                </Text>
              </div>
            </div>
            <div className="w-full">
              {isEditing ? (
                <textarea
                  name="bio"
                  value={profileData.bio}
                  onChange={handleChange}
                  className="border border-gray-300 rounded p-2 w-full h-[150px] resize-none"
                  placeholder="Bio"
                />
              ) : (
                <Text as="p" className="text-[16.11px] font-normal leading-6 text-black-900 lg:text-[13px]">
                  {profileData.bio}
                </Text>
              )}
            </div>
            {isEditing && (
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Upload Profile Picture</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="border border-gray-300 rounded px-2"
                />
              </div>
            )}
          </div>
          <Button
            color="indigo_400"
            size="md"
            variant="outline"
            shape="round"
            onClick={toggleEdit}
            className="min-w-[128px] gap-2 rounded-lg border-2 border-[#675BC8] text-[#675BC8] bg-white px-[14.99px] hover:bg-[#675BC8] hover:text-[#ffffff]"
          >
            {isEditing ? "Save" : "Edit Profile"}
          </Button>
        </div>
      </div>
    </div>
  );
}
