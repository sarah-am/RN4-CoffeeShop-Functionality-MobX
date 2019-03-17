import { decorate, observable } from "mobx";

class CartStore {
  items = null;
}

decorate(CartStore, {
  items: observable
});

export default new CartStore();
