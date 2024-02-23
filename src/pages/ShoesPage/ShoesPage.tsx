import { useState } from 'react';
import cn from 'classnames';
import data from '../../data/shoes.json';

import { IShoe } from '../../types/types';

import Button from '../../components/Button/Button';
import ItemCard from '../../components/ItemCard/ItemCard';

import s from './ShoesPage.module.scss';

const buttonList = ['Дівчата', 'Хлопчики', 'Устілки', 'Розпродаж'];

function ShoesPage() {
  const [activeBtnCategory, setActiveBtnCategory] = useState('Дівчата');
  const items: IShoe[] = data.shoes;

  const handleClick = () => {
    console.log('Click!');
  };

  return (
    <section className={s.shoes}>
      <div className={s.shoesContainer}>
        <h1 className={s.shoesTitle}>Ортопедичне взуття</h1>
        <ul className={s.shoesBtnList}>
          {buttonList.map((item, idx) => (
            <li key={idx}>
              <Button
                className={cn({
                  [s.shoesBtnActive]: activeBtnCategory === item,
                })}
                variant='text'
                onClick={() => setActiveBtnCategory(item)}
              >
                {item}
              </Button>
            </li>
          ))}
        </ul>
        <ul className={s.shoesCardList}>
          {items.map((item) => (
            <li key={item.id}>
              <ItemCard {...item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ShoesPage;
