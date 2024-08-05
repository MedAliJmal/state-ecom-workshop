import React from "react";
import CarteDeProduit from "./CarteDeProduit";

const ListeDeProduits = ({ produits, text }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}
    >
      {produits
        .filter((el) =>
          el.name.toUpperCase().includes(text.toUpperCase().trim())
        )
        .map((el) => (
          <CarteDeProduit key={el.id} el={el} />
        ))}
    </div>
  );
};

export default ListeDeProduits;
