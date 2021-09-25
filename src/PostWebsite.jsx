import React from 'react';
import Test from './Test';
import "./index.css";
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
const App= () => {
   
   return (
      <>
      <Navbar />
      
      <Switch>
         <Route exact path="/" component={Home}/>
         <Route exact path="/post" component={Post}/>
         <Route exact path="/post/addpost" component={AddPost}/>
         <Route exact path="/about" component={About}/>
         <Route exact path="/contact" component={Contact}/>
         <Route component={ErrorPage}/>
      </Switch>
        </>
   )
}

export default App;
