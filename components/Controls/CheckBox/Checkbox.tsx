import { ChangeEventHandler } from 'react';
import classes from './Checkbox.module.css';
type Props = {
  value: string;
  label: string;
  checked: ChangeEventHandler<HTMLInputElement>;
};

const Checkbox = ({ value, label, checked }: Props) => {
  return (
    <>
      <div className="flex justify-start">
        <div className="form-check">
          <input
            className={`${classes.checkboxWrapper}`}
            value={value}
            type="checkbox"
            onChange={checked}
          />
          <label className={classes.checkboxLabel}>{label}</label>
        </div>
      </div>
    </>
  );
};

export default Checkbox;
