import { User } from "@core/types/user.Interface";
import { clearToken, clearUser, getUser } from "@core/utils/storage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
    user: User | null;
}

const initialState: AuthState = {
    user: getUser(),
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredential: (
            state,
            action: PayloadAction<{ user: User; token: string; rememberMe: boolean }>
        ) => {
            const { user, token, rememberMe } = action.payload;
            state.user = user;

            if (rememberMe) {
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));
            } else {
                sessionStorage.setItem("token", token);
                sessionStorage.setItem("user", JSON.stringify(user));
            }
        },

        setUser: (state, action: PayloadAction<{ user: User | null}>) => {
            const {user} = action.payload;
            state.user = user;
            if(sessionStorage.getItem("user")){
                sessionStorage.setItem("user", JSON.stringify(user));
            } else {
                localStorage.setItem("user", JSON.stringify(user))
            }
        },
        clearCredential: (state) => {
            state.user = null;

            // Clear storage
            clearUser();
            clearToken();
        },
    },
});

export const { setCredential, clearCredential, setUser } = authSlice.actions;

export default authSlice.reducer;