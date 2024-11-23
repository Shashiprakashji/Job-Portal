import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const Job = () => {
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">2 days ago</p>
        <Button varient="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>
      <div className="flex items-center gap-2 my-2">
        <Button className="p-6" varient="outline" size="icon">
          <Avatar>
            <AvatarImage
              src="https://picsum.photos/200/300"
              alt="Company Logo"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Button>
        <div>
          <h1 className="text-lg font-medium">Company Name</h1>
          <p className="text-sm font-gray-500">India</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">Title</h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
          temporibus ea nobis minus odio!
        </p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge className="text-blue-700 font-bold">12 position</Badge>
        <Badge className="text-[#F83002] font-bold">Part Time</Badge>
        <Badge className="text-[#7290b7] font-bold">12 LPA</Badge>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Button varient="outline">Details</Button>
        <Button className="bg-[#c099da]">Save for later</Button>
      </div>
    </div>
  );
};

export default Job;
