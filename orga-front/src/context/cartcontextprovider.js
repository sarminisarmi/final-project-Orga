


// // src/context/CartContextProvider.js
import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      fetchCart(token);
    }
  }, []);

  const fetchCart = async (token) => {
    try {
      const response = await axios.get("http://localhost:5002/api/cart", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCart(response.data.items);
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  const addToCart = async (item) => {
    setCart((prev) => [...prev, item]);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.productId !== id));
  };

  const updateCartItemQuantity = (id, updater) => {
    setCart((prev) =>
      prev.map((item) =>
        item.productId === id ? { ...item, ...updater(item) } : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,setCart,
        addToCart,
        removeFromCart,
        updateCartItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};


// import React, { createContext, useContext, useState, useEffect } from "react";
// import axios from "axios";

// const CartContext = createContext();

// export const useCart = () => useContext(CartContext);

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     const token = sessionStorage.getItem("token");
//     if (token) {
//       fetchCart(token);
//     }
//   }, []);

//   // Fetch cart items from the backend
//   const fetchCart = async (token) => {
//     try {
//       const response = await axios.get("http://localhost:5002/api/cart", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setCart(response.data.items);
//     } catch (error) {
//       console.error("Error fetching cart:", error);
//     }
//   };

//   // Add item to cart
//   const addToCart = async (item) => {
//     setCart((prev) => [...prev, item]);
//     // Optional: Sync with backend if needed
//   };

//   // Remove item from cart
//   const removeFromCart = (id) => {
//     setCart((prev) => prev.filter((item) => item.productId !== id));
//     // Optional: Sync with backend if needed
//   };

//   // Update cart item quantity
//   const updateCartItemQuantity = (id, updater) => {
//     setCart((prev) =>
//       prev.map((item) =>
//         item.productId === id ? { ...item, ...updater(item) } : item
//       )
//     );
//     // Optional: Sync with backend if needed
//   };

//   // Clear cart function
//   const clearCart = () => setCart([]);

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         setCart,
//         fetchCart,
//         addToCart,
//         removeFromCart,
//         updateCartItemQuantity,
//         clearCart, // Added clearCart function here
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };
