import * as actions from "../actions";
import expect from "expect";
import {
  GET_CONTROLS,
  SIMMULATE_ERROR,
  LOADING_CONTROLS,
} from "../constants/action-types";

describe("actions", () => {
  it("getControls", () => {
    expect(actions.getControls()).toEqual({ type: GET_CONTROLS });
  });

  it("simulateError", () => {
    expect(actions.simulateError()).toEqual({ type: SIMMULATE_ERROR });
  });

  it("loadingControls", () => {
    expect(actions.loadingControls()).toEqual({ type: LOADING_CONTROLS });
  });
});
