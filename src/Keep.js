import React from "react";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import "./index.css"
const Keep=(props)=>{


    
    return(
        <>
<div className=" mt-5  justify-content-between my-5 p-5" style={{display:"inline-block"}}>
    <div className="_data p-2" style={{border:"2px solid #c23616",height:"150px",width:"150px",color:"white",
    backgroundColor:"#747d8c"}}>
    <h1>
        {props.title}
    </h1>
    <p>
        {props.content}
    </p>
    <button className="icon" ><DeleteOutlineIcon/></button>
</div>
 {/* onClick={props.delete(props.id)} */}
</div>
        </>
    )
}
export default Keep;