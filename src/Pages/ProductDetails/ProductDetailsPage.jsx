import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import getProductByIDService from "../../Services/getProductByIDService";
import ProductDetailsCard from "../../Components/ProductCard/ProductDetailsCard";
import "./ProductDetailsPage.css";
import useDocumentTitle from "../../Hooks/useDocumentTitle";
import { BooksDataContext } from "../../Contexts/BooksDataContext";

function ProductDetailsPage() {
  const { setLoader } = useContext(BooksDataContext);
  const [currentBook, setCurrentBook] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  const pageTitle = `${currentBook?.title || ""} ${
    currentBook?.author ? "- " + currentBook?.author + " |" : ""
  } The Bookshelf`;
  useDocumentTitle(pageTitle);

  const displayCard = currentBook ? (
    <ProductDetailsCard book={currentBook} />
  ) : (
    <div className="book-not-found flex-center flex-dir-co">
      <h2>Could Not Find the Book You're Looking For</h2>
      <p>
        We apologize for the inconvenience. The book you are searching for could
        not be found. Please try again later or explore our other available
        books.
      </p>
      <button onClick={() => navigate("/products")} className="btn-secondary">
        Go to Product Page
      </button>
    </div>
  );

  useEffect(() => {
    (async function (id, setLoader) {
      setLoader(true);
      setIsLoading(true);
      try {
        const response = await getProductByIDService(id);
        setCurrentBook(response.data.product);
      } catch (err) {
        setIsError(err);
      } finally {
        setIsLoading(false);
        setLoader(false);
      }
    })(id, setLoader);
  }, [id, setLoader]);

  return (
    <div className="product-details-page">
      {isLoading ? <p>Loading...</p> : isError ? <p>{isError}</p> : displayCard}
    </div>
  );
}

export default ProductDetailsPage;
