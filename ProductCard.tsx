import { Product } from "../types"; 
import styles from "../assets/styles/ProductCard.module.scss";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
  addToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1000);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3 className="title">{product.title}</h3>
      <p className="price">${product.price}</p>
      <button 
        className={isAdded ? styles.added : ""}
        onClick={handleAddToCart}
      >
        {isAdded ? "It was added ✅" : "Add to cart 🛒"}
      </button>
    </div>
  );
};

export default ProductCard;
