import React from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "@radix-ui/react-label";
const filterData = [
  {
    filterType: "Location",
    array: ["Delhi", "Banglore", "Gaya", "Patna"],
  },
  {
    filterType: "Industry",
    array: ["Software", "Pharama", "Garbage", "Food"],
  },
  {
    filterType: "Salary",
    array: ["10k-12k", "15k-14k", "77k-100k", "150k-200k"],
  },
];

const FilterCard = () => {
  return (
    <div className="w-full bg-white p-3 rounded-md">
      <h1 className="text-lg font-bold">Filter Jobs</h1>
      <hr className="mt-3" />
      <RadioGroup>
        {filterData.map((data, index) => (
          <div>
            <h1 className="font-bold text-lg">{data.filterType}</h1>
            {data.array.map((item, index) => {
              return (
                <div className="flex items-center space-x-2 my-2">
                  <RadioGroupItem value={item} />
                  <Label>{item}</Label>
                </div>
              );
            })}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
