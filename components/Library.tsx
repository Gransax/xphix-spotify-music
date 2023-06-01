"use client";

import { TbPlaylist } from "react-icons/tb";

type Props = {};

const Library = (props: Props) => {
  const onClick = () => {};
  return (
    <div className="flex flex-col">
      <div
        className="
            flex
            items-center
            justify-between
            px-4
            pt-4
        "
      >
        <div
          className="
            inline-flex  
            items-center
            gap-x-2
          "
        >
          <TbPlaylist className="text-neutral-400" size={26} />
        </div>
      </div>
    </div>
  );
};

export default Library;
