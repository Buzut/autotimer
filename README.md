# autoTimer

Super simple timer that resets itself when called again. In the end, only the last call is taken into account.

## Installation

```
npm install autotimer
```

## Usage

```js
// require using commonJS
const AutoTimer = require('autotimer');

// or in es6, using a module bundler like webpack
import AutoTimer from 'autotimer';

// instantiate class
const timer = new Autotimer();

// just call the function with a delay in ms
timer(delay, callback);

// like setTimeout, it returns a timer
const timerOne = timer(delay, callback);

// that you can cancel if needed
clearTimeout(timerOne);

/**
 * will call "responsive" only once the browser has finished resizing
 * and "scrolled" when the user has finished scrolling
 */

// init timers
const respTimer = new AutoTimer();
const scrollTimer = new Autotimer();

// call them
window.addEventListener('resize', () => {
  respTimer(100, responsive);
});

window.addEventListener('scroll', () => {
  scrollTimer(200, scrolled);
});
```
