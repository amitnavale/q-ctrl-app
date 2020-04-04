import React from "react";
import "./setupTests";
import App from "./App";
import { shallow } from "enzyme";

test("app snapshot", () => {
  const app = shallow(<App />);
  expect(app).toMatchSnapshot();
  expect(app.find(".main-area")).not.toEqual(null);
});
