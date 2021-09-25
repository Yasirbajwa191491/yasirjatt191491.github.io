import transitions from '@material-ui/core/styles/transitions';
import React from 'react';
import { NavLink } from 'react-router-dom';
import "./index.css"
const data=[
    {
        link: "/images/n1.jpg",
        title: "Love",
    },
    {
        link: "/images/n2.jpg",
        title: "Feel",
    },
    {
        link: "/images/n3.jpg",
        title: "Spain",
    },
    {
        link: "/images/n6.jpg",
        title: "Feeling",
    },
    {
        link: "/images/n7.jpg",
        title: "Life",
    },
    
]
const Cardp = (props) => {
    return (
        < >
        
                   <div> 
                   <div className="col-md-4 col-10 mx-auto" >
                   
                   <div class="card" >
                 <img src={props.imgsrc} className="card-img-top" alt="..." height="200" width="200"/>
                <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">Some quick example text to build on the card title 
             and make up the bulk of the card's content.</p>
            <NavLink to="" className="btn btn-primary">Go somewhere</NavLink>
           </div>
        
             </div>
             </div>
            </div>

           
              </>
    )
}

export default Cardp;
export {data};