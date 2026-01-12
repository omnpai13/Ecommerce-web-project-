import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-8 pt-24 pb-32">
      <h2 className="text-3xl font-light mb-12">Your Cart</h2>

      {cart.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-600">Your cart is empty</p>
          <Link to="/products" className="underline mt-4 inline-block">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="space-y-10">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex items-start justify-between border-b pb-8"
              >
                <div>
                  <p className="font-medium text-lg">{item.name}</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Size: {item.size}
                  </p>

                  <p className="mt-2">Qty: {item.qty}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <Link
              to="/checkout"
              className="inline-block border border-black px-12 py-3 uppercase tracking-widest text-sm hover:bg-black hover:text-white transition"
            >
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </section>
  );
}
