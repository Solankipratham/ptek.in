import React from "react";

const Preloader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center backdrop-blur-sm">
      <div className="flex flex-col items-center gap-6">
        {/* Glowing Ring Loader */}
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 rounded-full border-4 border-yellow-400 opacity-30 animate-ping"></div>
          <div className="absolute inset-0 rounded-full border-t-4 border-yellow-300 border-r-4 border-transparent animate-spin"></div>
          <div className="absolute inset-2 bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-500 rounded-full shadow-inner shadow-yellow-400"></div>
        </div>

        {/* Animated Text */}
        <div className="text-3xl font-extrabold tracking-wider text-[#135293] animate-bounce">
          Loading <span className="text-yellow-400">PTEK</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
