import React from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

const Signup = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="flex justify-center items-center max-x-7xl mx-auto">
          <form
            action=""
            className="w-1/2 border border-grey-200 rounded-md p-4 my-10"
          >
            <h1 className="font-bold text-xl mb-5">Sign Up</h1>
            <div className="my-2">
              <Label>Full Name</Label>
              <Input type="text" placeholder="Enter your full name" />
            </div>
            <div className="my-2">
              <Label>Email</Label>
              <Input type="email" placeholder="abc@gmail.com" />
            </div>
            <div className="my-2">
              <Label>Phone Number</Label>
              <Input type="number" placeholder="1234567890" />
            </div>
            <div className="my-2">
              <Label>Password</Label>
              <Input type="number" placeholder="Enter password ********" />
            </div>
            <div className="flex items-center justify-between">
              <RadioGroup className="flex items-center gap-4 my-5">
                <div className="flex items-center space-x-2">
                  <Input
                    type="radio"
                    name="role"
                    value="student"
                    className="cursor-pointer"
                  />{" "}
                  <Label htmlFor="r1">Student</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Input
                    type="radio"
                    name="role"
                    value="recruiter"
                    className="cursor-pointer"
                  />{" "}
                  <Label htmlFor="r2">Recruiter</Label>
                </div>
              </RadioGroup>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
