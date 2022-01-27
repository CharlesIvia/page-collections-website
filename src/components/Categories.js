//Required imports
import React from "react";
import { categoriesData } from "../data/categtoriesData";

//Categories card

export const CategoryCard = ({ category }) => {
  return (
    <div className="category-card">
      <div>
        <p> {<category.src size={60} color="#424f5a" />}</p>
      </div>
      <div>
        <p>{category.name}</p>
      </div>
    </div>
  );
};
export const Categories = () => {
  return (
    <div className="categories-section">
      <div>
        <h3>Select from a category</h3>
      </div>
      <div className="categories">
        {categoriesData.map((cat) => (
          <CategoryCard category={cat} key={cat.id} />
        ))}
      </div>
    </div>
  );
};
