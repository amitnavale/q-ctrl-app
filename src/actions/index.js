import {
  GET_CONTROLS,
  SIMMULATE_ERROR,
  LOADING_CONTROLS,
} from "../constants/action-types";

export function getControls() {
  return { type: GET_CONTROLS };
}

export function simulateError() {
  return { type: SIMMULATE_ERROR };
}

export function loadingControls() {
  return { type: LOADING_CONTROLS };
}
