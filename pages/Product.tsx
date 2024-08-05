"use client";
import React, { useState, useContext } from "react";
import { useCart } from "./CartContext";
import styles from './product.module.css';
import Notification from '../components/Notification'; // Import the Notification component
import { UserContext } from '../contexts/user.context';
interface ProductProps {
  product: Product;
}

const Product: React.FC<ProductProps> = ({ product }) => {
  const { addToCart, cart } = useCart();
  const [notification, setNotification] = useState({ message: '', type: '' });
  const { currentUser } = useContext(UserContext);
  const isProductInCart = cart.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    if (!currentUser) {
      setNotification({
        message: 'Please log in to add items to your cart.',
        type: 'error',
      });
    } else {
      addToCart(product);
      setNotification({
        message: 'Product added to cart!',
        type: 'success',
      });
    }
    setTimeout(() => {
      setNotification({ message: '', type: '' });
    }, 2000);
  };

return (
  <div className="border rounded-lg p-4 shadow-md">
    <p className="price">Total Amount: ${product.price}</p>
    <button
      onClick={handleAddToCart}
      disabled={isProductInCart}
      className={styles.product}
    >
      {isProductInCart ? "Added to Cart" : "Add to Cart"}
    </button>
    <Notification
      message={notification.message}
      type={notification.type}
    />
  </div>
);
};

export default Product;
