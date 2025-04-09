// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import ProductCard from "../components/ProductCard";
// import "../assets/styles/Home.scss"; 


// interface Product {
//   id: number;
//   name: string;
//   image: string;
//   price: number;
// }

// const Home: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     axios
//       .get("https://fakestoreapi.com/products")
//       .then((response) => {
//         console.log("True:", response.data);
//         setProducts(response.data);
//       })
//       .catch((error) => console.error("Error API:", error));
//   }, []);

//   return (
//     <div>
//       <h1>Product</h1>
//       <div className="products">
//         {products.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;


import { useState, useEffect } from "react";
import { Product } from "../types"; // Product interfevsini import qilish
import ProductCard from '../components/ProductCard'
import "../assets/styles/Home.scss"; 

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Categories from '../components/Categories'
import Header from '../components/Header'


const Home = () => {
  const [products, setProducts] = useState<Product[]>([]); 
  const [cart, setCart] = useState<Product[]>([]); // Savat uchun

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
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
    >
      <SwiperSlide>
        <img src="#" alt="Banner 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="#" alt="Banner 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="#" alt="Banner 3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="#" alt="Banner 4" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="#" alt="Banner 5" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="#" alt="Banner 6" />
      </SwiperSlide>
    </Swiper>

    <Categories />

    <h1>Product</h1>
      
    <div className="products">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  </div>
  );
};

export default Home;
