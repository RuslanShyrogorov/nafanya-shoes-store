import s from './OfferPage.module.scss';

// TODO after need check and replace text with URL
import data from '../../data/offer.json';

type TOffer = {
  id: string;
  title: string;
  description: string[];
};

function OfferPage() {
  const text = data.offer;

  return (
    <section className={s.offer}>
      <div className={s.container}>
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

export default OfferPage;
