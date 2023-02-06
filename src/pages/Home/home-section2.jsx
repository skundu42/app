import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import lines from "./../../assets/images/lines.gif";
import nft from "./../../assets/images/nft.gif";
import book from "./../../assets/images/book.png";
import wallet from "./../../assets/images/wallet.png";
import graybox from "./../../assets/images/graybox.svg";
import ellipse from "./../../assets/images/Ellipse2.png";
import Aos from 'aos';
import "aos/dist/aos.css"

Aos.init({duration: 100})

const HomeSection2 = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
  };

  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    <div className="w-[100%] flex flex-col justify-center items-center sm:py-7">
      <div className="p-3  w-[83%] max-w-[1000px] flex flex-col justify-center items-center sm:flex-row rounded-[45px]">
        <div data-aos="flip-left" data-aos-duration="1500" className="md:w-[35%]">
          <img  className="w-[100%] h-auto " src={lines} alt="" />
        </div>
        <div data-aos="zoom-in" data-aos-duration="1800" className="dashed-line w-[30%] hidden sm:flex"></div>
        <div data-aos="flip-right" data-aos-duration="1500" className="w-[100%] md:w-[45%] mt-5 md:m-0 text-center md:text-left flex flex-row items-center">
          <img height="auto" width="30%" src={book} alt="" />
          <div className="flex flex-col items-start text-left ml-2 text-white">
            <h1 className="text-[16px] sm:[18px] md:text-[20px] font-normal">Learn</h1>
            <p className="text-[10px] md:text-[12px]" style={{ fontFamily: "Orbitron" }}>
      
            We cut the noise, and bring you the best tutors on the internet. So you can focus on learning what matters
            </p>
          </div>
        </div>
      </div>
    </div>,

    // 2
    <div className="w-[100%] flex flex-col justify-center items-center sm:py-7">
      <div className="p-3 sm:p-8 w-[83%] max-w-[1000px] flex flex-col justify-center items-center sm:flex-row rounded-[45px]">
        <div data-aos="flip-right" data-aos-duration="1500" className="w-[100%] md:w-[45%] mt-5 md:m-0 text-center md:text-left flex flex-row items-center">
          <div className="flex flex-col items-end text-end mr-2 text-white">
            <h1 className="text-[16px] sm:[18px] md:text-[20px]">Earn</h1>
            <p className="text-[10px] md:text-[12px]">
        
            Achieve milestones, get NFT-based credentials and get hired easily.
            </p>
          </div>
          <img height="auto" width="30%" src={wallet} alt="" />
        </div>
        <div data-aos="zoom-in" data-aos-duration="1800" className="dashed-line hidden sm:flex w-[30%]"></div>
        <div data-aos="flip-left" data-aos-duration="1500" className="md:w-[35%] mt-8">
          <img className="w-[100%] h-auto " src={nft} alt="" />
        </div>
      </div>
    </div>,
  ];

  return (
    <div  className="relative flex flex-col w-[100%] items-center justify-center py-20">
      
      <img 
          className="absolute right-0 -top-36 w-[20%] h-auto "
          src={graybox}
          alt=""
        />
        <img
          className="absolute left-0 -top-44 w-[20%] h-auto "
          src={ellipse}
          alt=""
        />

      <div
        className="relative w-[100%] max-w-[1400px] "
        style={{ fontFamily: "Inter" }}
      >
        <h1 data-aos="fade-up" data-aos-duration="1200" className="text-white text-center text-[32px] sm:[36px] md:text-[48px] font-semibold">
          How It <span className="text-appblue">Works</span>?
        </h1>
     
        <div className="w-[100%] flex flex-col items-center">
          <AliceCarousel
            mouseTracking
            items={items}
            responsive={responsive}
            controlsStrategy="alternate"
            disableButtonsControls
            activeIndex={activeIndex}
            infinite={true}
            autoPlay={true}
            autoPlayInterval={1500}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeSection2;
