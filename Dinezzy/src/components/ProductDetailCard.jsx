import React, { useState } from "react";
import "../styles/ProductDetailsCard.scss";
// import "bootstrap/dist/css/bootstrap.css";

const ProductDetailCard = ({ product, onClose, onAdd }) => {
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants && product.variants.length > 0
      ? product.variants[0].name
      : null
  );

  const [selectedExtras, setSelectedExtras] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const toggleExtra = (extraName) => {
    if (selectedExtras.includes(extraName)) {
      setSelectedExtras(selectedExtras.filter((e) => e !== extraName));
    } else {
      setSelectedExtras([...selectedExtras, extraName]);
    }
  };

  return (
    <div className="card-overlay">
      <div className="card" >
        {/* <div className="card"> */}
        <div className="ptitle">
          <h5>{product.name}</h5>
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>

        {product.variants && (
          <div className="variants-section">
            <h4>Size:</h4>
            <div className="variant-buttons">
              {product.variants.map((variant) => (
                <button
                  key={variant.name}
                  type="button"
                  className={`variant-btn ${
                    selectedVariant === variant.name ? "selected" : ""
                  }`}
                  onClick={() => setSelectedVariant(variant.name)}
                >
                  {variant.name}
                  <p>(+ £{variant.price.toFixed(2)})</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {product.extras && (
          <div className="extras-section">
            <h4>Select Options:</h4>
            {product.extras.map((extra) => (
              <label key={extra.name} className="extra-option">
                {extra.name} (+ £{extra.price.toFixed(2)})
                <input
                  type="checkbox"
                  checked={selectedExtras.includes(extra.name)}
                  onChange={() => toggleExtra(extra.name)}
                />
              </label>
            ))}
          </div>
        )}

        <div className="quantity-section">
          {/* <h4>Quantity:</h4> */}
          <button
            onClick={() => setQuantity((q) => (q > 1 ? q - 1 : 1))}
            className="qty-btn"
          >
            -
          </button>
          <span className="qty-display">{quantity}</span>
          <button onClick={() => setQuantity((q) => q + 1)} className="qty-btn">
            +
          </button>
        </div>

        {/* <div className="total-price">
          Total: £{totalPrice.toFixed(2)}
        </div> */}

        <button
          className="add-order-btn"
          onClick={() =>
            onAdd({ product, selectedVariant, selectedExtras, quantity })
          }
        >
          Add to Order
        </button>
      </div>
    </div>
  );
};

export default ProductDetailCard;
