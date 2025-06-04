import React from "react";
import "../styles/ConfirmOrderModal.scss";
import { FormattedMessage } from "react-intl";

function ConfirmOrderModal({ onPlaceOrder, onCancel, totalPrice, totalItems }) {
  return (
    <div className="modal-overlay" onClick={onCancel}>
      <div className="confirm-modal" onClick={(e) => e.stopPropagation()}>
        <h2>
          <FormattedMessage id="confirm-order" />

          {/* Confirm Order */}
        </h2>

        <div className="confirmation-icon">
          <div className="hand-icon">
            <div className="thumb">👍</div>
          </div>
        </div>

        <div className="confirmation-text">
          <p>
            <FormattedMessage id="confirmation-text" />
            {/* By placing this order you agree that you are present in Kings Arms
            and over 18 years old. */}
          </p>
        </div>

        <div className="modal-buttons">
          <button className="cancel-btn" onClick={onCancel}>
            {/* CANCEL */}
            <FormattedMessage id="cancel" />
          </button>
          <button className="place-order-btn" onClick={onPlaceOrder}>
            {/* PLACE ORDER */}
            <FormattedMessage id="place-order" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmOrderModal;
