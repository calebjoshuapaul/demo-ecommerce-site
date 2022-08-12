import React from "react";
import "./CategoryItem.styles.scss";

function CategoryItem({ category }) {
  return (
    <div className="category__container">
      <div
        className="background__image"
        style={{ backgroundImage: `url(${category.imageUrl})` }}
      ></div>
      <div className="category__containerBody">
        <h2>{category.title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
}

export default CategoryItem;
