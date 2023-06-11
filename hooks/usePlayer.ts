import { create } from "zustand";

interface PlayerStore {
  ids: string[];
  activeId: string;
  setId: (id: string) => void;
  setIds: (ids: string[]) => void;
  reset: () => void;
}

const usePlayer = create<PlayerStore>((set) => ({
  ids: [],
  activeId: "",
  setId: (id) => set((state) => ({ ...state, activeId: id })),
  setIds: (ids) => set((state) => ({ ...state, ids })),
  reset: () => set((state) => ({ ...state, ids: [], activeId: "" })),
}));

export default usePlayer;
