import React, { useState, useEffect } from 'react';
import "./index.css"

const TempWeb = () => {
    const [city,setCity]=useState(null);
    const [search,setSearch]=useState("Karachi");

    const fun=(event)=>{
     setSearch(event.target.value);
    }
    useEffect(() => {
        const fetchApi=async ()=>{
           const url=`http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=b14425a6554d189a2d7dc18a8e7d7263
           `;
            const response= await fetch(url);
            const resJson=await response.json();
            setCity(resJson.main);
        }
        
      fetchApi();
    },[search] )
    return (
        <>
        
           <div className="main_">
               <input type="search" placeholder="type city" onChange={fun} value={city}  style={{marginLeft:"70px",
               marginTop:"20px",borderRadius:"20px",height:"40px",backgroundColor:"pink"}}/>
               {
                   !city?  <p>No Data Found</p> :(
                    <div>
                   <h2 style={{marginTop:"60px",marginLeft:"80px"}}>
                       <i className="fas fa-street-view"></i>{search}
                   </h2>
                   <h1>
                  {city.temp}
                   </h1>
                   <h3>

                   </h3>
               </div>
                   )
               }
               
           </div>
        </>
    )
}

export default TempWeb;
