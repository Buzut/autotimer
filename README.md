# autoTimer

Super simple timer that resets itself when called again. In the end, only the last call is taken into account.

Super usefull to trigger actions on browser resize or on scroll. For instance when you want to execute actions when browser __is resized__ and __not while resizing__.


## Installation

```
npm install autotimer
```

## Usage

```js
// require using commonJS
const autoTimer = require('autotimer');

// or in es6, using a module bundler like webpack
import autoTimer from 'autotimer';

// just call the function with a delay in ms
autoTimer(delay, function);

// like setTimeout, it returns a timer
const timer = autoTimer(delay, function);

// that you can cancel if needed
clearTimeout(timer);

// will call arrangeMasonry only once after browser has finished resizing
window.addEventListener('resize', () => {
  autoTimer(100, () => arrangeMasonry());
});
```
