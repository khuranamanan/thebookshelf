import { Route, RouterProvider, createRoutesFromElements } from "react-router";
import { createBrowserRouter } from "react-router-dom";

//Layouts
import RootLayout from "./Layouts/RootLayout";

//Pages
import HomePage from "./Pages/HomePage";
import PageNotFound from "./Pages/PageNotFound";
import MockmanPage from "./Pages/MockmanPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />

      <Route path="mockman" element={<MockmanPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
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
