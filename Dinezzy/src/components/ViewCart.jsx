import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../styles/ViewCart.scss';
import { FormattedMessage } from 'react-intl';

function CartView({ onClose }) {
  const { totalItems, totalPrice } = useSelector(state => state.cart);
  const navigate = useNavigate();

  if (totalItems === 0) return null;

  // const item = pr

  const handleCheckout = () => {
    if (onClose) onClose(); 
    navigate('/checkout');
  };

  return (
    <div className="cart-bottom-bar">
      <button className="view-basket-btn" 
      onClick={handleCheckout}
      >
        <h1 className="basket-text">
          {/* VIEW BASKET */}
          <FormattedMessage id='view_basket'/>

        </h1>
        <span className="basket-info">
          £{totalPrice.toFixed(2)} / {totalItems}
           {/* ITEM */} <FormattedMessage id='item' />
           {/* {totalItems > 1 ? 'S' : ''} */}
        </span>
      </button>
    </div>
  );
}

export default CartView;