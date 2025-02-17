import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the type for the user state
interface User {
    id: string;
    name: string;
    email: string;
    token: string;
}

// Define the initial state type
interface AuthState {
    user: User | null;
}

// Get user data from local storage
const storedUser = localStorage.getItem("userInfo");
const initialState: AuthState = {
    user: storedUser ? JSON.parse(storedUser) : null,
};

// Create the auth slice
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginAction: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        },
        logoutAction: (state) => {
            state.user = null;
        },
    },
});

// Generate actions
export const { loginAction, logoutAction } = authSlice.actions;

// Export the reducer
export default authSlice.reducer;
