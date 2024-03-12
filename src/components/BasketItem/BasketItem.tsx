import { FiMinusCircle, FiPlusCircle } from 'react-icons/fi';
import { IoIosCloseCircleOutline } from 'react-icons/io';

import { Button } from 'components';
import { IShoesOfBasket } from '../../types/types';
import { basketStore } from '../../store/basketStore';

import s from './BasketItem.module.scss';

function BasketItem({
  article,
  name,
  picture,
  selectedSize,
  selectedQuantity,
  orderPrice,
  extraId,
}: IShoesOfBasket) {
  const { removeItem, increaseQtyItem, decreaseQtyItem } = basketStore;

  const handleRemoveItem = (extraId: string) => {
    removeItem(extraId);
  };

  return (
    <div className={s.basketItem}>
      <div className={s.basketItemWrapper}>
        <p className={s.basketItemArticle}>
          <span>Арт: </span>
          {article}
        </p>
        <img
          className={s.basketItemImg}
          src={picture}
          alt={name}
          width='120'
          height='120'
        />
        <p className={s.basketItemTitle}>{name}</p>
        <p className={s.basketItemSize}>
          Розмір: <span>{selectedSize}</span>
        </p>
        <div className={s.basketItemQuantity}>
          <Button
            variant={'icon'}
            onClick={() => decreaseQtyItem(extraId)}
            disabled={selectedQuantity === 1}
          >
            <FiMinusCircle className={s.basketItemQuantityIcon} />
          </Button>
          <p>{selectedQuantity}</p>
          <Button variant={'icon'} onClick={() => increaseQtyItem(extraId)}>
            <FiPlusCircle className={s.basketItemQuantityIcon} />
          </Button>
        </div>
        <p className={s.basketItemPrice}>
          {orderPrice.toLocaleString('ru')} грн
        </p>
        <Button
          className={s.basketItemDeleteBtn}
          variant={'icon'}
          onClick={() => handleRemoveItem(extraId)}
        >
          <IoIosCloseCircleOutline className={s.basketItemDeleteIcon} />
        </Button>
      </div>
    </div>
  );
}

export const BasketItemObserver = BasketItem;
