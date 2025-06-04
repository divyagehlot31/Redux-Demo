import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../redux/actions/cartAction";
import ConfirmOrderModal from "./ConfirmOrderModal";
import categories from "../Data/categories.json";
import "../styles/Checkout.scss";
import { FormattedMessage } from "react-intl";

function Checkout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { items, totalItems, totalPrice } = useSelector((state) => state.cart);

  const [notes, setNotes] = useState("");
  const [tableNumber, setTableNumber] = useState("");
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleConfirmOrder = () => {
    setShowConfirmModal(true);
  };
  useEffect(() => {
    const randomTable = Math.floor(Math.random() * 20) + 1;
    setTableNumber(randomTable);
  }, []);

  const handlePlaceOrder = () => {
    dispatch(clearCart());
    setShowConfirmModal(false);
    navigate("/");
  };

  const handleCancel = () => {
    setShowConfirmModal(false);
  };

  const handleGoBack = () => {
    navigate(-1);
  };
  console.log("CART ITEMS: ", items);

  const getCategoryName = (categoryId) => {
    const category = categories.categories.find((cat) => cat.id === categoryId);
    return category ? category.name : "Unknown";
  };

  const groupedItems = items.reduce((acc, item) => {
    const categoryId = item.categoryId || 1;
    const categoryName = getCategoryName(categoryId);
    if (!acc[categoryName]) acc[categoryName] = [];
    acc[categoryName].push(item);
    return acc;
  }, {});

  
  if (totalItems === 0) {
    return (
      <div className="checkout-container">
        <div className="checkout-header">
          <button className="back-btn" onClick={handleGoBack}>
            &lt;
          </button>
          <h1>Checkout</h1>
          <button className="menu-btn">⋯</button>
        </div>
        <div className="empty-cart">
          <h2>Your cart is empty</h2>
          <button onClick={() => navigate("/")}>Go back to menu</button>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <button className="back-btn" onClick={handleGoBack}>
          &lt;
        </button>
        <h1>
          {/* Checkout */}
          <FormattedMessage id="checkout" />
        </h1>
        <button className="menu-btn">⋯</button>
      </div>
      <div className="checkout-scroll">
        <div className="restaurant-info">
          <h2>Kempston Hammers Sports & Social Club</h2>
          <p>134 High Street, Kempston, Bedford,</p>
          <p>Bedfordshire, MK42 7DN</p>
        </div>

        <div className="order-summary">
          {Object.entries(groupedItems).map(
            ([categoryName, categoryItems], index) => (
              <div className="category-section" key={index}>
                <h2>
                  {categoryName} (
                  {categoryItems.reduce((sum, item) => sum + item.quantity, 0)})
                </h2>

                {categoryItems.map((item, idx) => (
                  <div key={idx} className="order-item">
                    <div className="item-details">
                      <span className="quantity">{item.quantity} x </span>
                      <span>
                        <span className="item-name">{item.name} </span>
                        <br />
                        <span className="item-variant">
                          {item.variant && item.variant.name}
                        </span>
                        {item.extras && item.extras.length > 0 && (
                          <span className="extras">
                            {item.extras
                              .map((extra) => ` , ${extra.name}`)
                              .join("")}
                          </span>
                        )}
                      </span>
                    </div>
                    <div className="item-price">
                      £
                      {((item.variant?.price || item.basePrice || 0) +
                        (item.extras?.reduce(
                          (sum, extra) => sum + (extra.price || 0),
                          0
                        ) || 0)) *
                        item.quantity}
                    </div>
                  </div>
                ))}
              </div>
            )
          )}
        </div>

        <div className="notes-section">
          <label htmlFor="notes">
            <FormattedMessage id="add-notes" />

            {/* Add Notes : */}
          </label>
          <textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Any special instructions..."
            rows="4"
          />
        </div>
      </div>

      {/* <div className="table-section">
        <label htmlFor="table">Table Number</label>
        <input
          type="text"
          id="table"
          value={tableNumber}
          onChange={(e) => setTableNumber(e.target.value)}
          className="table-input"
        />
      </div> */}

      <div className="table-section">
        <span className="label">
          {/* Table Number */}
          <FormattedMessage id="table-number" />
        </span>
        <div className="table-input">{tableNumber}</div>
      </div>
      <div className="order-btn">
        <button className="confirm-order-btn" onClick={handleConfirmOrder}>
          {/* CONFIRM ORDER */}
          <FormattedMessage id="confirm-order" />

          <div className="order-total">
            £{totalPrice.toFixed(2)} / {totalItems} 
            {/* ITEM */}
            <FormattedMessage id='item' />
            {/* {totalItems > 1 ? "S" : ""} */}
          </div>
        </button>
      </div>
      {showConfirmModal && (
        <ConfirmOrderModal
          onPlaceOrder={handlePlaceOrder}
          onCancel={handleCancel}
          totalPrice={totalPrice}
          totalItems={totalItems}
        />
      )}
    </div>
  );
}

export default Checkout;
