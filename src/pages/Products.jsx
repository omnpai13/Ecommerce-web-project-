import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5003/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="px-8 py-16">
      <h2 className="text-2xl font-medium mb-10">Shop All</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {products.map((product) => (
          <Link
            key={product._id}
            to={`/product/${product._id}`}
            className="text-sm"
          >
            <div className="w-full h-64 bg-gray-200 mb-3 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="font-medium">{product.name}</p>
            <p className="text-gray-500 mt-1">₹{product.price}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
