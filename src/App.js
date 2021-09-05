import React, { useState } from 'react'
import './style.css'
import DisplayItems from './displayItems';
const App = () => {
  const[setItem,setUpdateItem] = useState('');
  const [items,setItems] = useState([]);
  const itemEvent = (event) =>{
    setUpdateItem(event.target.value);
  }
  const listOfItems = () => {
      setItems((oldItems) => {
          return [...oldItems,setItem];
      });
      setUpdateItem('');
  }
  const deleteItems = () =>{
    console.log('delete');
}
  
  return (
    <div className="main-div">
    <h1>To DO List App</h1>
      <div className="center-div">
            <input type="text" placeholder="Enter an Items" value = { setItem }  onChange = {itemEvent}/>
              <button className="todo-button" onClick={listOfItems}>+</button>
              <ul>
                    {
                      items.map((itemvalue,index) => {
                      return <DisplayItems key = {index} id = {index}  onSelect = {deleteItems} text = {itemvalue} 
                        
                      />
                      
                    })}
              </ul>
      </div>
    </div>
  );
}

export default App;
