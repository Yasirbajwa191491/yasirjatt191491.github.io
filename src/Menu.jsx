import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
             <div className="header"></div>
<input type="checkbox" id="openmenu"/>
<label for="openmenu" className="menuicon">
<div className="spinner top"></div>
<div className="spinner middle"></div>
<div className="spinner bottom"></div>
</label>
<div id="sidebarmenu">
<ul className="menu">
<li><NavLink exact activeClassName="active_class " className="nav-link " aria-current="page" to="/menu">Home</NavLink> </li> <br/>
<li><NavLink exact activeClassName="active_class " className="nav-link " aria-current="page" to="/post">Post</NavLink> </li> <br/>
<li><NavLink exact activeClassName="active_class " className="nav-link " aria-current="page" to="/keep">Google Keep</NavLink> </li> <br/>
<li><NavLink exact activeClassName="active_class " className="nav-link " aria-current="page" to="/todo">ToDoList</NavLink> </li> <br/>
<li><NavLink exact activeClassName="active_class " className="nav-link" to="/about">About</NavLink> </li><br/>
<li><NavLink exact activeClassName="active_class " className="nav-link" to="/contact">Contact</NavLink> </li><br/>
</ul>
</div> 
        </div>
    )
}

export default Menu;
