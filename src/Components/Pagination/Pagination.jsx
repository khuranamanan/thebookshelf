import "./Pagination.css";

function Pagination({ booksPerPage, totalBooks, paginate, currentPage }) {
  const pageNumbers = Array.from(
    { length: Math.ceil(totalBooks / booksPerPage) },
    (_, index) => index + 1
  );

  const handlePageClick = (pageNumber) => {
    paginate(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <div className="pagination-container flex-center">
      <p className="current-page-label">{`Page ${currentPage} of ${
        pageNumbers[pageNumbers.length - 1]
      }`}</p>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${number === currentPage ? "active" : ""}`}
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
