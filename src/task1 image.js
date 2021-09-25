import React from "react";
import ReactDOM from "react-dom";
//import "./index.css";
//import "./images";

const name="Netflix";
const n1="Series"
const currDate=new Date().toLocaleDateString();
const currTime=new Date().toLocaleTimeString();
//const im1="C:\Users\Administrator\reacttut\images\new.jpg";
ReactDOM.render(
  <>
  <div className="main">
  <h1 contentEditable="true" style={{color: "red"}}> Netflix Series</h1>
  <p> {`Five ${name} ${n1}`} {currDate} {currTime}</p>
  <img src="/images/new.jpg"  alt="" height="200px" width="300px"/>
  <ol type="1">
    <li>no.1</li>
    <li>no.2</li>
    <li>no.3</li>
  </ol>
  </div>
  </>,
  document.getElementById("root")
);
