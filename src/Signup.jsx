import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import Frontpage from './Frontpage';
import { useHistory } from 'react-router-dom';
import Datasave from './Datasave';
import { data } from './Cardp';
const Signup = () => {
    const [state, setstate] = useState({
        name:"",
        email:"",
        pass:"",
        no:""
    });
  const [item,setitem] = useState([]);
  let history=useHistory();
    const fun=(event)=>{
       const value= event.target.value;
       const name= event.target.name;
       setstate((prevvalue)=>{
          return{ ...prevvalue,
           [name]:value,}
       })
    //    setitem({
    //     name:"",
    //     email:"",
    //     pass:"",
    //     no:""
    // })
    }
    const cfun=(event)=>{
         event.preventDefault();
        setitem((oldvalue)=>{
          console.log(oldvalue);
            return [...oldvalue,state];
          
        })
  alert("Your account has been created successfully ");
  
  history.push("/login");
    }
    return (
        <>
        <h1 className="text-danger text-center" style={{backgroundColor:"#30336b",
        height:"60px",marginTop:"150px"}}>Sign up Form</h1>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div>
             <div classNameName="signup" style={{marginTop:"50px",border:"5px solid #fdcb6e",
             height:"550px",width:"450px",padding:"40px",color:"white"}}>
<form >
<div className="mb-3">
    <label for="exampleInputName1" className="form-label">Name</label>
    <input type="text" className="form-control" name="name" value={state.name} onChange={fun} id="exampleInputName1" autoComplete="off" 
    required style={{borderRadius:"30px"}}/>
  </div>
  <div className="mb-3" >
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" name="email" value={state.email} onChange={fun} id="exampleInputEmail1" aria-describedby="emailHelp"
     autoComplete="off" required style={{borderRadius:"30px"}}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" name="pass" value={state.pass} onChange={fun} className="form-control" id="exampleInputPassword1"
     autoComplete="off" required style={{borderRadius:"30px"}} />
  </div>
  <div className="mb-3">
    <label for="exampleInputNumber1" className="form-label">Mobile Phone</label>
    <input type="tel" className="form-control" name="no" value={state.no} onChange={fun} id="exampleInputNumber1" autoComplete="off"
     required style={{borderRadius:"30px"}}/>
    <div id="emailHelp" className="form-text">We'll never share your Mobile Phone with anyone else.</div>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" autoComplete="off"
     required />
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <Button type="submit" style={{backgroundColor:"#95afc0"}} onClick={cfun} >Submit</Button>
</form>
      </div>
      </div>
      </div>
      {
          item.map((eleEe)=>{
            
              return (
                <>
                 <Datasave
                        password={eleEe.pass}
                        email={eleEe.email}
                        name={eleEe.name}
                        number={eleEe.no}
              />
              </>
              )
          })
      }
      
        </>
    )
}

export default Signup;
