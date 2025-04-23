import React from "react";
import { observer } from "mobx-react";
import Property from "./Property";
import { Property as PropertyType } from "../api/propertyApi";

interface PropertiesListProps {
  store: {
    properties: PropertyType[];
    isLoading: boolean;
  };
}

const PropertiesList = observer(function PropertiesList({
  store,
}: PropertiesListProps) {
  return (
    <div>
      {store.isLoading ? (
        <p>Loading properties...</p>
      ) : (
        store.properties.map((property) => (
          <Property key={property.id} property={property} />
        ))
      )}
    </div>
  );
});

export default PropertiesList;
