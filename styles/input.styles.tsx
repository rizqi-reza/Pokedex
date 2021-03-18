import styled from '@emotion/styled';
import { IInputWrapper } from '@interfaces/iinput';

export const InputWrapper = styled.div<IInputWrapper>(
  ({ size = 'md', invalid = false, disabled = false }) => {
    let cssTmp: any = {};
    let HEIGHT: number = 32;
    let FONT_SIZE: number = 14;
    let PADDING: string = '4px 8px';
    switch (size) {
      case 'sm':
        HEIGHT = 24;
        PADDING = '2px 6px';
        FONT_SIZE = 12;
        break;
      case 'lg':
        HEIGHT = 40;
        PADDING = '4px 14px';
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
