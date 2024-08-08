export interface SectionProps {
    title?: string;
    content: React.ReactNode;
    backgroundColor?: string;
    titleColor?: string;
    textColor?: string;
    direction?: 'column' | 'row';
    expanded?: boolean;
  }
  