import { useContext } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { AuthContext } from "../../Contexts/AuthContext";
import "./ProfilePage.css";
import { useNavigate } from "react-router-dom";
import { ACTION_TYPES } from "../../utils/constant";
import { BooksDataContext } from "../../Contexts/BooksDataContext";

function ProfilePage() {
  const { loginData, signOutUser } = useContext(AuthContext);
  const { booksDataDispatch, expensiveBookInCollection } =
    useContext(BooksDataContext);
  const { user } = loginData;
  const navigate = useNavigate();

  const handleSignOut = () => {
    booksDataDispatch({ type: ACTION_TYPES.CLEAR_CART });
    booksDataDispatch({ type: ACTION_TYPES.CLEAR_WISHLIST });
    booksDataDispatch({
      type: ACTION_TYPES.CLEAR_ALL_FILTERS,
      payload: { rangeInitialValue: expensiveBookInCollection },
    });
    signOutUser();
    navigate("/", { replace: true });
  };

  return (
    <div className="profile-container flex-center flex-dir-co">
      <div className="profile-icon">
        <AiOutlineUser size={64} />
      </div>
      <h2 className="user-greeting">Welcome, {user.firstName}!</h2>
      <div className="profile-buttons flex-center">
        <button className="btn-primary" onClick={() => navigate("addresses")}>
          Manage Addresses
        </button>
        <button className="btn-secondary" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default ProfilePage;
