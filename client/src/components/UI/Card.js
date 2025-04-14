import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  padding: ${({ padding }) => padding || '1.5rem'};
  width: 100%;

  ${({ hover }) => hover && `
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
    }
  `}
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: ${({ align }) => align || 'space-between'};
  align-items: center;
  margin-bottom: 1.5rem;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  color: #333;
  margin: 0;
`;

const CardBody = styled.div`
  margin-bottom: ${({ hasFooter }) => hasFooter ? '1.5rem' : '0'};
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: ${({ align }) => align || 'flex-end'};
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #eee;
`;

const Card = ({
  children,
  title,
  headerRight,
  footerContent,
  padding,
  bodyPadding,
  hover = false,
  headerAlign = 'space-between',
  footerAlign = 'flex-end',
  ...rest
}) => {
  return (
    <StyledCard padding={padding} hover={hover} {...rest}>
      {(title || headerRight) && (
        <CardHeader align={headerAlign}>
          {title && <CardTitle>{title}</CardTitle>}
          {headerRight && <div>{headerRight}</div>}
        </CardHeader>
      )}

      <CardBody hasFooter={!!footerContent} style={bodyPadding ? { padding: bodyPadding } : {}}>
        {children}
      </CardBody>

      {footerContent && (
        <CardFooter align={footerAlign}>
          {footerContent}
        </CardFooter>
      )}
    </StyledCard>
  );
};

export default Card;
