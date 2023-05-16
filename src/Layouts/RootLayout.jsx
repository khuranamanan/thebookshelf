import { Outlet } from "react-router";

//Components
import NavigationBar from "../Components/NavigationBar/NavigationBar";
import Footer from "../Components/Footer";

function RootLayout() {
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
