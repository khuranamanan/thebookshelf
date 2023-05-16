import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";

function NavSearchBox() {
  const [showSearchBar, setShowSearchBar] = useState(false);

  return (
    <>
      {showSearchBar ? (
        <>
          <input
            type="text"
            className="search-box"
            placeholder="Search Books"
          />
          <AiOutlineClose
            className="search-icon"
            onClick={() => setShowSearchBar(false)}
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
