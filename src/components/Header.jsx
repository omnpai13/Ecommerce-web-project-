import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative w-full border-b px-6 py-5">
      <div className="flex items-center justify-between">
        
        {/* Menu */}
        <button
          onClick={() => setOpen(!open)}
          className="text-xs uppercase tracking-widest"
        >
          Menu
        </button>

        {/* Brand */}
        <h1 className="text-sm font-semibold tracking-widest">
          9•5 EDIT
        </h1>

        {/* Spacer */}
        <div className="w-10"></div>
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute top-14 left-6 bg-white border p-4 space-y-3 z-10">
          <Link to="/" className="block text-sm hover:opacity-60">Home</Link>
          <Link to="/products" className="block text-sm hover:opacity-60">Products</Link>
          <Link to="/about" className="block text-sm hover:opacity-60">About</Link>
          <Link to="/contact" className="block text-sm hover:opacity-60">Contact</Link>
        </div>
      )}
    </header>
  );
}
<header className="w-full border-b border-black px-8 py-6">
  Header
</header>
