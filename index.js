// Init series
exports.series = {};

/**
 * Parse or format the given `val`.
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number|Boolean}
 * @api public
 */
module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return 'Hello world';
  } else if (type === 'number' && isNaN(val) === false) {
    return options.myoption ? val : 'Oops';
  }
  throw new Error(
    'input is not a non-empty string or a valid number. input = ' +
      JSON.stringify(val)
  );
};
