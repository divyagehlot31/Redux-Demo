import products from "../Data/products.json";
import { useSelector, useDispatch } from "react-redux";
import { selectProduct } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartAction';
import "../styles/ProductList.scss";
import { useState } from "react";
import ProductDetails from "./ProductDetails";
import SimpleCartView from "./ViewCart";

function ProductList() {
  const dispatch = useDispatch();
    const selectedCategory = useSelector((state) => state.selectedCategory);

  const selectedSubCategory = useSelector((state) => state.selectedSubCategory);
  const selectedProduct = useSelector((state) => state.selectedProduct.selectedProduct);

  const [selectedVariant, setSelectedVariant] = useState(null);
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const filteredProducts = products.products.filter(
    (p) => p.parentId === selectedSubCategory
  );

  const handleProductClick = (product) => {
    dispatch(selectProduct(product));
    
    const defaultVariant = product.variants && product.variants.length > 0 ? product.variants[0] : null;
    setSelectedVariant(defaultVariant);
    
    setSelectedExtras([]);
    setQuantity(1);
    setIsModalOpen(true);
  };

  const handleExtraChange = (extra) => {
    const updated = selectedExtras.includes(extra)
      ? selectedExtras.filter(e => e !== extra)
      : [...selectedExtras, extra];
    setSelectedExtras(updated);
  };

  // const handleAddOrder = () => {
  //   const orderItem = {
  //     productId: selectedProduct.id,
  //     name: selectedProduct.name,
  //     basePrice: selectedProduct.price,
  //     variant: selectedVariant,
  //     extras: selectedExtras,
  //     quantity,
  //   };
    
  //   dispatch(addToCart(orderItem));
  //   console.log("Order Added:", orderItem);
    
  //   setIsModalOpen(false);
  //   setIsCartOpen(true);
  // };
  const handleAddOrder = () => {
  const orderItem = {
    productId: selectedProduct.id,
    name: selectedProduct.name,
    basePrice: selectedProduct.price,
    variant: selectedVariant,
    extras: selectedExtras,
    quantity,
    categoryId: selectedCategory 
  };
  
  dispatch(addToCart(orderItem));
  console.log("Order Added:", orderItem);

  setIsModalOpen(false);
  setIsCartOpen(true);
};

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <div>
      <div className="product-scroll">
        {filteredProducts.map((p) => (
          <div key={p.id} className="product-card" onClick={() => handleProductClick(p)}>
            <div className="product-info">
              <h5>{p.name}</h5>
              <p className="text">{p.description}</p>
            </div>
            <div className="product-price">£{p.price}</div>
          </div>
        ))}
      </div>

      {isModalOpen && selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          selectedVariant={selectedVariant}
          setSelectedVariant={setSelectedVariant}
          selectedExtras={selectedExtras}
          handleExtraChange={handleExtraChange}
          quantity={quantity}
          setQuantity={setQuantity}
          handleAddOrder={handleAddOrder}
          onClose={closeModal}
        />
      )}

      {isCartOpen && (
        <SimpleCartView onClose={closeCart} />
      )}
    </div>
  );
}

export default ProductList;