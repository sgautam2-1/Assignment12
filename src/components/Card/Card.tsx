
import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';

interface StyledCardProps {
  visible: boolean;
  disabled: boolean;
}

const CardContainer = styled.div<StyledCardProps>`
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  width: 300px; /* Make the card smaller */
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 16px auto; /* Center the card */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};

  &:hover {
    transform: scale(1.1);
  }
`;

const CardImage = styled.img`
  width: 100%;
  border-radius: 8px 8px 0 0;
`;

const CardTitle = styled.h2`
  font-size: 20px; /* Adjusted font size */
  margin: 16px 0 8px 0;
`;

const CardDescription = styled.p`
  font-size: 14px; /* Adjusted font size */
  color: #555;
`;

const Card: React.FC<CardProps> = ({ title, description, imageUrl, visible = true, disabled = false }) => {
  if (!visible) return null;
  return (
    <CardContainer visible={visible} disabled={disabled} data-testid="card-container">
      <CardImage src={imageUrl} alt={title} />
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardContainer>
  );
};

export default Card;
