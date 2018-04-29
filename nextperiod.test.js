/* eslint-disable no-undef */

const series = {
  MORNING: 10,
  AFTERNOON: 15,
  EVENING: 19
};

const expect = require('expect.js');
const nextperiod = require('./nextperiod');

// strings
describe('nextperiod(series, string)', function() {
  it('should not throw an error', function() {
    expect(function() {
      nextperiod(series, 'MORNING');
    }).to.not.throwError();
  });

  it('should be case insentitive', function() {
    expect(nextperiod(series, 'morning')).to.be('AFTERNOON');
  });

  it('should wrap around', function() {
    expect(nextperiod(series, 'EVENING')).to.be('MORNING');
  });
});

// numbers

describe('nextperiod(series, number)', function() {
  it('should not throw an error', function() {
    expect(function() {
      nextperiod(series, 10);
    }).to.not.throwError();
  });

  it('should support numbers', function() {
    expect(nextperiod(series, 10)).to.be(15);
  });

  it('should wrap around with numbers', function() {
    expect(nextperiod(series, 19)).to.be(10);
  });

  it('should round up numbers to nearest time', function() {
    expect(nextperiod(series, 9)).to.be(15);
  });

  it('should round up numbers to nearest time extreme', function() {
    expect(nextperiod(series, 0)).to.be(15);
  });
});

// invalid inputs

describe('nextperiod(series, invalid inputs)', function() {
  it('should throw an error, when nextperiod(series, "")', function() {
    expect(function() {
      nextperiod(series, '');
    }).to.throwError();
  });

  it('should throw an error, when nextperiod(series, -1)', function() {
    expect(function() {
      nextperiod(series, -1);
    }).to.throwError();
  });

  it('should throw an error, when nextperiod(series, <24)', function() {
    expect(function() {
      nextperiod(series, 25);
    }).to.throwError();
  });

  it('should throw an error, when nextperiod(series, undefined)', function() {
    expect(function() {
      nextperiod(series, undefined);
    }).to.throwError();
  });

  it('should throw an error, when nextperiod(series, null)', function() {
    expect(function() {
      nextperiod(series, null);
    }).to.throwError();
  });

  it('should throw an error, when nextperiod(series, [])', function() {
    expect(function() {
      nextperiod(series, []);
    }).to.throwError();
  });

  it('should throw an error, when nextperiod(series, {})', function() {
    expect(function() {
      nextperiod(series, {});
    }).to.throwError();
  });

  it('should throw an error, when nextperiod(series, NaN)', function() {
    expect(function() {
      nextperiod(series, NaN);
    }).to.throwError();
  });
});

// Invalid series

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
