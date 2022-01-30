import React from 'react';
import styled from 'styled-components';

const StyledScreenReaderOnly = styled.span`
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important;
  clip-path: inset(50%) !important;
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
  word-wrap: normal !important;
`;

export type ScreenReaderOnlyProps = {
  children: React.ReactNode;
};

const ScreenReaderOnly = ({ children }: ScreenReaderOnlyProps): JSX.Element => (
  <StyledScreenReaderOnly>{children}</StyledScreenReaderOnly>
);

export default ScreenReaderOnly;
