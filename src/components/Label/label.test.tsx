import { shouldDisplayLabel } from './label.lib';

describe('Label Logic', () => {
  test('should return true when visible is true and disabled is false', () => {
    const result = shouldDisplayLabel(true, false);
    expect(result).toBe(true);
  });

  test('should return false when visible is false', () => {
    const result = shouldDisplayLabel(false, false);
    expect(result).toBe(false);
  });

  test('should return false when disabled is true', () => {
    const result = shouldDisplayLabel(true, true);
    expect(result).toBe(false);
  });

  test('should return false when both visible is false and disabled is true', () => {
    const result = shouldDisplayLabel(false, true);
    expect(result).toBe(false);
  });
});
