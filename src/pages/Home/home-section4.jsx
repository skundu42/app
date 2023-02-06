import React from "react";
import img1 from "./../../assets/images/img1.png";
import img2 from "./../../assets/images/img2.png";
import img3 from "./../../assets/images/img3.png";

const HomeSection4 = () => {
  return (
    <div className="w-[100%] flex flex-col items-center justify-center ">
      <div
        className="w-[100%] max-w-[1400px] flex flex-col items-center "
        style={{ fontFamily: "Alata", fontStyle: "Alata-heading" }}
      >
        <div>
          <h1 data-aos="fade-up" data-aos-duration="2500" className="text-[32px] sm:[36px] md:text-[48px] font-normal text-center text-white">
            Our Partners
          </h1>
        </div>
        <div  className="w-[70%] flex flex-row items-center justify-evenly mt-4 z-10">
          <img data-aos="zoom-out" data-aos-duration="2000" className="w-[40%] xs:w-[30%] md:w-[17%]"  height="auto" src={img1} alt="" />
          <img data-aos="zoom-in-up" data-aos-duration="1700" className="w-[40%] xs:w-[30%] md:w-[17%]"  height="auto" src={img2} alt="" />
          <img data-aos="zoom-out" data-aos-duration="2000" className="w-[40%] xs:w-[30%] md:w-[17%]"  height="auto" src={img3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeSection4;
