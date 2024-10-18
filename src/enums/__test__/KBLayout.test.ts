import { KBLayout } from "../KBLayout";
import { describe, expect, test } from 'vitest'

describe('KBLayout enum', () => {
  const qwertyChars = [...KBLayout.QWERTY].sort().join('');

  test('should ensure all KBLayout entries have 30 characters', () => {
    Object.values(KBLayout).forEach(layout => {
      expect(layout.length).toBe(30);
    });
  });

  test('should ensure all KBLayout entries contain the same characters as QWERTY', () => {
    Object.values(KBLayout).forEach(layout => {
      const sortedLayout = [...layout].sort().join('');
      expect(sortedLayout).toBe(qwertyChars);
    });
  });
});