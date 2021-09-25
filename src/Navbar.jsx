import React from 'react';
import {NavLink} from "react-router-dom";
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router';
import Menu from "./Menu";
const Navbar = () => {
  let history=useHistory();

  const strfun=()=>{
    history.push("/post");
  }
    return (
        <>
        <div  href="#" style={{float:"left",marginTop:"20px"}}><h2 className="mainname" > Yasir191491....</h2></div> 

      <Menu />
<div className="homecontent">
<div style={{float:"right",marginRight:"360px",paddingBottom:"100px"}} className="menuimg">
  <img src="/images/belinda-fewings-6wAGwpsXHE0-unsplash.jpg" alt="..." height="300" width="400" />
</div>

<p style={{color:"white",fontSize:"3rem"}}>Welcome to our Website</p>
<strong style={{fontSize:"2rem",color:"#00a8ff",paddingLeft:"100px"}}> #Yasir191491</strong><br/>
<Button style={{marginLeft:"130px",backgroundColor:"#f368e0",cursor:"pointer",
borderRadius:"30px"}} className="starbtn" onClick={strfun}>Get Started</Button>

</div>
                </>
    )
}

export default Navbar;
