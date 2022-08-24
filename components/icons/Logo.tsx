import React, { ReactNode } from "react";

interface Props {
  width: string;
  height: string;
  color: string;
  className?: any;
}

const Logo = ({ width, height, color, className }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 60 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 .751h2.03v20.122H12.2v2.03H0V.75zm15.119 20.122h12.199v2.03h-12.2v-2.03zm12.199-10.065h-12.2v2.03h12.2v-2.03zM15.118.75h12.2v2.03h-12.2V.752zm15.12 2.03h5.08v20.105h2.038V2.782h5.08V.752H30.238v2.03zm21.226 10.057h-1.252L60 22.877h-2.825l-11.698-12.07h5.996l.035.002c.283.01 1.938.065 3.023-1.003.691-.683 1.046-1.668 1.046-2.92 0-1.253-.355-2.238-1.046-2.92-1.149-1.132-2.946-1.184-3.058-1.184h-6.108V.752h6.108c.268 0 2.756.069 4.492 1.77 1.098 1.08 1.65 2.54 1.65 4.363 0 1.823-.552 3.102-1.65 4.182-1.745 1.72-4.224 1.77-4.5 1.77z"
        fill={color}
      />
    </svg>
  );
};

export default Logo;
