# nextperiod

Use this package to easily get the next time period in a series.

## Install

```
npm install nextperiod --save
```

```js
const series = {
  MORNING: 10,
  AFTERNOON: 15,
  EVENING: 19
}

const nextperiod = require('nextperiod')(series)

// or

const nextperiod = require('nextperiod')
// Do some stuff that isn't relevant to nextperiod
// ..
nextperiod.series = series
```

## Examples

```js
nextperiod(10)        // 15
nextperiod(19)        // 10
nextperiod('MORNING') // 'AFTERNOON'
nextperiod('evening') // 'MORNING'
nextperiod({ MORNING: 10 }) // 'AFTERNOON'
```

### Pretty Output

```js
nextperiod('afternoon', { pretty: true }) // 'Evening'
nextperiod(15, { pretty: true })          // 'Evening'
```

### Custom Wrapping

```js
nextperiod(19, { wrap: false }) // false
nextperiod(15, { wrap: false }) // 19
nextperiod('MORNING', { wrap: false }) // 'AFTERNOON'
```

### Return an Object

```js
nextperiod(19, { object: true }) // false
nextperiod(15, { object: true }) // 19
nextperiod('MORNING', { object: true }) // 'AFTERNOON'
```

### Defaults

```js
nextperiod([], 'NOT_IN_SERIES') // false
nextperiod([], '', { pretty: true, wrap: true, object: false }) // false
```

## Features

- Works both in [Node.js](https://nodejs.org) and in the browser
