import React from "react";

const num="good morning";
const currTime=new Date();
currTime=currTime.getHours();
const sty={

}
const da="";
if(currTime >1 && currTime <=11){
 da="good morning";
    sty.color="green";

}
else if(currTime >11 && currTime <=18){
     da="good afternoon";
        sty.color="blue";
    
      
}
else{
 da="good night";
        sty.color="black";
    
    
}

const Goodmorning = () =>{
    return (
<>
<h1 >
Hello sir,{da}
</h1>
</>
    );

};
export default Goodmorning;