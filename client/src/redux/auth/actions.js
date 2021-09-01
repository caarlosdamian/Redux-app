import types from "./types";
export const setUser = (payload) => ({
  type: types.SET_USER,
  payload,
});
export const setToken = (payload) => ({
  type: types.SET_TOKEN,
  payload,
});
