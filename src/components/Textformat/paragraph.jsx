import React from "react";
import YellowCircle from "../../assets/images/yellowCircle.png";
import GreenTick from "../../assets/images/greentick.png";
import Lock from "../../assets/images/lock.png";

const Paragraph = ({
  isViewing,
  cIndex,
  sIndex,
  course,
  setIsViewing,
  text,
}) => {
  return (
    <p
      className="font-light text-[10px] md:text-[12px] lg:text-[14px] my-6 flex flex-row items-center capitalize cursor-pointer"
      onClick={() => {
        (isViewing.chapter === cIndex && isViewing.section === sIndex - 1) ||
        (isViewing.chapter === cIndex - 1 &&
          isViewing.section ===
            course.chapters[cIndex - 1].sections.length - 1 &&
          sIndex === 0)
          ? setIsViewing({
              chapter: cIndex,
              section: sIndex,
            })
          : (isViewing.chapter === cIndex && isViewing.section >= sIndex) ||
            isViewing.chapter > cIndex
          ? setIsViewing({
              chapter: cIndex,
              section: sIndex,
            })
          : console.log("123");
      }}
      style={{
        color: `${
          isViewing.chapter === cIndex && isViewing.section == sIndex
            ? "rgba(255, 255, 255, 0.8)"
            : "rgba(255, 255, 255, 0.4)"
        }`,
      }}
    >
      {(isViewing.chapter === cIndex && isViewing.section >= sIndex) ||
      isViewing.chapter > cIndex ? (
        <img
          src={GreenTick}
          alt=""
          style={{  height: "auto" }}
          className="mr-5 w-[9%] xl:w-[5%] "
        />
      ) : null}

      {(isViewing.chapter === cIndex && isViewing.section === sIndex - 1) ||
      (isViewing.chapter === cIndex - 1 &&
        isViewing.section === course.chapters[cIndex - 1].sections.length - 1 &&
        sIndex === 0) ? (
        <img
          src={YellowCircle}
          alt=""
          style={{  height: "auto" }}
          className="mr-5 w-[9%] xl:w-[5%]"
        />
      ) : (isViewing.chapter === cIndex && isViewing.section >= sIndex) ||
        isViewing.chapter > cIndex ? null : (
        <img
          src={Lock}
          alt=""
          style={{  height: "auto" }}
          className="mr-5 w-[9%] xl:w-[5%]"
        />
      )}

      {text}
    </p>
  );
};

export default Paragraph;
