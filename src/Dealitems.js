import React from "react";


function DealItems(props) {
    console.log(props);
  return (
    <div id="DealItems-component">
      
            
            <p>{props.categoryname}</p>
            <p>{props.discountdisplay}</p>
           
            
      
    </div>
  );
}
export default DealItems;