import React from 'react';
import styled from 'styled-components';

export interface LogoProps {
  src: string;
  alt: string;
  size?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const StyledLogo = styled.div<{ size?: string; disabled?: boolean }>`
  display: flex;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  img {
    width: ${({ size }) => size || '50px'};
    height: auto;
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  }
`;

const Logo: React.FC<LogoProps> = ({ src, alt, size, onClick, disabled }) => {
  return (
    <StyledLogo size={size} onClick={disabled ? undefined : onClick} disabled={disabled}>
      <img src={src} alt={alt} />
    </StyledLogo>
  );
};

export default Logo;
