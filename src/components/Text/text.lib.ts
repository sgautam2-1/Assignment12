// Logic to validate the text
export const validateText = (text: string, minLength: number = 1): boolean => {
    return text.length >= minLength;
  };
  