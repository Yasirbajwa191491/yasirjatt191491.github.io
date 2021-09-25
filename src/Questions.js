import React, { useState } from "react";
import Qdata from './Qdata';
import {Ques} from "./Ues";

const App=()=>{
    const [data,setdata]=useState(Ques);
return(
    <>
    <div className="main">
{
    data.map((ele,index)=>{
        return <Qdata {...ele} key={index} id={index} />
    })
}
</div>
    </>
)
}
export default App;