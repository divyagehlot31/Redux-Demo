import React from "react";
import Header from "../components/Header";
import Categories from "../components/Categories";
import SubCategories from "../components/SubCategories";
import ProductList from "../components/ProductList";
import CartView from "../components/ViewCart";
// import ProductCard from "../components/ProductCard";
// import ProductPopup from "../components/ProductPopup";

function Home() {
  return (
    <div>
      <Header />
      <Categories />
      <SubCategories />
      <ProductList />
      <CartView/>
      {/* <ProductCard/> */}
      {/* <ProductPopup/> */}
    </div>
  );
}

export default Home;
