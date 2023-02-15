import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//?Product Provider
import ProductProvider from "./contexts/ProductContext";
//?Sidebar Provider
import SidebarProvider from "./contexts/SidebarContext";
//?Cart Provider
import CartProvider from "./contexts/CartContext";

import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SidebarProvider>
      <CartProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </CartProvider>
    </SidebarProvider>
  </React.StrictMode>
);
