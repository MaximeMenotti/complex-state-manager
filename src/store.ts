import { configureStore } from "@reduxjs/toolkit";
import contentReducer from "./redux/content/contentSlice";
import undoable from "redux-undo";

export const store = configureStore({
  reducer: {
    undoableContent: undoable(contentReducer),
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
