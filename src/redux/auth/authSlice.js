import { createSlice } from "@reduxjs/toolkit";
import { refreshUser, register, logIn, logOut } from "./authOperations";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

const initialState = {
    user: null,
    token: null,
    error: null,
    isLoading: false,
    isRefreshing: true,
}

const authSlice = createSlice(
    {
        name: 'auth',
        initialState,
        extraReducers: (builder) => {
            builder
            .addCase(register.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoading = false;
            })
            .addCase(register.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            })
            .addCase(logIn.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(logOut.fulfilled, (state) => {
                state.user = { name: null, email: null };
                state.token = null;
                state.isLoggedIn = false;
            })
            .addCase(refreshUser.pending, (state) => {
                state.isRefreshing = true;
                state.isLoading = true;
                state.error = null;
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.isRefreshing = false;
                state.isLoading = false;
            })
            .addCase(refreshUser.rejected, (state, action) => {
                state.isRefreshing = false;
                state.error = action.payload;
                state.isLoading = false;
            })
        }
    }
)

const persistedReduser = persistReducer(persistConfig, authSlice.reducer);
export default persistedReduser;