export interface Property {
  id: number;
  address: string;
  image: string;
}

let propertiesSingleton: Property[] = [
  {
    id: 1,
    address: "123 Main St, Springfield",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
  },
  {
    id: 2,
    address: "456 Elm St, Shelbyville",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
  },
  {
    id: 3,
    address: "789 Oak St, Ogdenville",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
  },
  {
    id: 4,
    address: "101 Maple St, Capital City",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    id: 5,
    address: "202 Pine St, North Haverbrook",
    image: "https://images.unsplash.com/photo-1599423300746-b62533397364",
  },
];

export const fetchProperties = async (): Promise<Property[]> => {
  // Simulate a longer loading time
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return [...propertiesSingleton];
};

export const createProperty = async (
  newProperty: Omit<Property, "id">
): Promise<Property> => {
  const newId = propertiesSingleton.length + 1;
  const propertyWithId = { id: newId, ...newProperty };
  propertiesSingleton.push(propertyWithId);
  return propertyWithId;
};