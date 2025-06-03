import React from 'react';
import '../styles/ConfirmOrderModal.scss';

function ConfirmOrderModal({ onPlaceOrder, onCancel, totalPrice, totalItems }) {
  return (
    <div className="modal-overlay" onClick={onCancel}>
      <div className="confirm-modal" onClick={(e) => e.stopPropagation()}>
        <h2>Confirm Order</h2>
        
        <div className="confirmation-icon">
          <div className="hand-icon">
            <div className="thumb">👍</div>
            <div className="sparkles">✨</div>
          </div>
        </div>

        <div className="confirmation-text">
          <p>By placing this order you agree that you are present in Kings Arms and over 18 years old.</p>
        </div>

        <div className="modal-buttons">
          <button className="cancel-btn" onClick={onCancel}>
            CANCEL
          </button>
          <button className="place-order-btn" onClick={onPlaceOrder}>
            PLACE ORDER
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmOrderModal;