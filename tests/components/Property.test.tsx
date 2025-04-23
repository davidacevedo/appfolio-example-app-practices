import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import Property from "../../src/components/Property";
import { Property as PropertyType } from "../../src/api/propertyApi";

describe("Property Component", () => {
  const mockProperty: PropertyType = {
    id: 1,
    address: "123 Main St, Springfield",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
  };

  it("should render without crashing", () => {
    const wrapper = shallow(<Property property={mockProperty} />);
    expect(wrapper.exists()).to.be.true;
  });

  it("should display the correct address and image", () => {
    const wrapper = shallow(<Property property={mockProperty} />);
    expect(wrapper.find("img").prop("src")).to.equal(mockProperty.image);
    expect(wrapper.find("p").text()).to.equal(mockProperty.address);
  });
});
