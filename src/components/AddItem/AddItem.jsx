import React, { useState } from "react";
 import "./addItem.css"


 export default function addItem({ icon }) {
     const [product, setNewProduct] = useState(false);
     console.log(product)
 const [newItem, setNewItem] = useState("");


     return (
  <div className="additem-category"  >
 <div className="add-item" >
     <img className="plus-icon" src={icon} alt="item icon" onClick={() => setNewProduct(true)}></img>
     <p>Add items</p>
 </div>
 {product &&
 <div className="popup" >
          <button className="close-btn" onClick={() => setNewProduct(false)}>Cancel</button>
     <p>What item would you like to add?</p>
     <div className="input-and-btn">
     <input maxLength="15" type="text" placeholder="Name of the item..." onChange={(event) => {
         setNewItem(event.target.value); 
       }}></input>
        <button type="submit" className="save-btn">Save</button></div>
 
  


 </div> }

 </div>


     );
 }