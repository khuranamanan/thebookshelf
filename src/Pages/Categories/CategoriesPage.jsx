import { useContext } from "react";
import { BooksDataContext } from "../../Contexts/BooksDataContext";
import CategoryCard from "../../Components/CategoryCard/CategoryCard";
import "./CategoriesPage.css";

function CategoriesPage() {
  const { categories } = useContext(BooksDataContext);

  const categoriesMapped =
    categories?.data.length !== 0 &&
    categories?.data.map((category) => (
      <CategoryCard
        key={category._id}
        image={category.img}
        heading={category.categoryName}
        description={category.description}
      />
    ));

  return (
    <div className="categories-page">
      <div className="categories-page-heading">
        <h1>Categories:</h1>
        <p>
          Discover a world of books with our Categories page. Explore a wide
          range of genres, from fiction to romance, mystery to self-help. Click
          on any category to find books tailored to your interests. Start your
          literary journey today!
        </p>
      </div>
      <div className="categories-page-content">
        {categories.isLoading ? (
          <p>Loading...</p>
        ) : categories.isError ? (
          <p>{categories.isError}</p>
        ) : (
          <>{categoriesMapped}</>
        )}
      </div>
    </div>
  );
}

export default CategoriesPage;
