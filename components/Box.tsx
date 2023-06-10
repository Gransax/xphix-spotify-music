import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Box = ({ children, className }: Props) => {
  return (
    <div
      className={twMerge(
      `
        h-fit
        w-full
        rounded-lg
        bg-neutral-900
      `,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Box;
