import { Link } from "react-router-dom";
import products from "../data/products";

export default function Products() {
  return (
    <section className="px-8 py-16">
      <h2 className="text-2xl font-medium mb-10">Shop All</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {products.map(product => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}   // ✅ FIXED
            className="text-sm"
          >
            <div className="w-full h-64 bg-gray-200 mb-3"></div>

            <p className="font-medium">{product.name}</p>
            <p className="text-gray-500 mt-1">₹{product.price}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
