import React from "react";

const ChatButton = () => {
  return (
    <div className="fixed bottom-8 right-8 z-[100] flex items-center gap-3">
      <a
        href="https://wa.me/971543431993?text=Hello%20Yahia%2C%20I%E2%80%99d%20like%20to%20learn%20more%20about%20your%20portfolio%20projects."
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_15px_40px_rgba(37,211,102,0.6)] transition-shadow group"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none"></span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-message-circle text-white fill-white/10 group-hover:scale-110 transition-transform"
        >
          <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path>
        </svg>
        <span className="absolute top-1 right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full"></span>
      </a>
    </div>
  );
};

export default ChatButton;
