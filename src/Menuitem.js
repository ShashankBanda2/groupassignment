import React from "react";


function Menuitem(props) {
    console.log(props);
  return (
    <div id="Menuitem-component">
      
            <p>{props.categoryname}</p>
            <p>{props.discountIs}</p>
      
    </div>
  );
}
export default Menuitem;
