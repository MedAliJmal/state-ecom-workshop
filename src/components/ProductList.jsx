import React from "react";
import { Table } from "react-bootstrap";
import ProductCard from "./ProductCard";

const ProductList = ({
  products,
  quantityINC,
  quantityDEC,
  del,
  handleLike,
}) => {
  return (
    <div>
      <Table striped="columns">
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th>Unit Price</th>
          <th>Price</th>
          <th></th>
          <th></th>
        </tr>
        {products.map((el) => (
          <ProductCard
            key={el.id}
            el={el}
            inc={quantityINC}
            dec={quantityDEC}
            del={del}
            like={handleLike}
          />
        ))}
      </Table>
    </div>
  );
};

export default ProductList;
