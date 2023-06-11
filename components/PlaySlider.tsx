"use client";

import * as RadixSlider from "@radix-ui/react-slider";
import { useCallback, useEffect, useState } from "react";

type Props = {
  duration?: number | null;
  isPlaying?: boolean;
  onChange?: (value: number) => void;
};

const PlaySlider = ({ duration, isPlaying, onChange }: Props) => {
  const [value, setValue] = useState(0);

  const handleChange = () => {};

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying) {
        setValue((prevValue) => prevValue + 100);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <RadixSlider.Root
      className="
        relative
        flex
        w-full
        scale-y-75
        touch-none
        select-none
        items-center
        transition
        duration-300
        hover:scale-y-100
      "
      defaultValue={[0]}
      value={[value]}
      max={duration || 0}
      onValueChange={handleChange}
      step={1}
      aria-label="Volume"
    >
      <RadixSlider.Track
        className="
            relative
            h-[6px]
            grow
            rounded-full
            bg-neutral-600
        "
      >
        <RadixSlider.Range
          className="
            absolute
            h-full
            rounded-full
            bg-green-500
            transition
            "
        />
      </RadixSlider.Track>
    </RadixSlider.Root>
  );
};

export default PlaySlider;
