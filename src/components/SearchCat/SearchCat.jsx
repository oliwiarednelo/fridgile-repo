import { React, useState }from "react";
import { useSaveings } from "../contexts/savingContextx";
import "./SearchCat.css";

export const SearchCat = () => {
    const { detectedItem } = useSaveings();
    const [searchedItem, setSearchedItem] = useState("");
    const [foundItem, setFoundItem] = useState("");
    const [itemList, setItemList] = useState(false);

    const onHandle = () => {
      detectedItem.map((item) => {
        if(item.item=== searchedItem) {
            console.log('successs')
            setFoundItem(item.item);
        } else {
            console.log('damn')
        }
      })
    }
    return (
<div>
   
    <input type="text" name="" id="search-input" placeholder="Search an item..." onChange={(e) => {setSearchedItem(e.target.value);}}/>
<button type="submit" onClick={onHandle} className="search-btn">Search</button>
{foundItem.length > 0 && <div className="founditem-list">
 <div className="row">{foundItem} </div>


</div>}

 
</div>
    )
}