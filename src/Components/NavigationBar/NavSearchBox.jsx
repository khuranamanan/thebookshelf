import { useContext, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { BooksDataContext } from "../../Contexts/BooksDataContext";
import { ACTION_TYPES } from "../../utils/constant";
import { useNavigate } from "react-router";

function NavSearchBox() {
  const { filters, booksDataDispatch } = useContext(BooksDataContext);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const navigate = useNavigate();

  function handleSearchType(event) {
    booksDataDispatch({
      type: ACTION_TYPES.SEARCH_KEY_CHANGE,
      payload: event.target.value.trim(),
    });
    if (event.target.value.trim()) {
      navigate("/products");
    }
  }

  function handleCloseSearchBox() {
    setShowSearchBar(false);
    booksDataDispatch({
      type: ACTION_TYPES.SEARCH_KEY_CHANGE,
      payload: "",
    });
  }

  return (
    <>
      {showSearchBar ? (
        <>
          <input
            type="text"
            className="search-box"
            placeholder="Search Books"
            value={filters.searchKey}
            onChange={handleSearchType}
          />
          <AiOutlineClose
            className="search-icon"
            onClick={handleCloseSearchBox}
          />
        </>
      ) : (
        <BiSearch
          className="search-close-icon"
          onClick={() => setShowSearchBar(true)}
        />
      )}
    </>
  );
}

export default NavSearchBox;
