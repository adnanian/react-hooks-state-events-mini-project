import React from "react";

function CategoryFilter( {categories, onCategorySelection, selectedCategory} ) {

  const categoryButtons = categories.map((category) => {
    return (
      <button 
        key={category} 
        className={selectedCategory === category ? "selected" : ""} 
        onClick={onCategorySelection}>
          {category}
      </button>
    );
  });

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
