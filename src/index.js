import React from 'react';
import ReactDOM from 'react-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import MaterialUiIcons from "./MaterialUiIcons";
import App from './App';
import { BrowserRouter} from "react-router-dom";
import './index.css';
ReactDOM.render(
 <>
 <BrowserRouter>
 <App/>
 </BrowserRouter>
 </>,
document.getElementById("root")
);