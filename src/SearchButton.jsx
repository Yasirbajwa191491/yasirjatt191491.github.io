import React, { useState } from 'react';
import SearchResult from "./SearchResult";

const SearchButton = () => {
    const [name,setName]=useState("");

    const cfun=(Event)=>{
        setName(Event.target.value);
    }
    return (
        <>
        <div className="search">
            <input type="text" placeholder="Search a item" onChange={cfun} value={name}/>

            {name===""? null: <SearchResult img={name}/>}
            </div>
        </>
    )
}

export default SearchButton;

// .search{
//     width: 50%;
//     height: auto;
//     margin: 0 auto;
//     text-align: center;
//   }
//   .search input{
//     margin: 30px 0;
//     padding: 5px 10px;
//     border-radius: 5px;
//     font-family: source-code-pro, Menlo, Monaco,Consolas, "Courier New";
//   }


// import React from 'react';

// const SearchResult = (props) => {
//    const imo=`https://source.unsplash.com/user/jackie/likes/1600x900?ss${props.img}`;
    
//     return (
//         <>
//            {/* <img src={imo} alt="img" />  */}
//            <img src={imo}></img>
//         </>
//     )
// }

// export default SearchResult;
