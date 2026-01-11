import { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products"; // make sure each product has id, name, price, description, images: []

const sizes = ["XXS", "XS", "S", "M", "L", "XL", "XXL"];

const Productdetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  const [selectedSize, setSelectedSize] = useState("XS");
  const [quantity, setQuantity] = useState(1);
  const [mainImageIndex, setMainImageIndex] = useState(0);

  if (!product) {
    return <p className="p-8 text-center">Product not found</p>;
  }

  const handleAddToCart = () => {
    console.log("Add to Cart clicked", {
      productId: product.id,
      selectedSize,
      quantity,
    });
  };

  const handleBuyNow = () => {
    console.log("Buy Now clicked", {
      productId: product.id,
      selectedSize,
      quantity,
    });
  };

  return (
    <div className="flex flex-col md:flex-row gap-10 p-8">
      {/* Images Section */}
      <div className="flex flex-col md:w-1/2 gap-4">
        <img
          src={product.images[mainImageIndex]}
          alt={product.name}
          className="w-full h-[400px] object-cover rounded"
        />
        <div className="flex gap-2">
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${product.name}-${index}`}
              className={`w-20 h-20 object-cover rounded cursor-pointer border ${
                mainImageIndex === index ? "border-black" : "border-gray-300"
              }`}
              onClick={() => setMainImageIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Product Info Section */}
      <div className="md:w-1/2 flex flex-col gap-4">
        <h1 className="text-3xl font-semibold">{product.name}</h1>
        <p className="text-xl text-gray-700">Rs. {product.price}</p>
        <p className="text-gray-500 text-sm">Tax included. Shipping calculated at checkout.</p>
        <p className="text-gray-500 text-sm">{product.description}</p>

        {/* Sizes */}
        <div className="mt-4">
          <p className="font-medium mb-2">Size</p>
          <div className="flex gap-2 flex-wrap">
            {sizes.map(size => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-3 py-1 border rounded ${
                  selectedSize === size ? "bg-black text-white" : "bg-white text-black border-gray-300"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity */}
        <div className="mt-4">
          <p className="font-medium mb-2">Quantity</p>
          <div className="flex items-center gap-2 border w-fit rounded px-2">
            <button
              onClick={() => setQuantity(prev => Math.max(prev - 1, 1))}
              className="px-2 py-1"
            >
              −
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity(prev => prev + 1)}
              className="px-2 py-1"
            >
              +
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col gap-3">
          <button
            onClick={handleAddToCart}
            className="px-6 py-3 border border-black rounded font-medium"
          >
            Add to Cart
          </button>
          <button
            onClick={handleBuyNow}
            className="px-6 py-3 bg-green-300 rounded font-medium"
          >
            Buy it now
          </button>
          <button
            onClick={() => console.log("Add to Wishlist clicked", product.id)}
            className="px-6 py-3 border border-black rounded font-medium flex items-center justify-center gap-2"
          >
            ♥ Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Productdetails;
