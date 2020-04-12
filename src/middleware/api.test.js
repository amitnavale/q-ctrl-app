import React from "react";
import { getControlsList } from "./api";
import { shallow } from "enzyme";
// import renderer from "react-test-renderer";

test("check if data returned", () => {
  const res = getControlsList();
  expect(res.length).toEqual(4);
});
