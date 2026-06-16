export function scrollLock(scrollBody: HTMLElement = document.body) {
  let scrollPosition = 0;
  let isLocked = false;

  function disableScroll() {
    if (isLocked || !scrollBody) return;
    isLocked = true;

    scrollPosition = window.scrollY;

    scrollBody.style.top = `-${scrollPosition}px`;
    scrollBody.style.overflow = 'hidden';
    scrollBody.style.position = 'fixed';
    scrollBody.style.right = '0';
    scrollBody.style.bottom = '0';
    scrollBody.style.left = '0';
  }

  function enableScroll() {
    if (!isLocked || !scrollBody) return;
    isLocked = false;

    scrollBody.style.overflow = '';
    scrollBody.style.position = '';
    scrollBody.style.right = '';
    scrollBody.style.bottom = '';
    scrollBody.style.left = '';

    window.scrollTo({ top: scrollPosition, behavior: 'instant' });
  }

  function getIsLocked() {
    return isLocked;
  }

  return {
    disableScroll,
    enableScroll,
    getIsLocked,
  };
}
