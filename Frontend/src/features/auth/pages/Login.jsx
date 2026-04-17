import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../hook/useAuth";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const { handleLogin } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleLogin({
        email: formData.email,
        password: formData.password,
      });
      navigate("/");
    } catch (err) {
      console.log("Login failed", err);
    }
  };

  return (
    <div className="h-screen w-screen grid grid-rows-[1fr_auto] font-satoshi bg-cream text-taupe-dark overflow-hidden">
      {/* Top Section: Split Screen */}
      <div className="flex flex-col md:flex-row overflow-hidden min-h-0">
        {/* Left Side: Visual Narrative (Desktop Only) */}
        <div className="hidden lg:flex w-1/2 bg-[#F5F1EB] relative overflow-hidden items-center justify-center h-full">
          <div className="absolute inset-0 opacity-40">
            <img
              src="https://images.unsplash.com/photo-1539109132314-34a77353979d?auto=format&fit=crop&q=80&w=2000"
              alt="Luxury fabric texture"
              className="w-full h-full object-cover mix-blend-multiply filter grayscale-[20%]"
            />
          </div>
          <div className="relative z-10 p-10 max-w-xl text-center md:text-left">
            <h2 className="text-6xl text-taupe-dark leading-tight mb-3 font-gambetta">
              Crafted with <br />
              <span className="italic">intention.</span>
            </h2>
            <p className="text-lg text-[#6B5E5E] font-light leading-relaxed">
              Join a community dedicated to the art of conscious dressing. Refined
              pieces for the modern silhouette.
            </p>
          </div>
        </div>

        {/* Right Side: Login Form panel */}
        <div className="flex-1 flex flex-col justify-center items-center p-8 md:p-12 lg:p-16 bg-cream relative h-full">
          <div className="w-full max-w-[420px] py-4">
            <div className="mb-8 text-center">
              <h1 className="text-4xl font-medium mb-3 font-gambetta">
                Welcome back to Essentia
              </h1>
              <p className="text-taupe font-light">
                Please enter your details to continue
              </p>
            </div>

            <div className="space-y-3">
              {/* Login Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="input-focus-effect group border-b border-[#DCD3C9] py-2.5">
                  <label className="block text-[10px] uppercase tracking-widest text-[#A4907C] mb-1 font-semibold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@example.com"
                    required
                    className="w-full bg-transparent border-none focus:ring-0 p-0 text-taupe-dark placeholder:text-[#D1C7BD] text-lg outline-none"
                  />
                </div>

                <div className="input-focus-effect group border-b border-[#DCD3C9] py-2.5">
                  <div className="flex justify-between items-end">
                    <label className="block text-[10px] uppercase tracking-widest text-[#A4907C] mb-1 font-semibold">
                      Password
                    </label>
                    <Link
                      to="/forgot-password"
                      className="text-xs text-gold underline-animate pb-1"
                    >
                      Forgot?
                    </Link>
                  </div>
                  <div className="relative flex items-center">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                      required
                      className="w-full bg-transparent border-none focus:ring-0 p-0 text-taupe-dark placeholder:text-[#D1C7BD] text-lg outline-none pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-0 text-taupe hover:text-taupe-dark transition-colors"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      <iconify-icon
                        icon={showPassword ? "lucide:eye-off" : "lucide:eye"}
                        style={{ fontSize: "20px" }}
                      ></iconify-icon>
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn-lift w-full bg-taupe text-white py-4 rounded-xl font-medium text-sm tracking-widest uppercase transition-all flex items-center justify-center gap-2 group mt-2"
                >
                  Sign In
                  <iconify-icon
                    icon="lucide:arrow-right"
                    style={{ fontSize: "20px" }}
                    className="group-hover:translate-x-1 transition-transform"
                  ></iconify-icon>
                </button>
              </form>

              <div className="flex items-center gap-5 py-1">
                <div className="h-[1px] flex-1 bg-[#DCD3C9]"></div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#A4907C]">
                  or
                </span>
                <div className="h-[1px] flex-1 bg-[#DCD3C9]"></div>
              </div>

              {/* Google OAuth placeholder */}
              <button
                type="button"
                onClick={() => console.log("Google sign-in")}
                className="btn-lift w-full border border-[#DCD3C9] bg-white text-taupe-dark py-4 rounded-xl font-medium text-sm transition-all flex items-center justify-center gap-3"
              >
                <iconify-icon
                  icon="logos:google-icon"
                  style={{ fontSize: "18px" }}
                ></iconify-icon>
                Continue with Google
              </button>

              <p className="text-center text-sm text-taupe font-light mt-2">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="text-taupe-dark font-semibold underline-animate ml-1"
                >
                  Create account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Global Footer (Full Width) */}
      <div className="w-full bg-[#f8f5f1] border-t border-[#DCD3C9] py-3 px-8 flex flex-col md:flex-row justify-between items-center gap-4 z-50">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-taupe flex items-center justify-center text-white text-[10px]">E</span>
          <span className="text-xs font-bold tracking-widest uppercase">Essentia Lux</span>
        </div>
        
        <div className="flex flex-wrap justify-center gap-x-10 text-[10px] uppercase tracking-widest text-[#A4907C] font-semibold">
          <Link to="/privacy" className="hover:text-taupe-dark transition-colors underline-animate">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-taupe-dark transition-colors underline-animate">Terms & Conditions</Link>
          <Link to="/contact" className="hover:text-taupe-dark transition-colors underline-animate">Contact</Link>
          <Link to="/shop" className="hover:text-taupe-dark transition-colors underline-animate">Shopping</Link>
        </div>

        <div className="text-[10px] text-[#A4907C] font-medium tracking-[0.2em] uppercase">
          Est. 2024 &copy; Essentia Lux
        </div>
      </div>
    </div>
  );
};

export default Login;
