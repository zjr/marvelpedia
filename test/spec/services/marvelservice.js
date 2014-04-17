'use strict';

describe('Service: marvelService', function () {

  // load the service's module
  beforeEach(module('marvelPediaApp'));

  // instantiate service
  var marvelService;
  beforeEach(inject(function (_marvelService_) {
    marvelService = _marvelService_;
  }));

  it('should do something', function () {
    expect(!!marvelService).toBe(true);
  });

});
