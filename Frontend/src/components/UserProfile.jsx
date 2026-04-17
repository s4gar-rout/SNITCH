import React from 'react';

const UserProfile = () => {
  return (
    <div className="flex items-center gap-3 px-2 py-1 rounded-full hover:bg-stone-50 transition-colors duration-300 cursor-pointer group">
      <div className="text-right hidden sm:block">
        <p className="font-label text-[10px] tracking-wider text-on-surface font-bold uppercase leading-none">
          The Curator
        </p>
        <p className="font-body text-[8px] tracking-widest text-primary uppercase mt-1 leading-none">
          Elite Seller
        </p>
      </div>
      <div className="w-8 h-8 rounded-full bg-stone-200 border border-stone-100 flex items-center justify-center overflow-hidden">
        <span className="material-symbols-outlined text-stone-400 text-[20px]">person</span>
      </div>
    </div>
  );
};

export default UserProfile;
