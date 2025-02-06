import React from "react";

const HexagonSection = () => {
  const hexagons = [
    {
      title: "Proven Expertise",
      description: "Solutions inspired by top maintenance practices.",
      bgColor: "#E63946",
    },
    {
      title: "Comprehensive Care",
      description: "Front-end and back-end optimizations.",
      bgColor: "#6C757D",
    },
    {
      title: "Flexible Plans",
      description: "Monthly or pay-as-you-go options.",
      bgColor: "#6F1D1B",
    },
    {
      title: "Dedicated Support",
      description: "A single contact for seamless updates.",
      bgColor: "#007BFF",
    },
  ];

  return (
    <div className="flex flex-col items-center px-4 py-8">
      {/* Title Section */}
      <h1 className="text-2xl font-bold text-center mb-8">
        Razobyte’s Maintenance Methodology
      </h1>

      {/* Hexagon Grid */}
      <div className="flex flex-wrap justify-center gap-6">
        {hexagons.map((hex, index) => (
          <div key={index} className="relative w-32 h-36">
            {/* Top Triangle */}
            <div
              className="absolute top-0 left-0 w-0 h-0 border-l-[64px] border-l-transparent border-r-[64px] border-r-transparent"
              style={{ borderBottomWidth: "18px", borderBottomColor: hex.bgColor }}
            ></div>
            {/* Middle Rectangle */}
            <div
              className="absolute top-[18px] left-0 w-[128px] h-[100px]"
              style={{ backgroundColor: hex.bgColor }}
            ></div>
            {/* Bottom Triangle */}
            <div
              className="absolute bottom-0 left-0 w-0 h-0 border-l-[64px] border-l-transparent border-r-[64px] border-r-transparent"
              style={{ borderTopWidth: "18px", borderTopColor: hex.bgColor }}
            ></div>
            {/* Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-2">
              <h2 className="text-white font-bold text-sm">{hex.title}</h2>
              <p className="text-white text-xs mt-2">{hex.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HexagonSection;
