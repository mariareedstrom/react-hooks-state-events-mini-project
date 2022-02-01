import React from "react";

function CategoryFilter({
  selectedCategory,
  categories,
  filterTasksByCategory,
}) {
  function renderButton() {
    return categories.map((category) => {
      const className = selectedCategory === category ? "selected" : "";
      return (
        <button
          key={category}
          onClick={handleButtonClick}
          className={className}
        >
          {category}
        </button>
      );
    });
  }

  function handleButtonClick(e) {
    const category = e.target.textContent;
    filterTasksByCategory(category);
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {renderButton()}
    </div>
  );
}

export default CategoryFilter;
