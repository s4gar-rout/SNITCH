import React, { useState } from "react";
import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { toggleCart } from "../features/cart/state/cart.slice";
import UserProfile from "./UserProfile";

const Navbar = () => {
  const dispatch = useDispatch();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Collections", path: "/" },
    { name: "Stories", path: "/stories" },
    { name: "Archive", path: "/archive" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#DCD3C9]">
      <div className="max-w-[1440px] mx-auto px-6 h-17 flex items-center justify-between">
        <div className="flex items-center gap-6 lg:gap-12">
          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-taupe-dark p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <iconify-icon 
              icon={isMobileMenuOpen ? "lucide:x" : "lucide:menu"} 
              style={{ fontSize: "24px" }}
            ></iconify-icon>
          </button>

          {/* Logo */}
          <Link
            to="/"
            className="text-xl md:text-2xl font-semibold tracking-tighter flex items-center gap-2 font-satoshi"
          >
            <span className="w-8 h-8 rounded-full bg-taupe flex items-center justify-center text-white text-xs">
              E
            </span>
            <span className="hidden xs:inline">ESSENTIA</span>
          </Link>

          {/* Nav Links - Desktop */}
          <nav className="hidden lg:flex items-center gap-8 text-[10px] uppercase tracking-[0.2em] font-bold">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="underline-animate text-taupe-dark hover:text-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Search Bar Placeholder */}
        <div className="flex-1 max-w-md mx-6 lg:mx-12 hidden md:block">
          <div className="relative group">
            <iconify-icon
              icon="lucide:search"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A4907C] group-focus-within:text-gold transition-colors"
            ></iconify-icon>
            <input
              type="text"
              placeholder="Search our collection..."
              className="w-full bg-[#F5F1EB] border border-transparent rounded-full py-2.5 pl-11 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-gold/20 focus:border-gold transition-all placeholder:text-[#D1C7BD]"
            />
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4 md:gap-6">
          <button className="md:hidden text-taupe hover:text-taupe-dark transition-colors flex items-center">
            <iconify-icon
              icon="lucide:search"
              style={{ fontSize: "20px" }}
            ></iconify-icon>
          </button>
          <Link
            to="/login"
            className="text-taupe hover:text-taupe-dark transition-colors flex items-center"
          >
            <iconify-icon
              icon="lucide:user"
              style={{ fontSize: "20px" }}
            ></iconify-icon>
          </Link>
          <button className="hidden sm:flex text-taupe hover:text-taupe-dark transition-colors items-center">
            <iconify-icon
              icon="lucide:heart"
              style={{ fontSize: "20px" }}
            ></iconify-icon>
          </button>
          <Link
            to="/cart"
            className="relative text-taupe hover:text-taupe-dark transition-colors flex items-center"
          >
            <iconify-icon
              icon="lucide:shopping-bag"
              style={{ fontSize: "20px" }}
            ></iconify-icon>
            <span className="absolute -top-2 -right-2 bg-gold text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              2
            </span>
          </Link>
          
          <div className="h-6 w-[1px] bg-[#DCD3C9] mx-2 hidden lg:block" />
          
          <div className="hidden xs:block">
            <UserProfile />
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 top-20 bg-white z-40 transition-transform duration-500 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col p-10 gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-2xl font-medium font-gambetta text-taupe-dark hover:text-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="h-[1px] bg-[#DCD3C9] w-full my-4" />
          <Link 
            to="/login" 
            className="text-sm uppercase tracking-widest font-bold text-taupe hover:text-gold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Account
          </Link>
          <button className="text-sm uppercase tracking-widest font-bold text-taupe hover:text-gold text-left">
            Wishlist
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
