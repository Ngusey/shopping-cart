
import { useOutletContext } from "react-router";

function Cart() {
  const {
    cart,
    updateQuantity,
    removeFromCart,
  } = useOutletContext();

  const totalPrice = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <main>
        <h1>Your Shopping Cart</h1>
        <p>Your cart is empty.</p>
      </main>
    );
  }

  return (
    <main>
      <h1>Your Shopping Cart</h1>

      {cart.map((item) => (
        <article key={item.id}>
          <img
            src={item.image}
            alt={item.title}
            width="100"
          />

          <h2>{item.title}</h2>

          <p>
            Price: ${item.price.toFixed(2)}
          </p>

          <label>
            Quantity:

            <input
              type="number"
              min="1"
              step="1"
              value={item.quantity}
              onChange={(event) => {
                const quantity = Number(
                  event.target.value
                );

                if (
                  Number.isInteger(quantity) &&
                  quantity > 0
                ) {
                  updateQuantity(item.id, quantity);
                }
              }}
            />
          </label>

          <p>
            Subtotal: $
            {(item.price * item.quantity).toFixed(2)}
          </p>

          <button
            type="button"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
        </article>
      ))}

      <h2>
        Total: ${totalPrice.toFixed(2)}
      </h2>
    </main>
  );
}

export default Cart;
