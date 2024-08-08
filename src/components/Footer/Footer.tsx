import React from 'react';
import styled from 'styled-components';

interface StyledFooterProps {
  backgroundColor?: string;
  textColor?: string;
  linkColor?: string;
  hoverColor?: string;
  disabled?: boolean;
}

const StyledFooter = styled.footer<StyledFooterProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor || '#333'};
  padding: 20px;
  color: ${({ textColor }) => textColor || '#fff'};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};

  .social-links, .mini-navbar {
    display: flex;
    gap: 20px;
    margin-bottom: 15px;

    a {
      color: ${({ linkColor }) => linkColor || '#fff'};
      text-decoration: none;

      &:hover {
        color: ${({ hoverColor }) => hoverColor || '#aaa'};
      }
    }
  }

  .privacy-policy {
    text-align: center;
    font-size: 14px;
  }
`;

interface FooterProps {
  socialLinks?: { href: string; label: string }[];
  miniNavLinks?: { href: string; label: string }[];
  privacyPolicy?: string;
  backgroundColor?: string;
  textColor?: string;
  linkColor?: string;
  hoverColor?: string;
  disabled?: boolean;
}

const Footer: React.FC<FooterProps> = ({
  socialLinks = [],
  miniNavLinks = [],
  privacyPolicy = '',
  backgroundColor,
  textColor,
  linkColor,
  hoverColor,
  disabled = false,
}) => {
  return (
    <StyledFooter
      backgroundColor={backgroundColor}
      textColor={textColor}
      linkColor={linkColor}
      hoverColor={hoverColor}
      disabled={disabled}
    >
      <div className="social-links">
        {socialLinks.map((link, index) => (
          <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
            {link.label}
          </a>
        ))}
      </div>
      <div className="mini-navbar">
        {miniNavLinks.map((link, index) => (
          <a key={index} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
      <div className="privacy-policy">{privacyPolicy}</div>
    </StyledFooter>
  );
};

export default Footer;
