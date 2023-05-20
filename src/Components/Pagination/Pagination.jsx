import { useState } from "react";
import "./Pagination.css";

function Pagination({ booksPerPage, totalBooks, paginate }) {
  const [activePage, setActivePage] = useState(1);

  const pageNumbers = Array.from(
    { length: Math.ceil(totalBooks / booksPerPage) },
    (_, index) => index + 1
  );

  const handlePageClick = (pageNumber) => {
    setActivePage(pageNumber);
    paginate(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <div className="pagination-container">
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${number === activePage ? "active" : ""}`}
          >
            <button
              onClick={() => handlePageClick(number)}
              className="page-link"
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;
