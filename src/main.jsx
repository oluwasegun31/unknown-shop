import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  ProductProvider,
  CartBarProvider,
  CartItemProvider,
  CartNotifProvider,
} from "./context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartNotifProvider>
    <CartBarProvider>
      <CartItemProvider>
        <ProductProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </ProductProvider>
      </CartItemProvider>
    </CartBarProvider>
  </CartNotifProvider>
);
