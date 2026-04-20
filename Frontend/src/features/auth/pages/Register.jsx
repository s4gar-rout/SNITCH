import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../hook/useAuth";
import SocialButtons from "../components/SocialButtons";


const Register = () => {
  const { handleRegister } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [role, setRole] = useState("buyer");



  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    contact: "",
    password: "",
    confirmPassword: "",
  });



  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      await handleRegister({
        fullname: formData.fullname,
        contact: `${formData.contact}`,
        email: formData.email,
        password: formData.password,
        isSeller: role === "seller",
      });
      navigate("/login");
    } catch (err) {
      console.log("Registration failed", err);
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
              src="https://images.unsplash.com/photo-1652184513381-9755426e7fd2?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZhc2hpb24lMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D"
              alt="Refined linen texture"
              className="w-full h-full object-cover object-top-left mix-blend-multiply filter grayscale-[10%]"
            />
          </div>
          <div className="relative z-10 p-10 max-w-xl text-center md:text-left">
            <h2 className="text-6xl text-taupe-dark leading-tight mb-3 font-gambetta">
              The Art of <br />
              <span className="italic">Curation.</span>
            </h2>
            <p className="text-lg text-[#6B5E5E] font-light leading-relaxed">
              Begin your journey with Essentia Lux. A collective space where
              timeless silhouettes meet contemporary consciousness.
            </p>
          </div>
        </div>

        {/* Right Side: Register Form */}
        <div className="flex-1 flex flex-col justify-center items-center p-6 md:p-8 lg:p-10 bg-cream relative h-full">
          <div className="w-full max-w-[440px] py-2">
            <div className="mb-6 text-center">
              <h1 className="text-3xl font-medium mb-1 font-gambetta">
                Join Essentia
              </h1>
              <p className="text-taupe font-light text-xs">
                Create your account to start curating.
              </p>
            </div>

            {/* Role Toggle Switch */}
            <div className="relative bg-[#EBE5DE] p-1 rounded-full flex mb-6 cursor-pointer overflow-hidden h-11 items-center">
              <div
                className="toggle-slider absolute h-[calc(100%-8px)] w-[calc(50%-4px)] bg-white rounded-full shadow-sm top-1 left-1"
                style={{
                  transform:
                    role === "buyer" ? "translateX(0)" : "translateX(100%)",
                }}
              ></div>
              <button
                type="button"
                onClick={() => setRole("buyer")}
                className={`relative z-10 flex-1 text-sm font-medium transition-colors duration-300 ${
                  role === "buyer" ? "text-taupe-dark" : "text-taupe"
                }`}
              >
                Buyer
              </button>
              <button
                type="button"
                onClick={() => setRole("seller")}
                className={`relative z-10 flex-1 text-sm font-medium transition-colors duration-300 ${
                  role === "seller" ? "text-taupe-dark" : "text-taupe"
                }`}
              >
                Seller
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="input-focus-effect group border-b border-[#DCD3C9] py-1.5">
                <label className="block text-[9px] uppercase tracking-widest text-[#A4907C] mb-0.5 font-semibold">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  placeholder="Julian Rivers"
                  required
                  className="w-full bg-transparent border-none focus:ring-0 p-0 text-taupe-dark placeholder:text-[#D1C7BD] text-sm outline-none"
                />
              </div>

              <div className="input-focus-effect group border-b border-[#DCD3C9] py-1.5">
                <label className="block text-[9px] uppercase tracking-widest text-[#A4907C] mb-0.5 font-semibold">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="julian@essentia.com"
                  required
                  className="w-full bg-transparent border-none focus:ring-0 p-0 text-taupe-dark placeholder:text-[#D1C7BD] text-sm outline-none"
                />
              </div>

              <div className="input-focus-effect group border-b border-[#DCD3C9] py-1.5">
                <label className="block text-[9px] uppercase tracking-widest text-[#A4907C] mb-0.5 font-semibold">
                  Contact Number
                </label>
                <div className="flex items-center gap-3">
            
                  <input
                    type="tel"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    placeholder="987 654 3210"
                    required
                    className="w-full bg-transparent border-none focus:ring-0 p-0 text-taupe-dark placeholder:text-[#D1C7BD] text-sm outline-none"
                  />
                </div>
              </div>

              <div className="input-focus-effect group border-b border-[#DCD3C9] py-1.5">
                <div className="flex justify-between items-end">
                  <label className="block text-[9px] uppercase tracking-widest text-[#A4907C] mb-0.5 font-semibold">
                    Password
                  </label>
                  <div className="flex gap-1 mb-1">
                    <div
                      className={`w-5 h-[1px] ${formData.password.length > 0 ? "bg-gold" : "bg-[#C5A059] opacity-30"}`}
                    ></div>
                    <div
                      className={`w-5 h-[1px] ${formData.password.length > 5 ? "bg-gold" : "bg-[#C5A059] opacity-30"}`}
                    ></div>
                    <div
                      className={`w-5 h-[1px] ${formData.password.length > 10 ? "bg-gold" : "bg-[#C5A059] opacity-30"}`}
                    ></div>
                  </div>
                </div>
                <div className="relative flex items-center">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                    required
                    className="w-full bg-transparent border-none focus:ring-0 p-0 text-taupe-dark placeholder:text-[#D1C7BD] text-sm outline-none pr-8"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-0 text-taupe hover:text-taupe-dark transition-colors"
                  >
                    <iconify-icon
                      icon={showPassword ? "lucide:eye-off" : "lucide:eye"}
                      style={{ fontSize: "18px" }}
                    ></iconify-icon>
                  </button>
                </div>
              </div>



              <div className="input-focus-effect group border-b border-[#DCD3C9] py-1.5">
                <div className="flex justify-between items-center">
                  <label className="block text-[9px] uppercase tracking-widest text-[#A4907C] mb-0.5 font-semibold">
                    Confirm Password
                  </label>
                </div>
                <div className="relative flex items-center">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                    required
                    className="w-full bg-transparent border-none focus:ring-0 p-0 text-taupe-dark placeholder:text-[#D1C7BD] text-sm outline-none pr-8"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-0 text-taupe hover:text-taupe-dark transition-colors"
                  >
                    <iconify-icon
                      icon={
                        showConfirmPassword ? "lucide:eye-off" : "lucide:eye"
                      }
                      style={{ fontSize: "18px" }}
                    ></iconify-icon>
                  </button>
                </div>
              </div>


              <button
                type="submit"
                className="btn-lift w-full bg-taupe text-white py-4 rounded-xl font-medium text-xs tracking-widest uppercase transition-all flex items-center justify-center gap-2 group mt-1"
              >
                Create Account
                <iconify-icon
                  icon="lucide:arrow-right"
                  style={{ fontSize: "18px" }}
                  className="group-hover:translate-x-1 transition-transform"
                ></iconify-icon>
              </button>
            </form>

            <SocialButtons />


            <p className="mt-6 text-center text-sm text-taupe font-light">
              Already have an account?
              <Link
                to="/login"
                className="text-taupe-dark font-semibold underline-animate ml-1"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Global Footer (Full Width) */}
      <div className="w-full bg-[#f8f5f1] border-t border-[#DCD3C9] py-3 px-8 flex flex-col md:flex-row justify-between items-center gap-4 z-50">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-taupe flex items-center justify-center text-white text-[10px]">
            E
          </span>
          <span className="text-xs font-bold tracking-widest uppercase text-taupe-dark font-satoshi">
            Essentia Lux
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-x-10 gap-y-2 text-[10px] uppercase tracking-widest text-[#A4907C] font-semibold">
          <Link
            to="/privacy"
            className="hover:text-taupe-dark transition-colors underline-animate"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms"
            className="hover:text-taupe-dark transition-colors underline-animate"
          >
            Terms & Conditions
          </Link>
          <Link
            to="/contact"
            className="hover:text-taupe-dark transition-colors underline-animate"
          >
            Contact
          </Link>
          <Link
            to="/shop"
            className="hover:text-taupe-dark transition-colors underline-animate"
          >
            Shopping
          </Link>
        </div>

        <div className="text-[10px] text-[#A4907C] font-medium tracking-[0.2em] uppercase">
          Est. 2024 &copy; Essentia Lux
        </div>
      </div>
    </div>
  );
};

export default Register;
