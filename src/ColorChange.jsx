import React, { useState,useEffect } from 'react';

const App = () => {
   const [bt,setbt]=useState(0);
   useEffect(() => {
      document.title=`You clicked me ${bt} times`;
   });
   const fun=()=>{
setbt(bt+1);
   }
   return (
      <div>
<h3 >You clicked me {bt} times</h3>
      <button onClick={fun} className="bg-danger" >+</button>
         
      </div>
   )
}

export default App;
