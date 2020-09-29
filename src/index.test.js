import { reverseString } from './index.js';

describe('test reverse string', () => {
  it('reverse "hello" to "olleh"', () => {
    expect(reverseString('hello')).toBe('olleh');
  }),
  it('reverse "hello world" to "dlrow olleh"', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
  })
});
