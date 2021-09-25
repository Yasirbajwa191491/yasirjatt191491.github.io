import React, { useState } from "react";




const App =()=>{

const currTime=new Date().toLocaleTimeString();
const [item,setItem]=useState(currTime);

const fun = ()=>{
    const currTime=new Date().toLocaleTimeString();

    setItem(currTime);
}
const fun1 =()=>{
  const currTime=new Date().toLocaleTimeString();

    setItem(currTime);
    setInterval(fun,1000);
}
// setInterval(fun,1000);
  return  (<>
  <p style={{textAlign:"center"}}>{item}</p>
  <button onDoubleClick={fun1} onClick={fun} className="btn btn-success">Get Time</button>
    </>);
}
export default App;
