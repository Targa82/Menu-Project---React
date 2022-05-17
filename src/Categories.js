import React from "react";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((cat, idx) => {
        return (
          <button
            key={idx}
            className="filter-btn"
            onClick={() => filterItems(cat)}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
