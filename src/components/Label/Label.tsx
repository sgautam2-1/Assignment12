import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';


const StyledLabel = styled.label<LabelProps>`
  font-size: 24px;
  color: ${({ disabled }) => (disabled ? 'grey' : 'purple')};
  background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: ${({ disabled }) => (disabled ? 'grey' : 'blue')};
  }

  &:focus {
    outline: ${({ disabled }) => (disabled ? 'none' : '2px solid blue')};
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const Label: React.FC<LabelProps> = ({ children, disabled, backgroundColor }) => {
  return <StyledLabel disabled={disabled} backgroundColor={backgroundColor}>{children}</StyledLabel>;
};

export default Label;
