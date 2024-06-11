import styled from 'styled-components';
import { CustomCardProps } from './Card.types';

interface StyledCustomCardProps extends CustomCardProps {
  backgroundColor?: string;
    className?: string;
}

const StyledCustomCard = styled.div<StyledCustomCardProps>`
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: ${({ disabled, backgroundColor }) => (disabled ? backgroundColor || '#d3d3d3' : backgroundColor || '#add8e6')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    box-shadow: ${({ disabled }) => (disabled ? '0 4px 8px rgba(0, 0, 0, 0.1)' : '0 8px 16px rgba(0, 0, 0, 0.2)')};
    transform: ${({ disabled }) => (disabled ? 'none' : 'translateY(-4px)')};
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    padding: 15px;
    font-size: 14px;
  }
  @media (max-width: 480px) {
    padding: 10px;
    font-size: 12px;
  }
`;

const CustomCard: React.FC<StyledCustomCardProps> = ({ children, disabled, backgroundColor }) => {
  return <StyledCustomCard disabled={disabled} backgroundColor={backgroundColor}>{children}</StyledCustomCard>;
};

export default CustomCard;
