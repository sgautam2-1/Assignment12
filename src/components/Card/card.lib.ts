// Logic to determine if the card should be displayed
export const shouldDisplayCard = (visible: boolean, disabled: boolean): boolean => {
    return visible && !disabled;
  };
  