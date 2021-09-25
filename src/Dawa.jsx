import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

// import DeleteIcon from '@mui/icons-material/Delete';
const Dawa=(props)=>{
      
return(
    <>
    {/* <i class="fa fa-pencil-square-o" aria-hidden="true"></i> */}
    <div className="main-" style={{color:"white"}}>
    <ol type="i">
    <li>
    <Button onClick={()=>{props.onSelect(props.id)}}><DeleteIcon/> </Button>
    
    {props.text}</li>
    </ol>
    
    </div>

    </>
)
}
export default Dawa;