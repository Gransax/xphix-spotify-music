"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiHome } from "react-icons/hi";
import { BiHome, BiSearch } from "react-icons/bi";
import Box from "./Box";
import SidebarItem from "./SidebarItem";
import Library from "./Library";
import { Song } from "@/types";
import usePlayer from "@/hooks/usePlayer";
import { twMerge } from "tailwind-merge";

type Props = {
  children: React.ReactNode;
  songs: Song[];
};

const Sidebar = ({ children, songs }: Props) => {
  const pathName = usePathname();
  const player = usePlayer();

  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: "Home",
        active: pathName !== "/search",
        href: "/",
      },
      {
        icon: BiSearch,
        label: "Search",
        active: pathName === "/search",
        href: "/search",
      },
    ],
    [pathName]
  );
  return (
    <div
      className={twMerge(
        "flex h-full",
        player.activeId && "h-[calc(100%-90px)]"
      )}
    >
      <div
        className="
          hidden
          h-full
          w-[300px]
          flex-col
          gap-y-2
          bg-black
          p-2
          md:flex
        "
      >
        <Box>
          <div
            className="
              flex 
              flex-col 
              gap-y-4 
              px-5 
              py-4
            "
          >
            {routes.map((route) => (
              <SidebarItem key={route.label} {...route} />
            ))}
          </div>
        </Box>
        <Box className="h-full overflow-y-auto">
          <Library songs={songs} />
        </Box>
      </div>
      <main className="h-full flex-1 overflow-y-auto p-2">{children}</main>
    </div>
  );
};

export default Sidebar;
