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

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />

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
