import { useContext } from "react";
import { BooksDataContext } from "../../Contexts/BooksDataContext";
import CategoryCard from "../../Components/CategoryCard/CategoryCard";
import "./CategoriesPage.css";
import useDocumentTitle from "../../Hooks/useDocumentTitle";
import { BeatLoader } from "react-spinners";

function CategoriesPage() {
  const { categories } = useContext(BooksDataContext);
  useDocumentTitle("Categories | The Bookshelf");

  const categoriesMapped =
    categories?.data.length !== 0 &&
    categories?.data.map((category) => (
      <CategoryCard
        key={category._id}
        image={category.img}
        categoryName={category.categoryName}
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
          <BeatLoader color="#ffcd3c" />
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
