import React from "react";

export const AmbientBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Top Center Cyan/Blue Glow */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-cyan-500/15 via-blue-600/10 to-transparent blur-[120px] rounded-full" />

      {/* Mid Left Indigo Glow */}
      <div className="absolute top-[40%] -left-[150px] w-[500px] h-[500px] bg-indigo-600/10 blur-[130px] rounded-full" />

      {/* Mid Right Cyan/Teal Glow */}
      <div className="absolute top-[65%] -right-[150px] w-[550px] h-[550px] bg-teal-500/10 blur-[140px] rounded-full" />

      {/* Bottom Center Violet Glow */}
      <div className="absolute bottom-[-10%] left-1/3 w-[600px] h-[400px] bg-purple-600/10 blur-[120px] rounded-full" />

      {/* Subtle Dot Grid Overlay for Tech Texture */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.25) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
    </div>
  );
};

export default AmbientBackground;
