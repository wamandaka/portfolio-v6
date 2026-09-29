import React from "react";

export const NoiseGrain: React.FC = () => {
  return (
    <>
      {/* Tactile analog film grain overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-50 opacity-[0.035] mix-blend-overlay noise-overlay"
        aria-hidden="true"
      />

      {/* Subtle structural vertical guide lines (Architectural layout framing) */}
      <div className="fixed inset-0 pointer-events-none z-0 max-w-7xl mx-auto px-6 sm:px-10 flex justify-between opacity-[0.03] select-none" aria-hidden="true">
        <div className="w-[1px] h-full bg-white" />
        <div className="hidden md:block w-[1px] h-full bg-white" />
        <div className="w-[1px] h-full bg-white" />
      </div>
    </>
  );
};

export default NoiseGrain;
