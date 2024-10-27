import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";

import { Avatar, AvatarImage } from "../ui/avatar";
import { User, LogOut } from "lucide-react";

const Navbar = () => {
  const user = false;
  return (
    <>
      <div className="bg-white">
        <div className="container flex items-center justify-between mx-auto  h-16 px-4">
          <div>
            <h1 className="text-2xl font-bold">
              Job <span className="text-[#F83002]">Portal</span>
            </h1>
          </div>
          <div className="flex items-center gap-12">
            <ul className="flex font-medium items-center gap-5">
              <li>Home</li>
              <li>Browse</li>
              <li>Job</li>
            </ul>
            {!user ? (
              <div>
                <Button varient="outline">Login</Button>
                <Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">
                  Signup
                </Button>
              </div>
            ) : (
              <Popover>
                <PopoverTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarImage src="https://github.com/shadcn.png" />
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div>
                    <div className="flex gap-2 space-y-2">
                      <Avatar className="cursor-pointer">
                        <AvatarImage src="https://github.com/shadcn.png" />
                      </Avatar>
                      <div>
                        <h4 className="font-medium">Shashi Prakash</h4>
                        <p className="text-sm text-muted-foreground">
                          lorem ipsum bio
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col my-2 gap-3 text-grey-600">
                      <div className="flex w-fit items-center cursor-pointer">
                        <User />
                        <Button variant="link">View Profile</Button>
                      </div>
                      <div className="flex w-fit items-center gap-2 cursor-pointer">
                        <LogOut />
                        <Button variant="link">Logout</Button>
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
