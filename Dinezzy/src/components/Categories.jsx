import React from "react";
import './All.css';

const Categories = ({ categories, selectedId, onSelect }) => {
  return (
    <div className="flex-row">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelect(cat.id)}
          className={`category-btn ${selectedId === cat.id ? "selected-category" : ""}`}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
};

export default Categories;
