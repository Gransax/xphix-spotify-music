"use client";

import Box from "@/components/Box";
import { TbFaceIdError } from "react-icons/tb";
const Error = () => {
  return (
    <Box className="flex h-full flex-col items-center justify-center">
      <div className="text-neutral-400">
        <TbFaceIdError size={50} />
      </div>
      <div className="text-neutral-400">Something went wrong.</div>
    </Box>
  );
};

export default Error;
