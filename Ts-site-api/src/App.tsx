import "./assets/scss/style.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import HomeView from "./views/HomeView";
import CategoriesView from "./views/CategoriesView";
import ProductsView from "./views/ProductsView";
import ProductDetailsView from "./views/ProductDetailsView";
import ContactsView from "./views/ContactsView";
import SearchView from "./views/SearchView";
import CompareView from "./views/CompareView";
import WishlistView from "./views/WishlistView";
import ShoppingcartView from "./views/ShoppingcartView";
import NotFoundView from "./views/NotFoundView";
import FooterSection from "./sections/FooterSection";
import MainMenuSection from "./sections/MainMenuSection";
import SaleUp from "./sections/SaleUp";
import { Product } from "./types";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/products")
      .then((d) => d.json())
      .then(setProducts);
  }, []);
  return (
    <BrowserRouter>
      <MainMenuSection />
      <Routes>
        <Route path="/" element={<HomeView products={products} />} />
        <Route path="/categories" element={<CategoriesView />} />
        <Route
          path="/products"
          element={<ProductsView products={products} setProducts={setProducts}/>}
        />
        <Route path="/products/:id" element={<ProductDetailsView products={products} setProducts={setProducts} />} />
        <Route path="/contacts" element={<ContactsView />} />
        <Route path="/search" element={<SearchView />} />
        <Route path="/compare" element={<CompareView />} />
        <Route path="/wishlist" element={<WishlistView />} />
        <Route path="/shoppingcart" element={<ShoppingcartView />} />

        <Route path="*" element={<NotFoundView />} />
      </Routes>
      <FooterSection />
    </BrowserRouter>
  );
}

export default App;
