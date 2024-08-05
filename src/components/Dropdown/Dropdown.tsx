
import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

interface StyledDropdownProps {
  visible: boolean;
  backgroundColor: string;
  disabled: boolean;
}

const DropdownContainer = styled.div<StyledDropdownProps>`
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  margin: 8px;

  &:hover {
    background-color: #f0f0f0; 
  }
`;

const Select = styled.select<StyledDropdownProps>`
  width: 100%;
  padding: 8px;
  border: none;
  border-radius: 4px;
  background-color: inherit;
  color: #333;

  &:disabled {
    background-color: #d3d3d3;
    cursor: not-allowed;
  }
`;

const Dropdown: React.FC<DropdownProps> = ({ options, disabled = false, backgroundColor = 'white', visible = true }) => {
  if (!visible) return null;
  return (
    <DropdownContainer visible={visible} backgroundColor={backgroundColor} disabled={disabled} data-testid="dropdown-container">
      <Select disabled={disabled} backgroundColor={backgroundColor} visible={visible}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </DropdownContainer>
  );
};

export default Dropdown;
