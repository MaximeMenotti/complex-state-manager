import { create, StateCreator } from "zustand";

export interface ContentSlice {
  currentBrickIndex: number;
  value: Content;
  setCurrentBrickIndex: (index: number) => void;
  addBrick: (brick: Brick) => void;
}

export const createContentSlice: StateCreator<
  ContentSlice,
  [],
  [],
  ContentSlice
> = (set) => ({
  currentBrickIndex: 0,
  value: { id: "dummy_content", brickList: [] },

  setCurrentBrickIndex: (index) =>
    set((state) => ({
      currentBrickIndex: Math.min(
        Math.max(index, 0),
        state.value.brickList.length - 1
      ),
    })),

  addBrick: (brick) =>
    set((state) => ({
      value: { ...state.value, brickList: [...state.value.brickList, brick] },
    })),
});
