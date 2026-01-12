import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Checkout() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-8 pt-24 pb-32 grid md:grid-cols-2 gap-16">
      
      {/* LEFT: SHIPPING FORM */}
      <div>
        <h2 className="text-3xl font-light mb-10">Checkout</h2>

        {cart.length === 0 ? (
          <div>
            <p className="text-gray-600">No items in cart</p>
            <Link to="/products" className="underline mt-4 inline-block">
              Go Shopping
            </Link>
          </div>
        ) : (
          <form className="space-y-4 max-w-md">
            <input className="border p-3 w-full" placeholder="Full Name" />
            <input className="border p-3 w-full" placeholder="Email" />
            <input className="border p-3 w-full" placeholder="Address" />
            <input className="border p-3 w-full" placeholder="City" />
            <input className="border p-3 w-full" placeholder="Pincode" />

            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                localStorage.removeItem("cart");
                setCart([]);
                alert("Order placed successfully");
              }}
              className="border border-black px-10 py-3 uppercase tracking-widest hover:bg-black hover:text-white transition"
            >
              Place Order
            </button>
          </form>
        )}
      </div>

      {/* RIGHT: ORDER SUMMARY */}
      <div>
        <h3 className="text-xl font-medium mb-6">Order Summary</h3>

        {cart.length === 0 ? (
          <p className="text-gray-600">Nothing to show</p>
        ) : (
          <div className="space-y-6">
            {cart.map((item, index) => (
              <div key={index} className="border-b pb-4">
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-600">
                  Size: {item.size} | Qty: {item.qty}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

    </section>
  );
}
