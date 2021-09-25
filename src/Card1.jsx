import React from 'react';
import ReactDOM from 'react-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
const sarr=[
  {
    tile:"Card 2",
   disc:"Some quick example text to build on the card title and make up the bulk of the card's content.",
   bton:"Card 2"
  }
  ,
   {
    tile:"Card 2",
   disc:"Some quick example text to build on the card title and make up the bulk of the card's content.",
   bton:"Card 2"
  }

]
const Cun1 = (props) =>{
  return (
  <>
  <div className="card" >
  <img src="/images/new.jpg"  alt="" height="200px" width="297px"/>

 <div className="card-body">
   <h5 className="card-title">{props.tile}</h5>
   <p className="card-text">{props.disc}</p>
   <a href="#" className="btn btn-primary">{props.bton}</a>
 </div>
</div>
</>)
}
ReactDOM.render(
 <>
 {
   sarr.map((al)=>{
     return (
 <Cun1 
   tile={al.tile}
   disc={al.disc}
   bton={al.bton}

   />

   );
   }
   )}
 
 

 </>,
document.getElementById("root")
);
body{
  padding: 0px;
  margin: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: blanchedalmond;

}
.card{
  border: 2px solid black ;
  margin-top: 6px;
  height: 400px; 
  width: 300px;
}
.card:hover{
  box-shadow: 0px 30px 18px -8px rgb(0, 0, 0, 0.6);
  transform: scale(1.05,1.05);
}