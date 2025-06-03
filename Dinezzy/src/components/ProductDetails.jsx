import React from "react";
import {  FormattedMessage } from "react-intl"; 

// import "bootstrap/dist/css/bootstrap.css";
import "../styles/ProductDetailsCard.scss";

function ProductDetails({
  product,
  selectedVariant,
  setSelectedVariant,
  selectedExtras,
  handleExtraChange,
  quantity,
  setQuantity,
  handleAddOrder,
  onClose,
}) {
  if (!product) return null;

  const onAddOrderClick = () => {
    console.log({
      product,
      selectedVariant,
      selectedExtras,
      quantity,
    });
    handleAddOrder();
  };

  return (
    <div className="card-overlay" onClick={onClose}>
      <div className="card" onClick={(e) => e.stopPropagation()}>
        <div className="ptitle">
          <h5>{product.name}</h5>
          <button className="close-btn" onClick={onClose}>
            X
          </button>
        </div>

        {product.variants && (
          <div className="variants-section">
            <h4>
              <FormattedMessage id="size" />
            </h4>
            <div className="variant-buttons">
              {product.variants.map((v, index) => (
                <label
                  key={index}
                  className={`variant-btn ${
                    selectedVariant?.name === v.name ? "selected" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="variant"
                    value={v.name}
                    onChange={() => setSelectedVariant(v)}
                    checked={selectedVariant?.name === v.name}
                    style={{ display: "none" }}
                  />
                  <span>
                    {v.name} (£{v.price})
                  </span>
                </label>
              ))}
            </div>
          </div>
        )}

        {product.extras && (
          <div className="extras-section">
            <h4>
              <FormattedMessage id="select_options" />
            </h4>
            {product.extras.map((e, index) => (
              <label key={index} className="extra-option">
                <span>
                  {e.name} (£{e.price})
                </span>

                <input
                  type="checkbox"
                  value={e.name}
                  onChange={() => handleExtraChange(e)}
                  checked={selectedExtras.includes(e)}
                />
              </label>
            ))}
          </div>
        )}

        <div className="quantity-section">
          <button
            className="qty-btn"
            onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
          >
            -
          </button>
          <div className="qty-display">{quantity}</div>
          <button
            className="qty-btn"
            onClick={() => setQuantity((prev) => prev + 1)}
          >
            +
          </button>
        </div>

        <button className="add-order-btn" onClick={onAddOrderClick}>
          {/* Add To Order */}
          <FormattedMessage id="add_order"/>
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
