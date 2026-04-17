import React, { useState } from "react";
import { Link, useParams } from "react-router";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import ProductCard from "../components/ProductCard";

const ProductDetail = () => {
  const { id } = useParams();

  // Mock product data (In a real app, you'd fetch this by ID)
  const product = {
    id: 1,
    name: "Serene Linen Wrap",
    price: 285.0,
    rating: 4.9,
    reviews: 42,
    category: "Fine Linen Edition",
    description:
      "Crafted from our signature heavyweight organic linen, the Serene Wrap Dress features an architectural silhouette that dances between structure and softness. Designed for the conscious wanderer, it effortlessly transitions from studio afternoons to archival gallery evenings.",
    images: [
      "https://images.unsplash.com/photo-1515347669655-10ddd2b51787?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1539109132314-34a77353979d?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1594932224828-b4b059b6ffc0?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=1600",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Bone Linen", value: "#F5F1EB" },
      { name: "Warm Slate", value: "#DCD3C9" },
      { name: "Deep Taupe", value: "#8D7B68" },
      { name: "Obsidian", value: "#2C2C2C" },
    ],
  };

  // State for gallery and selection
  const [currentImage, setCurrentImage] = useState(product.images[0]);
  const [selectedSize, setSelectedSize] = useState("S");
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);

  // Mock related products
  const relatedProducts = [
    {
      id: 2,
      name: "Cashmere Cloud Knit",
      price: 340.0,
      category: "Premium Knitwear",
      image:
        "https://images.unsplash.com/photo-1604176354204-926873ff34b1?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 3,
      name: "Noir Silk Silhouette",
      price: 210.0,
      category: "Silk Archives",
      image:
        "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 6,
      name: "Architectural Blazer",
      price: 390.0,
      category: "Tailoring Series",
      image:
        "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 5,
      name: "Sculpted Wool Overcoat",
      price: 520.0,
      category: "Outerwear Select",
      image:
        "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <div className="min-h-screen bg-cream flex flex-col font-satoshi">
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-10 py-6">
        {/* Breadcrumbs */}
        <nav className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.25em] text-[#A4907C] flex flex-wrap items-center gap-1.5 md:gap-3 mb-6 md:mb-8 font-bold">
          <Link to="/" className="hover:text-taupe-dark transition-colors">
            Home
          </Link>
          <iconify-icon
            icon="lucide:chevron-right"
            className="text-[8px]"
          ></iconify-icon>
          <Link to="/" className="hover:text-taupe-dark transition-colors">
            Collections
          </Link>
          <iconify-icon
            icon="lucide:chevron-right"
            className="text-[8px]"
          ></iconify-icon>
          <span className="text-taupe-dark">Essential Edit</span>
          <iconify-icon
            icon="lucide:chevron-right"
            className="text-[8px]"
          ></iconify-icon>
          <span className="text-taupe-dark font-black truncate max-w-[120px] md:max-w-none">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
          {/* Left: Gallery */}
          <div className="md:col-span-5 lg:col-span-12 xl:col-span-5 space-y-4 md:space-y-6">
             {/* Main Image */}
            <div className="bg-[#F5F1EB] aspect-[3/4] overflow-hidden rounded-sm relative group">
              <img
                src={currentImage}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-3 md:gap-4">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImage(img)}
                  className={`aspect-[3/4] bg-[#F5F1EB] rounded-sm overflow-hidden border-2 transition-all ${currentImage === img ? "border-taupe opacity-100" : "border-transparent opacity-60 hover:opacity-100"}`}
                >
                  <img src={img} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Info */}
          <div className="md:col-span-7 lg:col-span-12 xl:col-span-7 flex flex-col pt-0 md:pt-2">
            <div className="mb-6 md:mb-8">
              <div className="flex justify-between items-start mb-3 md:mb-2">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-taupe-dark font-gambetta leading-tight">
                  {product.name}
                </h1>
                <button className="p-2 text-taupe hover:text-gold transition-colors shrink-0">
                  <iconify-icon
                    icon="lucide:heart"
                    style={{ fontSize: "24px" }}
                  ></iconify-icon>
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-6">
                <span className="text-xl md:text-2xl font-medium text-gold font-satoshi">
                  ${product.price.toFixed(2)}
                </span>
                <div className="flex items-center gap-2">
                  <div className="flex text-gold text-xs md:text-sm">
                    {[...Array(5)].map((_, i) => (
                      <iconify-icon
                        key={i}
                        icon="material-symbols:star"
                      ></iconify-icon>
                    ))}
                  </div>
                  <span className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-[#A4907C]">
                    ({product.reviews} Reviews)
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-sm md:text-base text-taupe leading-relaxed font-light mb-8 max-w-xl">
                <p>{product.description}</p>
              </div>
            </div>

            {/* Config Selection */}
            <div className="space-y-8 mb-10 md:mb-12">
              {/* Size Select */}
              <section>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-black text-[#A4907C]">
                    Select Size
                  </h3>
                  <button className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-taupe-dark border-b border-transparent hover:border-gold transition-all">
                    Size Guide
                  </button>
                </div>
                <div className="grid grid-cols-4 sm:grid-cols-5 gap-2 md:gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      disabled={size === "XL"} // Mock out of stock
                      className={`h-10 md:h-12 flex items-center justify-center text-[10px] md:text-xs font-bold border transition-all ${selectedSize === size ? "bg-taupe text-white border-taupe" : "border-[#DCD3C9] text-taupe-dark hover:border-gold"} ${size === "XL" ? "opacity-30 cursor-not-allowed bg-[#F9F7F5]" : ""}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </section>

              {/* Color Select */}
              <section>
                <h3 className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-black text-[#A4907C] mb-4">
                  Color:{" "}
                  <span className="text-taupe-dark">{selectedColor.name}</span>
                </h3>
                <div className="flex flex-wrap gap-4">
                  {product.colors.map((color, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedColor(color)}
                      className={`w-8 h-8 md:w-10 md:h-10 rounded-full transition-all relative ${selectedColor.name === color.name ? "ring-offset-2 ring-1 ring-gold" : "hover:scale-110"}`}
                      style={{
                        backgroundColor: color.value,
                        border: "1px solid #DCD3C9",
                      }}
                    />
                  ))}
                </div>
              </section>

              {/* Quantity and Actions */}
              <section className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-4">
                <div className="sm:w-32 lg:w-40 shrink-0">
                  <h3 className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-black text-[#A4907C] mb-4">
                    Quantity
                  </h3>
                  <div className="flex items-center h-12 md:h-14 border border-[#DCD3C9] rounded-sm px-4 justify-between">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="text-taupe hover:text-taupe-dark p-1"
                    >
                      <iconify-icon icon="lucide:minus"></iconify-icon>
                    </button>
                    <span className="text-sm font-bold">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="text-taupe hover:text-taupe-dark p-1"
                    >
                      <iconify-icon icon="lucide:plus"></iconify-icon>
                    </button>
                  </div>
                </div>

                <div className="flex-1 flex flex-col justify-end">
                  <button className="w-full h-12 md:h-14 bg-taupe-dark text-white text-[10px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.4em] font-black flex items-center justify-center gap-3 transition-all hover:bg-black hover:shadow-2xl active:scale-95">
                    Add to Bag{" "}
                    <iconify-icon
                      icon="lucide:arrow-right"
                      style={{ fontSize: "18px" }}
                    ></iconify-icon>
                  </button>
                </div>
              </section>
            </div>

            {/* Shipping Info */}
            <div className="border-t border-[#DCD3C9] pt-8 md:pt-10 space-y-4">
              <div className="flex items-start gap-4 text-xs text-taupe">
                <iconify-icon
                  icon="lucide:truck"
                  className="text-xl text-gold shrink-0"
                ></iconify-icon>
                <span className="leading-relaxed">Complimentary express shipping on orders over $500</span>
              </div>
              <div className="flex items-start gap-4 text-xs text-taupe">
                <iconify-icon
                  icon="lucide:refresh-cw"
                  className="text-xl text-gold shrink-0"
                ></iconify-icon>
                <span className="leading-relaxed">Transparent returns within 14 days of receipt</span>
              </div>
            </div>

            {/* Additional Actions */}
            <div className="mt-10 md:mt-12 flex flex-wrap items-center gap-6 md:gap-10 border-t border-[#DCD3C9] pt-8 md:pt-10">
              <button className="flex items-center gap-2.5 text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-taupe hover:text-taupe-dark transition-colors">
                <iconify-icon icon="lucide:share-2" style={{fontSize: '16px'}}></iconify-icon> Share
              </button>
              <button className="flex items-center gap-2.5 text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-taupe hover:text-taupe-dark transition-colors">
                <iconify-icon icon="lucide:help-circle" style={{fontSize: '16px'}}></iconify-icon>{" "}
                Assistance
              </button>
            </div>
          </div>
        </div>

        {/* Related Section */}
        <section className="mt-24 md:mt-32 pt-16 md:pt-20 border-t border-[#DCD3C9]">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-10 mb-12 md:mb-16">
            <div className="space-y-4 md:space-y-6">
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] font-black text-gold block">
                Curated For You
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight font-gambetta text-taupe-dark leading-tight">
                Related Pieces
              </h2>
            </div>
            <div className="flex gap-4">
              <button className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#DCD3C9] flex items-center justify-center text-taupe hover:bg-taupe hover:text-white transition-all">
                <iconify-icon
                  icon="lucide:chevron-left"
                  style={{ fontSize: "20px" }}
                ></iconify-icon>
              </button>
              <button className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#DCD3C9] flex items-center justify-center text-taupe hover:bg-taupe hover:text-white transition-all">
                <iconify-icon
                  icon="lucide:chevron-right"
                  style={{ fontSize: "20px" }}
                ></iconify-icon>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </main>

    </div>
  );
};

export default ProductDetail;
