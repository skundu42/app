import React from "react";
import arrow from './../../assets/images/Vector10black.svg'
import ellipse from './../../assets/images/Ellipse1.svg'


const HomeSection1 = () => {
  return (
    <div className="relative flex flex-col w-[100%] items-center justify-center">
      <img width="25%" height="auto" className="absolute right-0 -top-24" src={ellipse} alt="" />
      <div className=" max-w-[1500px]">
        <div
          className="relative mt-20  flex flex-col items-center px-8 md:px-4"
          style={{ fontFamily: "Inter" }}
        >
          <div data-aos="zoom-in" data-aos-duration="2500" className="section1-heading">
            <h1 className=" uppercase  group font-black text-[38px] sm:text-[46px] md:text-[50px] lg:text-[60px] text-center tracking-wide px-5 sm:px-5 ">

              Hone your web3 skills, earn <span> </span>
               <div className=" inline-flex lg:flex-col-reverse flex-col"> <del className=" decoration-[30%] decoration-[#05ff97]/[.60] group-hover:decoration-[#bfd1c980]/[.60]">rewards</del>  <span >NFT</span></div>
            </h1>
          </div>
          <div className=" flex flex-col sm:flex-row  justify-evenly items-center mt-16 md:mt-48 sm:px-16 px-3 ">
            <p
              style={{ fontFamily: "Orbitron" }}
              className="sm:w-[50%] font-normal text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] capitalize text-white text-center sm:text-start"
            >
              Build in-demand WEB3 skills and earn NFT credentials...
            </p>
            <div
              className="flex lg:flex-row flex-col lg:w-[500px] sm:w-[50%] justify-items-end items-end mt-10 md:mt-0"
              style={{ fontFamily: "Orbitron" }}
            >
              <button className=" flex mx-auto mt-6 bg-transparent border-[1px] border-appblue text-white py-2 px-8 font-thin focus:outline-none rounded-full lg:text-[20px] md:text-[16px] sm:text-[12px] text-[10px] hover:text-appblue  ease-in-out">
                Join Discord
              </button>
              <button class="group flex mx-auto mt-6 text-black bg-white border-0 py-2 px-5 focus:outline-none rounded-full  lg:text-[20px] md:text-[16px] sm:text-[12px] text-[10px] hover:text-appblue  ease-in-out flex-row items-center">
                Explore classes
                <img className="ml-2" src={arrow} alt="" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default HomeSection1;
