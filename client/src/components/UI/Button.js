import React from 'react';
import styled from 'styled-components';

const ButtonVariants = {
  primary: {
    bgColor: '#4a6cf7',
    hoverBgColor: '#3a50c5',
    color: '#fff',
    hoverColor: '#fff',
    borderColor: 'transparent',
  },
  secondary: {
    bgColor: '#f5f8ff',
    hoverBgColor: '#e3eaff',
    color: '#4a6cf7',
    hoverColor: '#3a50c5',
    borderColor: 'transparent',
  },
  outline: {
    bgColor: 'transparent',
    hoverBgColor: '#f5f8ff',
    color: '#4a6cf7',
    hoverColor: '#3a50c5',
    borderColor: '#4a6cf7',
  },
  danger: {
    bgColor: '#FF5470',
    hoverBgColor: '#D53D58',
    color: '#fff',
    hoverColor: '#fff',
    borderColor: 'transparent',
  },
  success: {
    bgColor: '#00BA88',
    hoverBgColor: '#00A376',
    color: '#fff',
    hoverColor: '#fff',
    borderColor: 'transparent',
  },
};

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: ${({ size }) =>
    size === 'sm' ? '0.5rem 1rem' :
    size === 'lg' ? '1rem 2rem' :
    '0.75rem 1.5rem'};
  background-color: ${({ variant }) => ButtonVariants[variant].bgColor};
  color: ${({ variant }) => ButtonVariants[variant].color};
  border: 1px solid ${({ variant }) => ButtonVariants[variant].borderColor};
  border-radius: 8px;
  font-weight: 500;
  font-size: ${({ size }) =>
    size === 'sm' ? '0.875rem' :
    size === 'lg' ? '1.125rem' :
    '1rem'};
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease;
  cursor: pointer;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};

  &:hover {
    background-color: ${({ variant }) => ButtonVariants[variant].hoverBgColor};
    color: ${({ variant }) => ButtonVariants[variant].hoverColor};
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    pointer-events: none;
  }
`;

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  type = 'button',
  disabled = false,
  onClick,
  ...rest
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      type={type}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
