import React, { Fragment } from 'react';
import { IButton } from '@interfaces/ibutton';
import { ButtonWrapper, Loading } from '@styles/button.styles';

const Button: React.FC<IButton> = ({
  type = 'button',
  disabled,
  children,
  block,
  size = 'md',
  loading,
  ...props
}) => {
  const loadingNode = () => {
    if (loading) {
      return (
        <Loading>
          <span />
        </Loading>
      );
    }
  };

  return (
    <ButtonWrapper
      aria-label="button"
      type={type}
      disabled={loading ? true : disabled}
      block={block}
      size={size}
      {...props}
    >
      {loading && loadingNode()}
      <span>{children}</span>
    </ButtonWrapper>
  );
};
export default Button;
