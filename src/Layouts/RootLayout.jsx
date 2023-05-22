import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";

//Components
import NavigationBar from "../Components/NavigationBar/NavigationBar";
import Footer from "../Components/Footer";

function RootLayout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <header>
        <NavigationBar />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default RootLayout;
