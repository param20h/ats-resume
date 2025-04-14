import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ size }) => size === 'sm' ? '1rem' : '2rem'};
`;

const SpinnerCircle = styled.div`
  width: ${({ size }) => size === 'sm' ? '24px' :
                        size === 'lg' ? '48px' : '36px'};
  height: ${({ size }) => size === 'sm' ? '24px' :
                        size === 'lg' ? '48px' : '36px'};
  border: ${({ size }) => size === 'sm' ? '3px' :
                        size === 'lg' ? '5px' : '4px'} solid rgba(74, 108, 247, 0.2);
  border-top: ${({ size }) => size === 'sm' ? '3px' :
                        size === 'lg' ? '5px' : '4px'} solid #4a6cf7;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const LoadingText = styled.p`
  margin-left: 1rem;
  color: #4a6cf7;
  font-size: ${({ size }) => size === 'sm' ? '0.875rem' :
                           size === 'lg' ? '1.25rem' : '1rem'};
`;

const Loader = ({ size = 'md', text, showText = true }) => {
  return (
    <LoaderContainer size={size}>
      <SpinnerCircle size={size} />
      {showText && text && <LoadingText size={size}>{text}</LoadingText>}
    </LoaderContainer>
  );
};

export default Loader;
