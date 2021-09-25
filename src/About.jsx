import React from 'react';
import { NavLink } from 'react-router-dom';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import Menu from "./Menu";
const About = () => {
    const instrafun=()=>{
     window.location.href="http://instagram.com/yasir.sohail_191491?utm_source=qr";
    }
    const fbfun=()=>{
        window.location.href="https://www.facebook.com/yasir.yasirsohail";
    }
    return (
        <div>
      <Menu />
          <section id="header">
          <div className="container-fluid nav bg">
            <div className="row">
                <div className="col-10 mx-auto">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1"></div>
                <h1> Welcome to about page of  <strong style={{color:"#3498db"}}> Yasir191491</strong></h1>
                <h5 className="my-3 text-danger" > We are the team of #GCIAN</h5>
                <h5 className="my-3 text-danger" > Faisalabadi boy</h5>
                <h5 className="my-3 text-danger" > No: 03491471823</h5>
                <h5 className="my-3 text-danger" > Instra id: <InstagramIcon style={{fontSize:"40px"}}
                onClick={instrafun}></InstagramIcon></h5>
                <h5 className="my-3 text-danger" > Facebook id: <FacebookIcon style={{fontSize:"40px"}}
                 onClick={fbfun}></FacebookIcon></h5>
                {/* <div className="mt-3">
                    <NavLink to="/post" style={{textDecoration:"none" ,transition:"0.5s"}} className="btn btn-primary">Contact Now</NavLink>
                </div> */}
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

export default About;
