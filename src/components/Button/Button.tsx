
import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

const StyledButton = styled.button<ButtonProps & { hoverClass?: string }>`
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  background-color: ${({ disabled, backgroundColor }) => (disabled ? 'grey' : backgroundColor || 'blue')};
  color: white;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &.hover {
    background-color: ${({ disabled }) => (disabled ? 'grey' : '#0053ba')};
  }

  &:focus {
    outline: ${({ disabled }) => (disabled ? 'none' : '2px solid #0053ba')};
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const Button: React.FC<ButtonProps> = ({ children, disabled, backgroundColor, visible = true }) => {
  if (!visible) return null;
  return <StyledButton disabled={disabled} backgroundColor={backgroundColor}>{children}</StyledButton>;
};

export default Button;
