import { createReducer } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

import { actionLogin, actionLogout, actionMe } from "./authActions";

const initialState = {
  accessToken: null,
  email: null,
  refreshToken: null,
  roles: [],
  expires: null,
};

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actionLogin, (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.email = action.payload.email;
      state.refreshToken = action.payload.refreshToken;
      state.roles = action.payload.roles;
      state.expires = action.payload.expires;
    })
    .addCase(actionMe, (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.email = action.payload.email;
      state.refreshToken = action.payload.refreshToken;
      state.roles = action.payload.roles;
      state.expires = action.payload.expires;
    })
    .addCase(actionLogout, (state) => {
      state.accessToken = initialState.accessToken;
      state.email = initialState.email;
      state.refreshToken = initialState.refreshToken;
      state.roles = initialState.roles;
      state.expires = initialState.expires;
    });
});

const persistConfig = {
  key: "auth",
  version: 1,
  storage,
};

export const persistedAuthReducer = persistReducer(persistConfig, authReducer);
