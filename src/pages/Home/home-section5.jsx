import React, { useState } from "react";
import person from "./../../assets/images/person.png";
import laptop from "./../../assets/images/laptop.png";
import twitter from "./../../assets/images/twitter.png";
import AliceCarousel from "react-alice-carousel";
import arrow from "./../../assets/images/vector9.png";
import "react-alice-carousel/lib/alice-carousel.css";
import ellipse from "./../../assets/images/Ellipse4.png";
import graybox from "./../../assets/images/graybox3.png";

const HomeSection5 = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
  };

  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    <div className="w-[70%] mx-auto xs:w-[50%] sm:w-[40%] flex flex-col items-center min-h-[100px] mt-4 p-5 rounded-2xl justify-center bg-[#16191D] ">
      <img
        width="10%"
        height="auto"
        className="flex self-end"
        src={twitter}
        alt=""
      />
      <div className="flex flex-row w-[100%] justify-start ">
        <img
          width="30%"
          height="40px"
          className="bg-purple-200 rounded-full max-h-[60px] max-w-[60px]"
          src={person}
          alt=""
        />
        <h1
          className="font-semibold text-[14px] sm:[16px] md:text-[20px] text-white flex flex-col justify-center ml-2 items-start"
          style={{ font: "Open Sans" }}
        >
          Agnes Remi
          <p className="font-light text-[8px] sm:[10px] md:text-[14px]">
            @agnessssR
          </p>
        </h1>
      </div>
      <p className="text-[12px] font-light tracking-wide text-white mt-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et placerat sit
        potenti adipiscing sagittis, parturient id aenean sit. Tortor eget
        luctus congue egestas. Ut lacus, massa, nibh cursus nibh ut. Viverra
        quis etiam consectetur blandit. Mollis porta bibendum quis dui.
        <br />
        <br />
        massa, nibh cursus nibh ut. Viverra quis etiam consectetur blandit.
        Mollis porta bibendum quis dui.
      </p>
      <img className="mt-8 self-center w-[100%] h-auto" src={laptop} alt="" />
    </div>,

    // 2
    <div className="w-[70%]  mx-auto xs:w-[50%] sm:w-[40%] flex flex-col items-center min-h-[100px] mt-4 p-5 rounded-2xl justify-center bg-[#16191D] ">
      <img
        width="10%"
        height="auto"
        className="flex self-end"
        src={twitter}
        alt=""
      />
      <div className="flex flex-row w-[100%] justify-start ">
        <img
          width="30%"
          height="40px"
          className="bg-purple-200 rounded-full max-h-[60px] max-w-[60px]"
          src={person}
          alt=""
        />
        <h1
          className="font-semibold text-[14px] sm:[16px] md:text-[20px] text-white flex flex-col justify-center ml-2 items-start"
          style={{ font: "Open Sans" }}
        >
          Agnes Remi
          <p className="font-light  text-[8px] sm:[10px] md:text-[14px]">
            @agnessssR
          </p>
        </h1>
      </div>
      <p className="text-[12px] font-light tracking-wide text-white mt-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et placerat sit
        potenti adipiscing sagittis, parturient id aenean sit. Tortor eget
        luctus congue egestas. Ut lacus, massa, nibh cursus nibh ut. Viverra
        quis etiam consectetur blandit. Mollis porta bibendum quis dui.
        <br />
        <br />
        massa, nibh cursus nibh ut. Viverra quis etiam consectetur blandit.
        Mollis porta bibendum quis dui.
      </p>
      <img className="mt-8 self-center w-[100%] h-auto" src={laptop} alt="" />
    </div>,
    // 3
    <div className="w-[70%]  mx-auto xs:w-[50%] sm:w-[40%] flex flex-col items-center min-h-[100px] mt-4 p-5 rounded-2xl justify-center bg-[#16191D] ">
      <img
        width="10%"
        height="auto"
        className="flex self-end"
        src={twitter}
        alt=""
      />
      <div className="flex flex-row w-[100%] justify-start ">
        <img
          width="30%"
          height="40px"
          className="bg-purple-200 rounded-full max-h-[60px] max-w-[60px]"
          src={person}
          alt=""
        />
        <h1
          className="font-semibold text-[14px] sm:[16px] md:text-[20px] text-white flex flex-col justify-center ml-2 items-start"
          style={{ font: "Open Sans" }}
        >
          Agnes Remi
          <p className="font-light  text-[8px] sm:[10px] md:text-[14px]">
            @agnessssR
          </p>
        </h1>
      </div>
      <p className="text-[12px] font-light tracking-wide text-white mt-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et placerat sit
        potenti adipiscing sagittis, parturient id aenean sit. Tortor eget
        luctus congue egestas. Ut lacus, massa, nibh cursus nibh ut. Viverra
        quis etiam consectetur blandit. Mollis porta bibendum quis dui.
        <br />
        <br />
        massa, nibh cursus nibh ut. Viverra quis etiam consectetur blandit.
        Mollis porta bibendum quis dui.
      </p>
      <img className="mt-8 self-center w-[100%] h-auto" src={laptop} alt="" />
    </div>,
    // 4
    <div className="w-[70%]  mx-auto xs:w-[50%] sm:w-[40%] flex flex-col items-center min-h-[100px] mt-4 p-5 rounded-2xl justify-center bg-[#16191D] ">
      <img
        width="10%"
        height="auto"
        className="flex self-end"
        src={twitter}
        alt=""
      />
      <div className="flex flex-row w-[100%] justify-start ">
        <img
          width="30%"
          height="40px"
          className="bg-purple-200 rounded-full max-h-[60px] max-w-[60px]"
          src={person}
          alt=""
        />
        <h1
          className="font-semibold text-[14px] sm:[16px] md:text-[20px] text-white flex flex-col justify-center ml-2 items-start"
          style={{ font: "Open Sans" }}
        >
          Agnes Remi
          <p className="font-light  text-[8px] sm:[10px] md:text-[14px]">
            @agnessssR
          </p>
        </h1>
      </div>
      <p className="text-[12px] font-light tracking-wide text-white mt-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et placerat sit
        potenti adipiscing sagittis, parturient id aenean sit. Tortor eget
        luctus congue egestas. Ut lacus, massa, nibh cursus nibh ut. Viverra
        quis etiam consectetur blandit. Mollis porta bibendum quis dui.
        <br />
        <br />
        massa, nibh cursus nibh ut. Viverra quis etiam consectetur blandit.
        Mollis porta bibendum quis dui.
      </p>
      <img className="mt-8 self-center w-[100%] h-auto" src={laptop} alt="" />
    </div>,
  ];
  return (
    <div className="relative flex flex-col w-[100%] items-center justify-center mt-10 md:mt-28">
      <img
        width="35%"
        height="auto"
        className="absolute left-0 top-24"
        src={ellipse}
        alt=""
      />
      <img
        width="20%"
        height="auto"
        className="absolute left-0 -top-44"
        src={graybox}
        alt=""
      />

      <img
        width="40%"
        height="auto"
        className="absolute right-0 -top-48"
        src={ellipse}
        alt=""
        style={{ webkitTransform: "scaleX(-1)", transform: "scaleX(-1)" }}
      />
      <div
        className=" w-[100%] max-w-[1400px] flex flex-col items-center "
        style={{ fontFamily: "Inter" }}
      >
        <h1 data-aos="fade-up" data-aos-duration="3000"
          className="text-white text-center text-[32px] sm:[36px] md:text-[48px] font-normal"
          style={{ fontFamily: "Alata", fontStyle: "Alata-heading" }}
        >
          What <span className="text-appblue">DEV</span>s Say
        </h1>

        <div className="w-[100%] flex flex-col items-center justify-center xs:justify-between z-10">
          <div  className="hidden md:flex flex-row  w-[90%] my-20">
            <div data-aos="fade-up" data-aos-duration="3000" className="flex flex-col items-center">
              <div className="w-[95%] flex flex-col items-center min-h-[100px] mt-4 p-5 rounded-2xl justify-center bg-[#16191D] ">
                <img
                  width="10%"
                  height="auto"
                  className="flex self-end"
                  src={twitter}
                  alt=""
                />
                <div className="flex flex-row w-[100%] justify-start ">
                  <img
                    width="30%"
                    height="40px"
                    className="bg-purple-200 rounded-full max-h-[60px] max-w-[60px]"
                    src={person}
                    alt=""
                  />
                  <h1
                    className="font-semibold text-[14px] sm:[16px] md:text-[20px] text-white flex flex-col justify-center ml-2 items-start"
                    style={{ font: "Open Sans" }}
                  >
                    Agnes Remi
                    <p className="font-light  text-[8px] sm:[10px] md:text-[14px]">
                      @agnessssR
                    </p>
                  </h1>
                </div>
                <p className="text-[12px] font-light tracking-wide text-white mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et
                  placerat sit potenti adipiscing sagittis, parturient id aenean
                  sit. Tortor eget luctus congue egestas. Ut lacus, massa, nibh
                  cursus nibh ut. Viverra quis etiam consectetur blandit. Mollis
                  porta bibendum quis dui.
                  <br />
                  <br />
                  massa, nibh cursus nibh ut. Viverra quis etiam consectetur
                  blandit. Mollis porta bibendum quis dui.
                </p>
                <img
                  className="mt-8 self-center w-[100%] h-auto"
                  src={laptop}
                  alt=""
                />
              </div>

              {/* 2 */}

              <div  className="w-[95%] min-h-[100px] mt-4 p-5 rounded-2xl justify-evenly bg-[#16191D] flex flex-col items-start">
                <img
                  width="10%"
                  height="auto"
                  className="flex self-end"
                  src={twitter}
                  alt=""
                />

                <div className="flex flex-row w-[100%] justify-start ">
                  <img
                    width="30%"
                    height="40px"
                    className="bg-purple-200 rounded-full max-h-[60px] max-w-[60px]"
                    src={person}
                    alt=""
                  />
                  <h1
                    className="font-semibold text-[14px] sm:[16px] md:text-[20px] text-white flex flex-col justify-center ml-2 items-start"
                    style={{ font: "Open Sans" }}
                  >
                    Agnes Remi
                    <p className="font-light  text-[8px] sm:[10px] md:text-[14px]">
                      @agnessssR
                    </p>
                  </h1>
                </div>
                <p className="text-[12px] font-light tracking-wide text-white mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et
                  placerat sit potenti adipiscing sagittis, parturient id aenean
                  sit. Tortor eget luctus congue egestas. Ut lacus, massa, nibh
                  cursus nibh ut. Viverra quis etiam consectetur blandit. Mollis
                  porta bibendum quis dui.
                  <br />
                  <br />
                  massa, nibh cursus nibh ut. Viverra quis etiam consectetur
                  blandit. Mollis porta bibendum quis dui.
                </p>
                {/* <img className="mt-8 self-center w-[100%] h-auto" src={laptop} alt="" />*/}
              </div>
            </div>
            {/* 3 */}

            <div data-aos="fade-down" data-aos-duration="3000" className="flex flex-col items-center ">
              <div className="w-[95%] min-h-[100px] mt-4 p-5 rounded-2xl justify-evenly bg-[#16191D] flex flex-col items-start">
                <img
                  width="10%"
                  height="auto"
                  className="flex self-end"
                  src={twitter}
                  alt=""
                />

                <div className="flex flex-row w-[100%] justify-start ">
                  <img
                    width="30%"
                    height="40px"
                    className="bg-purple-200 rounded-full max-h-[60px] max-w-[60px]"
                    src={person}
                    alt=""
                  />
                  <h1
                    className="font-semibold text-[14px] sm:[16px] md:text-[20px] text-white flex flex-col justify-center ml-2 items-start"
                    style={{ font: "Open Sans" }}
                  >
                    Agnes Remi
                    <p className="font-light  text-[8px] sm:[10px] md:text-[14px]">
                      @agnessssR
                    </p>
                  </h1>
                </div>
                <p className="text-[12px] font-light tracking-wide text-white mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et
                  placerat sit potenti adipiscing sagittis, parturient id aenean
                  sit. Tortor eget luctus congue egestas. Ut lacus, massa, nibh
                  cursus nibh ut. Viverra quis etiam consectetur blandit. Mollis
                  porta bibendum quis dui.
                  <br />
                  <br />
                  massa, nibh cursus nibh ut. Viverra quis etiam consectetur
                  blandit. Mollis porta bibendum quis dui.
                  <br />
                  <br />
                  massa, nibh cursus nibh ut. Viverra quis etiam consectetur
                  blandit. Mollis porta bibendum quis dui.
                  <br />
                  <br />
                  t. Et placerat sit potenti adipiscing sagittis, parturient id
                  aenean sit. Tortor eget luctus congue egestas. Ut lacus,
                  massa, nibh cursus nibh ut. Viverra quis
                </p>
                <img
                  className="mt-8 self-center w-[100%] h-auto"
                  src={laptop}
                  alt=""
                />
              </div>
            </div>
            {/* 4 */}
            <div data-aos="fade-up" data-aos-duration="3000"  className="flex flex-col items-center ">
              <div className="w-[95%] min-h-[100px] mt-4 p-5 rounded-2xl justify-evenly bg-[#16191D] flex flex-col items-start">
                <img
                  width="10%"
                  height="auto"
                  className="flex self-end"
                  src={twitter}
                  alt=""
                />

                <div className="flex flex-row w-[100%] justify-start ">
                  <img
                    width="30%"
                    height="40px"
                    className="bg-purple-200 rounded-full max-h-[60px] max-w-[60px]"
                    src={person}
                    alt=""
                  />
                  <h1
                    className="font-semibold text-[14px] sm:[16px] md:text-[20px] text-white flex flex-col justify-center ml-2 items-start"
                    style={{ font: "Open Sans" }}
                  >
                    Agnes Remi
                    <p className="font-light  text-[8px] sm:[10px] md:text-[14px]">
                      @agnessssR
                    </p>
                  </h1>
                </div>
                <p className="text-[12px] font-light tracking-wide text-white mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et
                  placerat sit potenti adipiscing sagittis, parturient id aenean
                  sit. Tortor eget luctus congue egestas. Ut lacus, massa, nibh
                  cursus nibh ut. Viverra quis etiam consectetur blandit. Mollis
                  porta bibendum quis dui.
                  <br />
                  <br />
                  massa, nibh cursus nibh ut. Viverra quis etiam consectetur
                  blandit. Mollis porta bibendum quis dui.
                </p>
                {/*  <img className="mt-8 self-center w-[100%] h-auto" src={laptop} alt="" />*/}
              </div>
              {/* 5 */}
              <div className="w-[95%] min-h-[100px] mt-4 p-5 rounded-2xl justify-evenly bg-[#16191D] flex flex-col items-start justify-items-center">
                <img
                  width="10%"
                  height="auto"
                  className="flex self-end"
                  src={twitter}
                  alt=""
                />

                <div className="flex flex-row w-[100%] justify-start ">
                  <img
                    width="30%"
                    height="40px"
                    className="bg-purple-200 rounded-full max-h-[60px] max-w-[60px]"
                    src={person}
                    alt=""
                  />
                  <h1
                    className="font-semibold text-[14px] sm:[16px] md:text-[20px] text-white flex flex-col justify-center ml-2 items-start"
                    style={{ font: "Open Sans" }}
                  >
                    Agnes Remi
                    <p className="font-light  text-[8px] sm:[10px] md:text-[14px]">
                      @agnessssR
                    </p>
                  </h1>
                </div>
                <p className="text-[12px] font-light tracking-wide text-white mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et
                  placerat sit potenti adipiscing sagittis, parturient id aenean
                  sit. Tortor eget luctus congue egestas. Ut lacus, massa, nibh
                  cursus nibh ut. Viverra quis etiam consectetur blandit. Mollis
                  porta bibendum quis dui.
                  <br />
                  <br />
                  massa, nibh cursus nibh ut. Viverra quis etiam consectetur
                  blandit. Mollis porta bibendum quis dui.
                  <br />
                  <br />
                  t. Et placerat sit potenti adipiscing sagittis, parturient id
                  aenean sit. Tortor eget luctus congue egestas. Ut lacus,
                  massa, nibh cursus nibh ut. Viverra quis
                </p>
                <img
                  className="mt-8 self-center w-[100%] h-auto"
                  src={laptop}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center md:hidden w-[100%]">

            <div className="w-[100%] flex flex-row items-center justify-center m-10">
              <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
                controlsStrategy="alternate"
                disableButtonsControls
                activeIndex={activeIndex}
              />
            </div>
   
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection5;
