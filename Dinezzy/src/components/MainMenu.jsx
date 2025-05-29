import React, { useState, useEffect } from "react";
import { products } from '../Data/products.json';
import { categories } from '../Data/categories.json';
import Categories from "./Categories";
import SubCategories from "./SubCategories";
import ProductList from "./ProductList";
// import './All.css'; 

const MainMenu = () => {
  const mainCategories = categories.filter((cat) => cat.parent === null);

  const [mainId, setMainId] = useState(null);
  const [subId, setSubId] = useState(null);

  const getSubCategories = (mainId) =>
    categories.filter((cat) => cat.parent === mainId);

  const getProducts = (subId) =>
    products.filter((prod) => prod.parentId === subId);

  useEffect(() => {
    if (mainCategories.length > 0 && mainId === null) {
      const firstMain = mainCategories[0];
      setMainId(firstMain.id);

      const firstSub = getSubCategories(firstMain.id)[0];
      if (firstSub) setSubId(firstSub.id);
    }
  }, [mainCategories]);

  const subCategories = getSubCategories(mainId);
  const currentProducts = getProducts(subId);

  return (
    <div className="main-menu-container">
      <Categories
        categories={mainCategories}
        selectedId={mainId}
        onSelect={(id) => {
          setMainId(id);
          const firstSub = getSubCategories(id)[0];
          if (firstSub) setSubId(firstSub.id);
        }}
      />

      <SubCategories
        subcategories={subCategories}
        selectedId={subId}
        onSelect={(id) => setSubId(id)}
      />

      <ProductList products={currentProducts} />
    </div>
  );
};

export default MainMenu;
