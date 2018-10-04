import React, { Component } from 'react';
import "./Papa's Pizza.css";

class ToolBar extends Component {


    render() { 
        return ( 
        <div className="toolbar">
            <button className="barElements" >Home</button>
            <button className="barElements" >Contact</button>
            <button className="barElements" >Services</button>				
            <button className="barElements" >About</button>
        </div>	
         );
    };
}
 
export default ToolBar;