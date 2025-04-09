import styles from "../assets/styles/Categories.module.scss"; 

const categories = [
  { id: 1, name: "Smartphones", image: "/images/smartphone.png" },
  { id: 2, name: "Laptops", image: "/images/laptop.png" },
  { id: 3, name: "TVs", image: "/images/tv.png" },
  { id: 4, name: "Headphones", image: "/images/headphones.png" },
  { id: 5, name: "Gaming", image: "/images/gaming.png" },
];

const Categories = () => {
  return (
    <div className={styles.categories}> {}
      {categories.map((category) => (
        <div key={category.id} className={styles.categoryCard}>
          <div className={styles.imageBox}>
            <img src={category.image} alt={category.name} />
          </div>
          <p>{category.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Categories;
