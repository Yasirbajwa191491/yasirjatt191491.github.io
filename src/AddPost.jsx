import React, { useState } from 'react';
import Post from './Post';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import "./index.css";
import Cardp from "./Cardp";
// import Showpos from './Showpos';
const AddPost = (props) => {
    const [Post,setPost]=useState({
        link1:"",
        title1:"",                     
        disc1:""
    })
    const [show,setShow]=useState([]);
    const fun=(event)=>{
      const name=event.target.name;
      const value=event.target.value;

      setPost((prevalue)=>{
          return {
              ...prevalue,
               [name]:value,   
        }
      })
    }
    const cfun=(Post)=>{
        setShow((prev)=>{
            return [...prev,Post]
            console.log(prev);
            
        })
        setPost({
        link1:"",
        title1:"",                     
        disc1:"",
    })
    alert("Data Submitted successfully")
    }
    return (
        <>
            <div style={{marginTop:"100px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <form>
                    <span style={{fontWeight:"bold"}}>Image Link:</span>
                    <input type="text" name="link1" value={Post.link1} placeholder="Enter link of image" onChange={fun} style={{width:"300px",height:"40px"}}/><br/><br/>
                    <span style={{marginLeft:"43px",fontWeight:"bold",width:"300px",height:"40px"}}>Title:</span>
                    <input type="text" placeholder="Enter title" name="title1" value={Post.title1} onChange={fun} /><br/><br/>
                    <span style={{fontWeight:"bold"}}>Discription:</span>
                    <textarea name="disc1" value={Post.disc1} cols="20" rows="10" onChange={fun}>
                    </textarea><br/>
                    <NavLink to="/post/addpost"> 
                <Button onClick={cfun} style={{float:"right", marginRight:"40px", backgroundColor:"#a29bfe"}}>
                    Save
                </Button>
                </NavLink>
                </form>
            </div>
            {
                show.map((valE,ind)=>{
                    console.log(valE);
                   return <Cardp 
                   poslink={valE.link1}
                   postitle={valE.title1}
                   posdisc={valE.disc1}
                   />
                })
            }
           
        
        </>
    )
}

export default AddPost;
