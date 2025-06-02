import products from "../Data/products.json";
import { useSelector, useDispatch } from "react-redux";
import { selectProduct } from '../redux/actions/productActions';
import "../styles/ProductList.scss";
import { useState } from "react";
import ProductDetails from "./ProductDetails";

function ProductList() {
  const dispatch = useDispatch();
  const selectedSubCategory = useSelector((state) => state.selectedSubCategory);
  // const selectedProduct = useSelector((state) => state.selectedProduct);
const selectedProduct = useSelector((state) => state.selectedProduct.selectedProduct);

  const [selectedVariant, setSelectedVariant] = useState(null);
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);  // modal state

  const filteredProducts = products.products.filter(
    (p) => p.parentId === selectedSubCategory
  );

  const handleProductClick = (product) => {
    dispatch(selectProduct(product));
    setSelectedVariant(null);
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

  const handleAddOrder = () => {
    const order = {
      productId: selectedProduct.id,
      name: selectedProduct.name,
      variant: selectedVariant,
      extras: selectedExtras,
      quantity,
    };
    console.log("Order Added:", order);
    setIsModalOpen(false); 
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
    </div>
  );
}

export default ProductList;
