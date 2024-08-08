import React from 'react';
import styled from 'styled-components';

const DropdownMenu = styled.div`
  position: relative;
  display: inline-block;

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #333;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;

    a {
      color: #fff;
      padding: 12px 16px;
      text-decoration: none;
      display: block;

      &:hover {
        background-color: #444;
      }
    }
  }

  &:hover .dropdown-content {
    display: block;
  }
`;

const Dropdown: React.FC<{ options: { label: string; onClick: () => void }[] }> = ({ options }) => {
  return (
    <DropdownMenu>
      <span>Menu</span>
      <div className="dropdown-content">
        {options.map((option, index) => (
          <a key={index} href="#" onClick={option.onClick}>
            {option.label}
          </a>
        ))}
      </div>
    </DropdownMenu>
  );
};

export default Dropdown;
