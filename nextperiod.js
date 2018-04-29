let series = {};

/**
 * Parse or format the given `val`.
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number|Boolean}
 * @api public
 */
module.exports = function(s, val) {
  //, options) {
  var type = typeof val;
  if ((!val || type === 'object') && val != 0) {
    throw new Error(`invalid input for val ${JSON.stringify(val)}`);
  }
  series = s;
  // options = options || {};
  if (type === 'string' && val.length > 0) {
    val = val.toUpperCase();
    return value(nextPeriodAsInt(series[val]));
  } else if (type === 'number' && isNaN(val) === false) {
    if (val < 0) {
      throw new Error(
        `input cannot be smaller than 0 : ${JSON.stringify(val)}`
      );
    }
    return nextPeriodAsInt(roundHourUp(val));
  }
  throw new Error(
    `input is not a non-empty string or a valid number. input = ${JSON.stringify(
      val
    )}`
  );
};

/**
 * Get the properties of the series.
 */
const properties = () => {
  const p = [];
  const keys = Object.keys(series);
  for (let i = 0; i < keys.length; i++) {
    p.push(series[keys[i]]);
  }
  return p.sort((a, b) => a - b);
};

const value = key => {
  const keys = Object.keys(series);
  for (let i = 0; i < keys.length; i++) {
    if (series[keys[i]] == key) {
      return keys[i];
    }
  }
  return null;
};

/**
 * Returns a valid hour (rounded up) or null
 */
const roundHourUp = hour => {
  if (hour >= 24) {
    throw new Error(`input cannot be larger than 24 : ${JSON.stringify(hour)}`);
  }

  if (value(hour)) {
    return hour; // Already rounded
  }

  // Keep adding 1 to the hour, until we reach a new period
  for (let i = 1; hour < 24; i++) {
    hour++;
    if (value(hour)) {
      return hour;
    }
  }
  // Can't round hour for some reason
  return null;
};

/**
 * Gets the next period from now.
 * @return time as number
 */
const nextPeriodAsInt = timeInt => {
  if (value(timeInt) === null) {
    // Rounds up to the next period
    timeInt = roundHourUp(timeInt); // Always will be a vaild hour or null
    return timeInt;
  }

  const theTimes = properties();
  for (let i = 0; i < theTimes.length; i++) {
    // If we found our time, choose the next one
    if (theTimes[i] === timeInt) {
      if (i + 1 < theTimes.length) {
        return theTimes[i + 1];
      }

      // If we can't find the next time, start at beginning
      return theTimes[0];
    }
  }
};
