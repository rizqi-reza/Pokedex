import React from 'react';
import { IButton } from '@interfaces/ibutton';
import { ButtonWrapper, Loading } from '@styles/button.styles';

const Button: React.FC<IButton> = ({
  color = 'primary',
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
      color={color}
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
