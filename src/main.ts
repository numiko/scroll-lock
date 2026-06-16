import { scrollLock } from '../lib/ScrollLock';
const bodyScrollLock = scrollLock();
const scrollLockButton = document.querySelector('[data-js-scroll-lock]');
const scrollUnlockButton = document.querySelector('[data-js-scroll-unlock]');

scrollLockButton?.addEventListener('click', () => {
  bodyScrollLock.disableScroll();
});

scrollUnlockButton?.addEventListener('click', () => {
  bodyScrollLock.enableScroll();
});
