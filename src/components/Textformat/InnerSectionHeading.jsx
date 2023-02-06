import React from 'react';

const InnerSectionHeading = ({text, topmargin}) => {
    return (
        <h2 className='font-semibold text-[12px] sm:text-[14px] md:text-[20px] lg:text-[28px] cursor-pointer leading-7 my-4' style={{marginTop:`${topmargin}`}}>
        {text}
    </h2>
    );
}

export default InnerSectionHeading;
