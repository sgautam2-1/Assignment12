import React, { useState } from 'react';
import { ContactProps } from './Contact.types';
import './Contact.css'; // Import styles

const Contact: React.FC<ContactProps> = ({ disabled }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="contact-container">
      <button onClick={handleClick} className="toggle-button">
        {isVisible ? 'Hide Contact Form' : 'Show Contact Form'}
      </button>
      {isVisible && (
        <form className="contact-form">
          <label>
            Name:
            <input type="text" value="Saurav Gautam" disabled={disabled} />
          </label>
          <label>
            Email:
            <input type="email" value="sgautam2@rrc.ca" disabled={disabled} />
          </label>
          <label>
            Skills:
            <textarea
              value="Full Stack Development, React, Node.js, TypeScript, etc."
              disabled={disabled}
            ></textarea>
          </label>
          <button type="submit" disabled={disabled}>
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;
