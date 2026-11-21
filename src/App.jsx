
import { useState } from "react";
import { Outlet } from "react-router";
import Navbar from "./components/Navbar";

function App() {
  const [cart, setCart] = useState([]);

  // Add a product to the cart
  function addToCart(product, quantity) {
    setCart((currentCart) => {
      const existingItem = currentCart.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        return currentCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item
        );
      }

      return [
        ...currentCart,
        { ...product, quantity },
      ];
    });
  }

  // Update product quantity
  function updateQuantity(productId, quantity) {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  }

  // Remove a product from the cart
  function removeFromCart(productId) {
    setCart((currentCart) =>
      currentCart.filter(
        (item) => item.id !== productId
      )
    );
  }

  // Calculate total cart quantity
  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <Navbar totalItems={totalItems} />

      <Outlet
        context={{
          cart,
          addToCart,
          updateQuantity,
          removeFromCart,
        }}
      />
    </>
  );
}

export default App;
