import React from 'react';
import Test from './Test';

import { Route, Switch, NavLink,Redirect } from "react-router-dom";
//import { Switch } from '@material-ui/core';
import MaterialUiIcons from "./MaterialUiIcons";
import ComA from "./ComA";
import SearchButton from "./SearchButton";
import ErrorPage from "./ErrorPage";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import Post from './Post';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
import AddPost from './AddPost';
import TempWeb from "./TempWeb";
import ToDoList from "./ToDoList";
import GalleryPhoto from "./GalleryPhoto";
import Signup from './Signup';
import Frontpage from './Frontpage';
import "./index.css";
import Footer from './Footer';
import Datasave from './Datasave';
import GoogleKeep from "./GoogleKeep";
const App= () => {
   
   return (
      <>
      {/* <Frontpage /> */}
     {/* <Signup /> */}
      <Switch>
      <Route exact path="/" component={Signup}/>
         
         <Route exact path="/post" component={GalleryPhoto} />
         <Route exact path="/todo" component={ToDoList} />
         <Route exact path="/about" component={About}/>
         <Route exact path="/login" component={Frontpage}/>
         <Route exact path="/contact" component={Contact}/>
         <Route exact path="/keep" component={GoogleKeep}/>
         <Route exact path="/menu" component={Navbar}/>
         <Route component={ErrorPage} />
         
      </Switch>
      <Footer/>
        </>
   )
}

export default App;
