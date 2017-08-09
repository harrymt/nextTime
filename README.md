[![Build Status](https://travis-ci.org/harrymt/nextperiod.svg?branch=master)](https://travis-ci.org/harrymt/nextperiod)

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

const nextperiod = require('nextperiod')
```

## Examples

```js
nextperiod(series, 10)        // 15
nextperiod(series, 19)        // 10
nextperiod(series, 'MORNING') // 'AFTERNOON'
nextperiod(series, 'evening') // 'MORNING'
nextperiod(series, { MORNING: 10 }) // 'AFTERNOON'
```

### Pretty Output

```js
nextperiod(series, 'afternoon', { pretty: true }) // 'Evening'
nextperiod(series, 15, { pretty: true })          // 'Evening'
```

### Custom Wrapping

```js
nextperiod(series, 19, { wrap: false }) // false
nextperiod(series, 15, { wrap: false }) // 19
nextperiod(series, 'MORNING', { wrap: false }) // 'AFTERNOON'
```

### Return an Object

```js
nextperiod(series, 19, { object: true }) // false
nextperiod(series, 15, { object: true }) // 19
nextperiod(series, 'MORNING', { object: true }) // 'AFTERNOON'
```

### Defaults

```js
nextperiod([], 'NOT_IN_SERIES') // false
nextperiod([], '', { pretty: true, wrap: true, object: false }) // false
```

## Features

- Works both in [Node.js](https://nodejs.org) and in the browser
