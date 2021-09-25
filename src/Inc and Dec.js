// import { Button } from "bootstrap";
import React,{ useState } from "react";

const App=(props)=>{
    const [inc,setinc]=useState(0);
    const incfun=()=>{
        setinc(inc+1);
    }
    const decfun=()=>{
    if(inc>0){
        setinc(inc-1);
    }
    else{
        alert("Sorry zero reached");
        setinc(0);
    }
    }
return(
    <>
    <h1>{inc}</h1>
    <button onClick={incfun} className="btn btn-success">Increm</button>
    <button onClick={decfun} className="btn btn-success">Decre</button>
    </>
);
}
export default App;