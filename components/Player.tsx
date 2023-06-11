"use client";

import useGetSongById from "@/hooks/useGetSongById";
import useLoadImage from "@/hooks/useLoadImage";
import useLoadSong from "@/hooks/useLoadSong";
import usePlayer from "@/hooks/usePlayer";
import PlayerContent from "./PlayerContent";

type Props = {};

const Player = (props: Props) => {
  const player = usePlayer();
  const { song } = useGetSongById(player.activeId);
  const song_url = useLoadSong(song!);

  if (!song || !song_url || !player.activeId) {
    return null;
  }

  return (
    <div
      className="
        fixed
        bottom-0
        h-[90px]
        w-full
        bg-black
        px-4
        py-2
        "
    >
      <PlayerContent key={song_url} song={song} songUrl={song_url} />
    </div>
  );
};

export default Player;
