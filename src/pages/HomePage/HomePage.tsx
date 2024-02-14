import s from './HomePage.module.scss';
import Basket from '../../components';

function HomePage() {
  return (
    <section className={s.home}>
      <div className={s.homeContainer}>
        {/*<h1 className={s.homeTitle}>*/}
        {/*  Ортопедичне взуття для дітей та підлітків*/}
        {/*</h1>*/}
        <Basket />
      </div>
    </section>
  );
}

export default HomePage;
