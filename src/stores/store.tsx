import { observable, action } from "mobx";

class Store {
  @observable count = 0;

  @action increment() {
    this.count += 1;
  }

  @action decrement() {
    this.count -= 1;
  }
}

export default Store;
