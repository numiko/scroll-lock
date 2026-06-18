import { describe, it, expect, beforeEach, vi } from 'vitest';
import '../test-setup.js';
import { scrollLock } from '../lib/ScrollLock.ts';

describe('disableScroll', () => {
  let body;
  let lock;

  beforeEach(() => {
    body = document.body;
    body.style.cssText = '';
    vi.spyOn(window, 'scrollY', 'get').mockReturnValue(0);
    window.scrollTo = vi.fn();
    lock = scrollLock(body);
  });

  it('should apply fixed positioning styles to the scroll body', () => {
    lock.disableScroll();

    expect(body.style.overflow).toBe('hidden');
    expect(body.style.position).toBe('fixed');
    expect(body.style.right).toBe('0px');
    expect(body.style.bottom).toBe('0px');
    expect(body.style.left).toBe('0px');
  });

  it('should capture the current scroll position in the top style', () => {
    vi.spyOn(window, 'scrollY', 'get').mockReturnValue(150);
    lock.disableScroll();

    expect(body.style.top).toBe('-150px');
  });

  it('should set isLocked to true', () => {
    lock.disableScroll();

    expect(lock.getIsLocked()).toBe(true);
  });

  it('should not re-apply styles if already locked', () => {
    vi.spyOn(window, 'scrollY', 'get').mockReturnValue(100);
    lock.disableScroll();

    vi.spyOn(window, 'scrollY', 'get').mockReturnValue(200);
    lock.disableScroll();

    expect(body.style.top).toBe('-100px');
  });
});
