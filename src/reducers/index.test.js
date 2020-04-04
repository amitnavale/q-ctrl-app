import rootReducer, { initialState } from "./index";
import * as actions from "../actions";
import expect from "expect";
import { mockList } from "../mocks/mockList";

describe("root reducer", () => {
  it("should return the initial state", () => {
    expect(rootReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle GET_CONTROLS", () => {
    // it's empty on purpose because it's just starting to fetch posts
    expect(rootReducer({}, actions.getControls())).toEqual({
      controls: mockList,
      isError: false,
      loading: false,
    });
  });

  it("should handle SIMMULATE_ERROR", () => {
    expect(rootReducer({}, actions.simulateError())).toEqual({
      controls: {},
      isError: true,
      loading: false,
    });
  });
  it("should handle LOADING_CONTROLS", () => {
    expect(rootReducer({}, actions.loadingControls())).toEqual({
      controls: {},
      isError: false,
      loading: true,
    });
  });
});
