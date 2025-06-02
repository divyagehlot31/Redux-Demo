import React from "react";
import Header from "../components/Header";
import Categories from "../components/Categories";
import SubCategories from "../components/SubCategories";
import ProductList from "../components/ProductList";
// import ProductCard from "../components/ProductCard";
// import ProductPopup from "../components/ProductPopup";

function Home() {
  return (
    <div className="home-wrapper">
      <Header />
      <Categories />
      <SubCategories />
      <ProductList />
      {/* <ProductCard/> */}
      {/* <ProductPopup/> */}
    </div>
  );
}

export default Home;
