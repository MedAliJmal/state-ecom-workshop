import React from "react";
import { Button, Card } from "react-bootstrap";

const CarteDeProduit = ({ el }) => {
  return (
    <div>
      <Card style={{ width: "18rem", margin: "25px" }}>
        <Card.Img variant="top" src={el.imageUrl} />
        <Card.Body>
          <Card.Title>{el.name}</Card.Title>
          <Card.Text>{el.unitPrice}DT</Card.Text>
          <Button variant="primary">Add to cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CarteDeProduit;
