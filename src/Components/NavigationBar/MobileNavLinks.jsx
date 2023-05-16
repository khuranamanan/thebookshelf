import React, { useState } from "react";
import NavLinks from "./NavLinks";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

function MobileNavLinks() {
  const [showMobileNavLinks, setShowMobileNavLinks] = useState(false);

  function handleNavLinkClick() {
    setShowMobileNavLinks(false);
  }

  return (
    <div className="mobile-nav-links">
      {showMobileNavLinks ? (
        <>
          <AiOutlineClose
            onClick={() => setShowMobileNavLinks(false)}
            className="hamburger-icons"
          />
          <NavLinks
            isMobileNavLinks
            mobileNavLinkClickHandler={handleNavLinkClick}
          />
        </>
      ) : (
        <>
          <AiOutlineMenu
            onClick={() => setShowMobileNavLinks(true)}
            className="hamburger-icons"
          />
        </>
      )}
    </div>
  );
}

export default MobileNavLinks;
