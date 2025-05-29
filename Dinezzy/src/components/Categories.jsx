import React from "react";
import '../styles/Categories.scss'

const Categories = ({ categories, selectedId, onSelect }) => {
  return (
    <div className="categories">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelect(cat.id)}
          className={`category-btn ${selectedId === cat.id ? "selected" : ""}`}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
};

export default Categories;
