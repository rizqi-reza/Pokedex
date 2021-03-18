import React from 'react';
import { IInput } from '@interfaces/iinput';
import { InputMessage, InputWrapper } from '@styles/input.styles';

const Input: React.FC<IInput> = ({
  size,
  onChange,
  onBlur,
  invalid,
  message,
  disabled,
  ...props
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e.currentTarget.value);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    onBlur && onBlur(e.currentTarget.value);
  };

  const inputNode = () => {
    return <input onChange={handleChange} onBlur={handleBlur} {...props} />;
  };

  return (
    <InputWrapper size={size} invalid={invalid} disabled={disabled} {...props}>
      {inputNode()}
      {invalid && message && <InputMessage>{message}</InputMessage>}
    </InputWrapper>
  );
};

Input.displayName = 'Input';
export default Input;
