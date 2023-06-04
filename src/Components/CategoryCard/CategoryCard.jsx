import { useContext, useState } from "react";
import "./CategoryCard.css";
import { BooksDataContext } from "../../Contexts/BooksDataContext";
import { ACTION_TYPES } from "../../utils/constant";
import { useNavigate } from "react-router";

function CategoryCard({ image, categoryName, description }) {
  const { booksDataDispatch, expensiveBookInCollection } =
    useContext(BooksDataContext);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  function handleCategoryCardClick(selectedCategory) {
    booksDataDispatch({
      type: ACTION_TYPES.SELECTED_CATEGORY_CARD,
      payload: {
        category: selectedCategory,
        priceSlider: expensiveBookInCollection,
      },
    });
    booksDataDispatch({ type: ACTION_TYPES.RESET_PRODUCTS_PAGE_NUM });
    navigate("/products");
  }

  return (
    <div
      className="category-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => handleCategoryCardClick(categoryName)}
    >
      <div className={`overlay ${isHovered ? "hovered" : ""}`} />
      <img className="image" src={image} alt="Card Background" />
      <div className="content">
        <h2 className={`heading ${isHovered ? "hovered" : ""}`}>
          {categoryName}
        </h2>
        {isHovered && <p className="description">{description}</p>}
      </div>
    </div>
  );
}

export default CategoryCard;
