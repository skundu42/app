import React, { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import Aos from 'aos';
import "aos/dist/aos.css"

Aos.init({
  offset: 200,
  delay: 50,
  duration: 1000,
  easing: 'ease-in-out',
  mirror: true,
  once: false
})

function NavBar() {

  const [isOpen, setOpen] = useState(false);
  return (
    <div className="bg-black w-[100%] flex flex-col  items-center fixed top-0 z-30">
      <div className="max-w-[1250px] w-[100%]">
        
      <div className='relative flex flex-row justify-center py-1'>
      <div
        className="w-full h-20 flex flex-row justify-between items-center text-[#FDFDFD]"
        style={{ fontFamily: "Inter" }}
      >
        <div className="p-3 w-full md:w-auto flex items-center justify-between">
          <a
            className="font-normal text-white text-[20px] xs:text-[25px] sm:text-[30px] md:text-[36px]"
            style={{ fontFamily: "Nova Flat" }}
            href=""
          >
            Pegasus
          </a>
          <button
            className="sm:hidden text-white"
            onClick={() => {
              setOpen(!isOpen);
            }}
          >
            <Hamburger size={28} toggled={isOpen} toggle={setOpen} />
          </button>
        </div>
        <div className="hidden p-3 sm:flex flex-row justify-between items-center poppins text-xs sm:text-[18px] text-[#FDFDFD] w-[40%] sm:w-[600px] md:w-[400px]">
          <a
            className="mx-1 md:mx-3 transition ease-in-out delay-120 hover:text-app-green "
            href="/course"
          >
            Learn
          </a>
          <a
            className="mx-1 md:mx-3 transition ease-in-out delay-120 hover:text-app-green "
            target={"_blank"}
            href="https://matchedge.football/tips"
          >
            Login
          </a>

          <div className="mx-2 xs:mx-4">
            <a
              href="https://matchedge.football/"
              target={"_blank"}
              className="hidden sm:inline my-btn p-1 px-4 xs:px-5 cursor-pointer py-2 "
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
      {isOpen ?
          <div className="absolute mt-24 flex flex-col justify-center items-center w-full z-10 bg-black border-b-2 border-appblue">
          <div className="flex flex-col bg-app-green rounded-2xl py-4 w-11/12 poppins text-md text-[white] tracking-wider">
            <a className="my-2" href="/course">
              Learn
            </a>
            <a
              className="my-2"
              target={"_blank"}
              href="https://matchedge.football/tips"
            >
              Login
            </a>

            <a
              className="my-2 font-black"
              href="https://matchedge.football/"
              target={"_blank"}
            >
              Sign Up
            </a>
          </div>
        </div>
        : null}

    </div>
      </div>
    </div>
  );
}

export default NavBar;