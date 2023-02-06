import React, { useState, useEffect } from "react";
import courses from "../../constants/courses";
import Share from "../../assets/images/share.png";
import Save from "../../assets/images/save.png";
import Note from "../../assets/images/notes.png";
import NavbarCourse from "../../components/Navbar/NavbarCourse";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import arrow from "./../../assets/images/Vector10.svg";
import Content from "../../components/CourseContent/Content";

const Course = () => {
  const [isViewing, setIsViewing] = useState({
    chapter: 0,
    section: 0,
  });
  const [Viewed, setViewed] = useState({
    chapter: 0,
    section: 0,
  });
  const [course, setCourse] = useState(courses[0]);

  useEffect(() => {
    if (
      isViewing.chapter >= Viewed.chapter &&
      isViewing.section > Viewed.section
    ) {
      setViewed(isViewing);
    }
  }, [isViewing]);
  return (
    <div className="flex flex-col bg-[#1B1B1B]">
      <NavbarCourse
        isViewing={isViewing}
        setIsViewing={setIsViewing}
        course={course}
      />
      <div className="flex flex-row w-[100%] fixed  border-t-[1px] border-[#33363A] bg-[#1B1B1B] justify-start mt-[75px] md:mt-[80px] text-white top-0 bottom-0">
        <div className="w-[30%] xl:w-[20%] overflow-y-scroll example hidden sm:flex">
          <div className="w-[100%]  md:px-4">
            <Content
              isViewing={isViewing}
              setIsViewing={setIsViewing}
              course={course}
            />
          </div>
        </div>

        <div
          className="w-[100%] sm:w-[70%] md:w-[60%]  px-5 sm:px-16 py-8 border-l-[1px] border-r-[1px] border-[#33363A] overflow-y-scroll top-0 bottom-0  example"
          style={{ fontFamily: "Inter" }}
        >
          <div className="flex flex-row justify-between items-center mb-10">
            <ul className="breadcrumb w-[55%] font-light">
              <li className="inline">
                <a
                  className="text-[12px] md:text-[16px] lg:text-[20px]"
                  href="#"
                >
                  Projects
                </a>
              </li>
              <li className="inline">
                <a
                  className="text-[12px] md:text-[16px] lg:text-[20px]"
                  href="#"
                >
                  {course.name}
                </a>
              </li>
            </ul>
            <div className="w-[40%] flex flex-row items-center justify-end">
              <img
                src={Share}
                alt=""
                style={{ width: "10%", height: "auto" }}
                className="mr-3"
              />
              <img
                src={Save}
                alt=""
                style={{ width: "10%", height: "auto" }}
                className="mr-3"
              />
              <img
                src={Note}
                alt=""
                style={{ width: "10%", height: "auto" }}
                className="mr-3"
              />
            </div>
          </div>

          {
            course.chapters[isViewing.chapter].sections[isViewing.section]
              .content
          }
        </div>
      </div>
      {/* <BottomBar /> */}
    </div>
  );
};

const BottomBar = () => {
  const [progress, setProgress] = useState(0);
  return (
    <div
      className="fixed bg-[#1B1B1B] bottom-0 h-[80px] z-10 w-[100%] border-t-[1px]  border-[#33363A] flex flex-row justify-start items-center"
      style={{ fontFamily: "Inter" }}
    >
      <div className="w-[45%] sm:w-[30%] lg:w-[20%] flex flex-col items-center ">
        <div className="w-[60%] flex flex-row justify-between text-white mb-2">
          <p className="text-left text-[12px] md:text-[10px] lg:text-[12px]">
            37% Completed
          </p>
          <p className="text-[10px] md:text-[10px] lg:text-[12px]">6/10</p>
        </div>
        <Box sx={{ width: "60%" }}>
          <LinearProgress variant="determinate" value={progress} />
        </Box>
      </div>
      <div className="w-[50%] sm:w-[65%] md:w-[60%] lg:w-[70%] xl:w-[60%] flex justify-end md:justify-end">
        <button class="group flex   text-[white] bg-appblue border-0 py-2 px-5 focus:outline-none rounded-full  lg:text-[18px] md:text-[12px] text-[10px]  ease-in-out flex-row items-center ">
          Make Submission
          <img className="ml-2" src={arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Course;
