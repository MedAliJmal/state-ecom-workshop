import React from "react";
import { Button } from "react-bootstrap";

const ProductCard = ({ el, inc, dec, del, like }) => {
  return (
    <tr>
      <th>
        <img src={el.imageUrl} alt={el.id} width={"200px"} />
      </th>
      <th>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            textAlign: "center",
            height: "50px",
            width: "150px",
          }}
        >
          <Button onClick={() => inc(el.id)} variant="outline-secondary">
            +
          </Button>
          <p>{el.quantity}</p>
          <Button onClick={() => dec(el.id)} variant="outline-secondary">
            -
          </Button>
        </div>
      </th>
      <th>{el.unitPrice}DT</th>
      <th>{el.unitPrice * el.quantity}DT</th>
      <th>
        <Button variant="danger" onClick={() => del(el.id)}>
          Delete
        </Button>
      </th>
      <th>
        <Button
          onClick={() => like(el.id)}
          variant={el.liked ? "success" : "danger"}
        >
          {" "}
          {el.liked ? "Liked" : "Disliked"}{" "}
        </Button>
      </th>
    </tr>
  );
};

export default ProductCard;
