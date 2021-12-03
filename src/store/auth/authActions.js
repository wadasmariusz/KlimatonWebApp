import { createAction } from "@reduxjs/toolkit";

export const actionLogin = createAction(
  "auth/login",
  function prepare({ token, user }) {
    return {
      payload: {
        token,
        user,
      },
    };
  }
);

export const actionMe = createAction("auth/me", function prepare({ user }) {
  return {
    payload: {
      user,
    },
  };
});

export const actionLogout = createAction("auth/logout");
