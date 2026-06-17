import { describe, it, expect, beforeEach, vi } from 'vitest';
import '../test-setup.js';
import { scrollLock } from '../lib/ScrollLock.ts';

describe('getIsLocked', () => {
  let body;
  let lock;

  beforeEach(() => {
    body = document.body;
    body.style.cssText = '';
    vi.spyOn(window, 'scrollY', 'get').mockReturnValue(0);
    window.scrollTo = vi.fn();
    lock = scrollLock(body);
  });

  it('should return false initially', () => {
    expect(lock.getIsLocked()).toBe(false);
  });

  it('should return true after disableScroll', () => {
    lock.disableScroll();

    expect(lock.getIsLocked()).toBe(true);
  });

  it('should return false after disableScroll then enableScroll', () => {
    lock.disableScroll();
    lock.enableScroll();

    expect(lock.getIsLocked()).toBe(false);
  });
});
