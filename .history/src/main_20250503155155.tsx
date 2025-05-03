import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.tsx";
// import "./Components/Footer/Footer.css"
import "./index.css";
import Nav from "./Components/Nav/Nav.tsx";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";

Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav showMenu="" toggleMenu={() => {}} />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
