import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Favourites() {
  const [fav, setFav] = useState([]);

  useEffect(() => {
    const storedFav = JSON.parse(localStorage.getItem("favourites")) || [];
    setFav(storedFav);
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-8 pt-24 pb-32">
      <h2 className="text-3xl font-light mb-12">Favourites</h2>

      {fav.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-600">No favourites added</p>
          <Link to="/products" className="underline mt-4 inline-block">
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="space-y-8">
          {fav.map((item, index) => (
            <div key={index} className="border-b pb-6">
              <p className="font-medium">{item.name}</p>
              <Link
                to={`/product/${item.id}`}
                className="text-sm underline mt-2 inline-block"
              >
                View Product
              </Link>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
