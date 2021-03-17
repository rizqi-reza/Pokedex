import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';
import { IButton } from '@interfaces/ibutton';

export const ButtonWrapper = styled.button<IButton>(
  () => ({
    // ...Text.fontBase,
    position: 'relative',
    display: 'inline-flex',
    whiteSpace: 'nowrap',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: 'none',
    border: '1px solid transparent',
    borderRadius: 4,
    cursor: 'pointer',
    transition: 'all .3s cubic-bezier(0.645, 0.045, 0.355, 1)',
    userSelect: 'none',
    touchAction: 'manipulation',
    outline: 'none',
    verticalAlign: 'middle',
    textDecoration: 'none',
    boxSizing: 'border-box',
    boxShadow: '0px 1px 1px 0px rgba(0, 0, 0, 0.12), 0px 1px 2px 0px rgba(0, 0, 0, 0.12)',
    '&:hover': {
      boxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.12), 0px 2px 4px 0px rgba(0, 0, 0, 0.12)',
    },
  }),
  ({ outline, color, size, disabled, block, flat }) => {
    let cssTmp: any = {};
    let WIDTH: number | string | undefined = undefined;
    let FONT_SIZE: number = 14;
    let DIMENSION: number = 32;
    let PADDING: number = 16;
    let FONT_WEIGHT: number = 400;

    if (color && outline) {
      cssTmp = {
        ...cssTmp,
        // ...Outline[color],
      };
    } else if (color && !outline) {
      let background;
      switch (color) {
        case 'approval':
          {
            background = {
              backgroundColor: '#30a444',
              color: '#fff',
              '&:hover': {
                backgroundColor: '#43bf4d',
              },
              '&:active': {
                backgroundColor: '#21893c',
              },
              '&:focus': {
                backgroundColor: '#30a444',
                boxShadow:
                  '0px 0px 0px 3px rgba(135, 204, 176, 0.8),0px 1px 1px 0px rgba(62, 62, 63, 0.2);',
              },
              '&:disabled': {
                color: '#fff',
                backgroundColor: '#99eb8f',
              },
            };
          }
          break;
        case 'danger':
          {
            background = {
              backgroundColor: '#cc292e',
              color: '#fff',
              '&:hover': {
                backgroundColor: '#e06159',
              },
              '&:active': {
                backgroundColor: '#af1d2f',
              },
              '&:focus': {
                backgroundColor: '#cc292e',
                boxShadow:
                  '0px 0px 0px 3px rgba(247, 151, 155, 0.8),0px 1px 1px 0px rgba(62, 62, 63, 0.2)',
              },
              '&:disabled': {
                color: '#fff',
                backgroundColor: '#f9bcaa',
              },
            };
          }
          break;
        default:
          {
            background = {
              backgroundColor: '#225db2',
              color: '#fff',
              '&:hover': {
                backgroundColor: '#2f78cf',
              },
              '&:active': {
                backgroundColor: '#174595',
              },
              '&:focus': {
                backgroundColor: '#225db2',
                boxShadow:
                  '0px 0px 0px 3px rgba(184, 209, 239, 0.8), 0px 1px 1px 0px rgba(62, 62, 63, 0.2);',
              },
              '&:disabled': {
                color: '#fff',
                backgroundColor: '#81b7f0',
              },
            };
          }
          break;
      }
      cssTmp = {
        ...cssTmp,
        ...background,
      };
    }

    if (disabled) {
      cssTmp = {
        ...cssTmp,
        cursor: 'not-allowed',
        pointerEvents: 'none',
      };
    }

    if (flat) {
      cssTmp = {
        ...cssTmp,
        boxShadow: 'none',
        '&:hover, &:active, &:focus': {
          boxShadow: 'none',
        },
      };
    }

    switch (size) {
      case 'sm':
        FONT_SIZE = 12;
        DIMENSION = 24;
        PADDING = 8;
        break;
      case 'lg':
        FONT_SIZE = 16;
        DIMENSION = 40;
        break;
      case 'xl':
        FONT_SIZE = 16;
        DIMENSION = 48;
        FONT_WEIGHT = 600;
        PADDING = 24;
        break;

      default:
        break;
    }

    if (block) {
      WIDTH = '100%';
    }

    cssTmp = {
      ...cssTmp,
      i: {
        paddingRight: 8,
        paddingLeft: 8,
      },
      fontWeight: FONT_WEIGHT,
      width: WIDTH,
      height: DIMENSION,
      lineHeight: DIMENSION + 'px',
      fontSize: FONT_SIZE,
      padding: `0 ${PADDING}px`,
      svg: {
        width: FONT_SIZE,
        height: FONT_SIZE,
      },
    };

    return cssTmp;
  },
);

export const loaderRippleKeyframe = keyframes({
  from: {
    transform: 'translateY(-50%) rotate(0deg)',
  },
  to: {
    transform: 'translateY(-50%) rotate(360deg)',
  },
});

export const Loading = styled.span<IButton>(({ color }) => ({
  position: 'relative',
  width: 22,
  span: {
    position: 'absolute',
    height: 14,
    width: 14,
    top: '50%',
    left: 0,
    backgroundColor: 'transparent',
    opacity: 1,
    borderRadius: '50%',
    borderTop: `1px solid ${
      color === 'primary' || color === 'approval' || color === 'danger' ? '#fff' : '#000'
    }`,
    borderLeft: `1px solid ${
      color === 'primary' || color === 'approval' || color === 'danger' ? '#fff' : '#000'
    }`,
    borderBottom: `1px solid ${
      color === 'primary' || color === 'approval' || color === 'danger' ? '#fff' : '#000'
    }`,
    borderRight: '1px solid transparent',
    transition: 'all 0.28s ease',
    transitionDelay: '0.1s',
    animationName: loaderRippleKeyframe,
    animationDuration: '0.75s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
  },
}));
