import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import { pxToRem } from 'src/functions';
import { colors, fonts, metrics } from 'src/theme';

export const Container = styled(Accordion).attrs({
  allowMultipleExpanded: true,
})``;

export const Item = styled(AccordionItem)`
  margin-bottom: ${metrics.baseSpacing(2)};
`;

export const Heading = styled(AccordionItemHeading)`
  height: ${pxToRem(42)};
  border-bottom: ${pxToRem(1)} solid ${colors.black};

  display: flex;
  align-items: center;

  background: ${colors.white};
`;

export const Button = styled(AccordionItemButton)`
  width: 100%;
  padding: 0 ${metrics.baseSpacing(2)};

  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  > p {
    ${fonts.size2};
    font-weight: 500;
    color: ${colors.dark};
  }
`;

export const Content = styled(AccordionItemPanel)`
  margin-top: ${metrics.baseSpacing(3)};

  grid-gap: ${pxToRem(30)};
  grid-template-columns: 1fr 1fr;

  ${media.lessThan('small')`
    grid-template-columns: 1fr;
  `}

  ${({ isOpen }) =>
    isOpen &&
    css`
      display: grid;
    `}
`;

export const Icon = styled.img`
  transition: 0.3s;

  ${({ isOpen }) =>
    isOpen
      ? css`
          transform: rotate(0.25turn);
        `
      : css`
          transform: rotate(0turn);
        `}
`;
