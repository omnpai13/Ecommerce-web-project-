import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {/* HEADER BAR */}
      <header className="flex items-center px-6 py-4 border-b bg-white">
        
        {/* MENU BUTTON (CUSTOMER ONLY) */}
        {!isAdminRoute && (
          <button
            onClick={() => setOpen(true)}
            className="text-sm font-medium"
          >
            ☰
          </button>
        )}

        {/* BRAND (ALWAYS VISIBLE) */}
        <Link
          to="/"
          className="mx-auto text-lg font-semibold tracking-widest"
        >
          9•5 EDIT
        </Link>

        {/* RIGHT ICONS (CUSTOMER ONLY) */}
        {!isAdminRoute && (
          <div className="flex items-center gap-6">
            
            {/* FAVOURITES */}
            <Link to="/favourites" className="hover:opacity-70">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5
                     -1.935 0-3.597 1.126-4.312 2.733
                     -.715-1.607-2.377-2.733-4.313-2.733
                     C5.1 3.75 3 5.765 3 8.25
                     c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </Link>

            {/* CART */}
            <Link to="/cart" className="hover:opacity-70">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386
                     c.51 0 .955.343 1.087.835L6.75 12.75
                     a2.25 2.25 0 002.25 1.75h7.5
                     a2.25 2.25 0 002.25-1.75l1.386-6.25
                     H6.164"
                />
                <circle cx="9" cy="19" r="1.5" />
                <circle cx="18" cy="19" r="1.5" />
              </svg>
            </Link>

          </div>
        )}
      </header>

      {/* LEFT SLIDE MENU (CUSTOMER ONLY) */}
      {!isAdminRoute && (
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
          <nav className="flex flex-col gap-4 p-6 text-sm">
            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
            <Link to="/products" onClick={() => setOpen(false)}>Products</Link>
            <Link to="/about" onClick={() => setOpen(false)}>About</Link>
            <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </>
  );
}
