import { shouldDisplayCard } from './card.lib';

describe('Card Logic', () => {
  test('should return true when visible is true and disabled is false', () => {
    const result = shouldDisplayCard(true, false);
    expect(result).toBe(true);
  });

  test('should return false when visible is false', () => {
    const result = shouldDisplayCard(false, false);
    expect(result).toBe(false);
  });

  test('should return false when disabled is true', () => {
    const result = shouldDisplayCard(true, true);
    expect(result).toBe(false);
  });

  test('should return false when both visible is false and disabled is true', () => {
    const result = shouldDisplayCard(false, true);
    expect(result).toBe(false);
  });
});
