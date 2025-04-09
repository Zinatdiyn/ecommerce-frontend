import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import products from '../data/products'
import { Product } from '../types'

const Cart = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products") 
      .then((res) => res.json())
      .then((data: Product[]) => setProducts(data))
      .catch((error) => console.error("Xatolik:", error));
  }, []);
  const addToCart = (product: Product) => {
    setCart([...cart, product]); // Mahsulotni savatga qo‘shish
    console.log("Savat:", cart); // Savatni konsolga chiqarish
  };
  return (
    <div>
      <h1>Shopping Cart</h1>
      <p>Savat ichidagi mahsulotlar.</p>
      <div className="products">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
    </div>
  );
};

export default Cart;
