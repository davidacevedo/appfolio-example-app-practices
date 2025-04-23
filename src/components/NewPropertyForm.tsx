import React, { useState } from "react";
import { propertyStore } from "../stores";
import { useHistory } from "react-router-dom";

const NewPropertyForm = () => {
  const [address, setAddress] = useState("");
  const [image, setImage] = useState(propertyStore.properties[0]?.image || "");
  const history = useHistory();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await propertyStore.createProperty({ address, image });
    history.push("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="image">Image:</label>
        <select
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        >
          {propertyStore.properties.map((property) => (
            <option key={property.id} value={property.image}>
              {property.address}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Create Property</button>
    </form>
  );
};

export default NewPropertyForm;
