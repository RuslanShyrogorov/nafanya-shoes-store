import s from './OldPrice.module.scss';
import cn from 'classnames';

interface IOldPriceProps {
  oldPrice?: number;
  className?: string;
}

function OldPrice({ oldPrice, className }: IOldPriceProps) {
  return (
    <s
      className={cn(
        s.oldPrice,
        {
          [s.oldPriceShow]: oldPrice,
        },
        className
      )}
    >
      {oldPrice} грн.
    </s>
  );
}

export default OldPrice;
