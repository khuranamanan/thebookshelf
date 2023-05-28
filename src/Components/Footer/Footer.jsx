import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            The BookShelf is your ultimate destination for discovering and
            exploring a vast collection of books across genres. Immerse yourself
            in captivating stories, expand your knowledge, and indulge in the
            joy of reading.
          </p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>
            Email: info@thebookshelf.com
            <br />
            Phone: 123-456-7890
          </p>
        </div>
        <div className="footer-section">
          <h3>Connect with Us</h3>
          <ul className="social-links">
            <li>
              <Link to="https://github.com/khuranamanan" target="_blank">
                <i className="fab fa-github"></i>
              </Link>
            </li>
            <li>
              <Link to="https://twitter.com/MananKhurrana" target="_blank">
                <i className="fab fa-twitter"></i>
              </Link>
            </li>
            <li>
              <Link
                to="https://www.linkedin.com/in/manan-khurana-1b135b19b/"
                target="_blank"
              >
                <i className="fab fa-linkedin"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} The Bookshelf. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
