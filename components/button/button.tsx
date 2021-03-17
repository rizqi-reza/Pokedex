import React, { Fragment } from 'react';
import { IButton } from '@interfaces/ibutton';
import { ButtonWrapper, Loading } from '@styles/button.styles';

const Button: React.FC<IButton> = ({
  color = 'primary',
  type = 'button',
  disabled,
  outline,
  flat,
  children,
  block,
  size = 'md',
  loading,
  ...props
}) => {
  const loadingNode = () => {
    if (loading) {
      return (
        <Loading color={color}>
          <span />
        </Loading>
      );
    }
  };

  return (
    <ButtonWrapper
      aria-label="button"
      color={color}
      type={type}
      disabled={loading ? true : disabled}
      flat={flat}
      block={block}
      size={size}
      outline={outline}
      {...props}
    >
      {loading && loadingNode()}
      <span>{children}</span>
    </ButtonWrapper>
  );
};
export default Button;
