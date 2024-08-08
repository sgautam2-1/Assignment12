export interface NavItem {
    href: string;
    label: string;
  }
  
  export interface NavbarProps {
    links: NavItem[];
    backgroundColor?: string;
    linkColor?: string;
    hoverColor?: string;
    activeLink?: string;
    disabled?: boolean;
  }
  