import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card group cursor-pointer">
      {/* Product Image Container */}
      <div className="image-zoom aspect-[3/4] bg-[#F5F1EB] mb-6 relative overflow-hidden">
        <img
          src={product.image || "https://images.unsplash.com/photo-1515347669655-10ddd2b51787?auto=format&fit=crop&q=80&w=800"}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Quick Add Overlay */}
        <div className="absolute bottom-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <button className="bg-white/90 backdrop-blur shadow-lg w-10 h-10 rounded-full flex items-center justify-center text-taupe-dark hover:bg-taupe hover:text-white transition-all transform hover:scale-110 active:scale-95">
            <iconify-icon icon="lucide:plus" style={{fontSize: '18px'}}></iconify-icon>
          </button>
        </div>

        {/* Badge Placeholder (e.g., New Arrival, Limited) */}
        {product.isNew && (
          <div className="absolute top-4 left-4">
            <span className="bg-gold text-white text-[9px] uppercase tracking-widest px-2 py-1 font-bold">New</span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-1 md:space-y-1.5">
        <div className="flex justify-between items-start gap-2">
          <h3 className="serif text-lg md:text-xl font-medium font-gambetta group-hover:text-gold transition-colors leading-tight">
            {product.name}
          </h3>
          <div className="flex items-center gap-1 text-[9px] md:text-[10px] text-gold shrink-0">
            <iconify-icon icon="material-symbols:star" style={{fontSize: '12px'}}></iconify-icon>
            <span className="text-[#A4907C] font-bold">{product.rating || "4.9"}</span>
          </div>
        </div>
        
        <p className="text-[9px] md:text-[10px] text-[#A4907C] uppercase tracking-widest font-bold">
          {product.category || "Fine Linen Edition"}
        </p>
        
        <div className="flex items-center gap-3 pt-0.5 md:pt-1">
          <span className="text-base md:text-lg font-medium text-gold font-satoshi">
            ${product.price ? product.price.toFixed(2) : "285.00"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
