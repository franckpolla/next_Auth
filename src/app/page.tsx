import NavbarDemo from "@/components/ui/nav";
import { SignupFormDemo } from "./loggin/page";
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center overflow-hidden justify-center ">
      <FlipWordsDemo />
    </main>
  );
}

import { FlipWords } from "@/components/ui/flip-words";
export function FlipWordsDemo() {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    <div className="h-[15rem] flex justify-center items-center px-4">
      <div className="text-4xl leading-normal mx-auto font-normal text-white dark:text-neutral-600">
        Welcome to Franck.dev <br /> We Build
        <FlipWords words={words} />
        websites for you.
      </div>
    </div>
  );
}
