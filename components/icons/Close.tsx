import React, { ReactNode } from "react";

interface Props {
  width: string;
  height: string;
  color: string;
  className?: any;
}

const Close = ({ width = "24", height = "24", color = "#222", className }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M6 18 18 6M6 6l12 12" stroke={color} stroke-width="1.6" stroke-linecap="round" />
    </svg>
  );
};

export default Close;
