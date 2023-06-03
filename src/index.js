import React from "react";
// import ReactDOM from "react-dom";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import { createRoot } from "react-dom/client";
import { makeServer } from "./server";
import BooksDataProvider from "./Contexts/BooksDataContext";
import AuthProvider from "./Contexts/AuthContext";
import { OrderProvider } from "./Contexts/OrderConext";

// Call make Server
makeServer();

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <BooksDataProvider>
        <OrderProvider>
          <App />
        </OrderProvider>
      </BooksDataProvider>
    </AuthProvider>
  </React.StrictMode>
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// const container = ;
// const root = ; // createRoot(container!) if you use TypeScript
// root.render(<App tab="home" />);
