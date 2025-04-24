import React from "react";
import { Property as PropertyType } from "../../../_apm.shared/api/propertyApi";

interface PropertyProps {
  property: PropertyType;
}

const Property = ({ property }: PropertyProps) => (
  <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
    <img
      src={property.image}
      alt="Property"
      style={{ width: "150px", height: "150px" }}
    />
    <p>{property.address}</p>
  </div>
);

export default Property;
