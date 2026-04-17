import React from "react";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../../cart/state/cart.slice";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const OrderConfirmation = () => {
  const cartItems = useSelector(selectCartItems);
  const subtotal = useSelector(selectCartTotal);
  const shipping = 15.00;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const customStyles = `
    .order-reveal {
      animation: slideUpFade 0.8s ease-out forwards;
    }
    @keyframes slideUpFade {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .timeline-line {
      position: relative;
    }
    .timeline-line::before {
      content: '';
      position: absolute;
      left: 20px;
      top: 0;
      bottom: 0;
      width: 1px;
      background-color: #DCD3C9;
      z-index: 0;
    }
    .timeline-dot {
      position: relative;
      z-index: 1;
    }
    .btn-lift {
      transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    .btn-lift:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 24px -10px rgba(141, 123, 104, 0.4);
    }
  `;

  return (
    <div className="min-h-screen flex flex-col bg-[#FCFAF7] font-satoshi">
      <style>{customStyles}</style>
      
      <Navbar />

      <main className="flex-1 max-w-[1100px] mx-auto w-full px-6 md:px-10 py-12">
        {/* Header Section */}
        <div className="order-reveal text-center mb-16">
          <div className="w-20 h-20 bg-[#F5F1EB] rounded-full flex items-center justify-center mx-auto mb-8 text-[#C5A059]">
            <iconify-icon icon="lucide:check" style={{ fontSize: "36px" }}></iconify-icon>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6 font-gambetta">
            Thank you for <br /><span className="italic">your order.</span>
          </h1>
          <p className="text-base md:text-lg text-taupe font-light max-w-lg mx-auto mb-10">
            Your selection has been received. A confirmation email has been sent to <span className="text-taupe-dark font-medium">julian@essentia.com</span>.
          </p>
          <div className="inline-flex items-center gap-4 bg-white border border-[#DCD3C9] px-6 md:px-8 py-3 rounded-full shadow-sm">
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-black text-[#A4907C]">Order Number</span>
            <span className="text-sm font-bold text-taupe-dark">#ES-2024-087543</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 order-reveal" style={{ animationDelay: "0.2s" }}>
          {/* Left Column: Summary & Timeline */}
          <div className="lg:col-span-7 space-y-12">
            <section>
              <h2 className="text-2xl font-medium font-gambetta mb-8">Order Summary</h2>
              <div className="space-y-8 border-t border-b border-[#DCD3C9] py-8">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-6">
                    <div className="w-20 md:w-24 h-28 md:h-32 bg-[#F5F1EB] flex-shrink-0 overflow-hidden rounded-sm">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div className="flex justify-between items-start">
                        <div className="space-y-1">
                          <h3 className="font-medium text-taupe-dark text-sm md:text-base">{item.name}</h3>
                          <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-[#A4907C]">{item.variant}</p>
                        </div>
                        <span className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                      <div className="text-[9px] md:text-[10px] uppercase tracking-widest text-[#A4907C] font-bold">Qty: {item.quantity}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="py-6 space-y-3">
                <div className="flex justify-between text-sm text-taupe font-light">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-taupe font-light">
                  <span>Express Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-taupe font-light">
                  <span>Estimated Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-medium text-taupe-dark pt-4 border-t border-[#DCD3C9] font-gambetta">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </section>

            {/* Timeline */}
            <section className="bg-[#F5F1EB] p-8 md:p-10 space-y-8 rounded-sm">
              <h2 className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-black text-[#A4907C]">What to expect next</h2>
              <div className="timeline-line space-y-10">
                <div className="flex gap-6 timeline-dot">
                  <div className="w-10 h-10 rounded-full bg-taupe text-white flex items-center justify-center flex-shrink-0 shadow-lg">
                    <iconify-icon icon="lucide:mail"></iconify-icon>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold">Order Confirmation</h4>
                    <p className="text-xs text-taupe font-light">We've sent your receipt and details to your inbox.</p>
                  </div>
                </div>
                <div className="flex gap-6 timeline-dot">
                  <div className="w-10 h-10 rounded-full bg-white text-taupe flex items-center justify-center flex-shrink-0 border border-[#DCD3C9]">
                    <iconify-icon icon="lucide:package"></iconify-icon>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold">Processing</h4>
                    <p className="text-xs text-taupe font-light">Our atelier is preparing your pieces. Usually 1-2 business days.</p>
                  </div>
                </div>
                <div className="flex gap-6 timeline-dot">
                  <div className="w-10 h-10 rounded-full bg-white text-taupe flex items-center justify-center flex-shrink-0 border border-[#DCD3C9]">
                    <iconify-icon icon="lucide:truck"></iconify-icon>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold">Shipping Confirmation</h4>
                    <p className="text-xs text-taupe font-light">You'll receive a tracking link as soon as your order departs.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Delivery & Assistance */}
          <div className="lg:col-span-5 space-y-12">
            <section className="space-y-6">
              <div>
                <h2 className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-black text-[#A4907C] mb-4">Delivery Information</h2>
                <div className="text-sm leading-relaxed text-taupe-dark">
                  <p className="font-bold">Julian Rivers</p>
                  <p>245 Studio Avenue, Suite 12</p>
                  <p>Greenwich, CT 06830</p>
                  <p>United States</p>
                  <p className="mt-4 text-taupe">+1 (203) 555-0198</p>
                </div>
              </div>
              <div className="pt-8 border-t border-[#DCD3C9]">
                <h2 className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-black text-[#A4907C] mb-4">Estimated Delivery</h2>
                <div className="flex items-center gap-4 mb-6">
                  <iconify-icon icon="lucide:calendar" style={{ fontSize: "24px", color: "#C5A059" }}></iconify-icon>
                  <div className="text-sm">
                    <p className="font-bold text-lg leading-tight">August 28 — 30, 2024</p>
                    <p className="text-taupe font-light">Express Delivery</p>
                  </div>
                </div>
                <button className="btn-lift w-full py-4 bg-taupe-dark text-white text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-black rounded-sm flex items-center justify-center gap-2">
                  Track Your Order <iconify-icon icon="lucide:external-link" style={{ fontSize: "14px" }}></iconify-icon>
                </button>
              </div>
            </section>

            <section className="bg-white border border-[#DCD3C9] p-8 space-y-6 rounded-sm shadow-sm">
              <div>
                <h3 className="text-sm font-bold mb-3">Need Assistance?</h3>
                <p className="text-xs text-taupe leading-relaxed mb-6">
                  Our concierge is available to help with any questions regarding your order, sizing, or archival care.
                </p>
              </div>
              <div className="space-y-4">
                <Link to="#" className="flex items-center gap-3 text-[10px] uppercase tracking-widest font-bold text-taupe-dark hover:text-[#C5A059] transition-colors">
                  <iconify-icon icon="lucide:message-circle" style={{ fontSize: "18px" }}></iconify-icon> 
                  Live Concierge
                </Link>
                <Link to="#" className="flex items-center gap-3 text-[10px] uppercase tracking-widest font-bold text-taupe-dark hover:text-[#C5A059] transition-colors">
                  <iconify-icon icon="lucide:mail" style={{ fontSize: "18px" }}></iconify-icon> 
                  support@essentia.com
                </Link>
              </div>
            </section>

            <div className="pt-4">
              <Link to="/" className="btn-lift w-full py-4 border border-taupe-dark text-taupe-dark text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-black rounded-sm flex items-center justify-center gap-2 group">
                <iconify-icon icon="lucide:arrow-left" className="group-hover:-translate-x-1 transition-transform" style={{ fontSize: "14px" }}></iconify-icon> 
                Return to Collections
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OrderConfirmation;
