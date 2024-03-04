import cn from 'classnames';
import { ISizes } from '../../types/types';
import Button from '../Button/Button';

import s from './ItemCard.module.scss';
import { Link } from 'react-router-dom';
import { MouseEventHandler } from 'react';
import OldPrice from '../OldPrice/OldPrice';

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
  id,
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

  const handleButtonClick: MouseEventHandler<HTMLButtonElement> = (
    event
  ): void => {
    event.preventDefault();
    console.log('I click button add to card');
  };

  return (
    <div className={s.itemCard}>
      <Link to={`${id}`}>
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
              Ціна: {price.toLocaleString('ru')} грн.
              <OldPrice oldPrice={oldPrice} />
            </p>
          </div>
          <Button
            className={s.itemCardBtn}
            variant='outlined'
            onClick={() => handleButtonClick}
          >
            До кошика
          </Button>
        </div>
      </Link>
    </div>
  );
}

export default ItemCard;
