import { Avatar } from "@radix-ui/react-avatar";
import React from "react";
import { AvatarImage } from "./ui/avatar";
import { Contact, Mail, Pen } from "lucide-react";
import { Button } from "./ui/button";
import Navbar from "./shared/Navbar";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobTable from "./AppliedJobTable";

const skills = ["HTML", "CSS", "Java"];

const Profile = () => {
  const isResume = true;
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white border boredr-gray-200 rounded-xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://picsum.photos/200/300" />
            </Avatar>
            <div>
              <h1 className="text-xl font-medium">John Doe</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <Button className="text-right" varient="outline">
            <Pen />
          </Button>
        </div>
        <div className="my-5">
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span>john@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span>1234567890</span>
          </div>
        </div>
        <div className="my-5">
          <h1>Skills</h1>
          <div className="flex items-center gap-1">
            {" "}
            {skills.length != 0 ? (
              skills.map((item, index) => <Badge key={index}>{item}</Badge>)
            ) : (
              <span>NA</span>
            )}
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="text-md font-bold">Resume</Label>
          {isResume ? (
            <a
              target="blank"
              href="https://www.youtube.com"
              className="text-blue-500 w-full hover:underline cursor-pointer"
            >
              patel
            </a>
          ) : (
            <span>NA</span>
          )}
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl">
        <h1 className="font-bold my-5 text-lg">Applied Jobs</h1>
        <AppliedJobTable />
      </div>
    </>
  );
};

export default Profile;
