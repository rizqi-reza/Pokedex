import React from 'react';
import { IInput } from '@interfaces/iinput';
import { InputMessage, InputWrapper, Loading } from '@styles/input.styles';

const Input: React.FC<IInput> = ({
  size,
  onChange,
  onBlur,
  invalid,
  message,
  disabled,
  loading = false,
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
    <InputWrapper size={size} invalid={invalid} disabled={disabled} isLoading={loading} {...props}>
      {inputNode()}
      {invalid && message && <InputMessage>{message}</InputMessage>}
      {loading && <Loading size={size} />}
    </InputWrapper>
  );
};

Input.displayName = 'Input';
export default Input;
