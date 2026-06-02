# Scroll Lock

A lightweight utility to lock and unlock page scrolling. Prevents background scroll when modals, drawers, or overlays are open, while preserving the user's scroll position.

## Features

- Lock and unlock page scrolling programmatically
- Preserves scroll position when unlocking
- Supports custom scroll containers (defaults to `document.body`)
- Uses Tailwind CSS utility classes for scroll locking
- Lightweight with zero dependencies

## Installation

```bash

# NOT YET ON NPM
npm install @numiko/scroll-lock
```

## Usage

```javascript
import { scrollLock } from '@numiko/scroll-lock';

// Create a scroll lock instance (defaults to document.body)
const lock = scrollLock();

// Disable scrolling
lock.disableScroll();

// Enable scrolling (restores previous scroll position)
lock.enableScroll();

// Check if scrolling is currently locked
lock.getIsLocked(); // true or false
```

You can also pass a custom element to lock scrolling on:

```javascript
const customLock = scrollLock(document.querySelector('[data-js-lock-container]'));
```

## API
IMPORTANT!

Link the API section to the hosted documentation on Netlify. You should have received the URL when creating the site using `netlify sites:create`.

See [documentation](https://v0-0-0--[NETLIFY_URL].netlify.app) for more detail on how to use the package.

You will only need to add the URL manually the first time. On releases, `release-it` will handle updating this URL, so long as it includes the version in the format `x-x-x`. To
