import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-[#DCD3C9] pt-10 pb-5">
      <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Column */}
        <div className="col-span-1">
          <Link
            to="/"
            className="text-xl font-semibold tracking-tighter mb-6 block uppercase font-satoshi"
          >
            ESSENTIA LUX
          </Link>
          <p className="text-sm text-taupe leading-relaxed font-light max-w-xs">
            Curating timeless silhouettes with a conscious approach to modern
            dressing. Refinement in every thread.
          </p>
        </div>

        {/* Studio Column */}
        <div>
          <h4 className="text-[10px] uppercase tracking-widest font-bold text-taupe-dark mb-6">
            Studio
          </h4>
          <ul className="space-y-4 text-sm text-taupe font-light">
            <li>
              <Link to="/about" className="hover:text-gold transition-colors">
                Our Story
              </Link>
            </li>
            <li>
              <Link to="/sustainability" className="hover:text-gold transition-colors">
                Sustainability
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gold transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/careers" className="hover:text-gold transition-colors">
                Careers
              </Link>
            </li>
          </ul>
        </div>

        {/* Care Column */}
        <div>
          <h4 className="text-[10px] uppercase tracking-widest font-bold text-taupe-dark mb-6">
            Care
          </h4>
          <ul className="space-y-4 text-sm text-taupe font-light">
            <li>
              <Link to="/shipping" className="hover:text-gold transition-colors">
                Shipping
              </Link>
            </li>
            <li>
              <Link to="/returns" className="hover:text-gold transition-colors">
                Returns
              </Link>
            </li>
            <li>
              <Link to="/size-guide" className="hover:text-gold transition-colors">
                Size Guide
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-gold transition-colors">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div>
          <h4 className="text-[10px] uppercase tracking-widest font-bold text-taupe-dark mb-6">
            Keep in touch
          </h4>
          <div className="flex gap-4 border-b border-[#DCD3C9] pb-2 group focus-within:border-gold transition-colors">
            <input
              type="email"
              placeholder="Email address"
              className="bg-transparent border-none focus:ring-0 text-sm p-0 w-full placeholder:text-[#D1C7BD] outline-none"
            />
            <button className="text-taupe hover:text-gold transition-colors">
              <iconify-icon icon="lucide:arrow-right"></iconify-icon>
            </button>
          </div>
          
          <div className="flex gap-6 mt-10">
            <a href="#" className="text-taupe hover:text-taupe-dark transition-colors">
              <iconify-icon icon="lucide:instagram" style={{fontSize: '18px'}}></iconify-icon>
            </a>
            <a href="#" className="text-taupe hover:text-taupe-dark transition-colors">
              <iconify-icon icon="lucide:twitter" style={{fontSize: '18px'}}></iconify-icon>
            </a>
            <a href="#" className="text-taupe hover:text-taupe-dark transition-colors">
              <iconify-icon icon="lucide:facebook" style={{fontSize: '18px'}}></iconify-icon>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1440px] mx-auto px-6 mt-8 pt-8 border-t border-[#F5F1EB] flex flex-col md:flex-row justify-between items-center text-[9px] uppercase tracking-[0.2em] text-[#A4907C] font-bold gap-4">
        <span>&copy; 2024 Essentia Lux. All rights reserved.</span>
        <div className="flex gap-8">
          <Link to="/privacy" className="hover:text-taupe-dark">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-taupe-dark">Terms of Service</Link>
          <Link to="/cookies" className="hover:text-taupe-dark">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
