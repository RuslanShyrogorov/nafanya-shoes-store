import { IShoesOfBasket } from '../types/types';

const attachmentEmail = (items: IShoesOfBasket, position: number) => {
  return `Позиция заказа №${position + 1}, Aртикул: ${
    items.article
  }, Название: ${items.name}, Размер: ${items.selectedSize}; Цена на сайте: ${
    items.price
  }, Количество: ${items.selectedQuantity}; Сумма заказа: ${items.orderPrice};`;
};

export default attachmentEmail;
