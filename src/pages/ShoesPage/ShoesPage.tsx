import { useState } from 'react';
import cn from 'classnames';

import data from '../../data/shoes.json';
import { Button, ItemCard, Loader } from 'components';
import s from './ShoesPage.module.scss';

const buttonList = ['дівчата', 'хлопчики', 'устілки', 'капці', 'розпродаж'];

export function ShoesPage() {
  const [products, setProducts] = useState(data.shoes);
  const [activeBtnCategory, setActiveBtnCategory] = useState('all');

  const filterByCategory = (category: string) => {
    if (category === 'all') {
      return products;
    } else if (category === 'дівчата') {
      return products.filter((item) => item.gender.includes('girl'));
    } else if (category === 'хлопчики') {
      return products.filter((item) => item.gender.includes('boy'));
    } else if (category === 'розпродаж') {
      return products.filter((item) => item.oldPrice > 0);
    } else if (category === 'устілки') {
      return products.filter((item) => item.type === 'insoles');
    } else if (category === 'капці') {
      return products.filter((item) => item.type === 'slippers');
    }
  };

  const visibleShoes = filterByCategory(activeBtnCategory);
  if (!visibleShoes) {
    return <Loader />;
  }

  return (
    <section className={s.shoes}>
      <div className={s.shoesContainer}>
        <h1 className={s.shoesTitle}>Ортопедичне взуття</h1>
        <ul className={s.shoesBtnList}>
          {buttonList.map((item, idx) => (
            <li key={idx}>
              <Button
                className={cn(s.shoesBtn, {
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
          {visibleShoes.map((item) => (
            <li key={item.id}>
              <ItemCard {...item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
