import "./styles.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Data, { Products } from "./Data/Data";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Catagories from "./components/Catagories";
import Dropdown from "./components/Dropdown";
import SubCatagoryCont from "./components/SubCatagoryCont";
import ProductHolder from "./components/ProductHolder";
import ProductDisplay from "./components/ProductDisplay";
import Sidebar from "./components/Sidebar";
export default function App() {
  const [data, setData] = useState(Data);
  const [cart, setCart] = useState({});
  const [cartValue, setCartValue] = useState({
    total: 0,
    items: 0,
  });
  const [open, setOpen] = React.useState(false);

  function toggleOpen(state) {
    if (state === true) {
      setOpen((open) => true);
      console.log("x");
    } else {
      setOpen((open) => !open);
    }
  }

  function deleteItem(code) {
    setCart((prevCart) => {
      delete prevCart[code];
      return { ...prevCart };
    });
  }
  function incrementItem(code) {
    setCart((prevCart) => {
      prevCart[code].quantity++;
      return { ...prevCart };
    });
  }

  function decrementItem(code) {
    setCart((prevCart) => {
      if (prevCart[code].quantity > 1) {
        prevCart[code].quantity--;
      } else {
        delete prevCart[code];
      }
      return { ...prevCart };
    });
  }

  function updateCartValue() {
    let totalValue = 0,
      items = 0;

    Object.entries(cart).forEach(([key, value]) => {
      totalValue += Number(value.price * value.quantity);
      items += Number(value.quantity);
    });
    setCartValue((prevValue) => {
      return { ...prevValue, total: totalValue, items: items };
    });
  }

  useEffect(() => {
    updateCartValue();
  }, [cart]);

  function updateCart(code, quantity) {
    const item = Products[code];
    console.log(cart);
    if (typeof cart[code] === "undefined") {
      setCart((prevCart) => {
        prevCart[code] = item;
        prevCart[code].quantity = quantity;
        return { ...prevCart };
      });
    } else {
      setCart((prevCart) => {
        prevCart[code].quantity =
          parseInt(prevCart[code].quantity) + parseInt(quantity);
        return { ...prevCart };
      });
    }
  }

  return (
    <div className="App">
      <Router basename="/Primal-For-You">
        <Navbar
          cart={cart}
          cartValue={cartValue}
          open={open}
          toggleOpen={toggleOpen}
          deleteItem={deleteItem}
          incrementItem={incrementItem}
          decrementItem={decrementItem}
        />
        <Sidebar />
        <Routes>
          <Route path="/" exact element={<Catagories data={data} />} />

          <Route
            path="/:subCatagory"
            element={<SubCatagoryCont data={Data} />}
          />
          <Route
            path="/:subCatagory/:products"
            element={<ProductHolder data={Data} />}
          />
          <Route
            path="/:subCatagory/:products/:item"
            element={
              <ProductDisplay
                toggleOpen={toggleOpen}
                data={Data}
                updateCart={updateCart}
              />
            }
          />

          <Route path="/Dropdown" element={<Dropdown />} />
          <Route component={<div> Error 404 </div>} />
        </Routes>
      </Router>
    </div>
  );
}
