import React from 'react';
import ReactDOM from 'react-dom';
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
//import "./index.css";

ReactDOM.render(
 <>
 <div className="container">
 <div className="row">
   <div className="col">
   <div className="card" >
   <img src="/images/new.jpg"  alt="" height="200px" width="300px"/>
  <div className="card-body">
    <h5 className="card-title"> No.1</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Card 1</a>
  </div>
   </div>
   <div className="col">
   <div className="card" >
   <img src="/images/new.jpg"  alt="" height="200px" width="300px"/>

  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Card 2</a>
  </div>
</div>
  
</div>
   <div className="col">
   <div className="card" >
   <img src="/images/new.jpg"  alt="" height="200px" width="300px"/>

  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">card 3</a>
  </div>
</div> 
   </div>
 </div>
</div>
</div>
</>,
document.getElementById("root")
);
