import React from "react";
import ellipse from "./../../assets/images/Ellipse5.png";
import email from "./../../assets/images/email.png";

const HomeSection6 = () => {
  return (
    <div
      className=" flex flex-col w-[100%] items-center justify-center"
      style={{
        background:
        "radial-gradient(circle at bottom center, #35BF9A 15%, #16AEC2 35%, #28957D 60%)",
        fontFamily: "Inter",
      }}
    >
      <div className="relative w-[100%] max-w-[1400px] ">
        {/* <img
          width="auto"
          height="389px"
          className="absolute  bottom-0 left-0  overflow-hidden"
          src={ellipse}
          alt=""
        /> */}
        <div class="flex flex-wrap  mb-5 text-center flex-col items-center justify-center ">
          <div class=" mb-10 px-4 text-white  z-10 flex flex-col items-center justify-center">
            <h2 data-aos="fade-up" data-aos-duration="2500" class=" text-[32px] sm:[36px] md:text-[58px]  font-semibold mt-6 mb-16 ">
              Ready To Learn?
            </h2>
            <p data-aos="zoom-in" data-aos-duration="1500" class="leading-relaxed text-[14px] sm:text-[18px] md:text-[22px]">
              Choose a Class and start learning!
            </p>

            <div data-aos="zoom-in" data-aos-duration="1700" className="flex flex-row  w-[100%] sm:w-[80%] justify-between rounded-full border-2 border-white p-[1px] mt-10 items-center">
              <img className="px-2" src={email} alt="" />
              <input
                className="w-[45%] bg-transparent focus:outline-none text-black lg:text-[17px] md:text-[14px] sm:text-[12px] text-[10px]"
                type="text"
                name=""
                id=""
                placeholder="Your Email Address"
              />
              <button
                class="w-[46%] md:w-[40%] group flex  text-black text-center bg-white border-0 py-1  px-2 focus:outline-none xs:rounded-2xl rounded-xl  lg:text-[14px] md:text-[12px] sm:text-[10px] text-[10px] hover:text-black  ease-in-out flex-row items-center justify-center"
                style={{ fontFamily: "Orbitron" }}
              >
                Get Early Access
              </button>
            </div>

            <button data-aos="zoom-in" data-aos-duration="2500"
              class="w-[65%] md:w-[50%] group flex mx-auto mt-16 text-black bg-white border-0 py-2 px-5 focus:outline-none rounded-full text-[12px] xs:text-[14px] sm:text-[16px] md:text-[17px] lg:text-[20px] hover:text-appblue items-center justify-center ease-in-out"
              style={{ fontFamily: "Orbitron" }}
            >
              Explore classes
              <svg
                className="ml-3 group-hover:ml-4 py-1 sm:py-0 xs:w-[7%] md:w-[10%]"
                width="10%"
                height="auto"
                viewBox="0 -2 18 15"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.4986 7.5L17.2057 6.79289L17.9128 7.5L17.2057 8.20711L16.4986 7.5ZM1.4986 8.5C0.946311 8.5 0.498596 8.05228 0.498596 7.5C0.498596 6.94772 0.946311 6.5 1.4986 6.5V8.5ZM11.2057 0.792893L17.2057 6.79289L15.7915 8.20711L9.79149 2.20711L11.2057 0.792893ZM17.2057 8.20711L11.2057 14.2071L9.79149 12.7929L15.7915 6.79289L17.2057 8.20711ZM16.4986 8.5H1.4986V6.5H16.4986V8.5Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection6;
