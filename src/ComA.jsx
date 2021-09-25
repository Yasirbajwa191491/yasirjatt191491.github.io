import React from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';
const ComA = () => {
    const {name,lname}=useParams();
    const location=useLocation();
    const history=useHistory();
    return (
        <div>
            <h1>{name} {lname} component</h1>
            <p>{location.pathname}</p>
            {
                location.pathname ===`/component/yasir/sohail`? 
                <button onClick={()=> history.goBack()}>Back</button>:null
                
            }
            {
                location.pathname ===`/component/yasir/sohail`? 
                <button onClick={()=> history.push("/")}>Home</button>:null
                
            } 
        </div>
    )
}

export default ComA;
