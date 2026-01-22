import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Productdetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // SAFETY GUARD
  if (!id) {
    return <div className="pt-24 text-center">Product not found</div>;
  }

  const productId = String(id);

  const [activeImage, setActiveImage] = useState(0);
  const [size, setSize] = useState("M");
  const [qty, setQty] = useState(1);
  const [inCart, setInCart] = useState(false);
  const [inFav, setInFav] = useState(false);

  const product = {
    id: productId,
    name: "Essential White Shirt",
    images: [
      "https://via.placeholder.com/600x800?text=Product+1",
      "https://via.placeholder.com/600x800?text=Product+2",
    ],
    size,
    qty,
  };

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const fav = JSON.parse(localStorage.getItem("favourites")) || [];

    setInCart(cart.some(item => String(item.id) === productId));
    setInFav(fav.some(item => String(item.id) === productId));
  }, [productId]);

  const toggleCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.some(item => String(item.id) === productId)) {
      cart = cart.filter(item => String(item.id) !== productId);
      setInCart(false);
    } else {
      cart.push(product);
      setInCart(true);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const toggleFav = () => {
    let fav = JSON.parse(localStorage.getItem("favourites")) || [];

    if (fav.some(item => String(item.id) === productId)) {
      fav = fav.filter(item => String(item.id) !== productId);
      setInFav(false);
    } else {
      fav.push(product);
      setInFav(true);
    }

    localStorage.setItem("favourites", JSON.stringify(fav));
  };

  const buyNow = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    navigate("/checkout");
  };

  return (
    <section className="max-w-6xl mx-auto px-8 pt-24 pb-32 grid md:grid-cols-2 gap-16">
      {/* IMAGES */}
      <div>
        <div className="h-[520px] mb-6">
          <img
            src={product.images[activeImage]}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex gap-4">
          {product.images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveImage(i)}
              className={`w-24 h-24 border ${
                activeImage === i ? "border-black" : "border-gray-300"
              }`}
            >
              <img src={img} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* DETAILS */}
      <div>
        <h1 className="text-3xl mb-6">{product.name}</h1>

        <div className="mb-6">
          <p className="mb-2">Size</p>
          <div className="flex gap-3">
            {["S", "M", "L", "XL"].map(s => (
              <button
                key={s}
                onClick={() => setSize(s)}
                className={`border px-4 py-2 ${
                  size === s ? "border-black" : "border-gray-300"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <p className="mb-2">Quantity</p>
          <div className="flex gap-4 items-center">
            <button onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
            <span>{qty}</span>
            <button onClick={() => setQty(qty + 1)}>+</button>
          </div>
        </div>

        <div className="flex flex-col gap-4 max-w-sm">
          <button onClick={toggleCart} className="border py-3">
            {inCart ? "Remove from Cart" : "Add to Cart"}
          </button>

          <button onClick={buyNow} className="bg-black text-white py-3">
            Buy Now
          </button>

          <button onClick={toggleFav}>
            {inFav ? "❤️ Remove Favourite" : "♡ Add to Favourite"}
          </button>
        </div>
      </div>
    </section>
  );
}