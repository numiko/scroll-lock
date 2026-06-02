interface ScrollLock {
  disableScroll: () => void;
  enableScroll: () => void;
  getIsLocked: () => boolean;
}

export function scrollLock(scrollBody: HTMLElement = document.body): ScrollLock {
  let scrollPosition: number = 0;
  let isLocked: boolean = false;

  function disableScroll(): void {
    if (isLocked || !scrollBody) return;
    isLocked = true;

    scrollPosition = window.scrollY;

    scrollBody.style.top = `-${scrollPosition}px`;
    scrollBody.classList.add('overflow-hidden', 'fixed', 'inset-0');
  }

  function enableScroll(): void {
    if (!isLocked || !scrollBody) return;
    isLocked = false;

    scrollBody.style.top = '';
    scrollBody.classList.remove('overflow-hidden', 'fixed', 'inset-0');
    window.scrollTo({ top: scrollPosition, behavior: 'instant' });
  }

  function getIsLocked(): boolean {
    return isLocked;
  }

  return {
    disableScroll,
    enableScroll,
    getIsLocked,
  };
}
