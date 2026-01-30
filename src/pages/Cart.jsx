import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  const placeOrder = async () => {
    const orderData = {
      items: cartItems.map((item) => ({
        product: item.product._id,
        quantity: item.qty,
        price: item.product.price,
      })),
      totalPrice: cartItems.reduce(
        (sum, item) => sum + item.product.price * item.qty,
        0
      ),
    };

    await fetch("http://localhost:5003/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderData),
    });

    localStorage.removeItem("cart");
    navigate("/");
  };

  if (cartItems.length === 0)
    return <p className="p-8">Cart is empty</p>;

  return (
    <section className="px-8 py-16">
      <h2 className="text-2xl font-medium mb-6">Your Cart</h2>

      {cartItems.map((item) => (
        <div
          key={item.product._id}
          className="flex justify-between border-b py-4"
        >
          <p>{item.product.name}</p>
          <p>₹{item.product.price}</p>
        </div>
      ))}

      <button
        onClick={placeOrder}
        className="mt-6 bg-black text-white px-6 py-2"
      >
        Place Order
      </button>
    </section>
  );
}
