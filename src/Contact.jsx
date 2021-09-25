import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import Menu from "./Menu";
const Contact = () => {
    const [state, setstate] = useState({
        name:"",
        email:"",
        message:""
    })
    const fun=(event)=>{
      const name=event.target.name;
      const value=event.target.value;
      setstate((prevvalue)=>{
          return {
              ...prevvalue,
          [name]:value,
          }
      })
    }
    const cfun=(e)=>{
        e.preventDefault();
        alert(`My name is ${state.name}. My email is ${state.email}. My message is ${state.message}. `);
    }
    return (
        <div>
       <Menu />
    <div className="my-5 ">
    <h1 className=" text-danger text-center" style={{backgroundColor:"#30336b",
        height:"60px",marginTop:"150px"}} >Contact us</h1>
    </div> 
    <div style={{display:"flex",flexDirection:"column" ,
    justifyContent:"center",alignItems:"center"}}>
    <div className="" style={{border:"2px solid #8e44ad",height:"400px",width:"400px",padding:"30px"}}>
     <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label" style={{color:"white"}}>Name</label>
  <input type="text" className="form-control" name="name" value={state.name} onChange={fun} id="exampleFormControlInput1" placeholder="" 
  style={{borderRadius:"40px"}} autoComplete="off"/>
</div>
    <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label" style={{color:"white"}} >Email</label>
  <input type="email" className="form-control" name="email" value={state.email} onChange={fun} id="exampleFormControlInput1" placeholder="name@example.com"
      style={{borderRadius:"40px"}} autoComplete="off"
  />
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label"  style={{color:"white"}}>Message</label>
  <textarea className="form-control" name="message" value={state.message} onChange={fun} id="exampleFormControlTextarea1" rows="3" 
  style={{borderRadius:"40px"}} autoComplete="off"></textarea>
</div>
<Button style={{marginLeft:"130px",backgroundColor:"#f368e0",cursor:"pointer",
borderRadius:"30px"}} className="starbtn" onClick={cfun}>Submit</Button>

    </div>
    </div>
        </div>
    )
}

export default Contact;
