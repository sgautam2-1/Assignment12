
import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';

const StyledText = styled.p<TextProps>`
  font-size: 26px;
  color: ${({ disabled }) => (disabled ? 'grey' : 'blueviolet')};
  background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
  margin: 0;
  padding: 8px 0;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ disabled }) => (disabled ? 'grey' : 'lavenderblush')};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  }
`;

const Text: React.FC<TextProps> = ({ children, disabled, backgroundColor, visible = true }) => {
  if (!visible) return null;
  return <StyledText disabled={disabled} backgroundColor={backgroundColor}>{children}</StyledText>;
};

export default Text;
