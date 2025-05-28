import React from "react";
import "./All.css";

const ProductList = ({ products }) => {
  return (
    <div className="product-scroll-container">
      {products.length > 0 ? (
        products.map((prod) => (
          <div key={prod.id} className="product-card">
            <h5>{prod.name} - £{prod.price}</h5>
            <p className="text-muted">{prod.description}</p>
          </div>
        ))
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default ProductList;
