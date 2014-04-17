'use strict';

describe('Service: marvelSeasd', function () {

  // load the service's module
  beforeEach(module('marvelPediaApp'));

  // instantiate service
  var marvelSeasd;
  beforeEach(inject(function (_marvelSeasd_) {
    marvelSeasd = _marvelSeasd_;
  }));

  it('should do something', function () {
    expect(!!marvelSeasd).toBe(true);
  });

});
