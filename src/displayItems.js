import React from 'react';
import './style.css';
const DisplayItems = (props) =>{
     
    return (
    <div className="todo-style">
    <i className = "fa fa-times-circle-o" onClick = {() => { props.onSelect(props.id);} } aria-hidden="true"></i>
     <li>{props.text} </li>
    </div>
    );
};
export default DisplayItems; 

