import React from "react";
import Header from "../components/Header/Header";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

describe("Header component", () => {
  it("contains header with text 'Transactions'", () => {
    const wrapper = shallow(<Header />);
    const text = wrapper.find(".f-header__title").text();
    expect(text).toEqual("Transactions");
  });

  it("matches the snapshop", () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
