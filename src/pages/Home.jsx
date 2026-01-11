import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="relative h-screen overflow-hidden">
      
      
 
      {/* Background Image */}
      <img
        src=""
        alt="Hero"
        className="w-full h-full object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Center CTA */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Link
          to="/products"
          clssName="
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
  );
}
