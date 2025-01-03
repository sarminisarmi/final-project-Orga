



import React, { useEffect } from 'react';
import { useCart } from '../context/cartcontextprovider';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../components/CartPage.css';

const CartPage = () => {
  const { cart, setCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const token = sessionStorage.getItem('token');
        if (!token) {
          console.error('No token found. Please log in.');
          setCart([]);
          return;
        }

        const response = await axios.get('http://localhost:5002/api/cart', {
          headers: { Authorization: `Bearer ${token}` },
        });

        const items = response.data.items.map((item) => ({
          _id: item._id,
          productId: item.productId._id,
          name: item.productId.name,
          price: item.productId.price,
          quantity: item.quantity,
        }));

        setCart(items); // Update cart state
      } catch (error) {
        console.error('Error fetching cart items:', error);
        setCart([]); // Fetching 
      }
    };

    fetchCartItems();
  }, [setCart]);

  const handleCheckout = () => {
    navigate('/order', { state: { cart, totalPrice: getTotalCartAmount() } });
  };

  const removeFromCart = async (id) => {
    try {
      const token = sessionStorage.getItem('token');
      await axios.delete(`http://localhost:5002/api/cart/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setCart((prevCart) => prevCart.filter((item) => item._id !== id));
    } catch (error) {
      console.error('Failed to remove item from cart:', error);
    }
  };

  const updateCartItemQuantity = async (productId, newQuantity) => {
    try {
      const token = sessionStorage.getItem('token');
      const response = await axios.put(
        `http://localhost:5002/api/cart/${productId}`,
        { quantity: newQuantity },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      // Update state based on the backend response
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.productId === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    } catch (error) {
      console.error('Failed to update quantity:', error.response?.data || error);
    }
  };

  const increaseQuantity = (id) => {
    const item = cart.find((item) => item.productId === id);
    if (item) {
      updateCartItemQuantity(id, item.quantity + 1);
    }
  };

  const decreaseQuantity = (id) => {
    const item = cart.find((item) => item.productId === id);
    if (item && item.quantity > 1) {
      updateCartItemQuantity(id, item.quantity - 1);
    }
  };

  const getTotalCartAmount = () => {
    return cart.reduce(
      (acc, item) => acc + (item.price || 0) * (item.quantity || 0),
      0
    );
  };

  if (!cart || cart.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <div className="cart-page">
      <h1 className="cart-title">Cart</h1>
      <main>
        <h2 className="cart-items-title">Items</h2>
        <table className="cart-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>₹{(item.price || 0).toFixed(2)}</td>
                <td>
                  <button
                    onClick={() => decreaseQuantity(item.productId)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span>{item.quantity || 0}</span>
                  <button onClick={() => increaseQuantity(item.productId)}>+</button>
                </td>
                <td>₹{((item.price || 0) * (item.quantity || 0)).toFixed(2)}</td>
                <td>
                  <button onClick={() => removeFromCart(item._id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 className="cart-totals-title">Cart Totals</h2>
        <div className="cart-totals">
          <div className="cart-subtotal">
            <span>Subtotal</span>
            <p>₹{getTotalCartAmount().toFixed(2)}</p>
          </div>
          <div className="cart-total">
            <span>Total</span>
            <b>₹{getTotalCartAmount().toFixed(2)}</b>
          </div>
        </div>

        <button className="checkout-btn" onClick={handleCheckout}>
          PROCEED TO CHECKOUT
        </button>
      </main>
    </div>
  );
};

export default CartPage;

