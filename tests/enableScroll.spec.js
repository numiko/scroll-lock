import { describe, it, expect, beforeEach, vi } from 'vitest';
import '../test-setup.js';
import { scrollLock } from '../lib/ScrollLock.ts';

describe('enableScroll', () => {
  let body;
  let lock;

  beforeEach(() => {
    body = document.body;
    body.style.cssText = '';
    vi.spyOn(window, 'scrollY', 'get').mockReturnValue(0);
    window.scrollTo = vi.fn();
    lock = scrollLock(body);
  });

  it('should remove fixed positioning styles from the scroll body', () => {
    lock.disableScroll();
    lock.enableScroll();

    expect(body.style.overflow).toBe('');
    expect(body.style.position).toBe('');
    expect(body.style.right).toBe('');
    expect(body.style.bottom).toBe('');
    expect(body.style.left).toBe('');
  });

  it('should restore the scroll position', () => {
    vi.spyOn(window, 'scrollY', 'get').mockReturnValue(250);
    lock.disableScroll();
    lock.enableScroll();

    expect(window.scrollTo).toHaveBeenCalledWith({ top: 250, behavior: 'instant' });
  });

  it('should set isLocked to false', () => {
    lock.disableScroll();
    lock.enableScroll();

    expect(lock.getIsLocked()).toBe(false);
  });

  it('should not do anything if not currently locked', () => {
    lock.enableScroll();

    expect(window.scrollTo).not.toHaveBeenCalled();
  });
});
