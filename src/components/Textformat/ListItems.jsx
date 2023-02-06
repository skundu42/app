import React from 'react';

const ListItems = ({text}) => {
    return (
        <p className="text-[10px] md:text-[13px] lg:text-[15px] flex flex-row font-light">{text}</p>
    );
}

export default ListItems;
