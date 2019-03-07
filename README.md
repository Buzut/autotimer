# autoTimer

Automatically debounced timer.

Even if called if called multiple times, only the last call will be executed.

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

function responsive() {
  // do things
}

function scrolled() {
  // do things
}

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

## Contributing
There's sure room for improvement, so feel free to hack around and submit PRs!
Please just follow the style of the existing code, which is [Airbnb's style](http://airbnb.io/javascript/) with [minor modifications](.eslintrc).

To maintain things clear and visual, please follow the [git commit template](https://github.com/Buzut/git-emojis-hook).
