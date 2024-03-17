import s from './OfferPage.module.scss';

import data from '../../data/offer.json';

type TOffer = {
  id: string;
  title: string;
  description: string[];
};

export function OfferPage() {
  const text = data.offer;

  return (
    <section className={s.offer}>
      <div className={s.offerContainer}>
        <h3>Договір публічної оферти</h3>
        <p>на замовлення, придбання, продаж та доставку товарів</p>
        <ol>
          {text.map(({ id, title, description }: TOffer) => (
            <li key={id} className={s.offerSubtitleList}>
              <span>{title}</span>
              <ol>
                {description.map((item, idx) => (
                  <li key={idx} className={s.offerItemsList}>
                    {item}
                  </li>
                ))}
              </ol>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
