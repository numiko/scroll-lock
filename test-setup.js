import { Window } from 'happy-dom';

// Initialise Happy DOM
// Tests and code that use window.location must use the url below
const window = new Window({ url: 'https://example.com' });
const document = window.document;
const location = window.location;

// Make window, document, and location global
global.document = document;
global.window = window;
global.location = location;
