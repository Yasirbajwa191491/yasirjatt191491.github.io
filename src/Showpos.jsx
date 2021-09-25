import React from 'react';
import AddPost from './AddPost';
import { NavLink } from 'react-router-dom';
const Showpos = (props) => {
    return (
        <>
         <section>
             <div className="col-md-4 col-10 mx-auto" >
                   
                   <div class="card" >
                 <img src={props.poslink} className="card-img-top" alt="..." height="200" width="200"/>
                <div className="card-body">
            <h5 className="card-title">{props.postitle}</h5>
            <p className="card-text">{props.posdisc}</p>
            <NavLink to="" className="btn btn-primary">Go somewhere</NavLink>
           </div>
        
             </div>
             </div> 
             </section>    
        </>
    )
}

export default Showpos;
