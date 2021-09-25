import React, { useState } from "react";
//import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

const Qdata=({question,answer})=>{
    const [line,setline]=useState(false);

//     const fun=()=>{
//     setline(line(true));
// }
return(
<>

<Button onClick={()=>setline(!line)} style={{backgroundColor:"red"}}> </Button>
<h5>{question}</h5>
{line&& <p>{answer}</p> }
</>
);
}
export default Qdata;