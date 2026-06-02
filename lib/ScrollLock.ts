type ScrollLockOptions = {
  name?: string
  version?: string
  description?: string
  author?: string
};

class ScrollLock {
  constructor(options: ScrollLockOptions) {
    console.log('I am a scroll lock!', options);
  }
}

export { ScrollLock, type ScrollLockOptions };
