import React from "react";

const SectionHeading = ({ text }) => {
  return (
    <h1 className="font-semibold text-[20px] sm:text-[24px] md:text-[34px] lg:text-[58px] capitalize cursor-default">
      {text}
    </h1>
  );
};

export default SectionHeading;
