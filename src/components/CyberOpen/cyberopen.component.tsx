import React from "react";
import CyberOpenHeader from "./Header/CyberOpenHeader";
import CyberOpenBody from "./Body/CyberOpenBody";

function CyberOpenComponent() {
  return (
    <div className="min-h-screen text-black">
      <div className="w-screen bg-gradient-to-b from-cyan-600 via-cyan-400 to-transparent px-2 backdrop-blur-sm md:px-8">
        <div className="min-h-[50vh]">
          <CyberOpenHeader />
        </div>
      </div>
      <CyberOpenBody />
    </div>
  );
}

export default CyberOpenComponent;
