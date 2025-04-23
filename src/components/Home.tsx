import React, { useEffect } from "react";
import { propertyStore } from "../stores";
import PropertiesList from "./PropertiesList";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    propertyStore.fetchProperties();
  }, []);

  return (
    <div>
      <h1>Properties</h1>
      <Link to="/new-property">Create New Property</Link>
      <PropertiesList store={propertyStore} />
    </div>
  );
};

export default Home;
