
import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

interface StyledLabelProps {
  bgColor?: string;
  disabled?: boolean;
}

const StyledLabel = styled.label<StyledLabelProps>`
  background-color: ${({ bgColor }) => bgColor || 'transparent'};
  padding: 8px;
  margin: 4px;
  border-radius: 4px;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  color: ${({ disabled }) => (disabled ? '#a9a9a9' : '#000000')};
  transition: background-color 0.3s ease, transform 0.3s ease;

 &:hover {
    background-color: #f0f0f0; 
  }
`;

const Label: React.FC<LabelProps> = ({ children, disabled, backgroundColor, visible = true }) => {
  if (!visible) return null;
  return (
    <StyledLabel bgColor={backgroundColor} disabled={disabled}>
      {children}
    </StyledLabel>
  );
};

export default Label;
