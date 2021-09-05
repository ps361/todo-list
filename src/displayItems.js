import React from 'react';
import './style.css';
const DisplayItems = (prop) =>{
     
    return (
    <div className="todo-style">
    <i className = "fa fa-times-circle-o" onClick = {props.onSelect} aria-hidden="true"></i>
     <li>{prop.text} </li>
    </div>
    );
};
export default DisplayItems; 

