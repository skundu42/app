import React from 'react';
import H1 from "../Textformat/heading1";
import Paragraph from "../Textformat/paragraph";
import courses from "../../constants/courses";


const Content = ({ isViewing, setIsViewing, course }) => {
    return (
      <div>
        {/* chapter container */}
        <div>
          <div className="px-4 md:px-8 py-10 bg-[#1B1B1B]">
            {courses[0].chapters.map((chapter, cIndex) => {
              return (
                <div style={{ fontFamily: "Inter" }}>
                  <H1
                    text={chapter.name}
                    zeroCheck={cIndex < 9 ? 0 : null}
                    chapterNo={cIndex + 1}
                  />
  
                  {chapter.sections.map((section, sIndex) => {
                    return (
                      <Paragraph
                        isViewing={isViewing}
                        cIndex={cIndex}
                        sIndex={sIndex}
                        course={course}
                        setIsViewing={setIsViewing}
                        text={section.name}
                      />
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

export default Content;
