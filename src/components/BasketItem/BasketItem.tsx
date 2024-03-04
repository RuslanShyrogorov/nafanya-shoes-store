import s from './BasketItem.module.scss';
import { IShoe } from '../../types/types';
import { FiMinusCircle, FiPlusCircle } from 'react-icons/fi';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import Button from '../Button/Button';

interface IBasketItemProps extends IShoe {
  id: string;
  article: number;
  name: string;
  picture: string[];
  price: number;
}

function BasketItem({ id, article, name, picture, price }: IBasketItemProps) {
  return (
    <>
      <li className={s.basketItem}>
        <div className={s.basketItemWrapper}>
          <p className={s.basketItemArticle}>
            <span>Арт: </span>
            {article}
          </p>
          <img
            className={s.basketItemImg}
            src={picture[0]}
            alt={name}
            width='120'
            height='120'
          />
          <p className={s.basketItemTitle}>{name}</p>
          <p className={s.basketItemSize}>
            Розмір: <span>24</span>
          </p>
          <div className={s.basketItemQuantity}>
            <Button
              variant={'icon'}
              onClick={() => {
                console.log('minus');
              }}
            >
              <FiMinusCircle className={s.basketItemQuantityIcon} />
            </Button>
            <p>4</p>
            <Button
              variant={'icon'}
              onClick={() => {
                console.log('plus');
              }}
            >
              <FiPlusCircle className={s.basketItemQuantityIcon} />
            </Button>
          </div>
          <p className={s.basketItemPrice}>{price.toLocaleString('ru')} грн</p>
          <Button
            variant={'icon'}
            onClick={() => {
              console.log('delete');
            }}
          >
            <IoIosCloseCircleOutline className={s.basketItemPriceIcon} />
          </Button>
        </div>
      </li>
    </>
  );
}

export default BasketItem;
