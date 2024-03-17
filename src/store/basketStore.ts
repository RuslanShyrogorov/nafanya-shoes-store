import { makeAutoObservable } from 'mobx';
import { IShoesOfBasket } from '../types/types';

class BasketStore {
  items: IShoesOfBasket[] = [];
  totalPrice = 0;
  itemsInBasket = 0;

  constructor() {
    makeAutoObservable(this);
  }

  get totalItems() {
    return (this.itemsInBasket = this.items.length);
  }

  get sumPrice() {
    return (this.totalPrice = this.items.reduce((acc, item) => {
      return acc + item.price * item.selectedQuantity;
    }, 0));
  }

  addItemToBasket = (shoes: IShoesOfBasket) => {
    const findItem = this.items.find((item) => item.extraId === shoes.extraId);
    if (!findItem) {
      this.items.push(shoes);
    } else {
      findItem.selectedQuantity =
        findItem.selectedQuantity + shoes.selectedQuantity;
      findItem.orderPrice = findItem.selectedQuantity * findItem.price;
    }
  };

  increaseQtyItem = (id: string) => {
    const findItem = this.items.find((item) => item.extraId === id);
    if (!findItem) {
      return this.items;
    }
    findItem.selectedQuantity += 1;
    findItem.orderPrice = findItem.selectedQuantity * findItem.price;
  };

  decreaseQtyItem = (id: string) => {
    const findItem = this.items.find((item) => item.extraId === id);
    if (!findItem) {
      return this.items;
    }
    findItem.selectedQuantity -= 1;
    findItem.orderPrice = findItem.selectedQuantity * findItem.price;
  };

  removeItem = (id: string) => {
    this.items = this.items.filter((item) => item.extraId !== id);
  };

  clearBasket = () => {
    this.items = [];
  };
}

export const basketStore = new BasketStore();
