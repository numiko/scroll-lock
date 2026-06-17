import { describe, it, expect, beforeEach, vi } from 'vitest';
import '../test-setup.js';
import { scrollLock } from '../lib/ScrollLock.ts';

describe('scroll body', () => {
  beforeEach(() => {
    document.body.style.cssText = '';
    vi.spyOn(window, 'scrollY', 'get').mockReturnValue(0);
    window.scrollTo = vi.fn();
  });

  it('should use document.body when no argument is provided', () => {
    const defaultLock = scrollLock();
    defaultLock.disableScroll();

    expect(document.body.style.position).toBe('fixed');

    defaultLock.enableScroll();
  });

  it('should apply styles to a custom element', () => {
    const customEl = document.createElement('div');
    const customLock = scrollLock(customEl);
    customLock.disableScroll();

    expect(customEl.style.position).toBe('fixed');
    expect(customEl.style.overflow).toBe('hidden');

    customLock.enableScroll();
  });
});
