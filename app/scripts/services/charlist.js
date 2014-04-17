'use strict';

angular.module('marvelPediaApp')
  .factory('CharData', ['Restangular', 'LoDash', function (Restangular, _) {
    var list = [];

    return {
      search: function (name) {
        var charDataPromise = Restangular.one('characters').get({nameStartsWith: name});
        return charDataPromise;
      },
      update: function (charData) {
        list = charData.data.results;
        return list;
      },
      get: function () {
        return list;
      },
      getComics: function (charId) {
        return Restangular.one('characters', charId).one('comics').get();
      }
    };
  }]);
