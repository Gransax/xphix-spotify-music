"use client";

import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/types";
import Image from "next/image";

type Props = {
  onClick?: (id: string) => void;
  data: Song;
};

const MediaItem = ({ onClick, data: song }: Props) => {
  const image_url = useLoadImage(song);
  const handleClick = () => {
    if (onClick) {
      return onClick(song.id);
    }

    //TODO: default turn on player
  };
  return (
    <div
      onClick={handleClick}
      className="
        flex
        w-full
        cursor-pointer 
        items-center
        gap-x-3
        rounded-md
        p-2
        hover:bg-neutral-800/50
      "
    >
      <div
        className="
            relative
            min-h-[48px]
            min-w-[48px]
            overflow-hidden
            rounded-md
        "
      >
        <Image
          alt="cover"
          src={image_url || "/images/liked.png"}
          fill
          className="object-cover"
        />
      </div>
      <div
        className="
            flex 
            flex-col
            gap-y-1
            overflow-hidden
        "
      >
        <p className="truncate text-white">{song.title}</p>
        <p className="truncate text-sm text-neutral-400">{song.author}</p>
      </div>
    </div>
  );
};

export default MediaItem;
