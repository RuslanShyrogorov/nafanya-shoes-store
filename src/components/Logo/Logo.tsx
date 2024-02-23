import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo1.png';

interface ILogoProps {
  width: string;
  height: string;
  className?: string;
}

function Logo({ className, width = '145', height = '40' }: ILogoProps) {
  return (
    <Link to='/'>
      <img
        className={className}
        src={logo}
        alt='Логотип Нафаня'
        width={width}
        height={height}
      />
    </Link>
  );
}

export default Logo;
