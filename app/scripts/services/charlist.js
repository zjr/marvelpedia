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
      getItem: function (itemId) {
        var item = _.find(list, function (i) {
          return i.id === parseInt(itemId);
        });
        return item;
      }
    };
  }]);
