import { useEffect, useState } from 'react';
import cn from 'classnames';
import { Button, ItemCard, Loader, Pagination } from 'components';
import { filterByCategory, getShoes } from 'utils';
import { shoes } from '../../data/shoes';
import { IShoe } from '../../types/types';
import s from './ShoesPage.module.scss';

const buttonList = ['дівчата', 'хлопчики', 'устілки', 'капці', 'розпродаж'];

export function ShoesPage() {
  const [products, setProducts] = useState<IShoe[]>([]);
  const [activeBtnCategory, setActiveBtnCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(3);

  useEffect(() => {
    const result = getShoes(shoes);
    setProducts(result);
  }, []);

  const visibleShoes = filterByCategory(activeBtnCategory, products);
  if (!visibleShoes) {
    return <Loader />;
  }
  const totalProducts = visibleShoes.length;
  const lastProductsIndex = currentPage * productsPerPage;
  const firstProductsIndex = lastProductsIndex - productsPerPage;
  const currentProductsOnPage = visibleShoes.slice(
    firstProductsIndex,
    lastProductsIndex
  );

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
          {currentProductsOnPage.map((item) => (
            <li key={item.id}>
              <ItemCard {...item} />
            </li>
          ))}
        </ul>
        <Pagination
          totalProducts={totalProducts}
          productsPerPage={productsPerPage}
          handleClick={setCurrentPage}
        />
      </div>
    </section>
  );
}
