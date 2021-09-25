import React, { useState } from "react";
import "./index.css";
import Keep from "./Keep";
//import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Menu from "./Menu";
 const App=()=>{
     const [node,senode]=useState({
        title:"",
        content:""
     })
     const [item,setitem]=useState([]);
     
const fun=(event)=>{
const name=event.target.name;
const value=event.target.value;
senode((prevalue)=>{
return{
    ...prevalue,
    [name]:value,
};
});
        };
        const cfun=()=>{
            setitem((pee)=>{
            return [...pee,node]
            })
            senode({
                title:"",
                content:""
             })
        }
    //     const defun=(id)=>{
    //         setitem((prevalue)=>{
    //    prevalue.filter((ele,index)=>{
    //        return index !==id;
    //    })
    //         })
    //         }
return(
    <>
    <Menu />
   
    <div className="text-center text-danger mt-5" style={{backgroundColor:"#30336b"}} >
        <h1> Yasir Keep</h1>
    </div>
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",
    marginTop:"100px"}}>
    <div className="_main" style={{border:"2px solid #c23616",height:"200px",width:"300px",padding:"20px"}}>

<form>
    <input type="text"
     placeholder="Title" 
     value={node.title} 
       className="title mb-2" 
      onChange={fun}
      name="title"
      autoComplete="off" style={{width:"250px",height:"40px",borderRadius:"50px"}} /><br/>
    <textarea  rows="" cols="" 
    className="text" placeholder="write a note...."
      onChange={fun} 
      value={node.content} name="content" style={{width:"250px",height:"100px"}}></textarea>
    <Fab color="primary" aria-label="add" className="bn" onClick={cfun} style={{float:"right"}}>
    <AddIcon />
    </Fab>
    </form>
</div>
    </div>
    {
        item.map((eleE,index)=>{
            console.log(eleE);
   return (<Keep key={index}
       id={index}
       title={eleE.title}
       content={eleE.content}
    //    delete={defun}
   />
   )
   })
    }
    </>
)
 }
 export default App;