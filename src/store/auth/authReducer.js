import { createReducer } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

import { actionLogin, actionLogout, actionMe } from "./authActions";

const initialState = {
  token: null,
  user: {
    id: null,
    email: null,
  },
};

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actionLogin, (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    })
    .addCase(actionMe, (state, action) => {
      state.user = action.payload;
    })
    .addCase(actionLogout, (state) => {
      state.token = initialState.token;
      state.user = initialState.user;
    });
});

const persistConfig = {
  key: "auth",
  version: 1,
  storage,
};

export const persistedAuthReducer = persistReducer(persistConfig, authReducer);
