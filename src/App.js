import "bootstrap/dist/css/bootstrap.css";
import "./App.scss";
import Header from "./Components/Header/Header";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
// Страницы
import Home from "./Pages/Home/Home";
import Catalog from "./Pages/Catalog/Catalog";
import Notfoundpage from "./Pages/Notfoundpage/Notfoundpage";
import Product from "./Pages/Product/Product";
import Layout from "./Components/Layout/Layout";
import Login from "./Components/auth/Login/Login";
import Register from "./Components/auth/Register/Register";

// Страницы блога
import Cart from "./Pages/Cart/Cart";
import AuthContextProvider from "./Context/AuthContexProvider";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (
      !document.querySelector(".navbar-toggler").classList.contains("collapsed")
    ) {
      document.querySelector(".navbar-toggler").click();
    }
  }, [location]);
  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/catalog/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/*<Route path="/contacts" element={<Contacts />} />/*}
          {/* <Route path="/blog" element={<Blog />} />
        <Route path="/blog/robusta-i-arabica" element={<BlogRabustaIArabica/>} /> */}
            {/* <Route path="/blog/:id" element={<Blogpost />} /> */}
            <Route path="*" element={<Notfoundpage />} />
          </Route>
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export { App };
