import React from "react";

const FilterSidebar = ({ className = "" }) => {
  return (
    <aside className={`space-y-10 h-fit ${className}`}>
      {/* Categories */}
      <section>
        <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#A4907C] mb-5">
          Categories
        </h3>
        <ul className="space-y-4 text-sm text-taupe-dark font-medium">
          <li>
            <button className="flex justify-between items-center w-full group hover:text-gold transition-colors">
              <span>All Pieces</span>
              <span className="text-[#A4907C] text-[10px] font-bold">(86)</span>
            </button>
          </li>
          <li>
            <button className="flex justify-between items-center w-full group hover:text-gold transition-colors">
              <span>Dresses</span>
              <span className="text-[#A4907C] text-[10px] font-bold">(24)</span>
            </button>
          </li>
          <li>
            <button className="flex justify-between items-center w-full group hover:text-gold transition-colors transition-colors">
              <span>Knitwear</span>
              <span className="text-[#A4907C] text-[10px] font-bold">(12)</span>
            </button>
          </li>
          <li>
            <button className="flex justify-between items-center w-full group hover:text-gold transition-colors">
              <span>Outerwear</span>
              <span className="text-[#A4907C] text-[10px] font-bold">(18)</span>
            </button>
          </li>
          <li>
            <button className="flex justify-between items-center w-full group hover:text-gold transition-colors">
              <span>Tailoring</span>
              <span className="text-[#A4907C] text-[10px] font-bold">(15)</span>
            </button>
          </li>
        </ul>
      </section>

      {/* Price Range */}
      <section>
        <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#A4907C] mb-5">
          Price Range
        </h3>
        <div className="px-2">
          <input
            type="range"
            min="0"
            max="1000"
            className="w-full accent-gold h-1 bg-[#EBE5DE] rounded-full appearance-none cursor-pointer"
          />
          <div className="flex justify-between mt-3 text-[10px] font-bold text-taupe tracking-wider">
            <span>$0</span>
            <span>$1000+</span>
          </div>
        </div>
      </section>

      {/* Size Selection */}
      <section>
        <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#A4907C] mb-5">
          Size
        </h3>
        <div className="grid grid-cols-4 gap-2">
          {["XS", "S", "M", "L", "XL"].map((size) => (
            <button
              key={size}
              className={`h-10 border border-[#DCD3C9] text-[10px] font-bold hover:border-taupe transition-all rounded-sm flex items-center justify-center ${size === 'M' ? 'bg-taupe text-white border-taupe' : 'text-taupe-dark'}`}
            >
              {size}
            </button>
          ))}
        </div>
      </section>

      {/* Color Palette */}
      <section>
        <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#A4907C] mb-5">
          Color Palette
        </h3>
        <div className="flex flex-wrap gap-3">
          {[
            { color: "#E5E5E5", active: true },
            { color: "#2C2C2C", active: false },
            { color: "#8D7B68", active: false },
            { color: "#D4C3B2", active: false },
            { color: "#243E36", active: false },
          ].map((c, i) => (
            <button
              key={i}
              className={`w-6 h-6 rounded-full border border-[#DCD3C9] transition-all hover:scale-110 ${c.active ? 'ring-offset-2 ring-1 ring-gold' : ''}`}
              style={{ backgroundColor: c.color }}
            />
          ))}
        </div>
      </section>

      {/* Material */}
      <section>
        <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#A4907C] mb-5">
          Material
        </h3>
        <div className="space-y-3">
          {["Organic Cotton", "Fine Linen", "Recycled Silk", "Virgin Wool"].map((mat, i) => (
            <label key={i} className="flex items-center gap-3 text-sm cursor-pointer group">
              <input
                type="checkbox"
                className="accent-taupe w-4 h-4 border-[#DCD3C9] rounded-sm"
                defaultChecked={mat === 'Fine Linen'}
              />
              <span className="text-taupe group-hover:text-gold transition-colors text-xs font-medium tracking-wide">
                {mat}
              </span>
            </label>
          ))}
        </div>
      </section>
    </aside>
  );
};

export default FilterSidebar;
