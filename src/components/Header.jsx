import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* HEADER BAR */}
      <header className="flex items-center px-6 py-4 border-b">
        
        {/* MENU BUTTON */}
        <button
          onClick={() => setOpen(true)}
          className="text-sm font-medium"
        >
          ☰
        </button>

        <Link to="/" className="mx-auto text-lg font-semibold">
  9•5 EDIT
</Link>


        {/* ICONS (ADDED) */}
        <div className="flex items-center gap-4">
          <Link to="/favourites" className="text-lg">
            ♡
          </Link>
          <Link to="/cart" className="text-lg">
            🛒
          </Link>
        </div>

      </header>

      {/* LEFT SLIDE MENU */}
      <div
        className={`
          fixed top-0 left-0 h-full w-64 bg-white border-r
          transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}
          z-50
        `}
      >
        {/* CLOSE */}
        <div className="p-4">
          <button
            onClick={() => setOpen(false)}
            className="text-sm"
          >
            ✕
          </button>
        </div>

        {/* LINKS */}
        <nav className="flex flex-col gap-4 p-6">
          <Link to="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link to="/products" onClick={() => setOpen(false)}>
            Products
          </Link>
          <Link to="/about" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link to="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </nav>
      </div>
    </>
  );
}
