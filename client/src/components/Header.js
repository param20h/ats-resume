import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaFileAlt, FaRobot, FaHome } from 'react-icons/fa';

const HeaderContainer = styled.header`
  background-color: #ffffff;
  padding: 1rem 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  h1 {
    font-size: 1.5rem;
    color: #4a6cf7;
    font-weight: 700;
  }

  span {
    color: #333;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${({ active }) => (active ? '#4a6cf7' : '#555')};
  font-weight: ${({ active }) => (active ? '600' : '500')};
  padding: 0.5rem 0;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${({ active }) => (active ? '100%' : '0')};
    height: 2px;
    background-color: #4a6cf7;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const Header = () => {
  const location = useLocation();

  return (
    <HeaderContainer>
      <Logo>
        <FaRobot size={24} color="#4a6cf7" />
        <h1>AI<span>Resume</span></h1>
      </Logo>
      <Nav>
        <NavLink to="/" active={location.pathname === '/' ? 'true' : undefined}>
          <FaHome /> Home
        </NavLink>
        <NavLink
          to="/resume-builder"
          active={location.pathname === '/resume-builder' ? 'true' : undefined}
        >
          <FaFileAlt /> Resume Builder
        </NavLink>
        <NavLink
          to="/ats-scorer"
          active={location.pathname === '/ats-scorer' ? 'true' : undefined}
        >
          <FaRobot /> ATS Scorer
        </NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
