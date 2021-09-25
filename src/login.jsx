import React, { useState} from "react";



const obje={

}
const App =()=>{
const [name,setname]=useState({
  fname:'',
  lname:'',
  no:'',
});
const fun=(event)=>{
  const value=event.target.value;
  const name=event.target.value;
setname((prevalue)=>{
  return{
  ...prevalue,
  [name]:value
  }
});
}
const cfun=(event)=>{
  event.preventDefault();
  alert="submitted";
}
  return  (<>
  <h1>hello {name}</h1>
<form onSubmit={cfun} >
  <input type="text" onChange={fun} name="fname" value={name.fname} na/>
  <input type="text" onChange={fun} name="lname" value={name.lname}/>
  <input type="number" onChange={fun} name="no" value={name.no}/>
  <button  className="btn btn-success ">click me</button>
  </form>
 </>);
}
export default App;
