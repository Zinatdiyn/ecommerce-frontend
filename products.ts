interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}



const products: Product[] = [
  { id: 1, title: "Laptop", price: 999, image: "laptop.jpg" },
  { id: 2, title: "Phone", price: 499, image: "phone.jpg" }
];

export default products;