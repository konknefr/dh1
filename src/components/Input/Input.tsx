import cn from 'classnames';
import React, { FC, useState, ChangeEvent } from 'react';
import s from './Input.module.scss';

interface InputProps {
  name: string;
  label?: string;
  placeholder?: string;
  className?: string;
}

const Input: FC<InputProps> = ({ name, label = '', placeholder = '', className = '' }) => {
  const [value, setValue] = useState('');

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    setValue(event.target.value);
  }

  return (
    <fieldset className={cn(s.wrapper, className)}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        value={value}
        id={name}
        name={name}
        type="text"
        onChange={handleChange}
        placeholder={placeholder}
        aria-label={label}
      />
    </fieldset>
  );
};

export default Input;
