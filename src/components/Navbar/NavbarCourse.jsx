import React, { useState } from "react";
import Book from "../../assets/images/booklogo.png";
import Whitewallet from "../../assets/images/whitewallet.png";
import Settings from "../../assets/images/settings.png";
import Bell from "../../assets/images/bell.png";
import Profile from "../../assets/images/profile.png";
import Content from "../../components/CourseContent/Content";
import { Squash as Hamburger } from "hamburger-react";
import Aos from "aos";
import "aos/dist/aos.css";

Aos.init({ duration: 100 });

const NavbarCourse = ({ isViewing, setIsViewing, course }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="text-white w-[100%]  flex items-center bg-[#1B1B1B] justify-between fixed z-20  border-b-[1px] border-[#33363A]">
      <div className="p-4 w-full md:w-auto flex flex-row items-center">
        <button
          className="sm:hidden text-white"
          onClick={() => {
            setOpen(!isOpen);
          }}
        >
          <Hamburger size={28} toggled={isOpen} toggle={setOpen} />
        </button>
        <a
          className="font-light  text-white text-[25px] xs:text-[25px] sm:text-[28px] md:text-[37px] md:px-12 w-[80%] text-center sm:text-left"
          style={{ fontFamily: "Nova Flat" }}
          href=""
        >
          Pegasus
        </a>

        {isOpen ? (
          <div
            data-aos="fade-right"
            data-aos-duration="500"
            className="fixed bg-[#1B1B1B] w-[50%] left-0 top-20 bottom-0 overflow-y-scroll example border-r-[1px] border-[#33363A]"
          >
            <div className=" px-3 pt-3 flex flex-row justify-around items-center poppins text-xs sm:text-[18px] text-[#FDFDFD] w-[100%]">
              <button className="w-[12%] md:w-[12%]">
                <img
                  src={Book}
                  alt=""
                  style={{ height: "auto" }}
                  className="w-[100%] md:w-[100%]"
                />
              </button>
              <button className="w-[10%] sm:w-[10%]">
                <img
                  src={Whitewallet}
                  alt=""
                  style={{ height: "auto" }}
                  className="w-[100%] md:w-[100%]"

                />
              </button>
              <button className="w-[11%] sm:w-[9%]">
                <img
                  src={Settings}
                  alt=""
                  style={{ height: "auto" }}
                  className="w-[100%] md:w-[100%]"
                />
              </button>
              <button className="w-[8%] sm:w-[7%]">
                <img
                  src={Bell}
                  alt=""
                  style={{ height: "auto" }}
                  className="w-[100%] md:w-[100%]"
                />
              </button>
              <button className="w-[8%] sm:w-[8%]">
                <img
                  src={Profile}
                  alt=""
                  style={{ height: "auto" }}
                  className="w-[100%] md:w-[100%]"
                />
              </button>
            </div>
            <Content
              isViewing={isViewing}
              setIsViewing={setIsViewing}
              course={course}
            />
          </div>
        ) : null}
      </div>
      <div className="hidden  sm:flex flex-row justify-around items-center poppins text-xs sm:text-[18px] text-[#FDFDFD] md:w-[35%] lg:w-[22%]">
        <button className="w-[12%] md:w-[12%]">
          <img
            src={Book}
            alt=""
            style={{ height: "auto" }}
            className="w-[100%] md:w-[100%]"
          />
        </button>
        <button className="w-[15%] md:w-[10%]">
          <img
            src={Whitewallet}
            alt=""
            style={{ height: "auto" }}
            lassName="w-[100%] md:w-[100%]"
          />
        </button>
        <button className="w-[15%] md:w-[10%]">
          <img
            src={Settings}
            alt=""
            style={{ height: "auto" }}
            className="w-[100%] md:w-[100%]"
          />
        </button>
        <button className="w-[10%] md:w-[7%]">
          <img
            src={Bell}
            alt=""
            style={{ height: "auto" }}
            className="w-[100%] md:w-[100%]"
          />
        </button>
        <button className="w-[10%] md:w-[8%]">
          <img
            src={Profile}
            alt=""
            style={{ height: "auto" }}
            className="w-[100%] md:w-[100%]"
          />
        </button>
      </div>
    </div>
  );
};

export default NavbarCourse;