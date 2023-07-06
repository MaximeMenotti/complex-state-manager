import { configureStore } from "@reduxjs/toolkit";
import contentReducer from "./core/content/contentSlice";
import undoable from "redux-undo";
import alertReducer from "./core/alert/alertSlice";
import { logger } from "./redux/middlewares/logger";

export const store = configureStore({
  reducer: {
    undoableContent: undoable(contentReducer),
    alerts: alertReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
