// import { Button } from "bootstrap";
import React,{ useState } from "react";
import ToDo  from "./ToDo";

const App=(props)=>{
const [name,setname]=useState();
const [item,setitem]=useState([])

const fun=(e)=>{
setname(e.target.value);
}
const cfun=()=>{
    setitem((prevalue)=>{
        return [...prevalue,name];
    })
    setname("");
}


return (
<>
<div className="main">
<h1> toDo List</h1>
<input type="text " onChange={fun} value={name} placeholder="add a item" />
<button onClick={cfun}>Submit</button>

<ol>
   { item.map((valueele,index)=>{
      
       return <ToDo  key={index} id={index} text={valueele}
           
       />;}
    ) }
</ol>
</div>
</>
)
}
export default App;


// // import { Button } from "bootstrap";
// import React,{ useState } from "react";
// import Dawa  from "./Dawa";
// import "./index.css"
// import Button from '@material-ui/core/Button';
// const App=(props)=>{
// const [name,setname]=useState();
// const [item,setitem]=useState([])

// const fun=(e)=>{
// setname(e.target.value);
// }
// const cfun=()=>{
//     if(!name){

//     }
//     else{
//     setitem((prevalue)=>{
//                return [...prevalue,name];
        
//     })
//     setname("");
// }
// }

// const delf=(id)=>{
//     setitem((oldvalue)=>{
//                 return oldvalue.filter((valEle,index)=>{
//                     return index !==id;
//                 })
//             })
// }
// const dafun=()=>{
//     setitem([]);
// }
// return (
// <>

// <div className="main">
// <div style={{backgroundColor:"#30336b"}}>
// <h1 style={{fontWeight:"bold",marginTop:"20px",marginBottom:"20px",marginLeft:"130px"}}
// className="text-danger"> ToDo List</h1> </div>
// <h5 style={{marginLeft:"120px"}}>Add your list here: ✅</h5>
// <div>

// <input type="text " onChange={fun} value={name} placeholder="add a item" style={{padding:"4px 4px 4px 4px",
// marginTop:"5px", borderRadius:"20px",marginBottom:"20px",marginLeft:"100px"}}/>
// <span>
// <i className="fa fa-plus" aria-hidden="true" onClick={cfun}
// style={{backgroundColor:"#636e72",fontSize:"20px"}}></i> </span>
// </div>
// {/* <button >Submit</button> */}


// <ol>
//    { item.map((valueele,index)=>{
      
//        return <Dawa  key={index} id={index} text={valueele}
//           onSelect={delf} 
//        />;}
//     ) }
// </ol>
// <Button style={{backgroundColor:"#c7ecee",marginLeft:"120px"}} onClick={dafun}>Remove All</Button>
// </div>

// </>
// )
// }
// export default App;