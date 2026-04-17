import React, { useState } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import ProductCard from "../components/ProductCard";
import FilterSidebar from "../components/FilterSidebar";

const ProductDashboard = () => {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [products] = useState([
    {
      id: 1,
      name: "Serene Linen Wrap",
      price: 285.0,
      rating: 4.9,
      reviews: 42,
      category: "Fine Linen Edition",
      isNew: true,
      image: "https://images.unsplash.com/photo-1515347669655-10ddd2b51787?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      name: "Cashmere Cloud Knit",
      price: 340.0,
      rating: 5.0,
      reviews: 18,
      category: "Premium Knitwear",
      isNew: false,
      image: "https://images.unsplash.com/photo-1604176354204-926873ff34b1?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 3,
      name: "Noir Silk Silhouette",
      price: 210.0,
      rating: 4.8,
      reviews: 56,
      category: "Silk Archives",
      isNew: false,
      image: "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 4,
      name: "Tailored Terra Pant",
      price: 195.0,
      rating: 4.7,
      reviews: 29,
      category: "Core Tailoring",
      isNew: false,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 5,
      name: "Sculpted Wool Overcoat",
      price: 520.0,
      rating: 4.9,
      reviews: 12,
      category: "Outerwear Select",
      isNew: true,
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 6,
      name: "Architectural Blazer",
      price: 390.0,
      rating: 4.9,
      reviews: 31,
      category: "Tailoring Series",
      isNew: false,
      image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=800",
    },
  ]);

  return (
    <div className="min-h-screen bg-cream flex flex-col font-satoshi">
      {/* Shared Navbar */}
      <Navbar />

      <main className="flex-1 max-w-[1440px] mx-auto w-full px-4 sm:px-6 py-6 md:py-10">
        {/* Breadcrumbs & Title */}
        <div className="mb-8 md:mb-12">
        
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 border-b border-[#DCD3C9] pb-6 md:pb-8">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight font-gambetta text-taupe-dark">
                Essential Edit
              </h1>
              <p className="mt-3 md:mt-4 text-taupe font-light max-w-lg text-sm md:text-base">
                A capsule collection of foundational pieces crafted from premium natural fibers. Designed for longevity and refined silhouettes.
              </p>
            </div>
            
            <div className="flex items-center gap-4 border border-[#DCD3C9] py-2.5 md:py-3 px-5 md:px-6 rounded-full w-fit hover:border-gold transition-colors">
              <span className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-[#A4907C]">Sort By</span>
              <select className="bg-transparent border-none focus:ring-0 text-xs md:text-sm font-semibold text-taupe-dark cursor-pointer outline-none">
                <option>Newest Arrivals</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Most Popular</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex gap-10 lg:gap-16 relative">
          {/* Sidebar Filters - Desktop */}
          <FilterSidebar className="w-64 hidden lg:block flex-shrink-0 sticky top-32" />

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 md:gap-x-10 md:gap-y-16">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Pagination / Load More */}
            <div className="mt-16 md:mt-24 flex flex-col items-center gap-6 md:gap-8">
              <div className="flex flex-col items-center gap-3 md:gap-4">
                <p className="text-[9px] md:text-xs text-taupe font-light tracking-wide uppercase">
                  Showing 6 of 86 products
                </p>
                <div className="w-48 md:w-64 h-0.5 bg-[#EBE5DE] rounded-full overflow-hidden">
                  <div className="w-[7%] h-full bg-taupe"></div>
                </div>
              </div>
              
              <button className="w-full sm:w-auto px-12 md:px-16 py-4 md:py-5 border border-[#DCD3C9] text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] font-bold hover:bg-taupe hover:text-white hover:border-taupe transition-all duration-500 rounded-sm">
                Explore More
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Shared Footer */}
      <Footer />

      {/* Mobile Filter Trigger */}
      <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <button 
          onClick={() => setIsMobileFilterOpen(true)}
          className="bg-taupe-dark text-white px-8 md:px-10 py-4 md:py-5 rounded-full flex items-center gap-3 shadow-[0_20px_40px_rgba(0,0,0,0.3)] tracking-widest text-[9px] md:text-[10px] font-bold uppercase active:scale-95 transition-transform"
        >
          <iconify-icon icon="lucide:sliders-horizontal" style={{fontSize: '18px'}}></iconify-icon>
          Filters & Sort
        </button>
      </div>

      {/* Mobile Filter Drawer Overlay */}
      {isMobileFilterOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] lg:hidden"
          onClick={() => setIsMobileFilterOpen(false)}
        />
      )}

      {/* Mobile Filter Drawer Content */}
      <div 
        className={`fixed top-0 right-0 h-full w-[85%] max-w-[400px] bg-white z-[101] shadow-2xl transition-transform duration-500 ease-in-out lg:hidden overflow-y-auto ${
          isMobileFilterOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-8 pb-32">
          <div className="flex justify-between items-center mb-10 border-b border-[#F5F1EB] pb-6">
            <h2 className="text-xl font-medium font-gambetta text-taupe-dark">Filters</h2>
            <button 
              onClick={() => setIsMobileFilterOpen(false)}
              className="p-2 text-taupe hover:text-taupe-dark"
            >
              <iconify-icon icon="lucide:x" style={{fontSize: '24px'}}></iconify-icon>
            </button>
          </div>
          
          <FilterSidebar className="block h-auto" />

          <div className="fixed bottom-0 left-0 right-0 p-6 bg-white border-t border-[#F5F1EB] flex gap-4">
            <button 
              className="flex-1 py-4 border border-[#DCD3C9] text-[9px] uppercase tracking-widest font-bold text-taupe-dark"
              onClick={() => setIsMobileFilterOpen(false)}
            >
              Clear All
            </button>
            <button 
              className="flex-[2] py-4 bg-taupe-dark text-white text-[9px] uppercase tracking-widest font-bold"
              onClick={() => setIsMobileFilterOpen(false)}
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDashboard;
