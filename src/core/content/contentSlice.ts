import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { updateBrick } from "./usecases/updateBrick.usecase";

export interface ContentState {
  currentBrickIndex: number;
  value: Content;
}

const initialState: ContentState = {
  currentBrickIndex: 0,
  value: { id: "dummy_content", brickList: [] },
};

export const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    addBrick: (state, action: PayloadAction<Brick>) => {
      state.value.brickList.push(action.payload);
    },
    updateCurrentBrick: (state, action: PayloadAction<Brick>) => {
      state.value.brickList[state.currentBrickIndex] = action.payload;
    },
    updateMedia: (
      state,
      action: PayloadAction<{ mediaId: string; media: Media }>
    ) => {
      state.value.brickList[state.currentBrickIndex].mediaList[0] =
        action.payload.media;
    },
    setCurrentBrickIndex: (state, action: PayloadAction<number>) => {
      state.currentBrickIndex = Math.min(
        Math.max(action.payload, 0),
        state.value.brickList.length - 1
      );
    },
    updateCurrentBrickProperty: (
      state,
      action: PayloadAction<UpdateType<Brick>>
    ) => {
      const { key, value } = action.payload;

      state.value.brickList[state.currentBrickIndex] = updateBrick(
        state.value.brickList[state.currentBrickIndex],
        key,
        value
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addBrick,
  updateCurrentBrick,
  setCurrentBrickIndex,
  updateMedia,
  updateCurrentBrickProperty,
} = contentSlice.actions;

export default contentSlice.reducer;
