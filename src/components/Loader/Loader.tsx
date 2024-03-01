import { RotatingLines } from 'react-loader-spinner';
import s from './Loader.module.scss';

function Loader() {
  return (
    <div className={s.loader}>
      <RotatingLines
        strokeColor='#9d825d'
        strokeWidth='5'
        animationDuration='2.0'
        width='96'
        visible={true}
      />
    </div>
  );
}

export default Loader;
