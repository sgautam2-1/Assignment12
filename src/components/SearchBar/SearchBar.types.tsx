export interface SearchBarProps {
    placeholder: string;
    onSearch: (query: string) => void;
    disabled?: boolean;
  }
  