import React, { useState } from 'react'
import { Link } from 'react-router'
import AuthCard from '../components/AuthCard'
import FormField from '../components/FormField'
import PasswordField from '../components/PasswordField'
import SocialButtons from '../components/SocialButtons'
import {useAuth} from '../hook/useAuth'
import { useNavigate } from 'react-router'

const Register = () => {

  const {handleRegister} = useAuth()
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    fullname:        '',
    contact:         '',
    email:           '',
    role:            '',   // 'buyer' | 'seller'
    password:        '',
    confirmPassword: '',
    terms:           false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleRole = (role) => setFormData((prev) => ({ ...prev, role }))

  const handleNext = (e) => {
    e.preventDefault()
    setStep(2)
  }

  const handleSubmit =async (e) => {
    e.preventDefault()
    // TODO: dispatch register action
   await handleRegister({
    fullname:formData.fullname,
    contact:formData.contact,
    email:formData.email,
    password:formData.password,
    isSeller:formData.role === 'seller'

   })
   navigate('/login')
  }

  return (
    <AuthCard cardPadding="py-10">

      {/* Header */}
      <header className="mb-7 text-center">
        <span className="font-label text-[10px] tracking-[0.3em] text-primary uppercase font-bold">
          JOIN THE CURATOR
        </span>
        <h1 className="font-headline text-3xl text-on-surface mt-2 font-light tracking-tight">
          Create account
        </h1>
        <p className="text-muted mt-1.5 font-light text-xs max-w-xs mx-auto">
          Experience a collection curated with intention and permanence.
        </p>
      </header>

      {/* Step Indicator */}
      <div className="flex items-center gap-0 mb-8">
        {[1, 2].map((s, i) => (
          <React.Fragment key={s}>
            <div className="flex flex-col items-center gap-1">
              <div
                className={`w-6 h-6 flex items-center justify-center text-[10px] font-label font-bold transition-all duration-300
                  ${step >= s ? 'bg-primary text-white' : 'bg-stone-100 text-stone-400 border border-stone-200'}`}
              >
                {step > s
                  ? <span className="material-symbols-outlined text-[14px]">check</span>
                  : s
                }
              </div>
              <span className={`font-label text-[8px] tracking-widest uppercase transition-colors duration-300 ${step >= s ? 'text-primary' : 'text-stone-300'}`}>
                {s === 1 ? 'Info' : 'Security'}
              </span>
            </div>
            {i < 1 && (
              <div className={`flex-1 h-px mb-4 mx-2 transition-colors duration-500 ${step > 1 ? 'bg-primary' : 'bg-stone-200'}`} />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* ── Step 1: Personal Info ── */}
      {step === 1 && (
        <form onSubmit={handleNext} className="space-y-5">

          <FormField
            id="fullname" name="fullname" label="Full Name"
            type="text" placeholder="Arthur Morgan" icon="person"
            value={formData.fullname} onChange={handleChange}
          />

          <FormField
            id="contact" name="contact" label="Contact"
            type="tel" placeholder="+91 98765 43210" icon="call"
            value={formData.contact} onChange={handleChange}
          />

          <FormField
            id="email" name="email" label="Email Address"
            type="email" placeholder="curator@journal.com" icon="mail"
            value={formData.email} onChange={handleChange}
          />

          {/* Role */}
          <div>
            <p className="font-label text-[10px] tracking-widest text-secondary uppercase mb-2">
              I am a
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: 'buyer',  label: 'Buyer',  icon: 'shopping_bag' },
                { value: 'seller', label: 'Seller', icon: 'storefront'   },
              ].map(({ value, label, icon }) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => handleRole(value)}
                  className={`flex items-center justify-center gap-2 py-3 border text-[10px] font-label tracking-[0.15em] uppercase transition-all duration-200 cursor-pointer
                    ${formData.role === value
                      ? 'border-primary bg-primary text-white'
                      : 'border-stone-200 text-stone-500 hover:border-stone-400 hover:bg-stone-50'
                    }`}
                >
                  <span className="material-symbols-outlined text-[15px]">{icon}</span>
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-primary text-white py-3.5 font-label text-[10px] tracking-[0.3em] uppercase hover:bg-stone-900 active:scale-[0.99] transition-all duration-300 cursor-pointer"
            >
              Continue
            </button>
          </div>

          {/* Login link */}
          <div className="flex items-center justify-center gap-2 text-[10px] font-light text-muted tracking-wider">
            <span>ALREADY HAVE AN ACCOUNT?</span>
            <Link
              to="/login"
              className="font-bold text-on-surface tracking-[0.2em] uppercase hover:text-primary transition-colors border-b border-stone-900 leading-none pb-0.5"
            >
              Sign In
            </Link>
          </div>

        </form>
      )}

      {/* ── Step 2: Security ── */}
      {step === 2 && (
        <form onSubmit={handleSubmit} className="space-y-5">

          <PasswordField
            id="password" name="password" label="Password"
            value={formData.password} onChange={handleChange}
          />

          <PasswordField
            id="confirmPassword" name="confirmPassword" label="Confirm Password"
            value={formData.confirmPassword} onChange={handleChange}
            icon="lock_reset"
          />

          {/* Terms */}
          <div className="flex items-center gap-2.5 pt-1">
            <input
              id="terms" name="terms" type="checkbox"
              checked={formData.terms} onChange={handleChange}
              className="h-3.5 w-3.5 rounded-none border-stone-300 accent-primary cursor-pointer flex-shrink-0"
            />
            <label htmlFor="terms" className="text-[10px] text-muted font-light leading-snug">
              I agree to the{' '}
              <a href="#" className="text-primary hover:text-primary-light underline underline-offset-4 transition-colors">Terms</a>
              {' '}and{' '}
              <a href="#" className="text-primary hover:text-primary-light underline underline-offset-4 transition-colors">Privacy Policy</a>.
            </label>
          </div>

          {/* Actions */}
          <div className="pt-2 flex flex-col gap-3">

            <button
              type="submit"
              className="w-full bg-primary text-white py-3.5 font-label text-[10px] tracking-[0.3em] uppercase hover:bg-stone-900 active:scale-[0.99] transition-all duration-300 cursor-pointer"
            >
              Create Account
            </button>

            <SocialButtons
              onGoogle={() => console.log('Google sign-up')}
              onApple={() => console.log('Apple sign-up')}
            />

            {/* Back */}
            <button
              type="button"
              onClick={() => setStep(1)}
              className="flex items-center justify-center gap-1.5 text-[10px] font-light text-muted tracking-wider hover:text-primary transition-colors cursor-pointer pt-1"
            >
              <span className="material-symbols-outlined text-[14px]">arrow_back</span>
              Back to info
            </button>

          </div>
        </form>
      )}

    </AuthCard>
  )
}

export default Register