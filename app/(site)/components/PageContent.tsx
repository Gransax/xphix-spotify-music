"use client";

import SongItem from "@/components/SongItem";
import { Song } from "@/types";

type Props = {
  songs: Song[];
};

const PageContent = ({ songs }: Props) => {
  if (songs.length === 0) {
    return <div className="mt-4 text-neutral-400">No Songs available.</div>;
  }
  return (
    <div
      className="
        mt-4
        grid
        grid-cols-2
        gap-4
        sm:grid-cols-3
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        2xl:grid-cols-8
        "
    >
      {songs.map((song) => (
        <SongItem key={song.id} onClick={(id: string) => {}} data={song} />
      ))}
    </div>
  );
};

export default PageContent;