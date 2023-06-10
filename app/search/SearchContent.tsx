"use client";

import MediaItem from "@/components/MediaItem";
import { Song } from "@/types";

type Props = {
  songs: Song[];
};

const SearchContent = ({ songs }: Props) => {
  if (songs.length === 0) {
    return (
      <div
        className=" 
            w-fumm
            flex
            flex-col
            gap-y-2
            px-6
            text-neutral-400
        "
      >
        No songs found.
      </div>
    );
  }
  return (
    <div className="flex w-full flex-col gap-y-2 px-6">
      {songs.map((song) => (
        <div
          key={song.id}
          className="
            flex
            w-full 
            items-center
            gap-x-4
          "
        >
          <div className="flex-1">
            <MediaItem onClick={() => {}} data={song} />
          </div>
          {/* TODO: Add like Button Here */}
        </div>
      ))}
    </div>
  );
};

export default SearchContent;
