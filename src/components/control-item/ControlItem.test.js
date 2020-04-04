import React from "react";
import "../../setupTests";
import ControlItem from "./ControlItem";
import { shallow } from "enzyme";
import { mockList } from "../../mocks/mockList";

test("Item snapshot", () => {
  const item = mockList[0];
  const componemt = shallow(<ControlItem controlItem={item} />);
  expect(componemt).toMatchSnapshot();
  expect(componemt.find(".list-row")).not.toEqual(null);
});
