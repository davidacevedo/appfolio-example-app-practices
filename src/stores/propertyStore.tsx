import { observable, action, runInAction } from "mobx";
import { fetchProperties, createProperty, Property } from "../api/propertyApi";

class PropertyStore {
  @observable properties: Property[] = [];
  @observable isLoading: boolean = false;
  @observable error: string | null = null;

  @action async fetchProperties(): Promise<void> {
    this.isLoading = true;
    this.error = null;
    try {
      const data = await fetchProperties();
      runInAction(() => {
        this.properties = data;
        this.isLoading = false;
      });
    } catch (err) {
      runInAction(() => {
        this.error = (err as Error).message;
        this.isLoading = false;
      });
    }
  }

  @action async createProperty(
    newProperty: Omit<Property, "id">
  ): Promise<void> {
    try {
      const createdProperty = await createProperty(newProperty);
      runInAction(() => {
        this.properties.push(createdProperty);
      });
    } catch (err) {
      runInAction(() => {
        this.error = (err as Error).message;
      });
    }
  }
}

export default PropertyStore;
