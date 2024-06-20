import React from "react";
import { NavbarDemo } from "@/components/ui/nav";



const HomePage = () => {
  return (
    <div>
      <div>
        <NavbarDemo />
        <FlipWordsDemo />
      </div>
    </div>
  );
};

export default HomePage;

import { FlipWords } from "@/components/ui/flip-words";


export function FlipWordsDemo() {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl leading-normal mx-auto font-normal text-white dark:text-neutral-600">
        Welcome to Franck.dev <br/> We Build
        <FlipWords words={words} /> 
        websites for you.
      </div>
    </div>
  );
}
