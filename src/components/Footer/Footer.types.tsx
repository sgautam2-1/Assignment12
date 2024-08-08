export interface FooterProps {
    socialLinks: { href: string; label: string }[];
    miniNavLinks: { href: string; label: string }[];
    privacyPolicy: string;
    backgroundColor?: string;
    textColor?: string;
    linkColor?: string;
    hoverColor?: string;
    disabled?: boolean;
  }
  