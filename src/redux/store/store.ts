import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slice/authSlice";

// Create the Redux store with proper typing
export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});

// Define RootState and AppDispatch types for use in the app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
