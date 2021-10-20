import React from "react";
import Menuitem from "./Menuitem";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
class Directory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          name: "dairy",
          id: 1,
          quantity: 10,
          price: 10000,
          linkUrl: "/dairy",
        },
        {
          name: "veggies",
          id: 2,
          quantity: 20,
          price: 1000,
          linkUrl: "/veggies",
        },
        {
          name: "fruits",
          id: 3,
          quantity: 40,
          price: 19000,
          linkUrl: "/fruits",
        },
        {
          name: "choclates",
          id: 4,
          quantity: 34,
          price: 120000,
          linkUrl: "/choclates",
        },
        {
          name: "drinks",
          id: 5,
          quantity: 15,
          price: 15000,
          linkUrl: "/drinks",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-component">
        <Container >
          <Row>
            {this.state.categories.map(({ name, linkUrl }) => (
              <Col md="4" className="columns">
                <Menuitem categoryname={name} Url={linkUrl} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}
export default Directory;
