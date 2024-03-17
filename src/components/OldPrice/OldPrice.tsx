import cn from 'classnames';

import s from './OldPrice.module.scss';

interface IOldPriceProps {
  oldPrice?: number;
  className?: string;
}

export function OldPrice({ oldPrice, className }: IOldPriceProps) {
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
      {oldPrice?.toLocaleString('ru')} грн.
    </s>
  );
}
