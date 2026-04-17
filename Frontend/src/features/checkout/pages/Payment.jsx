import React from "react";
import { Link, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../../cart/state/cart.slice";

const Payment = () => {
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  const subtotal = useSelector(selectCartTotal);
  const tax = subtotal * 0.05; // 5% estimated tax
  const total = subtotal + tax;

  const customStyles = `
    .input-lift {
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      border-bottom: 1px solid #DCD3C9;
    }
    .input-lift:focus-within {
      transform: translateY(-2px);
      border-color: #C5A059;
      box-shadow: 0 10px 30px -10px rgba(141, 123, 104, 0.12);
    }
    .btn-lift {
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .btn-lift:hover {
      transform: translateY(-4px);
      box-shadow: 0 20px 40px -10px rgba(74, 62, 62, 0.2);
    }
    .underline-hover {
      position: relative;
    }
    .underline-hover::after {
      content: '';
      position: absolute;
      width: 0;
      height: 1px;
      bottom: -2px;
      left: 0;
      background-color: #C5A059;
      transition: width 0.3s ease;
    }
    .underline-hover:hover::after {
      width: 100%;
    }
  `;

  return (
    <div className="min-h-screen bg-[#FCFAF7] flex flex-col font-satoshi">
      <style>{customStyles}</style>

      {/* Simplified Checkout Header */}
      <header className="bg-white border-b border-[#DCD3C9] h-20 flex items-center">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex items-center justify-between">
          <Link to="/" className="text-xl md:text-2xl font-semibold tracking-tighter flex items-center gap-2 font-satoshi">
            <span className="w-8 h-8 rounded-full bg-taupe flex items-center justify-center text-white text-xs">
              E
            </span>
            <span className="hidden xs:inline">ESSENTIA</span>
          </Link>
          <Link to="/" className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#8D7B68] underline-hover">
            Back to Collections
          </Link>
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
            <span className="text-taupe-dark">Step 3: Payment</span>
          </div>
          <div className="w-48 md:w-64 h-1 bg-[#F5F1EB] rounded-full overflow-hidden">
            <div className="w-full h-full bg-[#C5A059]"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-7 space-y-12">
            {/* Payment Method Form */}
            <section>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-10">
                <h1 className="text-3xl md:text-4xl font-medium tracking-tight font-gambetta leading-tight">Payment Method</h1>
                <div className="flex items-center gap-3">
                  <iconify-icon icon="logos:visa" style={{ fontSize: "24px" }}></iconify-icon>
                  <iconify-icon icon="logos:mastercard" style={{ fontSize: "24px" }}></iconify-icon>
                  <iconify-icon icon="logos:apple-pay" style={{ fontSize: "24px" }}></iconify-icon>
                </div>
              </div>

              <div className="space-y-8">
                <div className="input-lift py-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-700 text-taupe mb-2 block">Cardholder Name</label>
                  <input type="text" placeholder="Julian Rivers" className="w-full bg-transparent border-none focus:ring-0 p-0 text-lg placeholder:text-[#D1C7BD] text-taupe-dark font-light" />
                </div>
                <div className="input-lift py-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-700 text-taupe mb-2 block">Card Number</label>
                  <div className="flex items-center gap-4">
                    <input type="text" placeholder="0000 0000 0000 0000" className="w-full bg-transparent border-none focus:ring-0 p-0 text-lg placeholder:text-[#D1C7BD] text-taupe-dark font-light" />
                    <iconify-icon icon="lucide:lock" style={{ fontSize: "16px", color: "#A4907C" }}></iconify-icon>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="input-lift py-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-700 text-taupe mb-2 block">Expiry Date</label>
                    <input type="text" placeholder="MM / YY" className="w-full bg-transparent border-none focus:ring-0 p-0 text-lg placeholder:text-[#D1C7BD] text-taupe-dark font-light" />
                  </div>
                  <div className="input-lift py-2">
                    <div className="flex items-center gap-2 mb-2">
                      <label className="text-[10px] uppercase tracking-[0.2em] font-700 text-taupe mb-0 block">CVC / CVV</label>
                      <div className="group relative">
                        <iconify-icon icon="lucide:help-circle" style={{ fontSize: "12px", color: "#A4907C", cursor: "help" }}></iconify-icon>
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-[#4A3E3E] text-white text-[9px] p-3 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all leading-relaxed shadow-xl z-20">
                          The 3 or 4 digit security code usually found on the back of your card.
                        </div>
                      </div>
                    </div>
                    <input type="text" placeholder="000" className="w-full bg-transparent border-none focus:ring-0 p-0 text-lg placeholder:text-[#D1C7BD] text-taupe-dark font-light" />
                  </div>
                </div>
              </div>
            </section>

            {/* Billing Address Selection */}
            <section className="pt-8 border-t border-[#DCD3C9]">
              <h2 className="text-2xl font-medium tracking-tight mb-8 font-gambetta">Billing Address</h2>
              <div className="space-y-6">
                <label className="flex items-center gap-4 cursor-pointer group">
                  <div className="relative w-5 h-5 border border-[#DCD3C9] rounded flex items-center justify-center group-hover:border-[#C5A059] transition-colors">
                    <input type="checkbox" defaultChecked className="peer absolute inset-0 opacity-0 cursor-pointer" />
                    <div className="hidden peer-checked:block w-3 h-3 bg-[#8D7B68] rounded-sm"></div>
                  </div>
                  <span className="text-sm text-taupe-dark">Same as shipping address</span>
                </label>
                <div className="p-6 bg-[#F5F1EB]/50 rounded border border-dashed border-[#DCD3C9] flex items-start gap-4 text-xs text-taupe font-light">
                  <iconify-icon icon="lucide:map-pin" style={{ fontSize: "18px" }}></iconify-icon>
                  <span className="leading-relaxed">242 Archival Lane, Studio 4B, Paris, France, 75001</span>
                </div>
              </div>
            </section>

            {/* Step Controls */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-12">
              <Link to="/checkout/shipping" className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-black text-taupe hover:text-taupe-dark transition-colors order-2 sm:order-1">
                <iconify-icon icon="lucide:arrow-left" style={{ fontSize: "14px" }}></iconify-icon> 
                Previous Step
              </Link>
              <Link 
                to="/checkout/order-confirmation"
                className="btn-lift bg-taupe-dark text-white px-12 py-5 rounded-sm text-[10px] uppercase tracking-[0.4em] font-black flex items-center justify-center gap-4 shadow-xl w-full sm:w-auto order-1 sm:order-2"
              >
                Place Order <iconify-icon icon="lucide:check-circle" style={{ fontSize: "14px" }}></iconify-icon>
              </Link>
            </div>
          </div>

          {/* Sticky Order Summary Sidebar */}
          <div className="lg:col-span-5">
            <aside className="lg:sticky lg:top-32 bg-white border border-[#DCD3C9] p-8 md:p-10 space-y-8 rounded-sm shadow-sm">
              <h3 className="text-xl font-medium tracking-tight border-b border-[#F5F1EB] pb-6 font-gambetta">Order Summary</h3>
              
              <div className="space-y-6 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
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
                  <span className="text-[#C5A059] uppercase tracking-widest text-[10px] font-bold">Complimentary</span>
                </div>
                <div className="flex justify-between text-sm font-light text-taupe">
                  <span>Estimated Tax</span>
                  <span className="font-medium">${tax.toFixed(2)}</span>
                </div>
              </div>

              <div className="pt-6 flex justify-between items-end">
                <span className="text-[10px] uppercase tracking-[0.3em] font-black text-[#A4907C]">Total</span>
                <span className="text-3xl font-medium text-taupe-dark leading-none">${total.toFixed(2)}</span>
              </div>

              <div className="pt-8 mt-4 border-t border-[#F5F1EB] flex flex-col items-center gap-4">
                <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-[#A4907C] font-bold">
                  <iconify-icon icon="lucide:shield-check" style={{ fontSize: "18px", color: "#C5A059" }}></iconify-icon> 
                  SSL Secure Payment
                </div>
                <p className="text-[9px] text-[#D1C7BD] text-center leading-relaxed font-medium px-4">
                  Your payment information is encrypted and processed securely. Essentia does not store your full card details.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* Simplified Footer */}
      <footer className="py-12 border-t border-[#F5F1EB] mt-12 md:mt-24 text-center">
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-[9px] uppercase tracking-[0.4em] text-[#A4907C] font-bold px-6">
          <Link to="#" className="hover:text-taupe-dark transition-colors">Shipping Policy</Link>
          <Link to="#" className="hover:text-taupe-dark transition-colors">Privacy Policy</Link>
          <Link to="#" className="hover:text-taupe-dark transition-colors">Terms of Service</Link>
        </div>
        <p className="mt-8 text-[9px] text-[#D1C7BD] uppercase tracking-[0.2em]">
          &copy; 2024 Essentia Studio &bull; Paris
        </p>
      </footer>
    </div>
  );
};

export default Payment;
