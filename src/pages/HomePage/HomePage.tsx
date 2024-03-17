import s from './HomePage.module.scss';

export function HomePage() {
  return (
    <section className={s.home}>
      <div className={s.homeContainer}>
        <h1 className={s.homeTitle}>
          Ортопедичне взуття
          <br /> для дітей та підлітків!
        </h1>
      </div>
    </section>
  );
}
