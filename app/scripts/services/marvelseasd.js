'use strict';

angular.module('marvelPediaApp')
  .factory('marvelSeasd', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
