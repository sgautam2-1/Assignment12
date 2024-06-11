import React from 'react';
import styled from 'styled-components';
import { DropdownProps, Option } from './Dropdown.types';

interface StyledSelectProps {
  isDisabled: boolean;
  backgroundColor: string;
  className?: string;
}

const StyledSelect = styled.select<StyledSelectProps>`
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: ${({ isDisabled, backgroundColor }) => (isDisabled ? backgroundColor || '#d3d3d3' : backgroundColor || '#90ee90')};
  &:disabled {
    cursor: not-allowed;
  }
  &:hover {
    background-color: ${({ isDisabled }) => (isDisabled ? 'grey' : '#e0ffff')};
  }

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 14px;
  }
  @media (max-width: 480px) {
    padding: 6px;
    font-size: 12px;
  }
`;

const Dropdown: React.FC<DropdownProps> = ({ options, disabled, backgroundColor }) => {
  return (
    <StyledSelect isDisabled={!!disabled} backgroundColor={backgroundColor || 'green'} disabled={disabled}>
      {options.map((option: Option, index: number) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Dropdown;
