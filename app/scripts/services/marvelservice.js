'use strict';

angular.module('marvelPediaApp')
  .factory('MarvelService', function ($http) {
    var apikey = '2b3213d7c8dd78f64c05f712cfbfa4ff';
    var version = '/v1/public';
    var baseUrl = 'http://gateway.marvel.com' + version + '/characters' + '?limit=100&apikey=' + apikey;

    var result;

    $http({
      method: 'GET',
      url: baseUrl
    })
      .success(function() {
        result = arguments;
      })
      .error(function() {
        result = arguments;
      });

    return result;
  });
