
// Dropdown.types.ts
export interface Option {
  value: string;
  label: string;
}

export interface DropdownProps {
  options: Option[];
  disabled?: boolean;
  backgroundColor?: string;
  visible?: boolean; // Add the visible property
}

