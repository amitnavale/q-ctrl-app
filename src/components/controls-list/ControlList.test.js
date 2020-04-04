import React from "react";
import Enzyme, { mount } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import { createStore } from "redux";

import ControlsList from "./ControlsList";
import reducer, { initialState } from "../../reducers";

Enzyme.configure({ adapter: new EnzymeAdapter() });
describe("<ControlsList /> unit test", () => {
  const mockStore = createStore(reducer, initialState);
  const getWrapper = () =>
    mount(
      <Provider store={mockStore}>
        <ControlsList />
      </Provider>
    );

  it("should add to count and display the correct # of counts", () => {
    const wrapper = getWrapper();
    expect(wrapper.find("button").text()).toEqual("Simulate Error");
  });
});
