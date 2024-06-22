import React from "react";
import Link from "next/link";

const NavbarDemo = () => {
  return (
    <nav className="flex justify-center items-center pt-8 " >
      <ul className="flex flex-row justify-between items-center  ">
        <li>
          <Link className=" hover:text-sky-200  hover:text-[18px]" href="/">
            {" "}
            Homepage{" "}
          </Link>
        </li>
        <li>
          <Link
            className="px-8 hover:text-sky-200  hover:text-[18px]"
            href="/profile"
          >
            {" "}
            Profile{" "}
          </Link>
        </li>
        <li>
          <Link
            className=" hover:text-sky-200  hover:text-[18px]"
            href="/prenium"
          >
            Prenium{" "}
          </Link>
        </li>
        <li>
          <Link
            className="px-8 hover:text-sky-200  hover:text-[18px]"
            href="/loggin"
          >
            Login{" "}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarDemo;
