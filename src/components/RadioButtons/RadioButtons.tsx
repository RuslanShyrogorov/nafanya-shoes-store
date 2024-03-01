import cn from 'classnames';
import s from './RadioButtons.module.scss';

interface IRadioButtonsProps {
  sizes: string[];
  selected: string;
  setSelected: (value: string) => void;
  className?: string;
}

function RadioButtons({
  sizes,
  selected,
  setSelected,
  className,
}: IRadioButtonsProps) {
  return (
    <div className={s.radioButtons}>
      <ul>
        {sizes.map((size) => (
          <li key={size} className={cn(s.radioButtonsItem, className)}>
            <label>
              <input
                type='radio'
                name='size'
                value={size}
                checked={selected === size}
                onChange={(e) => setSelected(e.target.value)}
              />
              <span>{size}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RadioButtons;
