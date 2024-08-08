import React, { useState } from 'react';
import styled from 'styled-components';

interface StyledSectionProps {
  expanded?: boolean;
  backgroundColor?: string;
  titleColor?: string;
  textColor?: string;
  direction?: 'column' | 'row';
}

const StyledSection = styled.section<StyledSectionProps>`
  padding: ${({ expanded }) => (expanded ? '20px' : '10px')};
  margin: 20px 0;
  background-color: ${({ backgroundColor }) => backgroundColor || '#f9f9f9'};
  border-radius: 10px;
  transition: max-height 0.3s ease, padding 0.3s ease;
  overflow: hidden;
  cursor: pointer;
  max-height: ${({ expanded }) => (expanded ? '1000px' : '200px')};

  h2 {
    margin-bottom: 15px;
    font-size: 24px;
    color: ${({ titleColor }) => titleColor || '#333'};
  }

  p {
    margin-bottom: 10px;
    font-size: 16px;
    color: ${({ textColor }) => textColor || '#666'};
  }

  .content {
    display: flex;
    flex-direction: ${({ direction }) => direction || 'column'};
  }
`;

interface SectionProps {
  title?: string;
  content: React.ReactNode;
  backgroundColor?: string;
  titleColor?: string;
  textColor?: string;
  direction?: 'column' | 'row';
}

const Section: React.FC<SectionProps> = ({ title, content, backgroundColor, titleColor, textColor, direction }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <StyledSection
      backgroundColor={backgroundColor}
      titleColor={titleColor}
      textColor={textColor}
      direction={direction}
      expanded={expanded}
      onClick={() => setExpanded(!expanded)}
    >
      {title && <h2>{title}</h2>}
      <div className="content">
        {content}
      </div>
    </StyledSection>
  );
};

export default Section;
