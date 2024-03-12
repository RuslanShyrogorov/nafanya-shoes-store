import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { FiArrowLeft, FiMinusCircle, FiPlusCircle } from 'react-icons/fi';

import OldPrice from '../../components/OldPrice/OldPrice';
import Button from '../../components/Button/Button';
import RadioButtons from '../../components/RadioButtons/RadioButtons';
import Loader from '../../components/Loader/Loader';

import data from '../../data/shoes.json';
import { basketStore } from '../../store/basketStore';
import { IShoesOfBasket } from '../../types/types';

import s from './DetailedCardPage.module.scss';

function DetailedCardPage() {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const { cardId } = useParams();
  const navigate = useNavigate();
  const cardInfo = data.shoes.find((card) => card.id === cardId);
  const { addItemToBasket } = basketStore;

  if (!cardInfo) {
    return <Loader />;
  }
  const {
    id,
    name,
    description,
    extraDescription,
    material,
    picture,
    price,
    oldPrice,
    sizes,
    article,
  } = cardInfo;

  const sizesBtn = Object.keys(sizes);

  const handleAddToBasketClick = () => {
    const selectedShoes: IShoesOfBasket = {
      id,
      extraId: id + selectedSize,
      name,
      picture: picture[0],
      price,
      article,
      selectedSize,
      selectedQuantity: quantity,
      orderPrice: quantity * price,
    };

    addItemToBasket(selectedShoes);
  };

  return (
    <div className={s.detailed}>
      <div className={s.detailedContainer}>
        <Button
          className={s.detailedBtnBack}
          variant='text'
          onClick={() => navigate(-1)}
        >
          <FiArrowLeft />
          Назад
        </Button>
        <div className={s.detailedCard}>
          <div className={s.detailedWrapperImg}>
            <img className={s.detailedImg} src={picture[0]} alt={description} />
          </div>
          <div className={s.detailedWrapperInfo}>
            <p className={s.detailedArticle}>
              <span>Артікул:</span>
              {article}
            </p>
            <h2>{name}</h2>
            <p>{description}</p>
            <p>
              <span>Особливості:</span>
              {extraDescription}
            </p>
            <p>
              <span>Матеріал:</span>
              {material}
            </p>
            <div>
              <span>Розмір:</span>
              <RadioButtons
                sizes={sizesBtn}
                selected={selectedSize}
                setSelected={setSelectedSize}
              />
            </div>
            <p className={s.detailedPrice}>
              <span>Ціна: </span>
              {price.toLocaleString('ru')} грн.
              <OldPrice oldPrice={oldPrice} className={s.detailedOldPrice} />
            </p>
            <div className={s.detailedQuantity}>
              <span>Кількість:</span>
              <Button
                className={s.detailedQuantityBtn}
                variant='icon'
                disabled={quantity === 1}
                onClick={() => {
                  setQuantity(quantity - 1);
                }}
              >
                <FiMinusCircle className={s.detailedQuantityIcon} />
              </Button>
              <p className={s.detailedQuantityText}>{quantity}</p>
              <Button
                className={s.detailedQuantityBtn}
                variant='icon'
                onClick={() => {
                  setQuantity(quantity + 1);
                }}
              >
                <FiPlusCircle className={s.detailedQuantityIcon} />
              </Button>
            </div>
            <Button
              className={s.detailedBtn}
              variant='contained'
              disabled={selectedSize === ''}
              onClick={handleAddToBasketClick}
            >
              {selectedSize ? 'До кошика' : 'Оберіть розмір'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default observer(DetailedCardPage);
