import { Link } from 'react-router-dom';
import basketImg from '../../assets/images/empty-basket.png';
import s from './EmptyBasket.module.scss';

function EmptyBasket() {
  return (
    <div className={s.emptyBasket}>
      <div className={s.emptyBasketContainer}>
        <div className={s.emptyBasketWrapper}>
          <h1>Кошик порожній</h1>
          <p>Ви ще не орбрали жодного товару.</p>
          <img
            src={basketImg}
            alt='Person go to shopping'
            width='600'
            height='510'
          />
          <Link to='/shoes' className={s.emptyBasketLink}>
            <p>Обрати взуття</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EmptyBasket;
