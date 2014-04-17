'use strict';

describe('Service: charList', function () {

  // load the service's module
  beforeEach(module('marvelPediaApp'));

  // instantiate service
  var charList;
  beforeEach(inject(function (_charList_) {
    charList = _charList_;
  }));

  it('should do something', function () {
    expect(!!charList).toBe(true);
  });

});
