import React from "react";
import { Link, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../../cart/state/cart.slice";

const Shipping = () => {
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  const subtotal = useSelector(selectCartTotal);
  
  // Custom styles for specific animations and focus effects
  const customStyles = `
    .input-focus-effect {
      transition: all 0.3s ease;
      border-bottom: 1px solid #DCD3C9;
    }
    .input-focus-effect:focus-within {
      transform: translateY(-2px);
      border-color: #C5A059;
      box-shadow: 0 10px 20px -10px rgba(141, 123, 104, 0.1);
    }
    .btn-lift {
      transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    .btn-lift:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 24px -10px rgba(141, 123, 104, 0.4);
    }
    .animate-fade-up {
      animation: fadeUp 0.8s ease-out forwards;
    }
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;

  return (
    <div className="min-h-screen bg-[#FCFAF7] flex flex-col font-satoshi">
      <style>{customStyles}</style>
      
      {/* Checkout Navbar */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#DCD3C9]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
          <Link to="/" className="text-xl md:text-2xl font-semibold tracking-tighter flex items-center gap-2 font-satoshi">
            <span className="w-8 h-8 rounded-full bg-taupe flex items-center justify-center text-white text-xs">
              E
            </span>
            <span className="hidden xs:inline">ESSENTIA</span>
          </Link>
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-bold text-[#A4907C]">
            <iconify-icon icon="lucide:lock" style={{ fontSize: "14px" }}></iconify-icon>
            <span className="hidden sm:inline">Secure Checkout</span>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-[1440px] mx-auto w-full px-6 md:px-10 py-10">
        {/* Progress Steps */}
        <div className="flex flex-col items-center justify-center mb-10 md:mb-12">
          <div className="flex items-center gap-2 md:gap-4 text-[8px] md:text-[9px] uppercase tracking-[0.2em] md:tracking-[0.4em] font-black mb-4">
            <span className="text-taupe-dark">Step 1: Cart</span>
            <div className="w-4 md:w-8 h-[1px] bg-[#DCD3C9]"></div>
            <span className="text-taupe-dark">Step 2: Shipping</span>
            <div className="w-4 md:w-8 h-[1px] bg-[#DCD3C9]"></div>
            <span className="opacity-40">Step 3: Payment</span>
          </div>
          <div className="w-48 md:w-64 h-1 bg-[#F5F1EB] rounded-full overflow-hidden">
            <div className="w-2/3 h-full bg-[#C5A059]"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 animate-fade-up">
          <div className="lg:col-span-8">
            <div className="mb-10 md:mb-5">
              <h1 className="text-3xl md:text-4xl font-medium mb-4 tracking-tight font-gambetta">Shipping Address</h1>
              <p className="text-[#8D7B68] font-light text-sm">Select a saved address or enter a new destination for your pieces.</p>
            </div>

            {/* Saved Addresses */}
            <div className="mb-10 md:mb-6">
              <h3 className="text-[10px] uppercase tracking-[0.2em] font-black text-[#A4907C] mb-6">Saved Addresses</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="border border-taupe bg-white p-6 rounded-sm cursor-pointer relative shadow-sm">
                  <div className="absolute top-4 right-4">
                    <div className="w-4 h-4 rounded-full border-2 border-taupe flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-taupe"></div>
                    </div>
                  </div>
                  <h4 className="font-bold text-sm mb-1">Julian Rivers</h4>
                  <p className="text-xs text-[#8D7B68] leading-relaxed">
                    1200 Atelier Boulevard, Apt 4C<br />
                    Manhattan, NY 10012<br />
                    United States
                  </p>
                  <div className="mt-4 pt-4 border-t border-[#F5F1EB] flex gap-4">
                    <button className="text-[9px] uppercase tracking-widest font-bold text-[#8D7B68] hover:text-taupe-dark">Edit</button>
                    <button className="text-[9px] uppercase tracking-widest font-bold text-[#8D7B68] hover:text-taupe-dark">Remove</button>
                  </div>
                </div>

                <div className="border border-[#DCD3C9] p-6 rounded-sm cursor-pointer hover:border-taupe bg-white/50 transition-all">
                  <h4 className="font-bold text-sm mb-1">Julian Rivers (Studio)</h4>
                  <p className="text-xs text-[#8D7B68] leading-relaxed">
                    45 Rue de Rivoli<br />
                    Paris, 75001<br />
                    France
                  </p>
                  <div className="mt-4 pt-4 border-t border-[#F5F1EB] flex gap-4">
                    <button className="text-[9px] uppercase tracking-widest font-bold text-[#8D7B68] hover:text-taupe-dark">Use this address</button>
                  </div>
                </div>
              </div>
            </div>


            {/* Actions */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mt-12 md:mt-16 pt-8 md:pt-12 border-t border-[#DCD3C9]">
              <Link to="/cart" className="text-[10px] uppercase tracking-[0.3em] font-black text-[#A4907C] hover:text-taupe-dark flex items-center gap-3 transition-colors">
                <iconify-icon icon="lucide:arrow-left" style={{ fontSize: "14px" }}></iconify-icon>
                Return to Cart
              </Link>
              <Link 
                to="/checkout/payment"
                className="btn-lift bg-taupe-dark text-white px-8 md:px-12 py-5 rounded-sm text-[10px] uppercase tracking-[0.4em] font-black flex items-center justify-center gap-4 w-full sm:w-auto"
              >
                Continue to Payment <iconify-icon icon="lucide:arrow-right" style={{ fontSize: "14px" }}></iconify-icon>
              </Link>
            </div>
          </div>

          {/* Sticky Order Summary */}
          <div className="lg:col-span-4">
            <aside className="lg:sticky lg:top-32 bg-white border border-[#DCD3C9] p-8 space-y-8 rounded-sm shadow-sm">
              <h3 className="text-xl font-medium tracking-tight border-b border-[#F5F1EB] pb-6 font-gambetta">Order Summary</h3>
              
              <div className="space-y-6 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-16 h-20 bg-[#F5F1EB] flex-shrink-0 overflow-hidden rounded-sm">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-taupe-dark mb-1 truncate">{item.name}</p>
                      <p className="text-[10px] text-taupe uppercase tracking-widest">{item.variant}</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs text-[#A4907C]">Qty: {item.quantity}</span>
                        <span className="text-sm font-medium text-gold">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-[#F5F1EB] space-y-4">
                <div className="flex justify-between text-sm font-light text-taupe">
                  <span>Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm font-light text-taupe">
                  <span>Shipping</span>
                  <span className="text-[#A4907C] uppercase tracking-widest text-[10px] font-bold italic">Calculated at payment</span>
                </div>
              </div>

              <div className="pt-6 flex justify-between items-end">
                <span className="text-[10px] uppercase tracking-[0.3em] font-black text-[#A4907C]">Total</span>
                <span className="text-3xl font-medium text-taupe-dark leading-none">${subtotal.toFixed(2)}</span>
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* Simplified Footer */}
      <footer className="py-12 px-6 md:px-10 border-t border-[#DCD3C9] mt-24">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#A4907C] font-black">&copy; 2024 Essentia Studio</p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-[10px] uppercase tracking-[0.2em] text-[#8D7B68] font-bold">
            <Link to="#" className="hover:text-taupe-dark transition-colors">Shipping Policy</Link>
            <Link to="#" className="hover:text-taupe-dark transition-colors">Returns</Link>
            <Link to="#" className="hover:text-taupe-dark transition-colors">Privacy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Shipping;
