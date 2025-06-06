import React, { Profiler } from "react";
import Header from "../components/Header";
import Categories from "../components/Categories";
import SubCategories from "../components/SubCategories";
import ProductList from "../components/ProductList";
import CartView from "../components/ViewCart";
// import ProductCard from "../components/ProductCard";
// import ProductPopup from "../components/ProductPopup";

function Home() {
  function onRender(
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime
  ) {
    console.log("id is", id);
    console.log("Phase is", phase);
    console.log("actualDuration", actualDuration);
    console.log("baseDuration", baseDuration);
    console.log("startTime", startTime);
    console.log("commitTime", commitTime);
  }
  return (
    <div>
      <Header />
      <Categories />
      <SubCategories />
      <Profiler id="ProductList" onRender={onRender}>
        <ProductList />
      </Profiler>
      <CartView />
      {/* <ProductCard/> */}
      {/* <ProductPopup/> */}
    </div>
  );
}

export default Home;
