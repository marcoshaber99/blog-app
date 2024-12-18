import React from "react";

interface SquiggleSeparatorProps {
  color?: string;
  width?: string;
  height?: string;
  opacity?: number;
}

export const SquiggleSeparator: React.FC<SquiggleSeparatorProps> = ({
  color = "currentColor",
  width = "w-full",
  height = "h-4",
  opacity = 1,
}) => {
  return (
    <div
      className={`${width} ${height} flex items-center justify-center overflow-hidden`}
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 1200 20"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0 10 C50 0, 150 20, 200 10 C250 0, 350 20, 400 10 C450 0, 550 20, 600 10 C650 0, 750 20, 800 10 C850 0, 950 20, 1000 10 C1050 0, 1150 20, 1200 10"
          fill="none"
          stroke={color}
          strokeWidth="2"
          opacity={opacity}
        />
      </svg>
    </div>
  );
};
