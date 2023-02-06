import React from "react";

const Heading1 = ({ text, chapterNo, zeroCheck }) => {
  return (
    <div className="flex">
    <span className="mr-4 text-[12px] md:text-[16px] lg:text-[20px] cursor-default"> {zeroCheck}{chapterNo} </span>
    <h1 className="text-[12px] md:text-[16px] lg:text-[20px] cursor-default" style={{ fontFamily: "Inter" }} >
     {text}
    </h1>
    </div>
  );
};

export default Heading1;
