import React from 'react';

const SearchResult = (props) => {
   const imo=`https://source.unsplash.com/user/jackie/likes/1600x900?ss${props.img}`;
    
    return (
        <>
           
           <img src={imo} alt=""/>
        </>
    )
}

export default SearchResult;
