import React from "react";
import DealItems from "./Dealitems";

import{Container,Row,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

class Deals extends React.Component {
 constructor(props){
     super(props)
     this.state={
     discounts:[
         {
             name:"iphone",
             id:1,
             discount:"20%"
             
         },
         {
            name:"nokia",
            id:2,
            discount:"5%"
            
        },
        {
            name:"samsung",
            id:3,
            discount:"200%"
            
        },
        {
            name:"Redmi",
            id:4,
            discount:"30%"
            
        },
        {
            name:"Realme",
            id:5,
            discount:"70%"
            
        },
        {
            name:"oneplus",
            id:6,
            discount:"25%"
            
        },

     ]}
 }
 
    render() {
    return (
      <div id="deals-component">
          <Container>
                <Row>
            {
                this.state.discounts.map(({name,discount}) =>(
                    <Col md="4" className="columns">
                    <DealItems categoryname = {name} discountdisplay={discount}/>
                    </Col>
                ))
            }
              </Row>
            </Container>
       
        
      </div>
    );
  }
}
export default Deals;
