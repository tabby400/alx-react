import React from "react";
import { shallow } from "enzyme";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";
import BodySection from "./BodySection";

describe("BodySectionWithMarginBottom tests", () => {
  it("renders BodySection component with correct props", () => {
    const title = "test title";
    const children = <p>test children node</p>;
    const wrapper = shallow(
      <BodySectionWithMarginBottom title={title}>{children}</BodySectionWithMarginBottom>
    );
    const bodySectionWrapper = wrapper.find(BodySection);
    expect(bodySectionWrapper.prop("title")).toEqual(title);
    expect(bodySectionWrapper.contains(children)).toEqual(true);
  });
});