/* eslint-disable no-undef */
/**
 * Dependencies.
 */

const series = {
  MORNING: 10,
  AFTERNOON: 15,
  EVENING: 19
};

if (typeof require !== 'undefined') {
  expect = require('expect.js');
  nextperiod = require('./');
  nextperiod.series = series;
}

// strings

describe('nextperiod(string)', function() {
  it('should not throw an error', function() {
    expect(function() {
      nextperiod('MORNING');
    }).to.not.throwError();
  });

  it('should be case insentitive', function() {
    expect(nextperiod('morning')).to.be(15);
  });
});

// numbers

describe('nextperiod(number)', function() {
  it('should not throw an error', function() {
    expect(function() {
      nextperiod(10);
    }).to.not.throwError();
  });

  it('should support numbers', function() {
    expect(nextperiod(10)).to.be('AFTERNOON');
  });
});

// invalid inputs

describe('nextperiod(invalid inputs)', function() {
  it('should throw an error, when nextperiod("")', function() {
    expect(function() {
      nextperiod('');
    }).to.throwError();
  });

  it('should throw an error, when nextperiod(undefined)', function() {
    expect(function() {
      nextperiod(undefined);
    }).to.throwError();
  });

  it('should throw an error, when nextperiod(null)', function() {
    expect(function() {
      nextperiod(null);
    }).to.throwError();
  });

  it('should throw an error, when nextperiod([])', function() {
    expect(function() {
      nextperiod([]);
    }).to.throwError();
  });

  it('should throw an error, when nextperiod({})', function() {
    expect(function() {
      nextperiod({});
    }).to.throwError();
  });

  it('should throw an error, when nextperiod(NaN)', function() {
    expect(function() {
      nextperiod(NaN);
    }).to.throwError();
  });
});
