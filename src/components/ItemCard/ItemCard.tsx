import cn from 'classnames';
import { ISizes } from '../../types/types';
import Button from '../Button/Button';

import s from './ItemCard.module.scss';

interface itemCardProps {
  id: string;
  name: string;
  description: string;
  extraDescription?: string;
  material: string;
  picture: string[];
  article: number;
  price: number;
  oldPrice?: number;
  sizes: ISizes;
}

function ItemCard({
  name,
  picture,
  article,
  price,
  oldPrice,
  sizes,
}: itemCardProps) {
  const shownSizes = (obj: object) => {
    const arrSizes = Object.keys(obj);
    const firstSize = arrSizes[0];
    const lastSize = arrSizes.slice(-1);

    if (arrSizes.length > 1) {
      return (
        <p className={s.itemCardSize}>
          Розмір: {firstSize} - {lastSize}
        </p>
      );
    }

    return <p className={s.itemCardSize}>Розмір: {firstSize}</p>;
  };

  const handleButtonClick = (): void => {
    console.log('I click button add to card');
  };
  return (
    <div className={s.itemCard}>
      <div>
        <img
          className={s.itemCardImg}
          src={picture[0]}
          alt={name}
          width='275'
          height='340'
        />
        <div
          className={cn(s.itemCardSaleLable, {
            [s.itemCardSaleLableShow]: oldPrice,
          })}
        >
          <p>розпродаж</p>
        </div>
      </div>
      <div className={s.itemCardThumb}>
        <p className={s.itemCardArticle}>Артікул: {article}</p>
        <h2 className={s.itemCardTitle}>{name}</h2>
        {shownSizes(sizes)}
        <div>
          <p className={s.itemCardPrice}>
            Ціна: {price} грн.
            {
              <span
                className={cn(s.itemCardPriceOld, {
                  [s.itemCardPriceOldShow]: oldPrice,
                })}
              >
                {oldPrice} грн.
              </span>
            }
          </p>
        </div>
        <Button
          className={s.itemCardBtn}
          variant='outlined'
          onClick={handleButtonClick}
        >
          До кошика
        </Button>
      </div>
    </div>
  );
}

export default ItemCard;
