import React, { useState } from 'react'

/**
 * PasswordField — password input with lock icon and show/hide toggle.
 * Used in both Login (password) and Register (password + confirm).
 *
 * Props:
 *   id          — input id & htmlFor
 *   name        — input name
 *   label       — label text
 *   placeholder — input placeholder
 *   value       — controlled value
 *   onChange    — change handler
 *   icon        — Material Symbol icon name (default: 'lock')
 *   labelRight  — optional element to the right of the label (e.g. Forgot password link)
 *   iconSize    — icon font-size class (default: 'text-[18px]')
 */
const PasswordField = ({
  id,
  name,
  label,
  placeholder = '••••••••',
  value,
  onChange,
  icon = 'lock',
  labelRight,
  iconSize = 'text-[18px]',
}) => {
  const [show, setShow] = useState(false)

  return (
    <div>
      <div className="flex justify-between items-baseline mb-1">
        <label
          className="font-label text-[10px] tracking-widest text-secondary uppercase"
          htmlFor={id}
        >
          {label}
        </label>
        {labelRight && labelRight}
      </div>
      <div className="flex items-center border-b border-stone-200 focus-within:border-primary transition-colors duration-300">
        <span className={`material-symbols-outlined text-stone-400 mr-3 ${iconSize}`}>
          {icon}
        </span>
        <input
          className="w-full bg-transparent border-0 py-2 px-0 outline-none focus:ring-0 placeholder:text-stone-300 text-on-surface text-sm font-body"
          id={id}
          name={name}
          type={show ? 'text' : 'password'}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <button
          type="button"
          onClick={() => setShow((prev) => !prev)}
          className="bg-transparent border-0 p-0 cursor-pointer leading-none"
          aria-label={show ? 'Hide password' : 'Show password'}
        >
          <span className={`material-symbols-outlined text-stone-400 ${iconSize}`}>
            {show ? 'visibility_off' : 'visibility'}
          </span>
        </button>
      </div>
    </div>
  )
}

export default PasswordField
