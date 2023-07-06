import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AlertState {
  alerts: Alert[];
}

const initialState: AlertState = {
  alerts: [],
};

export const createTimeoutAlert = createAsyncThunk(
  "alert/createTimeoutAlert",
  async (alert: Alert, { dispatch }) => {
    dispatch(createAlert(alert));
    setTimeout(() => {
      dispatch(removeAlert(alert));
    }, 2000);
  }
);

export const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    createAlert: (state, action: PayloadAction<Alert>) => {
      state.alerts.push(action.payload);
    },
    removeAlert: (state, action: PayloadAction<Alert>) => {
      state.alerts = state.alerts.filter(
        (alert) => alert.id != action.payload.id
      );
    },
  },
});

export const { createAlert, removeAlert } = alertSlice.actions;
export default alertSlice.reducer;
