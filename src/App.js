import { Route, RouterProvider, createRoutesFromElements } from "react-router";
import { createBrowserRouter } from "react-router-dom";

//Layouts
import RootLayout from "./Layouts/RootLayout";

//Pages
import HomePage from "./Pages/HomePage";
import PageNotFound from "./Pages/PageNotFound";
import MockmanPage from "./Pages/MockmanPage";
import LogInPage from "./Pages/LogInPage";
import SignUpPage from "./Pages/SignUpPage";
import CartPage from "./Pages/CartPage";
import WishlistPage from "./Pages/WishlistPage";
import PrivateRoute from "./Components/PrivateRoute";
import ProfilePage from "./Pages/ProfilePage";
import UserAddressesPage from "./Pages/Address-Management/UserAddressesPage";
import ProductListingPage from "./Pages/Product-Listing/ProductListingPage";
import ProductDetailsPage from "./Pages/ProductDetails/ProductDetailsPage";
import CategoriesPage from "./Pages/Categories/CategoriesPage";

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
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
