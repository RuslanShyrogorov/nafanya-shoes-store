import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import { BsCart, BsTrash3 } from 'react-icons/bs';
import { FiArrowLeft } from 'react-icons/fi';

import { basketStore } from '../../store/basketStore';
import {
  BasketItemObserver,
  Button,
  EmptyBasket,
  Form,
  Modal,
} from 'components';

import s from './BasketPage.module.scss';

function BasketPage() {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const navigate = useNavigate();
  const { clearBasket, sumPrice, items } = basketStore;
  const itemsToJs = toJS(items);

  if (!itemsToJs.length) {
    return <EmptyBasket />;
  }

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
              onClick={clearBasket}
            >
              <BsTrash3 className={s.basketHeaderIconTrash} />
              <span>Очистити кошик</span>
            </Button>
          </div>
          <ul className={s.basketList}>
            {itemsToJs.map((item) => (
              <li key={item.extraId}>
                <BasketItemObserver {...item} />
              </li>
            ))}
            {/*<EmptyBasket />*/}
          </ul>
          <div className={s.basketFooter}>
            <p>
              Сумма замовлення:
              <span>{sumPrice.toLocaleString('ru')} грн</span>
            </p>
            <Button
              className={s.basketFooterBtn}
              variant={'outlined'}
              onClick={() => setIsOpenForm(true)}
            >
              Оформити замовлення
            </Button>
            <Modal isOpen={isOpenForm} onClose={() => setIsOpenForm(false)}>
              <Form onClose={() => setIsOpenForm(false)} />
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export const BasketPageObserver = observer(BasketPage);
