import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5003/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error(err));
  }, [id]);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingItem = cart.find(
      (item) => item.product._id === product._id
    );

    if (existingItem) {
      existingItem.qty += 1;
    } else {
      cart.push({
        product,
        qty: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    navigate("/cart");
  };

  if (!product) return <p>Loading...</p>;

  return (
    <section className="px-8 py-16 grid md:grid-cols-2 gap-10">
      <div className="w-full h-96 bg-gray-200">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div>
        <h1 className="text-3xl font-medium">{product.name}</h1>
        <p className="text-gray-500 mt-2">₹{product.price}</p>
        <p className="mt-6">{product.description}</p>

        <button
          onClick={addToCart}
          className="mt-6 bg-black text-white px-6 py-2"
        >
          Add to Cart
        </button>
      </div>
    </section>
  );
}
