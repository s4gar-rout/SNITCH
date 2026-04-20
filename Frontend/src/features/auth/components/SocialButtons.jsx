import React from "react";

const btnClass =
  "flex items-center justify-center gap-2 border border-[#DCD3C9] py-3 rounded-xl text-[10px] font-semibold tracking-[0.15em] uppercase text-taupe-dark hover:bg-[#F5F1EB] hover:border-taupe transition-all duration-300 cursor-pointer shadow-sm active:scale-[0.98]";

/**
 * SocialButtons — OR divider + Google button.
 * Used in both Login and Register.
 */
const SocialButtons = () => {
  return (
    <div className="w-full">
      {/* OR Divider */}
      <div className="flex items-center gap-4 my-4">
        <div className="flex-1 h-[1px] bg-[#DCD3C9]" />
        <span className="text-[10px] uppercase tracking-[0.2em] text-[#A4907C] font-medium">
          or
        </span>
        <div className="flex-1 h-[1px] bg-[#DCD3C9]" />
      </div>

      {/* Google Button */}
      <div className="flex flex-col gap-3">
        <a href="/api/auth/google" className={btnClass}>
          <iconify-icon
            icon="logos:google-icon"
            style={{ fontSize: "16px" }}
          ></iconify-icon>
          Continue with Google
        </a>
      </div>
    </div>
  );
};

export default SocialButtons;
