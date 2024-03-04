import { BsCart, BsTrash3 } from 'react-icons/bs';

import BasketItem from '../../components/BasketItem/BasketItem';
import s from './BasketPage.module.scss';

import data from '../../data/shoes.json';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

const item1 = data.shoes[0];
const item2 = data.shoes[1];
const item3 = data.shoes[2];

function BasketPage() {
  const navigate = useNavigate();

  return (
    <div className={s.basket}>
      <div className={s.basketContainer}>
        <Button
          className={s.basketBtnBack}
          variant='text'
          onClick={() => navigate(-1)}
        >
          <FiArrowLeft />
          Назад
        </Button>
        <div className={s.basketWrapper}>
          <div className={s.basketHeader}>
            <BsCart className={s.basketHeaderIconCart} />
            <h3 className={s.basketHeaderTitle}>Кошик</h3>
            <Button
              className={s.basketHeaderBtn}
              variant={'text'}
              onClick={() => {
                console.log('clean basket');
              }}
            >
              <BsTrash3 className={s.basketHeaderIconTrash} />
              <span>Очистити кошик</span>
            </Button>
          </div>
          <ul className={s.basketList}>
            <BasketItem {...item1} />
            <BasketItem {...item2} />
            <BasketItem {...item3} />
          </ul>
          <div className={s.basketFooter}>
            <p>
              Сумма замовлення:{' '}
              <span>{data.shoes[0].price.toLocaleString('ru')} грн.</span>
            </p>
            <Button
              className={s.basketFooterBtn}
              variant={'outlined'}
              onClick={() => {
                console.log('submit');
              }}
            >
              Оформити замовлення
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasketPage;
