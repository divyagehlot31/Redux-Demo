import React from "react";
import './All.css';

const SubCategories = ({ subcategories, selectedId, onSelect }) => {
  return (
    <div className="subcat-scroll ">
      {subcategories.map((sub) => (
        <button
          key={sub.id}
          onClick={() => onSelect(sub.id)}
          className={`subcat-btn ${selectedId === sub.id ? "selected-subcategory" : ""}`}
        >
          {sub.name}
        </button>
      ))}
    </div>
  );
};

export default SubCategories;