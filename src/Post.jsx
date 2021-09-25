import React from 'react';
import Cardp from './Cardp';
import { data } from './Cardp';
import { NavLink } from 'react-router-dom';
import Showpos from "./Showpos";
import AddPost from './AddPost';
const Post = () => {
    return (
        <>
        <div className="mt-5">
            <h1 style={{textAlign:"center", color:""}}>Our Posts</h1>  
            <div style={{marginLeft:"30px"}} >
            <NavLink to="/post/addpost" style={{textDecoration:"none" ,transition:"0.5s"}} 
            className="btn btn-primary mb-5">Add Post</NavLink>
            </div>
            </div>
           
            <div className="container-fluid mb-5 mt-5" >
            <div className="row" >
                <div className="col-10 mx-auto" >
                <div className="row gy-5" >
               {
                   data.map((valE,index)=>{
               return <Cardp 
               key={index}
               id={index}
               imgsrc={valE.link}
               title={valE.title} />
                   })
               }
               </div>
                </div>
            </div>
        </div>
        <Showpos />
        </>
    )
}

export default Post;
