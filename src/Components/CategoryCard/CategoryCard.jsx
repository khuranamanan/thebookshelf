import { useState } from "react";
import "./CategoryCard.css";

function CategoryCard({ image, heading, description }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="category-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`overlay ${isHovered ? "hovered" : ""}`} />
      <img className="image" src={image} alt="Card Background" />
      <div className="content">
        <h2 className={`heading ${isHovered ? "hovered" : ""}`}>{heading}</h2>
        {isHovered && <p className="description">{description}</p>}
      </div>
    </div>
  );
}

export default CategoryCard;
