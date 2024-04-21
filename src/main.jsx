import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "@fontsource/poppins/100.css";
import "@fontsource/poppins/200.css";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "@Presentation/Styles/App.css";

import App from "./App.jsx";

/*************************************************
 *******          ¡Importante!             *******

  Si se piensa realizar alguna modificación de la 
  aplicación, por favor leer el archivo README.md 
  en la raíz del proyecto. Esto para llevar una 
  correcta estructura y organización del proyecto 
  y evitar código basura. 
  
  *******          ¡Importante!             *******
 *************************************************/

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
