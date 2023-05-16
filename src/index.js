import React from "react";
// import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";
import { makeServer } from "./server";
import BooksDataProvider from "./Contexts/BooksDataContext";

// Call make Server
makeServer();

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BooksDataProvider>
      <App />
    </BooksDataProvider>
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
