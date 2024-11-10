import React from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

function HeroSection() {
  return (
    <>
      <div className="text-center">
        <div className="flex flex-col gap-5 my-10">
          <span className=" mx-auto px-4 py-4 rounded-full bg-gray-100 font-medium text-[#F83002]">
            No. 1 Job Hunt website
          </span>
          <h1 className="text-5xl font-bold">
            Search, Apply & <br />
            Get Your <span className="text-[#6a38c2]">Dream Jobs</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            blanditiis deleniti fugit consequuntur accusamus?
          </p>
          <div className="flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto">
            <input
              type="text"
              placeholder="Find you job"
              className="outline-none border-none w-full bg-white"
            />
            <Button className="rounded-full bg-[#6a38c2]">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
