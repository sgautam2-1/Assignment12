import React from 'react';
import styled from 'styled-components';

interface NavbarProps {
  links: { href: string; label: string }[];
  activeLink: string;
}

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #8b4513; /* Brown background */
  padding: 10px 20px;
  font-family: 'Cursive', sans-serif; /* Fancy font */
`;

const NavLink = styled.a<{ isActive: boolean }>`
  color: white;
  text-decoration: none;
  margin: 0 15px;
  padding: 10px;
  border-radius: 5px;
  background-color: ${({ isActive }) => (isActive ? '#a0522d' : 'transparent')}; /* Highlight active link */
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #a0522d;
  }
`;

const Navbar: React.FC<NavbarProps> = ({ links, activeLink }) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <NavbarContainer>
      {links.map((link) => (
        <NavLink
          key={link.href}
          href={link.href}
          isActive={activeLink === link.href}
          onClick={(e) => handleScroll(e, link.href)}
        >
          {link.label}
        </NavLink>
      ))}
    </NavbarContainer>
  );
};

export default Navbar;
