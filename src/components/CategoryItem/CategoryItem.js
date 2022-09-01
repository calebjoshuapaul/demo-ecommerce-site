import { useNavigate } from "react-router-dom";
import "./CategoryItem.styles.scss";

function CategoryItem({ category }) {
  const navigate = useNavigate();

  const handleClick = () => {
    const categoryTitle = category.title.toLowerCase();
    navigate("/shop/" + categoryTitle);
  };

  return (
    <div onClick={handleClick} className="category__container">
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
