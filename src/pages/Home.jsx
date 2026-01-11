import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative h-screen overflow-hidden">
        
        {/* Background Image */}
        <img
          src="" // add your hero image later
          alt="Hero"
          className="w-full h-full object-cover object-center"
        />

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
        
        {/* Section Heading */}
        <h2 className="text-2xl font-medium tracking-wide mb-12">
          Shop Our Edits
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Product Card 1 */}
          <div className="cursor-pointer">
            <div className="w-full h-[420px] bg-gray-100 mb-4 overflow-hidden">
              {/* Replace src with product image */}
              <img
                src=""
                alt="Product 1"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm font-medium">Essential White Shirt</p>
            
          </div>

          {/* Product Card 2 */}
          <div className="cursor-pointer">
            <div className="w-full h-[420px] bg-gray-100 mb-4 overflow-hidden">
              <img
                src=""
                alt="Product 2"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm font-medium">Relaxed Cotton Tee</p>
            
          </div>

          {/* Product Card 3 */}
          <div className="cursor-pointer">
            <div className="w-full h-[420px] bg-gray-100 mb-4 overflow-hidden">
              <img
                src=""
                alt="Product 3"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm font-medium">Oversized Work Shirt</p>
        
          </div>

        </div>
      </section>
    </>
  );
}
