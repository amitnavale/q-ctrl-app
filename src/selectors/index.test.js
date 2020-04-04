import * as selectors from "../selectors";
import expect from "expect";
import { mockList } from "../mocks/mockList";

describe("selectord", () => {
  it("Get State", () => {
    expect(selectors.getState({ controls: mockList })).toEqual(mockList);
  });

  it("Get Error", () => {
    expect(
      selectors.getError({ controls: mockList, isError: true, loading: false })
    ).toEqual(true);
  });

  it("Get loading status", () => {
    expect(
      selectors.getLoadingStatus({
        controls: mockList,
        isError: true,
        loading: false,
      })
    ).toEqual(false);
  });
});
