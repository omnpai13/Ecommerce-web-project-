import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Home() {
  const [homeData, setHomeData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5003/api/home")
      .then((res) => res.json())
      .then((data) => setHomeData(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        {homeData?.heroImage && (
          <img
            src={homeData.heroImage}
            alt="Hero"
            className="w-full h-full object-cover object-center"
          />
        )}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Center CTA */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Link
            to="/products"
            className="
              border border-white/80
              text-white
              px-12 py-3
              uppercase
              tracking-[0.3em]
              text-xs
              backdrop-blur-sm
              hover:bg-white
              hover:text-black
              transition-all
              duration-300
            "
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* ===== SHOP OUR EDITS SECTION ===== */}
      <section className="px-12 py-24 bg-white">
        <h2 className="text-2xl font-medium tracking-wide mb-12">
          Shop Our Edits
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {homeData?.edits?.map((item, index) => (
            <div key={index} className="cursor-pointer">
              <div className="w-full h-[420px] bg-gray-100 mb-4 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm font-medium">{item.title}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
