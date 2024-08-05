import { isButtonDisabled } from './button.lib';

describe('Button Logic', () => {
  test('should return true when condition is true', () => {
    const result = isButtonDisabled(true);
    expect(result).toBe(true);
  });

  test('should return false when condition is false', () => {
    const result = isButtonDisabled(false);
    expect(result).toBe(false);
  });
});
