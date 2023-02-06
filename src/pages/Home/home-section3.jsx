import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import arrow from "./../../assets/images/vector9.png";
import btnarrow from "./../../assets/images/Vector10black.svg";
import btnarrowD from "./../../assets/images/Vector10.svg";
import ellipse from "./../../assets/images/Ellipse3.png";
import graybox from "./../../assets/images/graybox2.png";
import tblock from "./../../assets/images/tblock.png";
import person from "./../../assets/images/person.png";

const HomeSection3 = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
  };

  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    <div className="w-[100%] flex flex-col md:flex-row justify-center items-center my-12 rounded-xl border-2 border-[#4F5052] ">
      <div className="w-[100%] md:w-[40%] relative bg-[#00AA8D] flex flex-col items-start p-3 md:pt-24 h-[300px] md:h-[420px] rounded-t-xl md:rounded-l-xl justify-center">
        <h1 className="w-[40%] md:w-[65%] text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-white font-bold px-4 z-10">
          Build a Web3 app with Solidity
        </h1>
        <img
          className="mt-8 self-center w-[60%] 2xs:w-[50%] md:w-[87%] h-auto absolute md:-top-24 sm:-top-2 top-10  md:-right-12 sm:right-10 right-5"
          src={tblock}
          alt=""
        />
        <button class="w-[45%] md:w-[90%] group flex  mt-10 text-white text-center border-[1px] border-white py-2 xs:py-5 px-5 focus:outline-none xs:rounded-2xl rounded-xl  lg:text-[20px] md:text-[16px] sm:text-[14px] text-[12px] hover:text-black  ease-in-out flex-row items-center justify-center">
          Join a Cohort
          <div className="w-[20%] flex flex-row justify-end">
            <img className="ml-2 " src={btnarrowD} alt="" />
          </div>
        </button>
      </div>
      <div className="w-[100%] md:w-[60%] h-[420px] bg-[#1E1F21] flex flex-col items-center p-5 xs:px-8 rounded-b-xl md:rounded-r-xl rounded justify-evenly">
        <div>
          <h1 className=" text-[20px] sm:text-[18px] md:text-[20px] lg:text-[26px] xl:text-[35px] text-white font-semibold xs:px-6">
            Taking Off with Ethereum
          </h1>
          <p className="  text-[10px] md:text-[12px] text-white font-normal xs:px-6 xs:pr-8 mt-3">
            Ethereum is a technology that's home to digital money, global
            payments, and applications. The community has built a booming
            digital economy, bold new ways for creators to earn online, and so
            much more. It's open to everyone, wherever you are in the world –
            all you need is the internet.
          </p>
        </div>
        <div className="text-left w-[100%] mt-2">
          <h1 className="text-[12px] lg:text-[14px] text-white font-semibold xs:px-6">
            What you will learn ?
          </h1>
          <p className="text-[9px] lg:text-[12px] text-white font-normal xs:px-6 mt-1">
            In this course, we will learn about how Ethereum works, its
            consensus mechanism, EVM and Solidity, the msart contract language.
          </p>
        </div>
        <div className="w-[100%] flex flex-col xs:flex-row xs:items-center justify-evenly mt-4">
          <label
            className="border-2 text-center border-[#4F5052] rounded-md text-white text-[10px] lg:text-[12px] px-2 py-2 "
            htmlFor=""
          >
            😂 Web3n00b
          </label>
          <label
            className="border-2 text-center border-[#4F5052] rounded-md text-white text-[10px] lg:text-[12px] px-2 py-2 my-2 xs:my-0"
            htmlFor=""
          >
            ⏰ Full week Build
          </label>
          <label
            className="border-2 text-center border-[#4F5052] rounded-md text-white text-[10px] lg:text-[12px] px-2 py-2"
            htmlFor=""
          >
            🥇 First Time
          </label>
        </div>
        <div className="w-[100%] flex flex-col sm:flex-row items-center justify-center xs:justify-evenly">
          <div className="w-[40%] md:w-[80%] lg:w-[30%] flex flex-row items-center justify-center">
            <div className=" w-[110px]  h-[40px]  flex flex-row items-center relative mt-4">
              <img
                width="30%"
                height="auto"
                className="bg-purple-200 rounded-full absolute left-[96px] top-0"
                src={person}
                alt=""
              />
              <img
                width="30%"
                height="auto"
                className="bg-purple-200 rounded-full absolute left-[72px] top-0"
                src={person}
                alt=""
              />
              <img
                width="30%"
                height="auto"
                className="bg-purple-200 rounded-full absolute left-12 top-0"
                src={person}
                alt=""
              />
              <img
                width="30%"
                height="auto"
                className="bg-purple-200 rounded-full absolute left-6 top-0"
                src={person}
                alt=""
              />
              <img
                width="30%"
                height="auto"
                className="bg-purple-200 rounded-full absolute top-0"
                src={person}
                alt=""
              />
            </div>
          </div>
          <div className="w-[90%] sm:w-[30%] md:w-[55%] flex flex-col items-center justify-center">
            <p className="text-[10px] xs:text-[11px] md:text-[13px] text-[#AAABAC] font-normal  mt-1 text-center capitalize">
              Course Led by Alberto Chang
            </p>
          </div>
        </div>
      </div>
    </div>,

    //2
    <div className="w-[100%] flex flex-col md:flex-row justify-center items-center my-12 rounded-xl border-2 border-[#4F5052] ">
      <div className="w-[100%] md:w-[40%] relative bg-[#96aa00] flex flex-col items-start p-3 md:pt-24 h-[300px] md:h-[420px] rounded-t-xl md:rounded-l-xl justify-center">
        <h1 className="w-[40%] md:w-[65%] text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-white font-bold px-4 z-10">
          Build a Web3 app with Solidity
        </h1>
        <img
          className="mt-8 self-center w-[60%] 2xs:w-[50%] md:w-[87%] h-auto absolute md:-top-24 sm:-top-2 top-10  md:-right-12 sm:right-10 right-5"
          src={tblock}
          alt=""
        />
        <button class="w-[45%] md:w-[90%] group flex  mt-10 text-white text-center border-[1px] border-white py-2 xs:py-5 px-5 focus:outline-none xs:rounded-2xl rounded-xl  lg:text-[20px] md:text-[16px] sm:text-[14px] text-[12px] hover:text-black  ease-in-out flex-row items-center justify-center">
          Join a Cohort
          <div className="w-[20%] flex flex-row justify-end">
            <img className="ml-2 " src={btnarrowD} alt="" />
          </div>
        </button>
      </div>
      <div className="w-[100%] md:w-[60%] h-[420px] bg-[#1E1F21] flex flex-col items-center p-5 xs:px-8 rounded-b-xl md:rounded-r-xl rounded justify-evenly">
        <div>
          <h1 className=" text-[20px] sm:text-[18px] md:text-[20px] lg:text-[26px] xl:text-[35px] text-white font-semibold xs:px-6">
            Taking Off with Polygon
          </h1>
          <p className="  text-[10px] md:text-[12px] text-white font-normal xs:px-6 xs:pr-8 mt-3">
            Polygon is a decentralised Ethereum scaling platform that enables
            developers to build scalable user-friendly dApps with low
            transaction fees without ever sacrificing on security.Think of a
            Sidechain as a clone of a 'parent' blockchain, supporting transfer
            of assets to and from the main chain. It is simply an alternate to
            parent chain that creates a new blockchain with its own mechanism of
            creating blocks (consensus mechanism). Connecting a sidechain to a
            parent chain involves setting up a method of moving assets between
            the chains.
          </p>
        </div>
        <div className="text-left w-[100%] mt-2">
          <h1 className="text-[12px] lg:text-[14px] text-white font-semibold xs:px-6">
            What you will learn ?
          </h1>
          <p className="text-[9px] lg:text-[12px] text-white font-normal xs:px-6 mt-1">
            In this course we will learn about the Scalability issues and how
            Polygon with its suite of scalability solutions adresses those
            problems.
          </p>
        </div>
        <div className="w-[100%] flex flex-col xs:flex-row xs:items-center justify-evenly mt-4">
          <label
            className="border-2 text-center border-[#4F5052] rounded-md text-white text-[10px] lg:text-[12px] px-2 py-2 "
            htmlFor=""
          >
            😂 Web3n00b
          </label>
          <label
            className="border-2 text-center border-[#4F5052] rounded-md text-white text-[10px] lg:text-[12px] px-2 py-2 my-2 xs:my-0"
            htmlFor=""
          >
            ⏰ Full week Build
          </label>
          <label
            className="border-2 text-center border-[#4F5052] rounded-md text-white text-[10px] lg:text-[12px] px-2 py-2"
            htmlFor=""
          >
            🥇 First Time
          </label>
        </div>
        <div className="w-[100%] flex flex-col sm:flex-row items-center justify-center xs:justify-evenly">
          <div className="w-[40%] md:w-[80%] lg:w-[30%] flex flex-row items-center justify-center">
            <div className=" w-[110px]  h-[40px]  flex flex-row items-center relative mt-4">
              <img
                width="30%"
                height="auto"
                className="bg-purple-200 rounded-full absolute left-[96px] top-0"
                src={person}
                alt=""
              />
              <img
                width="30%"
                height="auto"
                className="bg-purple-200 rounded-full absolute left-[72px] top-0"
                src={person}
                alt=""
              />
              <img
                width="30%"
                height="auto"
                className="bg-purple-200 rounded-full absolute left-12 top-0"
                src={person}
                alt=""
              />
              <img
                width="30%"
                height="auto"
                className="bg-purple-200 rounded-full absolute left-6 top-0"
                src={person}
                alt=""
              />
              <img
                width="30%"
                height="auto"
                className="bg-purple-200 rounded-full absolute top-0"
                src={person}
                alt=""
              />
            </div>
          </div>
          <div className="w-[90%] sm:w-[30%] md:w-[55%] flex flex-col items-center justify-center">
            <p className="text-[10px] xs:text-[11px] md:text-[13px] text-[#AAABAC] font-normal  mt-1 text-center capitalize">
              Course Led by Alberto Chang
            </p>
          </div>
        </div>
      </div>
    </div>,
  ];

  return (
    <div
      className="relative flex flex-col w-[100%] items-center justify-center my-20 py-8 "
      style={{
        background:
          "linear-gradient(180deg, #0A1E37 0%, rgba(10, 30, 55, 0.817235) 27.84%, rgba(10, 30, 55, 0) 116.02%)",
      }}
    >
      <img
        width="22%"
        height="auto"
        className="absolute left-0 -top-52"
        src={ellipse}
        alt=""
      />
      <img
        width="18%"
        height="auto"
        className="absolute  left-0"
        src={graybox}
        alt=""
      />
      <div
        className="relative w-[100%] max-w-[1500px] flex flex-col items-center "
        style={{ fontFamily: "Inter" }}
      >
        <h1
          data-aos="fade-up"
          data-aos-duration="2500"
          className="text-white text-center text-[28px] sm:text-[32px] md:text-[48px] font-normal capitalize"
          style={{ fontFamily: "Alata", fontStyle: "Alata-body" }}
        >
          Explore our courses
        </h1>
        <p
          data-aos="fade-up"
          data-aos-duration="2200"
          className="text-white text-center text-[12px] sm:text-[16px] md:text-[20px] font-normal w-[80%] md:w-[50%]"
          style={{ fontFamily: "Orbitron", fontStyle: "obitron-body" }}
        >
          Explore from a collection of best web3 courses.
        </p>

        <div
          className="hidden xs:flex flex-col xl:flex-row items-center w-[100%] sm:px-16 justify-center"
          style={{ fontFamily: "Orbitron" }}
        >
          <div className="flex flex-row items-center xl:w-[45%] w-[50%] justify-evenly sm:ml-2">
            <button
              data-aos="fade-up"
              data-aos-duration="1000"
              className=" flex mx-auto sm:ml-2 mt-6 bg-transparent border-[1px] border-appblue text-white py-2 px-5 focus:outline-none rounded-full lg:text-[18px] md:text-[14px] sm:text-[12px] text-[10px] hover:text-appblue  ease-in-out"
            >
              All
            </button>
            <button
              data-aos="fade-up"
              data-aos-duration="1200"
              className=" flex mx-auto sm:ml-2 mt-6 bg-transparent border-[1px] border-appblue text-white py-2 px-5 focus:outline-none rounded-full lg:text-[18px] md:text-[14px] sm:text-[12px] text-[10px] hover:text-appblue  ease-in-out"
            >
              Blockchain
            </button>
            <button
              data-aos="fade-up"
              data-aos-duration="1400"
              className=" flex mx-auto sm:ml-2 mt-6 bg-transparent border-[1px] border-appblue text-white py-2 px-5 focus:outline-none rounded-full lg:text-[18px] md:text-[14px] sm:text-[12px] text-[10px] hover:text-appblue  ease-in-out"
            >
              Bitcoin
            </button>
            <button
              data-aos="fade-up"
              data-aos-duration="1600"
              className=" flex mx-auto sm:ml-2 mt-6 bg-transparent border-[1px] border-appblue text-white py-2 px-5 focus:outline-none rounded-full lg:text-[18px] md:text-[14px] sm:text-[12px] text-[10px] hover:text-appblue  ease-in-out"
            >
              Etherium
            </button>
          </div>
          <div className=" flex flex-row items-center xl:w-[55%] w-[50%] justify-evenly ">
            <button
              data-aos="fade-up"
              data-aos-duration="1800"
              className=" flex mx-auto sm:ml-2 mt-6 bg-transparent border-[1px] border-appblue text-white py-2 px-5 focus:outline-none rounded-full lg:text-[18px] md:text-[14px] sm:text-[12px] text-[10px] hover:text-appblue  ease-in-out"
            >
              Polygon
            </button>
            <button
              data-aos="fade-up"
              data-aos-duration="2000"
              className=" flex mx-auto sm:ml-2 mt-6 bg-transparent border-[1px] border-appblue text-white py-2 px-5 focus:outline-none rounded-full lg:text-[18px] md:text-[14px] sm:text-[12px] text-[10px] hover:text-appblue  ease-in-out"
            >
              Programming
            </button>
            <button
              data-aos="fade-up"
              data-aos-duration="2200"
              className=" flex mx-auto sm:ml-2 mt-6 bg-transparent border-[1px] border-appblue text-white py-2 px-5 focus:outline-none rounded-full lg:text-[18px] md:text-[14px] sm:text-[12px] text-[10px] hover:text-appblue  ease-in-out"
            >
              DEFI
            </button>
            <button
              data-aos="fade-up"
              data-aos-duration="2400"
              className=" flex mx-auto sm:ml-2 mt-6 bg-transparent border-[1px] border-appblue text-white py-2 px-5 focus:outline-none rounded-full lg:text-[18px] md:text-[14px] sm:text-[12px] text-[10px] hover:text-appblue  ease-in-out"
            >
              Game Dev
            </button>
          </div>
        </div>
        <div className="w-[100%] flex flex-row items-center justify-center xs:justify-between">
          <div
            className="hover:text-white rounded-full hidden xs:flex flex-col justify-start p-4 hover:bg-app-blue transition ease-in-out delay-150 w-[6%]"
            onClick={() => {
              activeIndex === 0
                ? setActiveIndex(2)
                : setActiveIndex(activeIndex - 1);
            }}
          >
            <img fontSize={"200px"} src={arrow} />
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="w-[90%] xs:w-[85%] lg:w-[75%] xl:w-[60%] self-center"
          >
            <AliceCarousel
              mouseTracking
              items={items}
              responsive={responsive}
              controlsStrategy="alternate"
              disableButtonsControls
              activeIndex={activeIndex}
            />
          </div>
          <div
            className="hover:text-white rounded-full hidden xs:flex flex-col justify-end p-4 hover:bg-app-blue transition ease-in-out delay-150 w-[6%]"
            onClick={() => {
              activeIndex === 1
                ? setActiveIndex(0)
                : setActiveIndex(activeIndex + 1);
            }}
          >
            <img
              fontSize={"200px"}
              src={arrow}
              style={{ webkitTransform: "scaleX(-1)", transform: "scaleX(-1)" }}
            />
          </div>
        </div>
        <div
          className="flex lg:flex-row flex-col lg:w-[500px] w-[70%] sm:w-[50%] items-center mt-4 md:mt-0"
          style={{ fontFamily: "Orbitron" }}
        >
          <button class="w-[100%] md:w-[40%] group flex mx-auto mt-6 text-black bg-white border-0 py-2 px-8 focus:outline-none rounded-full  lg:text-[20px] md:text-[16px] sm:text-[14px] text-[12px] hover:text-appblue  ease-in-out flex-row justify-center items-center">
            Dive in
            <img className="ml-2" src={btnarrow} alt="" />
          </button>
          <button className="w-[100%] md:w-[40%] flex mx-auto mt-6 text-white bg-transparent font-thin border-[1px] border-appblue  py-2 px-8 focus:outline-none rounded-full lg:text-[20px] md:text-[16px] sm:text-[14px] text-[12px] hover:text-appblue justify-center ease-in-out">
            Load more
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeSection3;
