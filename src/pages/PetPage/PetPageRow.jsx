import { Button } from "../../components/Button";
import { Heading } from "../../components/Heading";
import { ReactTable } from "../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const petsData = [
  { id: 1001, name: "Bella", age: "2", gender: "Male", breed: "Labrador", size: "Large" },
  { id: 1002, name: "Max", age: "1", gender: "Female", breed: "Golden Retriever", size: "Large" },
  { id: 1003, name: "Luna", age: "3", gender: "Female", breed: "Siamese", size: "Medium" },
  { id: 1004, name: "Charlie", age: "4", gender: "Male", breed: "Bulldog", size: "Medium" },
  { id: 1005, name: "Milo", age: "2", gender: "Female", breed: "Beagle", size: "Medium" },
  { id: 1006, name: "Coco", age: "5", gender: "Male", breed: "Poodle", size: "Small" },
  { id: 1007, name: "Oliver", age: "3", gender: "Male", breed: "Ragdoll", size: "Medium" },
  { id: 1008, name: "Lucy", age: "2", gender: "Female", breed: "Persian", size: "Small" },
  { id: 1009, name: "Lily", age: "1", gender: "Male", breed: "Siamese", size: "Medium" },
  { id: 1010, name: "Duke", age: "3", gender: "Male", breed: "German Shepherd", size: "Large" },
  { id: 1011, name: "Simba", age: "4", gender: "Female", breed: "Maine Coon", size: "Large" },
  { id: 1012, name: "Buddy", age: "2", gender: "Male", breed: "Bulldog", size: "Medium" },
  { id: 1013, name: "Daisy", age: "1", gender: "Female", breed: "Shih Tzu", size: "Small" },
  { id: 1014, name: "Chloe", age: "3", gender: "Female", breed: "British Shorthair", size: "Medium" },
  { id: 1015, name: "Rocky", age: "5", gender: "Male", breed: "Border Collie", size: "Large" },
];

export default function PetPageRow() {
  const location = useLocation();
  const navigate = useNavigate(); 
  const petId = location.state?.petId;
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    if (petId) {
      const selectedPet = petsData.find(pet => pet.id === petId);
      if (selectedPet) {
        setTableData([selectedPet]);
      }
    }
  }, [petId]);

  const handleGetStarted = (pet) => {
    navigate('/AdoptionForm', { state: { petId: pet.id, petName: pet.name } });
  };

  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("age", {
        cell: (info) => (
          <Button
            color="gray_50"
            size="7x1"
            shape="square"
            className="w-full border-r border-solid border-gray-300 px-[33px] font-bold !text-indigo-400 sm:px-4"
          >
            {info.getValue()}
          </Button>
        ),
        header: () => (
          <Button
            color="gray_50"
            size="6x1"
            shape="square"
            className="w-full border-b border-r border-solid border-gray-300 px-[33px] font-poppins font-semibold !text-black-900_02 sm:px-4"
          >
            Age
          </Button>
        ),
        meta: { width: "214px" },
      }),
      tableColumnHelper.accessor("gender", {
        cell: (info) => (
          <Button size="7x1" shape="square" className="w-full px-[34px] font-semibold sm:px-4 !text-indigo-400">
            {info.getValue()}
          </Button>
        ),
        header: () => (
          <Button
            color="gray_50"
            size="6x1"
            shape="square"
            className="w-full border-b border-r border-solid border-gray-300 px-[33px] font-poppins font-bold sm:px-4"
          >
            Gender
          </Button>
        ),
        meta: { width: "220px" },
      }),
      tableColumnHelper.accessor("breed", { 
        cell: (info) => (
          <Button size="7x1" shape="square" className="w-full px-[34px] font-semibold sm:px-4 !text-indigo-400 ">
            {info.getValue()}
          </Button>
        ),
        header: () => (
          <Button
            color="gray_50"
            size="6x1"
            shape="square"
            className="w-full border-b border-r border-solid border-gray-300 px-[33px] font-poppins font-bold sm:px-4"
          >
            Breed 
          </Button>
        ),
        meta: { width: "220px" },
      }),
      tableColumnHelper.accessor("size", {
        cell: (info) => (
          <Button size="7x1" shape="square" className="w-full px-[34px] font-semibold sm:px-4 !text-indigo-400">
            {info.getValue()}
          </Button>
        ),
        header: () => (
          <Button
            color="gray_50"
            size="6x1"
            shape="square"
            className="w-full border-b border-r border-solid border-gray-300 px-[33px] font-poppins font-bold sm:px-4"
          >
            Size
          </Button>
        ),
        meta: { width: "220px" },
      }),
    ];
  }, []);

  return (
    <div className="max-w-[1920px] mb-[212px] flex items-center justify-between gap-5 mx-auto md:flex-col">
      <ReactTable
        className="vaccination w-full max-w-[60%] border-separate border-spacing-0 rounded-[16px] border border-solid border-gray-300 md:block md:overflow-x-auto md:whitespace-nowrap md:px-5"
        bodyProps={{ className: "" }}
        columns={tableColumns}
        data={tableData}
      />
      <div className="mr-[90px] flex flex-col items-center justify-center rounded-[16px] border border-solid border-gray-300 bg-white-a700 px-3.5 py-4 md:mr-0 md:px-5">
        <Heading
          size="headingxl"
          className="font-poppins text-[20px] font-semibold text-black-900 lg:text-[20px] md:text-[24px] sm:text-[22px]"
          as="h1"
        >
          If you are interested to adopt{" "}
        </Heading>
        <Button
          onClick={() => handleGetStarted(tableData[0])} 
          style={{ backgroundColor: "#675BC8", color: "#FFFFFF" }}
          size="4x1"
          shape="round"
          className="min-w-[208px] rounded-lg px-[30px] font-poppins font-bold sm:px-4"
        >
          Get started
        </Button>
      </div>
    </div>
  );
}
