import { create } from "zustand";

interface VolumeStore {
  volume: number;
  setVolume: (volume: number) => void;
  toggleMute: () => void;
}

const useVolume = create<VolumeStore>((set) => ({
  volume: 1,
  setVolume: (volume: number) => set((state) => ({ ...state, volume })),
  toggleMute: () =>
    set((state) => {
      if (state.volume === 0) {
        return { ...state, volume: 1 };
      } else {
        return { ...state, volume: 0 };
      }
    }),
}));

export default useVolume;
