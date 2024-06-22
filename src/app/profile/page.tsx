import React from "react";
import NavbarDemo from "@/components/ui/nav";
import Logout from "@/components/ui/logout";


const HomePage = () => {
  return (
    <div className=" flex justify-center ">
      <div > 
       <Logout/> 
        <h1 className="mt-16">welcome on the profile page profile</h1>
      </div>
    </div>
  );
};

export default HomePage;
