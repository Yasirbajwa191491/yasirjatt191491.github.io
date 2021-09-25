import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Button from '@material-ui/core/Button';
import "./index.css";
import "./yasi.css";
import { NavLink } from 'react-router-dom';
import transitions from '@material-ui/core/styles/transitions';
const Home = () => {
    return (
        <div>
          <section id="header">
          <div className="container-fluid nav bg">
            <div className="row">
                <div className="col-10 mx-auto">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1"></div>
                <h1> Post your interest with <strong style={{color:"#3498db"}}>Yasir191491</strong></h1>
                <h5 className="my-3 text-danger" > We are the team of #GCIAN</h5>
                <div className="mt-3">
                    <NavLink to="/post" style={{textDecoration:"none" ,transition:"0.5s"}} className="btn btn-primary">Get Started</NavLink>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img" style={{marginLeft:"700px"}}>
                   <img src="/images/yasi.jpg" alt="" className="img-fluid animated" height="250" width="250" />
                </div>
                </div>
            </div>
        </div>

          </section>
        </div>
    )
}

export default Home;
