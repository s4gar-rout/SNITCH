import React from "react";
import { Link } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
  updateQuantity,
  removeItem,
} from "../state/cart.slice";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const subtotal = useSelector(selectCartTotal);
  const tax = subtotal * 0.08; // 8% estimated tax
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-[#FCFAF7] flex flex-col font-satoshi">
      <Navbar />

      <main className="flex-1 max-w-[1440px] mx-auto w-full px-6 md:px-10 py-10">
        <div className="mb-10 md:mb-16">
          {/* Progress Steps - Responsive handling */}
          <div className="flex flex-col items-center justify-center mb-12">
            <div className="flex items-center gap-2 md:gap-4 text-[8px] md:text-[9px] uppercase tracking-[0.2em] md:tracking-[0.4em] font-black mb-4">
              <span className="text-taupe-dark">Step 1: Cart</span>
              <div className="w-4 md:w-8 h-[1px] bg-[#DCD3C9]"></div>
              <span className="opacity-40">Step 2: Shipping</span>
              <div className="w-4 md:w-8 h-[1px] bg-[#DCD3C9]"></div>
              <span className="opacity-40">Step 3: Payment</span>
            </div>
            <div className="w-48 md:w-64 h-1 bg-[#F5F1EB] rounded-full overflow-hidden">
              <div className="w-1/3 h-full bg-[#C5A059]"></div>
            </div>
          </div>

          <nav className="text-[10px] uppercase tracking-[0.3em] text-[#A4907C] flex items-center gap-2 mb-4 font-bold">
            <Link to="/" className="hover:text-taupe-dark transition-colors">
              Collections
            </Link>
            <iconify-icon
              icon="lucide:chevron-right"
              className="text-[8px]"
            ></iconify-icon>
            <span className="text-taupe-dark font-black">Your Cart</span>
          </nav>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-2 font-gambetta">
            Your Cart
          </h1>
          <p className="text-[#8D7B68] font-light italic text-sm">
            You have {cartItems.length} curated{" "}
            {cartItems.length === 1 ? "piece" : "pieces"} in your basket.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-start">
          {/* Cart Items List */}
          <div className="lg:col-span-8 space-y-6 md:space-y-4">
            {/* Table Header - Desktop Only */}
            <div className="border-b border-[#DCD3C9] pb-3 hidden md:grid grid-cols-12 text-[10px] uppercase tracking-[0.3em] font-black text-[#A4907C]">
              <div className="col-span-6">Product Detail</div>
              <div className="col-span-2 text-center">Price</div>
              <div className="col-span-2 text-center">Quantity</div>
              <div className="col-span-2 text-right">Total</div>
            </div>

            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="group grid grid-cols-1 md:grid-cols-12 gap-6 items-center border-b border-[#DCD3C9] py-8 md:py-10 transition-all"
                >
                  <div className="col-span-12 md:col-span-6 flex gap-6 md:gap-8 items-center">
                    <div className="w-20 md:w-24 aspect-[3/4] bg-[#F5F1EB] overflow-hidden flex-shrink-0 rounded-sm">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="space-y-1">
                      <h3 className="serif text-lg md:text-xl font-medium font-gambetta leading-tight">
                        {item.name}
                      </h3>
                      <p className="text-[10px] text-[#A4907C] uppercase tracking-widest">
                        {item.variant}
                      </p>
                      <button
                        onClick={() => dispatch(removeItem(item.id))}
                        className="text-[9px] uppercase tracking-widest font-bold text-[#8D7B68] hover:text-red-500 mt-3 flex items-center gap-2 transition-colors"
                      >
                        Remove Item
                      </button>
                    </div>
                  </div>

                  <div className="hidden md:block col-span-2 text-center">
                    <span className="text-sm font-medium">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>

                  <div className="col-span-12 md:col-span-2 flex justify-between md:justify-center items-center md:block">
                    <span className="md:hidden text-[9px] uppercase tracking-widest font-bold text-[#A4907C]">
                      Quantity
                    </span>
                    <div className="flex items-center h-10 border border-[#DCD3C9] rounded-sm px-4 gap-4 w-fit mx-auto md:mx-0">
                      <button
                        onClick={() =>
                          dispatch(updateQuantity({ id: item.id, delta: -1 }))
                        }
                        className="text-[#8D7B68] hover:text-taupe-dark p-1"
                      >
                        <iconify-icon
                          icon="lucide:minus"
                          className="text-xs"
                        ></iconify-icon>
                      </button>
                      <span className="text-xs font-bold w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          dispatch(updateQuantity({ id: item.id, delta: 1 }))
                        }
                        className="text-[#8D7B68] hover:text-taupe-dark p-1"
                      >
                        <iconify-icon
                          icon="lucide:plus"
                          className="text-xs"
                        ></iconify-icon>
                      </button>
                    </div>
                  </div>

                  <div className="col-span-12 md:col-span-2 text-right flex justify-between md:block items-center">
                    <span className="md:hidden text-[9px] uppercase tracking-widest font-bold text-[#A4907C]">
                      Total
                    </span>
                    <span className="text-sm font-bold text-taupe-dark">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="py-20 text-center">
                <p className="text-taupe mb-8">Your cart is currently empty.</p>
                <Link
                  to="/"
                  className="inline-block border border-[#DCD3C9] px-10 py-4 text-[10px] uppercase tracking-widest font-bold hover:bg-taupe hover:text-white transition-all"
                >
                  Browse Collections
                </Link>
              </div>
            )}

            {cartItems.length > 0 && (
              <div className="pt-8">
                <Link
                  to="/"
                  className="inline-flex items-center gap-3 border border-[#DCD3C9] px-8 md:px-10 py-4 text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-[#8D7B68] hover:text-white hover:border-[#8D7B68] transition-all group"
                >
                  <iconify-icon
                    icon="lucide:arrow-left"
                    className="group-hover:-translate-x-1 transition-transform"
                  ></iconify-icon>
                  Continue Shopping
                </Link>
              </div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-4 bg-white p-6 md:p-10 border border-[#DCD3C9] rounded-sm lg:sticky lg:top-32">
            <h2 className="text-[10px] uppercase tracking-[0.4em] font-black text-[#A4907C] mb-8">
              Order Summary
            </h2>
            <div className="space-y-4 mb-8 md:mb-10">
              <div className="flex justify-between text-sm">
                <span className="text-[#8D7B68] font-light">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#8D7B68] font-light">Estimated Tax</span>
                <span className="font-medium">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-[#C5A059]">
                <span className="font-light">Express Shipping</span>
                <span className="text-[10px] uppercase tracking-widest font-bold">
                  Free
                </span>
              </div>
              <div className="h-[1px] bg-[#F5F1EB] my-6"></div>
              <div className="flex justify-between items-end">
                <span className="text-[10px] uppercase tracking-[0.3em] font-black text-taupe-dark">
                  Total Amount
                </span>
                <span className="text-2xl md:text-3xl font-medium text-[#C5A059] leading-none">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex flex-col gap-3">
                <label className="text-[9px] uppercase tracking-widest font-black text-[#A4907C]">
                  Promo Code
                </label>
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="ESSENTIA10"
                    className="flex-1 h-12 bg-[#FCFAF7] border border-[#DCD3C9] px-4 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-[#C5A059] transition-all"
                  />
                  <button className="h-12 border border-taupe-dark px-6 text-[9px] uppercase tracking-widest font-black hover:bg-taupe-dark hover:text-white transition-all">
                    Apply
                  </button>
                </div>
              </div>

              <Link
                to="/checkout/shipping"
                className="w-full h-14 bg-taupe-dark text-white text-[10px] uppercase tracking-[0.4em] font-black flex items-center justify-center gap-3 transition-all hover:bg-black hover:shadow-xl active:scale-95"
              >
                Proceed to Checkout{" "}
                <iconify-icon icon="lucide:arrow-right"></iconify-icon>
              </Link>

              <div className="flex justify-center gap-6 pt-4">
                <iconify-icon
                  icon="logos:visa"
                  className="grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer text-2xl"
                ></iconify-icon>
                <iconify-icon
                  icon="logos:mastercard"
                  className="grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer text-2xl"
                ></iconify-icon>
                <iconify-icon
                  icon="logos:apple-pay"
                  className="grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer text-2xl"
                ></iconify-icon>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
