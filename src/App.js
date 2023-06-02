import { Route, RouterProvider, createRoutesFromElements } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";

//Layouts
import RootLayout from "./Layouts/RootLayout";

//Pages
import HomePage from "./Pages/Home/HomePage";
import PageNotFound from "./Pages/PageNotFound";
import MockmanPage from "./Pages/MockmanPage";
import LogInPage from "./Pages/Auth/LogInPage";
import SignUpPage from "./Pages/Auth/SignUpPage";
import CartPage from "./Pages/Cart/CartPage";
import WishlistPage from "./Pages/Wishlist/WishlistPage";
import PrivateRoute from "./Components/PrivateRoute";
import ProfilePage from "./Pages/Auth/ProfilePage";
import UserAddressesPage from "./Pages/Address-Management/UserAddressesPage";
import ProductListingPage from "./Pages/Product-Listing/ProductListingPage";
import ProductDetailsPage from "./Pages/ProductDetails/ProductDetailsPage";
import CategoriesPage from "./Pages/Categories/CategoriesPage";
import CheckoutPage from "./Pages/Checkout/CheckoutPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="products">
          <Route index element={<ProductListingPage />} />
          <Route path=":id" element={<ProductDetailsPage />} />
        </Route>
        <Route path="categories" element={<CategoriesPage />} />
        <Route
          path="cart"
          element={
            <PrivateRoute>
              <CartPage />
            </PrivateRoute>
          }
        />
        <Route
          path="wishlist"
          element={
            <PrivateRoute>
              <WishlistPage />
            </PrivateRoute>
          }
        />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="profile">
          <Route
            index
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            }
          />
          <Route
            path="addresses"
            element={
              <PrivateRoute>
                <UserAddressesPage />
              </PrivateRoute>
            }
          />
        </Route>

        <Route path="mockman" element={<MockmanPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
      <Route path="/login" element={<LogInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
    </>
  )
);

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Slide}
        theme="light"
      />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
