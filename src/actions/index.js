import {
  GET_CONTROLS,
  SIMMULATE_ERROR,
  LOADING_CONTROLS,
} from "../constants/action-types";

export function getControls(payload) {
  return { type: GET_CONTROLS, payload };
}

export function simulateError(payload) {
  return { type: SIMMULATE_ERROR, payload };
}

export function loadingControls(payload) {
  return { type: LOADING_CONTROLS, payload };
}
