
import { useOutletContext } from "react-router";
import useProducts from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";
import styles from "./Shop.module.css";

function Shop() {
  const { products, loading, error } = useProducts();

  const { addToCart } = useOutletContext();

  if (loading) {
    return (
      <main>
        <p>Loading products...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main>
        <p>Error: {error}</p>
      </main>
    );
  }

  return (
    <main>
      <h1>Our Products</h1>

      <div className={styles.productGrid}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </main>
  );
}

export default Shop;
