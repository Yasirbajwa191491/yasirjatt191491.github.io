import React from 'react';
import Test from './Test';
import "./index.css";
import { Route, Switch, NavLink,Redirect } from "react-router-dom";
//import { Switch } from '@material-ui/core';
import MaterialUiIcons from "./MaterialUiIcons";
import ComA from "./ComA";
import SearchButton from "./SearchButton";
import ErrorPage from "./ErrorPage";

const Name=()=>{
   return <h1>Name found</h1>
}
const App= () => {
   
   return (
      <>
     <NavLink exact activeClassName="active_class" to="/" >Test</NavLink><br/>
<NavLink activeClassName="active_class" to="/component/">Component</NavLink><br/>
<NavLink activeClassName="active_class" to="/name">Name</NavLink><br/>
<NavLink exact activeClassName="active_class" to="/search">Search</NavLink><br/>
 
<Switch>

   <Route exact path="/" render={()=><Test name="This is just a test"/>}/> 
   <Route path="/component/:name/:lname" component={ComA}/>
   <Route exact path="/name" component={Name}/>
    <Route component={ErrorPage}/> 
   <Route exact path="/search" component={SearchButton}/>
   <Redirect  to="/"/>
</Switch>
         
      </>
   )
}

export default App;



// import React from 'react';
// import Test from './Test';
// import "./index.css";
// import { Route, Switch, NavLink } from "react-router-dom";
// //import { Switch } from '@material-ui/core';
// import MaterialUiIcons from "./MaterialUiIcons";
// import ComA from "./ComA";

// const Name=()=>{
//    return <h1>Name found</h1>
// }
// const App= () => {
   
//    return (
//       <>
//      <NavLink exact activeClassName="active_class" to="/" >Test</NavLink><br/>
// <NavLink activeClassName="active_class" to="/component">Component</NavLink><br/>
// <NavLink activeClassName="active_class" to="/name">Name</NavLink><br/>
 
// <Switch>

//    <Route exact path="/" render={()=><Test name="This is just a test"/>}/> 
//    <Route path="/component" component={ComA}/>
//    <Route path="/name" component={Name}/>
//    <Route  component={MaterialUiIcons}/>
// </Switch>
         
//       </>
//    )
// }

// export default App;