import { isValidOption } from './dropdown.lib';

describe('Dropdown Logic', () => {
  test('should return true when the option is valid', () => {
    const options = ['pizza', 'tacos', 'sushi'];
    const result = isValidOption(options, 'tacos');
    expect(result).toBe(true);
  });

  test('should return false when the option is invalid', () => {
    const options = ['pizza', 'tacos', 'sushi'];
    const result = isValidOption(options, 'burger');
    expect(result).toBe(false);
  });

  test('should return false when the option list is empty', () => {
    const options: string[] = [];
    const result = isValidOption(options, 'pizza');
    expect(result).toBe(false);
  });

  test('should return false when the option is an empty string', () => {
    const options = ['pizza', 'tacos', 'sushi'];
    const result = isValidOption(options, '');
    expect(result).toBe(false);
  });

  test('should return false when the option is null', () => {
    const options = ['pizza', 'tacos', 'sushi'];
    const result = isValidOption(options, null as unknown as string);
    expect(result).toBe(false);
  });
});
