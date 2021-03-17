import { keyframes } from '@emotion/core';
import styled from '@emotion/styled';
import { IInputWrapper } from '@interfaces/iinput';

export const InputWrapper = styled.div<IInputWrapper>(
  ({ size = 'md', invalid = false, disabled = false, isLoading = false }) => {
    let cssTmp: any = {};
    let HEIGHT: number = 32;
    let FONT_SIZE: number = 14;
    let PADDING: string = isLoading ? '4px 38px 4px 8px' : '4px 8px';
    switch (size) {
      case 'sm':
        HEIGHT = 24;
        PADDING = isLoading ? '2px 34px 2px 6px' : '2px 6px';
        FONT_SIZE = 12;
        break;
      case 'lg':
        HEIGHT = 40;
        PADDING = isLoading ? '4px 50px 4px 14px' : '4px 14px';
        FONT_SIZE = 16;
        break;
      default:
        break;
    }

    cssTmp = {
      ...cssTmp,
      '& input': {
        height: HEIGHT,
        border: `1px solid ${invalid ? '#cc292e' : '#a5aab0'}`,
        width: '100%',
        '&:focus': {
          borderColor: invalid ? '#cc292e' : '#225db2',
          boxShadow: `0 0 0 2px ${invalid ? '#cc292e' : '#225db2'}33`,
        },
        '&::placeholder': {
          color: '#a5aab0',
        },
      },
    };

    cssTmp = {
      ...cssTmp,
      position: 'relative',
      width: '100%',
      input: {
        pointerEvents: disabled ? 'none' : undefined,
        cursor: disabled ? 'not-allowed' : undefined,
        backgroundColor: disabled ? '#e3e5e8' : '#fff',
        padding: PADDING,
        fontSize: `${FONT_SIZE}px`,
        position: 'relative',
        borderRadius: 8,
        outline: 'none',
        boxSizing: 'border-box',
        transition: 'all 0.3s',
        lineHeight: 1.5,
        color: '#121212',
      },
    };
    return cssTmp;
  },
);

export const InputMessage = styled.span<IInputWrapper>(({ invalid = false }) => ({
  fontSize: 12,
  color: invalid ? '#cc292e' : '#000',
}));

export const loaderRippleKeyframe = keyframes({
  from: {
    transform: 'translateY(-50%) rotate(0deg)',
  },
  to: {
    transform: 'translateY(-50%) rotate(360deg)',
  },
});

export const Loading = styled.span<IInputWrapper>(({ size }) => ({
  position: 'absolute',
  height: size === 'lg' ? 18 : 14,
  width: size === 'lg' ? 18 : 14,
  top: '50%',
  right: size === 'sm' ? 6 : size === 'lg' ? 14 : 8,
  backgroundColor: 'transparent',
  opacity: 1,
  borderRadius: '50%',
  borderTop: '2px solid #225db2',
  borderLeft: '2px solid #225db2',
  borderBottom: '2px solid #225db2',
  borderRight: '2px solid transparent',
  transition: 'all 0.28s ease',
  transitionDelay: '0.1s',
  animationName: loaderRippleKeyframe,
  animationDuration: '0.75s',
  animationIterationCount: 'infinite',
  animationTimingFunction: 'linear',
}));
