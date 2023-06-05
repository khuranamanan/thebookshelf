import { useContext, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { BooksDataContext } from "../../Contexts/BooksDataContext";
import { ACTION_TYPES } from "../../utils/constant";
import { useNavigate } from "react-router";
import Tooltip from "@mui/material/Tooltip";

function NavSearchBox() {
  const { filters, booksDataDispatch, expensiveBookInCollection } =
    useContext(BooksDataContext);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const navigate = useNavigate();

  function handleSearchType(event) {
    booksDataDispatch({
      type: ACTION_TYPES.SEARCH_KEY_CHANGE,
      payload: {
        searchKey: event.target.value.trim(),
        priceSlider: expensiveBookInCollection,
      },
    });
    if (event.target.value.trim()) {
      navigate("/products");
    }
  }

  function handleCloseSearchBox() {
    setShowSearchBar(false);
    booksDataDispatch({
      type: ACTION_TYPES.SEARCH_KEY_CHANGE,
      payload: {
        searchKey: "",
        priceSlider: expensiveBookInCollection,
      },
    });
  }

  return (
    <div className="nav-search-box">
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
            className="search-close-icon"
            onClick={handleCloseSearchBox}
          />
        </>
      ) : (
        <Tooltip title="Search" arrow>
          <span>
            <BiSearch
              className="search-icon"
              onClick={() => setShowSearchBar(true)}
            />
          </span>
        </Tooltip>
      )}
    </div>
  );
}

export default NavSearchBox;
