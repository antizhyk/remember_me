import {CLEAR_REDIRECT, SET_REDIRECT} from "./types";

export const setRedirect = (to) => {
  return {
    type: SET_REDIRECT,
    to
  }
}

export const clearRedirect = (active) => {
  return {
    type: CLEAR_REDIRECT,
    active
  }
}