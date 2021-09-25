import React,{useState} from "react";
const ToDo=(props)=>{
    const [line,setline]=useState(false);

    const del=()=>{
        setline(true);
    }
return(
    <>
    <div className="main-">
    <button onClick={del}>-- </button>
    <li style={{textDecoration: line?  "line-through" :"none"}}>{props.text}</li>
    </div>

    </>
)
}
export default ToDo;