import { Button } from "../../components/Button";
import { Text } from "../../components/Text";
import { Heading } from "../../components/Heading";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function AdoptionFormColumn() {
  const location = useLocation();
  const navigate = useNavigate();
  const { petId, petName } = location.state || {};
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    address: "",
    adoptReason: "",
    otherPets: "",
    petExperience: "",
    livingSituation: "",
    income: "",
    comments: "",
  });
  
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const isLoggedIn = !!localStorage.getItem('userData'); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    for (const [key, value] of Object.entries(formData)) {
      if (!value) {
        newErrors[key] = "This field is required.";
      }
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    if (!isLoggedIn) {
      
      navigate("/signin");
      return;
    }

   
    setSuccessMessage("Your adoption request has been submitted successfully!");
    setErrors({}); 
    setFormData({}); 
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center self-stretch p-[22px] sm:p-4">
        <div className="mt-2.5 flex w-[80%] justify-center lg:w-full md:w-full">
          <div className="container-xs flex justify-center px-14 lg:px-5 md:px-5">
            <Heading
              size="heading3x1"
              as="h1"
              className="font-poppins text-[50px] font-semibold text-teal-900 lg:text-[42px] md:text-[34px] sm:text-[28px]"
            >
              Adoption Form
            </Heading>
          </div>
        </div>
      </div>

      <div className="container-xs flex flex-col items-center gap-10 px-3 lg:px-5 md:px-5">
        <form className="self-stretch" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-8 bg-white-a700_f2 p-8 sm:p-4">
            <div className="flex bg-gray-50_02 py-6 md:flex-col sm:py-4">
              <div className="flex flex-1 flex-col items-start justify-center gap-2 md:self-stretch md:px-5" style={{ marginLeft: "32px", marginRight: "32px" }}>
                <Text size="textxs" as="p" className="font-poppins-medium text-[14px] font-medium tracking-[0.05px] text-gray-900_01">
                  PET ID
                </Text>
                <div className="self-stretch border border-solid border-[#675BC8] bg-gray-100 text-[#675BC8] font-bold rounded-md px-4 py-2">
                  {petId}
                </div>
              </div>

              <div className="flex flex-1 flex-col items-start justify-center gap-2 md:self-stretch md:px-5" style={{ marginLeft: "32px", marginRight: "32px" }}>
                <Text size="textxs" as="p" className="font-poppins-medium text-[14px] font-medium tracking-[0.05px] text-gray-900_01 mt-2">
                  PET NAME
                </Text>
                <div className="self-stretch border border-solid border-[#675BC8] bg-gray-100 text-[#675BC8] font-bold rounded-md px-4 py-2">
                  {petName}
                </div>
              </div>
            </div>

            {[
              { label: "Full Name", name: "fullName", placeholder: "Enter Your Full Name" },
              { label: "Email Address", name: "email", placeholder: "Enter Your Email Address", type: "email" },
              { label: "Mobile Number", name: "mobileNumber", placeholder: "Enter Your Mobile Number", type: "tel" },
              { label: "Address", name: "address", placeholder: "Enter Your Address" },
              { label: "Why do you want to adopt this pet?", name: "adoptReason", placeholder: "Explain your reason" },
              { label: "Do you have other pets? (Yes/No)", name: "otherPets", placeholder: "Yes or No" },
              { label: "Do you have experience with this type of pet? (Yes/No)", name: "petExperience", placeholder: "Yes or No" },
              { label: "Living situation (House, Apartment, etc.)", name: "livingSituation", placeholder: "Describe your living situation" },
              { label: "Household Income", name: "income", placeholder: "Enter your household income" },
            ].map(({ label, name, placeholder, type = "text" }) => (
              <div className="flex flex-col items-start justify-center gap-2" key={name}>
                <Text size="textxs" as="p" className="font-poppins-medium text-[14px] font-medium tracking-[0.05px] text-gray-900_01">
                  {label}
                </Text>
                <input
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  value={formData[name]} 
                  onChange={handleChange}
                  className="self-stretch border border-solid border-[#675BC8] px-4 font-poppins-regular tracking-[0.07px]"
                  style={{ fontWeight: "400" }} 
                />
                {errors[name] && <p className="text-red-500 text-sm">{errors[name]}</p>}
              </div>
            ))}

            <div className="flex flex-col items-start justify-center gap-1.5">
              <Text size="textxs" as="p" className="font-poppins-medium text-[14px] font-medium tracking-[0.05px] text-gray-900_01">
                Any additional comments?
              </Text>
              <textarea
                name="comments"
                placeholder="Any additional comments..."
                value={formData.comments}
                onChange={handleChange}
                className="self-stretch border border-solid border-[#675BC8] px-4 font-poppins-regular tracking-[0.07px] text-gray-900_01"
                style={{ fontWeight: "400" }} 
              />
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <Button
              style={{ backgroundColor: "#675BC8", color: "#FFFFFF", minWidth: "208px", borderRadius: "0.375rem", padding: "0.5rem 1rem", fontWeight: "bold", minHeight: "50px" }}
              type="submit" 
            >
              SUBMIT FORM
            </Button>
          </div>
          {successMessage && <p className="text-green-500 text-lg mt-4">{successMessage}</p>} 
        </form>
      </div>
    </div>
  );
}
