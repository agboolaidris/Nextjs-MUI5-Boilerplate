import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Theme } from '@mui/material';
import { ColorType } from '../../assets/theme/theme';

export const Text = styled.p<{ color?: ColorType; theme?: Theme }>`
  font-weight: 400;
  line-height: 1.5;
  color: ${({ theme, color }) => theme.colors[color || 'white']};
  ${({ as }) =>
    as === 'h1' &&
    css`
      font-size: 3.052rem;
      font-weight: 500;
      line-height: 1.2;
    `}
  ${({ as }) =>
    as === 'h2' &&
    css`
      font-size: 2.441rem;
      font-weight: 500;
      line-height: 1.2;
    `}
    ${({ as }) =>
    as === 'h3' &&
    css`
      font-size: 1.953rem;
      line-height: 1.3;
      font-weight: 500;
      line-height: 1.2;
    `}
    ${({ as }) =>
    as === 'h4' &&
    css`
      font-size: 1.563rem;
      font-weight: 500;
      line-height: 1.2;
    `}
    ${({ as }) =>
    as === 'h5' &&
    css`
      font-size: 1.25rem;
      font-weight: 500;
      line-height: 1.2;
    `}

    
    ${({ as }) =>
    as === 'figcaption' &&
    css`
      font-size: 0.8rem;
    `};
`;
