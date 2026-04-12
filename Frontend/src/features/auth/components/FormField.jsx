import React from 'react'

/**
 * FormField — labelled input with a Material Symbol icon on the left.
 * Used for text/email fields in auth forms.
 *
 * Props:
 *   id          — input id & htmlFor
 *   name        — input name
 *   label       — label text
 *   type        — input type (default: 'text')
 *   placeholder — input placeholder
 *   value       — controlled value
 *   onChange    — change handler
 *   icon        — Material Symbol icon name (e.g. 'mail', 'person')
 *   labelRight  — optional element shown to the right of the label
 */
const FormField = ({
  id,
  name,
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  icon,
  labelRight,
}) => {
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
        <span className="material-symbols-outlined text-stone-400 mr-3 text-[18px]">
          {icon}
        </span>
        <input
          className="w-full bg-transparent border-0 py-2.5 px-0 outline-none focus:ring-0 placeholder:text-stone-300 text-on-surface text-sm font-body"
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  )
}

export default FormField
