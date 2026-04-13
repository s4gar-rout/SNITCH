import React, { useState } from "react";
import { Link } from "react-router";
import AuthCard from "../components/AuthCard";
import FormField from "../components/FormField";
import PasswordField from "../components/PasswordField";
import SocialButtons from "../components/SocialButtons";
import { useAuth } from "../hook/useAuth";
import { useNavigate } from "react-router";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { handleLogin } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: dispatch login action
    try {
      await handleLogin({
        email: formData.email,
        password: formData.password,
      });
      navigate("/");
    } catch (err) {
      console.log("Login failed",err);
    }
  };

  return (
    <AuthCard cardPadding="py-10">
      {/* Header */}
      <header className="mb-10 text-center">
        <span className="font-label text-[14px] tracking-[0.3em] text-primary uppercase font-bold">
          WELCOME BACK
        </span>
        <h1 className="font-headline text-3xl text-on-surface mt-4 font-light tracking-tight">
          Sign in
        </h1>
        <p className="text-muted mt-3 font-light text-[13px] max-w-xs mx-auto">
          Access your curated collection and continue your journey.
        </p>
      </header>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6 ">
        {/* Email */}
        <FormField
          id="email"
          name="email"
          label="Email Address"
          type="email"
          placeholder="curator@journal.com"
          icon="mail"
          value={formData.email}
          onChange={handleChange}
        />

        {/* Password */}
        <PasswordField
          id="password"
          name="password"
          label="Password"
          value={formData.password}
          onChange={handleChange}
          labelRight={
            <a
              href="#"
              className="text-[10px] text-primary hover:text-primary-light transition-colors font-body"
            >
              Forgot password?
            </a>
          }
        />

        {/* Actions */}
        <div className="pt-2 flex flex-col gap-3">
          <button
            type="submit"
            className="w-full bg-primary text-white py-2.5 font-label text-[10px] tracking-[0.3em] uppercase hover:bg-stone-900 active:scale-[0.99] transition-all duration-300 cursor-pointer"
          >
            Sign In
          </button>

          <SocialButtons
            onGoogle={() => console.log("Google sign-in")}
            onApple={() => console.log("Apple sign-in")}
          />

          {/* Register link */}
          <div className="flex items-center justify-center gap-2 text-[10px] font-light text-muted tracking-wider pt-1">
            <span>DON&apos;T HAVE AN ACCOUNT?</span>
            <Link
              to="/register"
              className="font-bold text-on-surface tracking-[0.2em] uppercase hover:text-primary transition-colors border-b border-stone-900 leading-none pb-0.5"
            >
              Create One
            </Link>
          </div>
        </div>
      </form>
    </AuthCard>
  );
};

export default Login;
