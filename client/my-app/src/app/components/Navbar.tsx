"use client";
import { CircleUserRound } from "lucide-react";
import "../styles/navBar.css";
import { useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import Link from "next/link";
import Logout from "./Logout";

const NavBar = ({ isAuth, setIsAuth }: any) => {
  const [openNav, setOpenNav] = useState(false);

  const smallNavHandler = () => {
    setOpenNav((prevNav) => !prevNav);
  };

  // window.addEventListener("scroll", () => {
  //   var nav = document.querySelector("nav");
  //   nav?.classList.toggle("sticky", window.scrollY > 0);
  // });
  // window.addEventListener("scroll", () => {
  //   var nav2 = document.querySelector(".small-nav");
  //   nav2?.classList.toggle("sticky", window.scrollY > 0);
  // });

  return (
    <>
      <nav className="hidden sm:flex">
        <Link href="/" className="logo cursor-pointer">
          {"SUBLIMINALS"}
        </Link>
        <ul>
          <li className="mx-5">
            <h1 className="cursor-pointer">Discover</h1>
          </li>
          <li className="mx-5">
            <h1 className="cursor-pointer">Upgrade</h1>
          </li>
          {isAuth ? (
            <Dropdown >
              <DropdownTrigger>
                <Button variant="bordered" className="rounded-full mx-5">
                  <CircleUserRound size={34} />
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Static Actions"
                className="bg-white shadow-lg py-8 px-5 rounded-lg flex flex-col justify-center"
              >
                <DropdownItem
                  key="new"
                  className="py-2 px-6 border-black border-2 rounded-full "
                >
                  Edit Profile
                </DropdownItem>
                <DropdownItem
                  key="delete"
                  className=" border-black bg-red-500 text-white justify-center mt-2 flex border-2 rounded-xl text-center items-center"
                  color="danger"
                >
                  <Logout setIsAuth={setIsAuth}/>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ) : (
            <Link href="/account" className="mx-5">
              <CircleUserRound size={34} />
            </Link>
          )}
        </ul>
      </nav>
      {/* mobile view */}
      {/* <nav
        className="small-nav justify-center "
        onClick={() => {
          console.log("i am clicked");
          smallNavHandler();
        }}
      >
        <img
          src="/portfolio-website/images/hamburger.png"
          width={30}
          height={30}
          className="cursor-pointer"
        />
      </nav>
      <div
        className={
          "bg-[#EFC20E] h-0 w-full absolute transition-all duration-1000 drop-down  " +
          (openNav ? "h-full" : "")
        }
      >
        <div className="fixed text-5xl ">
          <ul>
            <li className="mt-28 w-screen justify-center flex ">
              <h1
                className="logo cursor-pointer text-black"
                onClick={() => {
                  smallNavHandler();
                }}
              >
                HOME
              </h1>
            </li>
            <li className="mt-5 w-screen justify-center flex">
              <h1
                className="cursor-pointer text-black"
                onClick={() => {
                  smallNavHandler();
                }}
              >
                ABTE
              </h1>
            </li>
            <li className="mt-5 w-screen justify-center flex">
              <h1
                className="cursor-pointer text-black"
                onClick={() => {
                  smallNavHandler();
                }}
              >
                Projects
              </h1>
            </li>
            <li className="mt-5 w-screen justify-center flex">
              <h1
                className="cursor-pointer text-black"
                onClick={() => {
                  smallNavHandler();
                }}
              >
                Contact
              </h1>
            </li>
            <li className="mt-5 w-screen justify-center flex">
              <h1>Resume</h1>
            </li>
          </ul>
        </div>
      </div> */}
    </>
  );
};

export default NavBar;