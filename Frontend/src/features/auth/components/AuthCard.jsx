import React from 'react'

/**
 * AuthCard — full-page layout wrapper with centered card overlay and footer.
 * Used by both Login and Register pages.
 */
const AuthCard = ({ children, cardPadding = 'py-10' }) => {
  return (
    <div className="h-screen flex flex-col bg-stone-100 font-body text-on-surface overflow-hidden">

      {/* Centered main area */}
      <main className="flex-1 flex items-center justify-center px-4">
        <div className={`w-full max-w-md border border-stone-200  px-10 ${cardPadding}`}>
          {children}
        </div>
      </main>

      {/* Minimal footer */}
      <footer className="w-full border-t border-stone-300 py-3 px-6">
        <div className="flex justify-center gap-6">
          {['Privacy Policy', 'Terms of Service', 'Contact'].map((item) => (
            <a
              key={item}
              href="#"
              className="font-body text-[8px] tracking-[0.15em] uppercase text-stone-300 hover:text-primary transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>
      </footer>

    </div>
  )
}

export default AuthCard
