import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaFileAlt, FaRobot, FaHome } from 'react-icons/fa';

const HeaderContainer = styled.header`
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(12px);
  padding: 1rem 2rem;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
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
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
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

const CtaButton = styled(Link)`
  padding: 0.6rem 1.2rem;
  background: linear-gradient(135deg, #4a6cf7, #7c4dff);
  color: #fff;
  border-radius: 999px;
  font-weight: 600;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    color: #fff;
    transform: translateY(-1px);
    box-shadow: 0 10px 18px rgba(74, 108, 247, 0.3);
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
        <CtaButton to="/resume-builder">
          Build My Resume
        </CtaButton>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
