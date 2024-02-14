import { Link } from 'react-router-dom';

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
        src='/assets/logo.png'
        alt='Логотип Нафаня'
        width={width}
        height={height}
      />
    </Link>
  );
}

export default Logo;
