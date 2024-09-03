import { create } from "zustand";
import { ContentSlice, createContentSlice } from "./core/content/contentSlice";

export const useBoundStore = create<ContentSlice>()((...a) => ({
  ...createContentSlice(...a),
}));
