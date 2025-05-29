import React, { useState } from "react";
import ProductDetailCard from "./ProductDetailCard";
// import "./All.css";
import "../styles/ProductList.scss";

const ProductList = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAddOrder = (orderDetails) => {
    console.log("Order added:", orderDetails);
    // setSelectedProduct(null);
  };

  return (
    <div className="product-scroll">
      {products.length > 0 ? (
        products.map((prod) => (
          // <div
          //   key={prod.id}
          //   className="product-card"
          //   onClick={() => setSelectedProduct(prod)}
          // >
          //   <h5>{prod.name} - £{prod.price}</h5>
          //   <p className="text">{prod.description}</p>
          // </div>
          <div
            key={prod.id}
            className="product-card"
            onClick={() => setSelectedProduct(prod)}
          >
            <div className="product-info">
              <h5>{prod.name}</h5>
              <p className="text">{prod.description}</p>
            </div>
            <div className="product-price">
              <p>£{prod.price}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No products found.</p>
      )}

      {selectedProduct && (
        <ProductDetailCard
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAdd={handleAddOrder}
        />
      )}
    </div>
  );
};

export default ProductList;
