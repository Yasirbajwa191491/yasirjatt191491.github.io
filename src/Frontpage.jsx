import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Signup from './Signup';
import { NavLink,Redirect, useHistory } from 'react-router-dom';
import "./Login.css";

const Frontpage = (props) => {
    
    let history=useHistory();
    
    const cfun=()=>{
      
        alert("email and password are matched");
        history.push("/menu");
        
       
      }
    return (
      
        <>
         
          <h1 className=" text-danger text-center" style={{backgroundColor:"#30336b",
        height:"60px",marginTop:"150px"}} >Login Form</h1>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div >
             <div classNameName="signup" style={{marginTop:"50px",border:"5px solid #f0932b",
             height:"400px",width:"450px",padding:"40px",backgroundColor:"#636e72",color:"white"}}>
<form onSubmit={cfun}>

  <div className="mb-3" >
     <h3 style={{color:"white"}}>Please fill the below form:</h3>
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" name="loemail"  defaultValue={props.email}   id="exampleInputEmail1" aria-describedby="emailHelp"
     autoComplete="off" required style={{borderRadius:"30px"}}/>
     <div className="mb-3">
    <label for="exampleInputName1" className="form-label">Password</label>
    <input type="password" className="form-control" name="lopass" defaultValue={props.password}   id="exampleInputName1" autoComplete="off" 
    required style={{borderRadius:"30px"}}/>
  </div>
    <Button type="submit" style={{backgroundColor:"#95afc0"}} >Login</Button>
    </div>
    <span >Don't have an account?</span>
    <NavLink exact activeClassName="active_class " className="nav-link "
 aria-current="page" to="/" style={{color:"#f0932b"}}> Register Now</NavLink>
 
</form>
      </div>
      </div> 
      </div>
 
        </>
    )
}

export default Frontpage;
