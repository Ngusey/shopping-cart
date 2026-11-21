
import { useState } from "react";
import styles from "./ProductCard.module.css";

function ProductCard({ product, addToCart }) {
  const [quantity, setQuantity] = useState(1);

  function handleAddToCart() {
    if (typeof addToCart !== "function") {
      console.error("addToCart function was not received!");
      return;
    }

    addToCart(product, quantity);
    setQuantity(1);
  }

  return (
    <article className={styles.card}>
      <img
        src={product.image}
        alt={product.title}
        className={styles.image}
      />

      <h3>{product.title}</h3>

      <p className={styles.category}>
        {product.category}
      </p>

      <p className={styles.price}>
        ${product.price.toFixed(2)}
      </p>

      <div className={styles.quantityControls}>
        <button
          type="button"
          onClick={() =>
            setQuantity((current) => Math.max(1, current - 1))
          }
        >
          −
        </button>

        <input
          type="number"
          min="1"
          step="1"
          value={quantity}
          onChange={(event) => {
            const value = Number(event.target.value);

            if (Number.isInteger(value) && value >= 1) {
              setQuantity(value);
            }
          }}
        />

        <button
          type="button"
          onClick={() => setQuantity((current) => current + 1)}
        >
          +
        </button>
      </div>

      <button
        type="button"
        className={styles.addButton}
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </article>
  );
}

export default ProductCard;
