import React, { useState } from "react";




const App =()=>{
const [item,setItem]=useState(0);
const fun = ()=>{
    setItem(item+1);
}


  return  (<>
  <p style={{textAlign:"center"}}>{item}</p>
<button onClick={fun} className="btn btn-success">Click me</button>
    </>);
}
export default App;