import { Outlet } from "react-router";

//Components
import NavigationBar from "../Components/NavigationBar/NavigationBar";
import Footer from "../Components/Footer";
import { ScrollRestoration } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <header>
        <NavigationBar />
      </header>
      <ScrollRestoration />
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
