import React from 'react';
import { NavLink } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const ErrorPage = () => {
    return (
        <div>
            <h1 style={{fontWeight:"bold", textAlign:"center"}}>404 Error Page</h1>
            <p style={{fontWeight:"bold", textAlign:"center"}}>Sorry, This page doesn't exist</p>
           <div className="text-center">
            <NavLink to="/menu" /*style={{ display:"flex",alignItems:"center", justifyContent:"center"}}*/ 
            className="btn btn-outline-success">
            Go Back</NavLink>
            </div>
        </div>
    )
}

export default ErrorPage;
